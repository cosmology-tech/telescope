import { traverse } from '@babel/core';
import { ProtoStore } from './store';
import { ProtoRef, ProtoRoot } from './types';
import { getNestedProto } from './utils';

export interface Lookup {
    obj: any;
    name: string;
    import: string;
    importType: string;
    importedName: string;
    package: string;
}

export const recursiveLookup = (proto: any, name: string, scope: string[] = [], allowNested = true) => {
    if (!proto) return;

    if (proto.hasOwnProperty(name)) return {
        name,
        scope,
        ...proto[name]
    }

    if (allowNested && proto) {
        const keys = Object.keys(proto);
        for (let k = 0; k < keys.length; k++) {
            const found = recursiveLookup(proto[keys[k]].nested, name, [...scope, keys[k]], allowNested);
            if (found) {
                return {
                    name,
                    ...found
                };
            };
        }
    }
};

const getRoot = (ref: ProtoRef) => {
    if (ref.traversed) return ref.traversed;
    return ref.proto;
};

/*

  "imports": [
    "google/api/expr/v1alpha1/syntax.proto",
    "google/protobuf/empty.proto",
    "google/protobuf/struct.proto"
  ],

  ...

  "type": "Empty"

  finds Empty inside of the import

*/
export const importLookup = (store: ProtoStore, ref: ProtoRef, name: string) => {
    const root = getRoot(ref);
    const objectsFromImports = root?.imports?.map(imp => {
        const ref = store.findProto(imp);
        return {
            name,
            importType: 'import',
            import: imp,
            importedName: name,
            obj: lookup(store, ref, name, false),
        };
    }).filter(a => !!a.obj) ?? []
    if (objectsFromImports.length) return objectsFromImports[0];
};


/*

  "imports": [
    "google/api/expr/v1alpha1/syntax.proto",
    "google/protobuf/empty.proto",
    "google/protobuf/struct.proto"
  ],

  ...

  "type": "google.protobuf.NullValue"

  finds NullValue directly from package name

*/

export const protoImportLookup = (
    store: ProtoStore,
    ref: ProtoRef,
    name: string
): Lookup => {
    const root = getRoot(ref);
    if (name.startsWith('.')) name = name.replace(/^\./, '');
    const nameAsArray = name.split('.');
    const objectName = nameAsArray.pop();
    const packageName = nameAsArray.join('.')
    const objs = store.getProtos()
        // 1 ask all package files of package, e.g "google.protobuf"
        .filter(proto => proto.proto.package === packageName)
        // 2 cross-checking w the imports by filter()
        .filter(proto => root.imports.includes(proto.filename))
        .map((ref: ProtoRef) => {
            return {
                import: ref.filename,
                obj: lookup(store, ref, objectName, false)
            }
        })
        .filter(a => !!a.obj);
    if (objs.length) {
        return {
            import: objs[0].import,
            importType: 'protoImport',
            obj: objs[0].obj,
            importedName: name,
            name: objectName,
            package: packageName
        }
    }
};

export const lookup = (
    store: ProtoStore,
    ref: ProtoRef,
    name: string,
    allowNested = true
) => {
    const root = getRoot(ref);
    const nested = getNestedProto(root);
    return recursiveLookup(nested, name, [root.package], allowNested);
};

export const lookupAny = (
    store: ProtoStore,
    ref: ProtoRef,
    name: string
): Lookup => {
    let refObject = lookupLocal(store, ref, name);

    if (refObject) {
        return refObject;
    }

    refObject = externalLookup(store, ref, name);
    if (refObject) {
        return refObject;
    }

};

export const lookupLocal = (
    store: ProtoStore,
    ref: ProtoRef,
    name: string
): Lookup => {
    const root = getRoot(ref);
    let refObject = lookup(store, ref, name);

    if (refObject) {
        return {
            name,
            import: ref.filename,
            importType: 'local',
            importedName: name,
            package: root.package,
            obj: refObject
        }
    }
};

export const externalLookup = (
    store: ProtoStore,
    ref: ProtoRef,
    name: string
): Lookup => {
    let refObject;

    refObject = protoImportLookup(store, ref, name);
    if (refObject) {
        return refObject;
    }

    refObject = importLookup(store, ref, name);
    if (refObject) {
        return refObject;
    }

};
