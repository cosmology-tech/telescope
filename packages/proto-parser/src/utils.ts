import dotty from 'dotty';
import { Service, Type, Enum, Root, Namespace } from 'protobufjs';
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


export const traverse = (store: ProtoStore, root: ProtoRoot) => {
    const imports = {};

    const obj: ProtoRoot & { parsedImports: Record<string, string[]> } = {
        imports: root.imports,
        package: root.package,
        root: recursiveTraversal(store, root, root.root, imports),
        parsedImports: null
    };
    obj.parsedImports = imports;
    return obj;
};

const parseFields = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    return Object.keys(obj.fields).reduce((m, key) => {

        const field = obj.fields[key];
        let found: any = null;

        switch (field.type) {
            case 'string':
            case 'uint64':
            case 'int64':
            case 'bytes':
                m[key] = {
                    parsedType: { name: field.type, type: 'native' },
                    isScalar: true,
                    ...field.toJSON({ keepComments: true })
                }
                return m;
            default:
        }

        found = importLookup(store, root, field.type);
        if (found) {
            imports[found.import] = imports[found.import] || [];
            imports[found.import] = [...new Set([...imports[found.import], found.importedName])];
            m[key] = {
                parsedType: instanceType(found.obj),
                scopeType: 'import',
                ...field.toJSON({ keepComments: true }),
                importedName: found.importedName,
                import: found.import,
            };
            return m;
        }

        found = protoImportLookup(store, root, field.type);
        if (found) {
            imports[found.import] = imports[found.import] || [];
            imports[found.import] = [...new Set([...imports[found.import], found.importedName])];
            m[key] = {

                parsedType: instanceType(found.obj),
                scopeType: 'protoImport',
                ...field.toJSON({ keepComments: true }),
                importedName: found.importedName,
                import: found.import,
            };
            return m;
        }

        found = lookup(store, root, field.type);
        if (found) {
            m[key] = {
                scopeType: 'local',
                parsedType: instanceType(found),
                ...field.toJSON({ keepComments: true }),
            };
            return m;
        }

        return m;
    }, {});
};

const parseType = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    return {
        type: 'Type',
        options: obj.options,
        fields: parseFields(store, root, obj, imports)
    }
};

const parseEnum = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    return {
        type: 'Enum',
        ...obj.toJSON({ keepComments: true })
    }
};

const parseService = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    return {
        type: 'Service',
        ...obj.toJSON({ keepComments: true })
    }
};

export const recursiveTraversal = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    if (obj instanceof Type) {
        return parseType(store, root, obj, imports);
    }
    if (obj instanceof Enum) {
        return parseEnum(store, root, obj, imports);
    }
    if (obj instanceof Service) {
        return parseService(store, root, obj, imports);
    }
    if (obj instanceof Root || obj instanceof Namespace) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, root, obj.nested[key], imports);
                return m;
            }, { nested: {} });
        } else {
            throw new Error('recursiveTraversal() cannot find protobufjs Type')
        }
    }
    throw new Error('recursiveTraversal() cannot find protobufjs Type')
};

export const instanceType = (obj: any) => {
    if (obj instanceof Type) {
        return {
            name: obj.name,
            type: 'Type'
        };
    }
    if (obj instanceof Enum) {
        return {
            name: obj.name,
            type: 'Enum'
        };
    }
    if (obj instanceof Service) {
        return {
            name: obj.name,
            type: 'Service'
        };
    }
    if (obj instanceof Root) {
        return {
            type: 'Root'
        };
    }
    if (obj instanceof Namespace) {
        return {
            type: 'Namespace'
        };
    }
    // if (obj.name === 'Timestamp') {
    //     return {
    //         name: obj.name,
    //         type: 'google'
    //     };
    // }
    // if (obj.name === 'Duration') {
    //     return {
    //         name: obj.name,
    //         type: 'google'
    //     };
    // }
    if (obj.name.match(/^[a-z]/)) {
        throw new Error('instanceType() cannot find protobufjs Type')
    }
    // duck typing... 
    // TODO why did we loose instance tyeps/names?
    if (obj.fields) {
        return {
            name: obj.name,
            type: 'Type'
        };
    }
    if (obj.values) {
        return {
            name: obj.name,
            type: 'Enum'
        };
    }
    throw new Error('instanceType() cannot find protobufjs Type')
};
