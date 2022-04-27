import dotty from 'dotty';
import { Service, Type, Enum } from 'protobufjs';
import { ProtoStore } from './store';
import { ProtoRef, ProtoRoot } from './types';

export const getNestedProto = (root: ProtoRoot) => {
    const nestedPath = 'root.nested.' + root.package.split('.').join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

export const getServices = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Service;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

export const getTypes = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Type;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

export const getEnums = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Enum;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

export const recursiveLookup = (proto: any, name: string, scope: string[] = [], allowNested = true) => {
    const found = Object.keys(proto).filter(key => {
        if (key === name) return true;
    }).map(key => proto[key]);
    if (found.length) return {
        name,
        scope,
        ...found[0]
    }

    if (allowNested && proto) {
        const children = Object.keys(proto).map(key => {
            if (proto[key].nested) {
                return recursiveLookup(proto[key].nested, name, [...scope, key])
            }
        }).filter(Boolean)
        if (children) return {
            name,
            scope,
            ...children[0]
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

/*
    nested objects get a slightly different naming convention
    e.g. SignatureDescriptor_Data or SignatureDescriptor_Data_Multi
*/

export const getObjectName = (name: string, scope: string[] = []) => {
    if (!scope.length || scope.length === 1) return name;
    const [_pkg, ...scopes] = scope;
    return [...scopes, name].join('_')
};
