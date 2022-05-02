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


const NATIVE_TYPES = [
    "double",   // 0
    "float",    // 1
    "int32",    // 2
    "uint32",   // 3
    "sint32",   // 4
    "fixed32",  // 5
    "sfixed32", // 6
    "int64",    // 7
    "uint64",   // 8
    "sint64",   // 9
    "fixed64",  // 10
    "sfixed64", // 11
    "bool",     // 12
    "string",   // 13
    "bytes"     // 14
];


const parseFields = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    return Object.keys(obj.fields).reduce((m, key) => {

        const field = obj.fields[key];
        let found: any = null;

        if (NATIVE_TYPES.includes(field.type)) {
            m[key] = {
                parsedType: { name: field.type, type: 'native' },
                isScalar: true,
                typeNum: NATIVE_TYPES.indexOf(field.type),
                ...field.toJSON({ keepComments: true })
            }
            return m;
        }

        found = importLookup(store, root, field.type);
        if (found) {
            imports[found.import] = imports[found.import] || [];
            imports[found.import] = [...new Set([...imports[found.import], found.name])];
            m[key] = {
                parsedType: instanceType(found.obj),
                scopeType: 'import',
                scope: [found.obj.scope],
                ...field.toJSON({ keepComments: true }),
                importedName: found.importedName,
                import: found.import,
            };
            return m;
        }

        found = protoImportLookup(store, root, field.type);
        if (found) {
            imports[found.import] = imports[found.import] || [];
            imports[found.import] = [...new Set([...imports[found.import], found.name])];
            m[key] = {

                parsedType: instanceType(found.obj),
                scopeType: 'protoImport',
                scope: [found.package],
                ...field.toJSON({ keepComments: true }),
                importedName: found.importedName,
                import: found.import,
            };
            return m;
        }

        found = lookup(store, root, field.type);
        if (found) {
            m[key] = {
                scope: found.scope,
                parsedType: instanceType(found),
                ...field.toJSON({ keepComments: true }),
            };
            return m;
        }

        return m;
    }, {});
};

const parseType = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    let nested = null;
    if (obj.nested) {
        nested = Object.keys(obj.nested).reduce((m, key) => {
            m[key] = recursiveTraversal(store, root, obj.nested[key], imports);
            return m;
        }, {});
    }
    return {
        type: 'Type',
        name: obj.name,
        options: obj.options,
        fields: parseFields(store, root, obj, imports),
        nested
    }
};

const parseEnum = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    return {
        type: 'Enum',
        name: obj.name,
        ...obj.toJSON({ keepComments: true })
    }
};

const parseService = (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => {
    let nested = null;
    if (obj.nested) {
        nested = Object.keys(obj.nested).reduce((m, key) => {
            m[key] = recursiveTraversal(store, root, obj.nested[key], imports);
            return m;
        }, {});
    }

    return {
        type: 'Service',
        ...obj.toJSON({ keepComments: true }),
        nested
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
    if (obj instanceof Root) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, root, obj.nested[key], imports);
                return m;
            }, {
                type: 'Root',
                nested: {}
            });
        } else {
            throw new Error('recursiveTraversal() cannot find protobufjs Type')
        }
    }
    if (obj instanceof Namespace) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, root, obj.nested[key], imports);
                return m;
            }, {
                type: 'Namespace',
                nested: {}
            });
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
