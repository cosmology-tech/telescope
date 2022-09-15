import { ProtoRoot, ProtoRef, ProtoType, ProtoService, ProtoField, ProtoServiceMethod, ProtoServiceMethodInfo } from '@osmonauts/types';
import { Service, Type, Field, Enum, Root, Namespace } from '@pyramation/protobufjs';
import { importLookup, lookup, lookupAny, lookupNested, protoScopeImportLookup } from './lookup';
import { parseService } from './services';
import { ProtoStore } from './store';
import { instanceType, lookupSymbolScopes, SCALAR_TYPES } from './utils';

export const traverse = (store: ProtoStore, ref: ProtoRef) => {
    const imports: Record<string, string[]> = {};
    const exports: Record<string, any> = {};
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
            [],
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
    // just bc devs use proto syntax for types in the same file
    // does not mean we need to import them
    // delete any imports related to "this" file
    delete obj.importNames[ref.filename];
    delete obj.parsedImports[ref.filename];
    return obj;
};

const getAllRefs = (store: ProtoStore, ref: ProtoRef) => {
    const importRefs = ref.proto.imports?.map(imp => store.findProto(imp)) ?? [];
    return importRefs.reduce((m, v) => {
        return [...m, ...getAllRefs(store, v)]
    }, importRefs);
};

const traverseFields = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    imports: object,
    traversal: string[]
): Record<string, ProtoField> => {
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

        if (SCALAR_TYPES.includes(field.type)) {
            m[key] = {
                parsedType: { name: field.type, type: 'native' },
                isScalar: true,
                typeNum: SCALAR_TYPES.indexOf(field.type),
                ...serialize()
            }
            return m;
        }

        // nested scope first
        found = lookupNested(ref, traversal, field.type);
        if (found) {
            m[key] = {
                scope: found.scope,
                parsedType: instanceType(found),
                ...serialize(),
            };
            return m;
        }

        // local scope second
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

        // found = protoImportLookup(store, ref, field.type);
        // if (found) {
        //     imports[found.import] = imports[found.import] || [];
        //     imports[found.import] = [...new Set([...imports[found.import], found.name])];
        //     m[key] = {

        //         parsedType: instanceType(found.obj),
        //         scopeType: 'protoImport',
        //         scope: [found.package],
        //         ...serialize(),
        //         importedName: found.importedName,
        //         import: found.import,
        //     };
        //     return m;
        // }

        // new scope lookup (TODO: replace above cases)
        const typeNames = lookupSymbolScopes(field.type, ref.proto.package + '.dummy');
        for (let lookupType of typeNames) {
            found = protoScopeImportLookup(store, ref, lookupType);
            if (found) {
                imports[found.import] = imports[found.import] || [];
                imports[found.import] = [...new Set([...imports[found.import], found.name])];
                m[key] = {

                    parsedType: instanceType(found.obj),
                    scopeType: 'protoImport',
                    scope: found.obj.scope ? found.obj.scope : [found.package],
                    ...serialize(),
                    importedName: found.importedName,
                    import: found.import,
                };
                return m;
            }
        }

        // e.g. akash/deployment/v1beta2/service.proto
        // referencing messages in another file, and so we need access through our imports
        // if we get this issue again, this should be recursive and not just one level...
        const importRefs = ref.proto.imports.map(imp => store.findProto(imp));
        // const importRefs = getAllRefs(store, ref);
        for (let importRef of importRefs) {
            const typeNames = lookupSymbolScopes(field.type, importRef.proto.package + '.dummy');
            for (let lookupType of typeNames) {
                found = protoScopeImportLookup(store, importRef, lookupType);
                if (found) {
                    imports[found.import] = imports[found.import] || [];
                    imports[found.import] = [...new Set([...imports[found.import], found.name])];
                    m[key] = {
                        parsedType: instanceType(found.obj),
                        scopeType: 'protoImport',
                        scope: found.obj.scope ? found.obj.scope : [found.package],
                        ...serialize(),
                        importedName: found.importedName,
                        import: found.import,
                    };
                    return m;
                }
            }

        }

        console.warn(`
${obj.name}.${field.name}: ${field.type} NOT FOUND from ${ref.filename} in ${ref.proto.package}
you should contact the maintainers.
`);
        return m;
    }, {});
};


const traverseType = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    imports: object,
    exports: object,
    traversal: string[],
    isNested: boolean
): ProtoType => {
    let nested = null;
    if (obj.nested) {
        nested = Object.keys(obj.nested).reduce((m, key) => {
            m[key] = recursiveTraversal(store, ref, obj.nested[key], imports, exports, [...traversal, key], true);
            return m;
        }, {});
    }

    if (!isNested) {
        exports[obj.name] = exports[obj.name] || [];
        exports[obj.name] = true;
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
        fields: traverseFields(store, ref, obj, imports, traversal),
        nested,
        keyTypes: [],
        comment: obj.comment
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
        // type is already a property on field
        name: obj.name,
        ...obj.toJSON({ keepComments: true })
    }
};

const traverseServiceMethod = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    imports: object,
    name: string,
    traversal: string[]
) => {
    const service: ProtoServiceMethod = obj.methods[name];
    const { requestType, responseType, options, comment } = service;
    let responseObject = lookupAny(store, ref, requestType);
    if (!responseObject) {
        throw new Error('Symbol not found ' + requestType);
    }
    let requestObject = lookupAny(store, ref, requestType);
    if (!requestObject) {
        throw new Error('Symbol not found ' + requestType);
    }


    const fields = traverseFields(store, ref, requestObject.obj, imports, traversal);
    const info: ProtoServiceMethodInfo = parseService({
        options,
        fields
    });

    const svc: ProtoServiceMethod = {
        type: 'ServiceMethod',
        info,
        name,
        comment,
        requestType,
        responseType,
        options,
        fields
    };

    if (info) {

        // TODO is this still needed?

        // get casing info for request objects
        Object.keys(requestObject.obj.fields).map(fieldName => {
            const field: ProtoField = requestObject.obj.fields[fieldName];

            const protoCasing = store.options.prototypes.parser.keepCase ?
                field.options['(telescope:orig)'] :
                field.options['(telescope:camel)'];

            const origCase = field.options['(telescope:orig)'];
            svc.info.casing = svc.info.casing || {};
            svc.info.casing[origCase] = protoCasing;
        });
    }

    store.registerRequest(
        requestType,
        svc
    );

    return svc;
};

const getServiceType = (obj) => {
    if (obj.name === 'Msg') return 'Mutation';
    if (obj.name === 'Query') return 'Query';
    if (obj.name === 'Service') return 'Service';
    return 'Unknown';
}

const traverseService = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    imports: object,
    traversal: string[]
): ProtoService => {
    const json = obj.toJSON({ keepComments: true });
    const methods = Object.keys(json.methods).reduce((m, key) => {
        m[key] = traverseServiceMethod(
            store, ref, json, imports, key, traversal
        );
        return m;
    }, {})
    return {
        type: 'Service',
        name: obj.name,
        serviceType: getServiceType(obj),
        ...obj.toJSON({ keepComments: true }),
        methods
    }
};

export const recursiveTraversal = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    imports: object,
    exports: object,
    traversal: string[],
    isNested: boolean
) => {
    if (obj instanceof Type) {
        return traverseType(store, ref, obj, imports, exports, traversal, isNested);
    }
    if (obj instanceof Enum) {
        return traverseEnum(store, ref, obj, imports);
    }
    if (obj instanceof Service) {
        return traverseService(store, ref, obj, imports, traversal);
    }
    if (obj instanceof Field) {
        return traverseField(store, ref, obj, imports);
    }
    if (obj instanceof Root) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, ref, obj.nested[key], imports, exports, [...traversal, key], isNested);
                return m;
            }, {
                type: 'Root',
                nested: {}
            });
        } else {
            throw new Error('recursiveTraversal() [Root] cannot find protobufjs Type')
        }
    }
    if (obj instanceof Namespace) {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = recursiveTraversal(store, ref, obj.nested[key], imports, exports, [...traversal, key], isNested);
                return m;
            }, {
                type: 'Namespace',
                nested: {}
            });
        } else {
            throw new Error('recursiveTraversal() [Namespace] cannot find protobufjs Type')
        }
    }
    throw new Error('recursiveTraversal() cannot find protobufjs Type')
};
