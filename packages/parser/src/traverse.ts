import { Service, Type, Field, Enum, Root, Namespace } from 'protobufjs';
import { importLookup, protoImportLookup, lookup, lookupAny } from './lookup';
import { ProtoStore } from './store';
import { ProtoRoot, ProtoRef } from './types';
import { instanceType, NATIVE_TYPES } from './utils';

export const traverse = (store: ProtoStore, ref: ProtoRef) => {
    const imports = {};
    const exports = {};

    const obj: ProtoRoot & {
        parsedImports: Record<string, string[]>;
        parsedExports: Record<string, any>;
        importNames: Record<string, any>;
    } = {
        imports: ref.proto.imports,
        package: ref.proto.package,
        root: recursiveTraversal(
            store,
            ref,
            ref.proto.root,
            imports,
            exports,
            false
        ),
        parsedImports: null,
        parsedExports: null,
        importNames: null,
    };

    obj.parsedImports = imports;
    obj.parsedExports = exports;
    let counter = 1;
    obj.importNames = Object.entries(imports).reduce((m, [path, names]) => {
        m[path] = m[path] || {};
        names.forEach(importName => {
            const hasConflict = Object.entries(imports).some(([otherPath, otherNames]) => {
                if (path === otherPath) return false;
                if (otherNames.includes(importName)) return true;
            });
            if (hasConflict || exports.hasOwnProperty(importName)) {
                m[path][importName] = importName + counter++;
            } else {
                m[path][importName] = importName;
            }
        })
        return m;
    }, {});
    return obj;
};

const traverseFields = (store: ProtoStore, ref: ProtoRef, obj: any, imports: object) => {
    return Object.keys(obj.fields).reduce((m, key) => {

        const field = obj.fields[key];

        const serialize = () => {
            if (typeof field.toJSON !== 'undefined') {
                // non-traversed
                return field.toJSON({ keepComments: true });
            }
            // traversed
            return field;
        }

        let found: any = null;

        if (NATIVE_TYPES.includes(field.type)) {
            m[key] = {
                parsedType: { name: field.type, type: 'native' },
                isScalar: true,
                typeNum: NATIVE_TYPES.indexOf(field.type),
                ...serialize()
            }
            return m;
        }

        // local scope first
        found = lookup(store, ref, field.type);
        if (found) {
            m[key] = {
                scope: found.scope,
                parsedType: instanceType(found),
                ...serialize(),
            };
            return m;
        }

        found = importLookup(store, ref, field.type);
        if (found) {
            imports[found.import] = imports[found.import] || [];
            imports[found.import] = [...new Set([...imports[found.import], found.name])];
            m[key] = {
                parsedType: instanceType(found.obj),
                scopeType: 'import',
                scope: [found.obj.scope],
                ...serialize(),
                importedName: found.importedName,
                import: found.import,
            };
            return m;
        }

        found = protoImportLookup(store, ref, field.type);
        if (found) {
            imports[found.import] = imports[found.import] || [];
            imports[found.import] = [...new Set([...imports[found.import], found.name])];
            m[key] = {

                parsedType: instanceType(found.obj),
                scopeType: 'protoImport',
                scope: [found.package],
                ...serialize(),
                importedName: found.importedName,
                import: found.import,
            };
            return m;
        }

        return m;
    }, {});
};

const traverseType = (store: ProtoStore, ref: ProtoRef, obj: any, imports: object, exports: object, isNested: boolean) => {
    let nested = null;
    if (obj.nested) {
        nested = Object.keys(obj.nested).reduce((m, key) => {
            m[key] = recursiveTraversal(store, ref, obj.nested[key], imports, exports, true);
            return m;
        }, {});
    }

    if (!isNested) {
        exports[obj.name] = exports[obj.name] || [];
        exports[obj.name].push({
            name: obj.name
        })

    }

    const traversed = {
        type: 'Type',
        name: obj.name,
        options: obj.options,
        oneofs: obj.oneofs ? Object.keys(obj.oneofs).reduce((m, v) => {
            m[v] = {
                // parse oneof
                oneof: obj.oneofs[v].oneof.map(name => name)
            };
            return m;
        }, {}) : undefined,
        fields: traverseFields(store, ref, obj, imports),
        nested,
        keyTypes: []
    };

    // parse keyType
    const hasKeyType = Object.keys(traversed.fields).some(field => !!traversed.fields[field].keyType);
    let keyTypes = [];
    if (hasKeyType) {
        keyTypes = Object.keys(traversed.fields)
            .filter(field => !!traversed.fields[field].keyType)
            .map(field => {
                return {
                    name: field,
                    ...traversed.fields[field]
                };
            });
    }

    traversed.keyTypes = keyTypes;
    return traversed;
};

const traverseEnum = (store: ProtoStore, ref: ProtoRef, obj: any, imports: object) => {
    return {
        type: 'Enum',
        name: obj.name,
        ...obj.toJSON({ keepComments: true })
    }
};

const traverseField = (store: ProtoStore, ref: ProtoRef, obj: any, imports: object) => {
    return {
        type: 'Field',
        name: obj.name,
        ...obj.toJSON({ keepComments: true })
    }
};

const traverseServiceMethod = (store: ProtoStore, ref: ProtoRef, obj: any, imports: object, name: string) => {

    const service = obj.methods[name];
    const { requestType } = service;
    let refObject = lookupAny(store, ref, requestType);

    if (!refObject) {
        throw new Error('Symbol not found ' + requestType);
    }

    return {
        type: 'ServiceMethod',
        name,
        requestType,
        fields: traverseFields(store, ref, refObject.obj, imports)
    };
};

const getServiceType = (obj) => {
    if (obj.name === 'Msg') return 'Mutation';
    if (obj.name === 'Query') return 'Query';
    return 'Unknown';
}

const traverseService = (store: ProtoStore, ref: ProtoRef, obj: any, imports: object) => {
    const methods = Object.keys(obj.methods).reduce((m, key) => {
        m[key] = traverseServiceMethod(
            store, ref, obj, imports, key
        );
        return m;
    }, {})

    return {
        type: 'Service',
        name: obj.name,
        serviceType: getServiceType(obj),
        ...obj.toJSON({ keepComments: true }),
        parsedMethods: methods
    }
};

export const recursiveTraversal = (store: ProtoStore, ref: ProtoRef, obj: any, imports: object, exports: object, isNested: boolean) => {
    if (obj instanceof Type) {
        return traverseType(store, ref, obj, imports, exports, isNested);
    }
    if (obj instanceof Enum) {
        return traverseEnum(store, ref, obj, imports);
    }
    if (obj instanceof Service) {
        return traverseService(store, ref, obj, imports);
    }
    if (obj instanceof Field) {
        return traverseField(store, ref, obj, imports);
    }
    if (obj instanceof Root) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, ref, obj.nested[key], imports, exports, isNested);
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
                m.nested[key] = recursiveTraversal(store, ref, obj.nested[key], imports, exports, isNested);
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
