import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import {
    importStmt,
    AminoParseContext,
    createAminoConverter,
    createCreateProtoType,
    createObjectWithMethods,
    createProtoEnum,
    createProtoType,
    makeAminoTypeInterface,
    ProtoParseContext,
    // client
    createClient,
    GenericParseContext,
    // registry 
    createTypeRegistry,
    createRegistryLoader,
    // helper
    createHelperObject,
    ImportUsage
} from '@osmonauts/ast';
import { extname, relative, dirname } from 'path';
import { ImportHash, ImportObj, ServiceMutation, ServiceQuery } from './types';
import { UTILS, getRelativePath, getRoot } from './utils';
import * as t from '@babel/types';

const importHashToArray = (hash: ImportHash): ImportObj[] => {
    return Object.entries(hash ?? {})
        .reduce((m, [path, names]) => {
            names.forEach(name => {
                m.push({
                    type: 'import',
                    name,
                    path
                })
            })
            return m;
        }, [])
};

const getProtoImports = (context: TelescopeParseContext): ImportObj[] => {
    return context.proto.imports
        .map(usage => {
            const importPath = getRelativePath(context.ref.filename, usage.import);
            return {
                type: 'import',
                name: usage.name,
                path: importPath
            }
        });
};

const getParsedImports = (context: TelescopeParseContext, parsedImports: ImportHash): ImportObj[] => {
    const imports = [];
    Object.entries(parsedImports ?? {})
        .forEach(([path, names]) => {
            const importPath = getRelativePath(context.ref.filename, path);
            names.forEach(name => {
                imports.push({
                    type: 'import',
                    name,
                    path: importPath
                })
            });
        });
    return imports;
};

const getImportStatments = (list: ImportObj[]) => {
    const imports = list.reduce((m, obj) => {
        m[obj.path] = m[obj.path] || [];
        const exists = m[obj.path].find(el => el.type === obj.type && el.path === obj.path && el.name === obj.name);
        if (!exists) m[obj.path].push(obj);
        return m;
    }, {});

    return Object.entries(imports)
        .reduce((m, [importPath, imports]: [string, ImportObj[]]) => {
            const defaultImports = imports.filter(a => a.type === 'default');
            if (defaultImports.length) {
                if (defaultImports.length > 1) throw new Error('more than one default name NOT allowed.')
                m.push(
                    t.importDeclaration(
                        [
                            t.importDefaultSpecifier(
                                t.identifier(defaultImports[0].name)
                            )
                        ],
                        t.stringLiteral(defaultImports[0].path)
                    )
                )
            }
            const namedImports = imports.filter(a => a.type === 'import');
            if (namedImports.length) {
                m.push(importStmt(namedImports.map(i => i.name), namedImports[0].path));
            }
            const namespaced = imports.filter(a => a.type === 'namespace');
            if (namespaced.length) {
                if (namespaced.length > 1) throw new Error('more than one namespaced name NOT allowed.')
                m.push(
                    t.importDeclaration(
                        [
                            t.importNamespaceSpecifier(
                                t.identifier(namespaced[0].name)
                            )
                        ],
                        t.stringLiteral(namespaced[0].path)
                    )
                )
            }
            return m;
        }, [])
};

const convertUtilsToImports = (context: TelescopeParseContext): ImportObj[] => {
    const list = [];
    const utils = Object.keys({
        ...context.amino.utils,
        ...context.proto.utils
    });

    utils.forEach(util => {
        if (!UTILS.hasOwnProperty(util)) throw new Error('missing Util! ::' + util);
        if (typeof UTILS[util] === 'string') {
            list.push({
                type: 'import',
                path: UTILS[util],
                name: util
            });
        } else {
            list.push(UTILS[util]);
        }
    });
    return list;
};

export const buildAllImports = (context: TelescopeParseContext, allImports?: ImportHash) => {

    const protoImports: ImportObj[] = getProtoImports(context);
    const parsedImports: ImportObj[] = getParsedImports(context, context.amino.ref.traversed.parsedImports);
    const additionalImports: ImportObj[] = importHashToArray(allImports);
    const utilities: ImportObj[] = convertUtilsToImports(context);

    const list = []
        .concat(parsedImports)
        .concat(utilities)
        .concat(protoImports)
        .concat(additionalImports);


    const importStmts = getImportStatments(list);

    return importStmts;
}

export const getMutations = (mutations: ServiceMutation[]) => {
    return mutations.map((mutation: ServiceMutation) => {
        return {
            typeUrl: `/${mutation.package}.${mutation.message}`,
            TypeName: mutation.message,
            methodName: mutation.methodName
        }
    });
};

export const getAminoProtos = (mutations: ServiceMutation[], store: ProtoStore) => {
    return mutations.map(mutation => {
        const ref = store.findProto(mutation.messageImport);
        return store.get(ref, mutation.message).obj;
    });
};

export const getAminoImports = (mutations: ServiceMutation[]) => {
    return mutations.map(mutation => {
        return {
            import: mutation.messageImport,
            name: mutation.message
        };
    });
};

interface BuildBaseTSClass {
    includeEncode: boolean;
    includeDecode: boolean;
    includeFromPartial: boolean;
    includeFromJSON: boolean;
    includeToJSON: boolean;
}

export interface TelescopeParseContext {
    proto: ProtoParseContext;
    amino: AminoParseContext;
    store: ProtoStore;
    ref: ProtoRef;
    parsedImports: Record<string, any>;
    body: any[];
    mutations: ServiceMutation[];
    queries: any[];
    types: any[];
    options: any;
}

export const buildBaseTypeScriptClass = (
    context: TelescopeParseContext,
    name: string,
    obj: any,
    {
        includeEncode,
        includeDecode,
        includeFromPartial,
        includeFromJSON,
        includeToJSON
    }: BuildBaseTSClass = {
            includeEncode: true,
            includeDecode: true,
            includeFromPartial: true,
            includeFromJSON: true,
            includeToJSON: true
        }) => {

    context.body.push(createProtoType(name, obj));
    context.body.push(createCreateProtoType(name, obj));
    context.body.push(createObjectWithMethods(context.proto, name, obj));
};

export const getAminoRelativeDeps = (mutations: ServiceMutation[], filename: string) => {
    return getAminoImports(mutations)
        .map(imp => {
            const f = filename;
            const f2 = imp.import;
            if (f === f2) return;
            const rel = relative(dirname(f), f2);
            let importPath = rel.replace(extname(rel), '');
            if (!/\//.test(importPath)) importPath = `./${importPath}`;
            return {
                ...imp,
                importPath
            };
        })
        .filter(Boolean)
        .reduce((m, v) => {
            m[v.importPath] = m[v.importPath] ?? [];
            if (!m[v.importPath].includes(v.name)) {
                m[v.importPath].push(v.name);
            }
            return m;
        }, {});
};
export class TelescopeParseContext implements TelescopeParseContext {
    constructor(ref: ProtoRef, store: ProtoStore) {
        this.proto = new ProtoParseContext();
        this.amino = new AminoParseContext(
            ref, store
        );
        this.ref = ref;
        this.store = store;
        this.parsedImports = {};
        this.body = [];
        this.queries = [];
        this.mutations = [];
        this.types = [];
    }

    hasMutations() {
        return this.mutations.length > 0;
    }

    addType(name: string, obj: any, isNested: boolean) {
        this.types.push({
            name,
            obj,
            isNested
        });
    }
    addMutation(mutation: ServiceMutation) {
        this.mutations.push(mutation);
    }
    addQuery(query: ServiceQuery) {
        this.queries.push(query);
    }

    // build main Class with methods
    buildBase() {
        this.types.forEach(typeReg => {
            const { name, obj } = typeReg;
            if (obj.type === 'Type') {
                buildBaseTypeScriptClass(this, name, obj);
            } else if (obj.type === 'Enum') {
                this.body.push(createProtoEnum(name, obj));
            } else {
                throw new Error('buildBase(): unknown type');
            }
        })
    }

    buildRegistry() {
        this.body.push(createTypeRegistry(getMutations(this.mutations)));
    }
    buildRegistryLoader() {
        this.body.push(createRegistryLoader());
    }
    buildAminoInterfaces() {
        const protos = getAminoProtos(this.mutations, this.store);
        protos.forEach(proto => {
            this.body.push(makeAminoTypeInterface({
                context: this.amino,
                proto
            }));
        });
    }
    buildAminoConverter() {
        this.body.push(createAminoConverter({
            name: 'AminoConverter',
            context: this.amino,
            root: this.ref.traversed,
            protos: getAminoProtos(this.mutations, this.store)
        }));
    }
    buildHelperObject() {
        // add methods
        this.body.push(createHelperObject({
            name: 'MessageComposer',
            mutations: getMutations(this.mutations)
        }));
    }
}