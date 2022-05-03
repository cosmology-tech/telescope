import { ProtoStore } from './store';
import { ProtoRef, ProtoRoot } from './types';
import { getNestedProto } from './utils';

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
export const importLookup = (store: ProtoStore, root: ProtoRoot, name: string) => {
    const objectsFromImports = root.imports.map(imp => {
        const ref = store.findProto(imp);
        return {
            name,
            import: imp,
            importedName: name,
            obj: lookup(store, ref.proto, name, false),
        };
    }).filter(a => !!a.obj);
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

export const protoImportLookup = (store: ProtoStore, root: ProtoRoot, name: string) => {
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
                obj: lookup(store, ref.proto, objectName, false)
            }
        })
        .filter(a => !!a.obj);
    if (objs.length) {
        return {
            import: objs[0].import,
            obj: objs[0].obj,
            importedName: name,
            name: objectName,
            package: packageName
        }
    }
};

export const lookup = (store: ProtoStore, root: ProtoRoot, name: string, allowNested = true) => {
    const nested = getNestedProto(root);
    return recursiveLookup(nested, name, [root.package], allowNested);
};
