import { ProtoStore, ProtoRoot, ProtoRef, getObjectName } from '@osmonauts/proto-parser';
import {
    createProtoType,
    createCreateProtoType,
    createProtoEnum,
    createProtoObjectWithMethods,
    ProtoType,
    ProtoParseContext,
    AminoParseContext,
    makeAminoTypeInterface,
    aminoConverter,
    getKeyTypeEntryName,
    // client
    createClient,
    GenericParseContext,
    // registry 
    createTypeRegistry,
    createRegistryLoader,
    // methods (needs refactor)
    toObjectWithPartialMethods,
    toObjectWithEncodedMethods,
    toObjectWithJsonMethods,
    toObjectWithToJSONMethods,
    toObjectWithFromJSONMethods,
    importStmt
} from '@osmonauts/ast';
import { extname, relative, dirname } from 'path';
import { camel, snake } from 'case';

const getRoot = (ref: ProtoRef): ProtoRoot => {
    if (ref.traversed) return ref.traversed;
    return ref.proto;
};

export interface ServiceMutation {
    methodName: string;
    package: string;
    message: string;
    messageImport: string;
    response: string;
    responseImport: string;
    comment?: string;
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
}

const UTILS = {
    AminoHeight: '@osmonauts/helpers',
    AminoMsg: '@cosmjs/amino',
    AminoTypes: '@cosmjs/stargate',
    decodeBech32Pubkey: '@cosmjs/amino',
    defaultRegistryTypes: '@cosmjs/stargate',
    encodeBech32PubKey: '@cosmjs/amino',
    fromBase64: '@cosmjs/encoding',
    fromBech32: '@cosmjs/encoding',
    fromDuration: '@osmonauts/helpers',
    fromHex: '@cosmjs/encoding',
    fromJsonTimestamp: '@osmonauts/helpers',
    fromTimestamp: '@osmonauts/helpers',
    GeneratedType: '@cosmjs/proto-signing',
    isSet: '@osmonauts/helpers',
    Long: '@osmonauts/helpers', // exports Long and also calls the magic Long code
    OfflineSigner: '@cosmjs/proto-signing',
    omitDefault: '@osmonauts/helpers',
    Registry: '@cosmjs/proto-signing',
    SigningStargateClient: '@cosmjs/stargate',
    toBase64: '@cosmjs/encoding',
    toDuration: '@osmonauts/helpers',
    toTimestamp: '@osmonauts/helpers',
};

export interface ImportHash {
    [key: string]: string[];
}

export const buildAllImports = (context: TelescopeParseContext, allImports: ImportHash = {}) => {

    const utils = Object.keys({
        ...context.amino.utils,
        ...context.proto.utils
    });

    utils.forEach(util => {
        if (!UTILS.hasOwnProperty(util)) throw new Error('missing Util! ::' + util);
        allImports[UTILS[util]] = allImports[UTILS[util]] || [];
        if (!allImports[UTILS[util]].includes(util)) {
            allImports[UTILS[util]].push(util);
        }
    });

    Object.entries(context.amino.ref.traversed.parsedImports ?? {})
        .forEach(([filename, names]) => {
            const f = context.ref.filename;
            const rel = relative(dirname(f), filename);
            let importPath = rel.replace(extname(rel), '');
            if (!/\//.test(importPath)) importPath = `./${importPath}`;
            allImports[importPath] = allImports[importPath] || [];
            names.forEach(name => {
                if (!allImports[importPath].includes(name)) {
                    allImports[importPath].push(name);
                }
            })
        });

    const importStmts = Object.entries(allImports)
        .map(([pth, names]) => {
            return importStmt(names, pth);
        })

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
                proto,
                options: {
                    aminoCasingFn: snake
                }
            }));
        });
    }
    buildAminoConverter() {
        const protos = getAminoProtos(this.mutations, this.store);
        this.body.push(aminoConverter({
            name: 'AminoConverter',
            context: this.amino,
            root: this.ref.traversed,
            protos,
            options: {
                aminoCasingFn: snake
            }
        }));
    }
    buildAuxMethods() {
        const methods = getMutations(this.mutations);
        // add methods
        this.body.push(
            toObjectWithPartialMethods(methods)
        );
        this.body.push(
            toObjectWithEncodedMethods(methods)
        );
        this.body.push(
            toObjectWithJsonMethods(methods)
        );
        this.body.push(
            toObjectWithToJSONMethods(methods)
        );
        this.body.push(
            toObjectWithFromJSONMethods(methods)
        );
        this.body.push(
            toObjectWithEncodedMethods(methods)
        );
    }

}

export const parse = (
    context: TelescopeParseContext,
): void => {
    const root = getRoot(context.ref);
    parseRecur({
        context,
        obj: root.root,
        scope: [],
        isNested: false
    });
};

export const getParsedObjectName = (
    ref: ProtoRef,
    obj: any,
    scope: string[],
) => {
    const root = getRoot(ref);
    const allButPackage = scope.splice(root.package.split('.').length);
    // pull off "this" name
    allButPackage.pop();
    return getObjectName(obj.name, [root.package, ...allButPackage]);
};

// TODO potentially move this back to ast or proto bc the ast lib references MapEntries...
const makeKeyTypeObj = (ref: ProtoRef, field: any, scope: string[]) => {
    const root = getRoot(ref);
    const scoped = scope.splice(root.package.split('.').length);
    const adhocObj: ProtoType = {
        comment: undefined,
        fields: {
            key: {
                id: 1,
                type: field.keyType,
                scope: [...scoped],
                parsedType: {
                    name: field.keyType,
                    type: field.keyType
                },
                comment: undefined,
                options: undefined
            },
            value: {
                id: 2,
                type: field.parsedType.name,
                scope: [...scoped],
                parsedType: {
                    name: field.type,
                    type: field.parsedType.type
                },
                comment: undefined,
                options: undefined
            }
        }
    };
    return adhocObj;
}

export const parseType = (
    context: TelescopeParseContext,
    obj: any,
    scope: string[],
    isNested: boolean = false
) => {

    obj.keyTypes.forEach(field => {
        const keyTypeObject = makeKeyTypeObj(context.ref, field, scope);
        const name = getParsedObjectName(context.ref, {
            name: getKeyTypeEntryName(obj.name, field.parsedType.name)
        }, scope);
        context.body.push(createProtoType(name, keyTypeObject));
        context.body.push(createCreateProtoType(name, keyTypeObject));
        context.body.push(createProtoObjectWithMethods(context.proto, name, keyTypeObject));
    })

    // parse nested names
    let name = obj.name;
    if (isNested) {
        name = getParsedObjectName(context.ref, obj, scope);
    }

    // context for types that can be exported
    if (!isNested) {
        context.types.push(
            {
                [name]: obj
            }
        );
    }

    context.body.push(createProtoType(name, obj));
    context.body.push(createCreateProtoType(name, obj));
    context.body.push(createProtoObjectWithMethods(context.proto, name, obj));

    // render nested LAST
    if (obj.nested) {
        Object.keys(obj.nested).forEach(key => {
            // isNested = true;
            parseRecur({
                context,
                obj: obj.nested[key],
                scope: [...scope, key],
                isNested: true
            });
        });
    }

};

export const parseEnum = (
    context: TelescopeParseContext,
    obj: any,
    scope: string[],
    isNested: boolean = false
) => {
    let name = obj.name;
    // parse nested names
    if (isNested) {
        name = getParsedObjectName(context.ref, obj, scope);
    }
    context.body.push(createProtoEnum(name, obj));
};

export const parseService = (
    context: TelescopeParseContext,
    obj: any,
    scope: string[],
    isNested: boolean = false
) => {

    const methodHash: Record<string, {
        requestType: string;
        responseType: string;
        comment?: string;
    }> = obj.methods;

    if (!['Msg', 'Query'].includes(obj.name)) {
        throw new Error('unsupported Service type. Contact Maintainers.');
    }

    const isMutation = obj.name === 'Msg';
    Object.entries(methodHash)
        .forEach(([key, value]) => {
            const lookup = context.store.get(context.ref, value.requestType);
            if (!lookup) {
                console.warn(`cannot find ${value.requestType}`);
                throw new Error('undefined symbol for service.');
            }
            const lookupResponse = context.store.get(context.ref, value.responseType);
            if (!lookupResponse) {
                console.warn(`cannot find ${value.requestType}`);
                throw new Error('undefined symbol for service.');
            }
            (isMutation ? context.mutations : context.queries).push({
                methodName: key,
                package: context.ref.proto.package,
                message: lookup.importedName,
                messageImport: lookup.import ?? context.ref.filename,
                response: lookupResponse.importedName,
                responseImport: lookupResponse.import ?? context.ref.filename,
                comment: value.comment
            });
        });
};

interface ParseRecur {
    context: TelescopeParseContext,
    obj: any;
    scope: string[];
    isNested: boolean;
}
export const parseRecur = ({
    context,
    obj,
    scope,
    isNested
}: ParseRecur) => {
    switch (obj.type) {
        case 'Type':
            return parseType(
                context, obj, scope, isNested
            );
        case 'Enum':
            return parseEnum(
                context, obj, scope, isNested
            );
        case 'Service':
            return parseService(
                context, obj, scope, isNested
            );
        case 'Field':
            console.log(obj);
            return;
        case 'Root':
        case 'Namespace':
            if (obj.nested) {
                return Object.keys(obj.nested).forEach(key => {
                    parseRecur({
                        context,
                        obj: obj.nested[key],
                        scope: [...scope, key],
                        isNested
                    });
                });
            } else {
                throw new Error('parseRecur() cannot find protobufjs Type')
            }
        default:
            console.log({ obj });
            throw new Error('parseRecur() cannot find protobufjs Type')
    }
};