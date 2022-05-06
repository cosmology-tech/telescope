import { ProtoStore, ProtoRoot, ProtoRef, getObjectName } from '@osmonauts/proto-parser';
import {
    createProtoType,
    createCreateProtoType,
    createProtoEnum,
    createProtoObjectWithMethods,
    ProtoField,
    ProtoType,
    ProtoParseContext,
    AminoParseContext,
    makeAminoTypeInterface,
    aminoConverter
} from '@osmonauts/ast';
import { snake } from 'case';

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

export const getKeyTypeObjectName = (
    obj: any,
    field: ProtoField
) => {
    return obj.name + '_' + field.parsedType.name + 'MapEntry';
}

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

    obj.keyTypes.forEach(field => {
        const keyTypeObject = makeKeyTypeObj(context.ref, field, scope);
        const name = getParsedObjectName(context.ref, {
            name: getKeyTypeObjectName(obj, field)
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

    context.body.push(createProtoType(name, obj));
    context.body.push(createCreateProtoType(name, obj));
    context.body.push(createProtoObjectWithMethods(context.proto, name, obj));

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


    const protos = Object.entries(methodHash)
        .map(([key, value]) => {
            const obj = context.store.findProtoObject(context.ref.filename, value.requestType);
            if (!obj) {
                console.warn(`cannot find ${value.requestType}`);
                throw new Error('undefined symbol. maybe service is referencing another file. Maintainers can likely fix this.');
            }
            return obj;
        });

    if (!protos.length) return;

    // AMINO INTERFACES
    protos.forEach(proto => {
        context.body.push(makeAminoTypeInterface({
            context: context.amino,
            proto,
            options: {
                aminoCasingFn: snake
            }
        }));
    });
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

    // add client

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