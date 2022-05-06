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
    toObjectWithFromJSONMethods
} from '@osmonauts/ast';
import { camel, snake } from 'case';

const getRoot = (ref: ProtoRef): ProtoRoot => {
    if (ref.traversed) return ref.traversed;
    return ref.proto;
};

export interface TelescopeParseContext {
    proto: ProtoParseContext;
    amino: AminoParseContext;
    store: ProtoStore;
    ref: ProtoRef;
    parsedImports: Record<string, any>;
    body: any[];
    mutations: any[];
    queries: any[];
    types: any[];
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

    // NOTE
    // in future this can get hoisted up and we could theoretically aggregate multiple 
    // proto files in the same package for same-named services, e.g. two files with `service Msg`

    const lookups = Object.entries(methodHash)
        .map(([key, value]) => {
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
            })
            return lookup;
        });


    if (!lookups.length) return;

    const methods = Object.entries(methodHash)
        .map(([key, value]) => {
            return {
                typeUrl: `/${context.ref.proto.package}.${value.requestType}`,
                TypeName: value.requestType,
                methodName: camel(key)
            }
        });

    // AMINO INTERFACES
    lookups.forEach(lookup => {
        const proto = lookup.obj;
        context.body.push(makeAminoTypeInterface({
            context: context.amino,
            proto,
            options: {
                aminoCasingFn: snake
            }
        }));
    });
    const protos = lookups.map(lookup => lookup.obj);

    // AMINO CONVERTER
    context.body.push(aminoConverter({
        name: 'AminoConverter',
        context: context.amino,
        root: context.ref.traversed,
        protos,
        options: {
            aminoCasingFn: snake
        }
    }))

    // add registry

    context.body.push(createTypeRegistry(methods));
    context.body.push(createRegistryLoader());

    // add methods
    context.body.push(
        toObjectWithPartialMethods(methods)
    );
    context.body.push(
        toObjectWithEncodedMethods(methods)
    );
    context.body.push(
        toObjectWithJsonMethods(methods)
    );
    context.body.push(
        toObjectWithToJSONMethods(methods)
    );
    context.body.push(
        toObjectWithFromJSONMethods(methods)
    );
    context.body.push(
        toObjectWithEncodedMethods(methods)
    );

    // add client

    // NEED BUNDLE
    // BUNDLE needs planning FILES/FILE structure

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