import { ProtoStore, ProtoRoot, ProtoRef, getObjectName, lookup } from '@osmonauts/proto-parser';
import { createProtoType, createCreateProtoType, createProtoEnum, createProtoObjectWithMethods, ProtoField, ProtoType } from '@osmonauts/ast';

const getRoot = (ref: ProtoRef): ProtoRoot => {
    if (ref.traversed) return ref.traversed;
    return ref.proto;
};

export const parse = (
    store: ProtoStore,
    ref: ProtoRef
) => {
    const imports = {};
    const body = []

    const root = getRoot(ref);

    // TODO type any
    const obj: any & { parsedImports: Record<string, string[]> } = {
        imports: root.imports,
        package: root.package,
        root: parseRecur({
            store,
            ref,
            obj: root.root,
            imports,
            body,
            scope: [],
            isNested: false
        }),
        parsedImports: null
    };
    obj.parsedImports = imports;
    obj.body = body;

    return obj;
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
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    imports: object,
    body: any[],
    scope: string[],
    isNested: boolean = false
) => {

    if (obj.nested) {
        Object.keys(obj.nested).forEach(key => {
            // isNested = true;
            parseRecur({
                store,
                ref,
                obj: obj.nested[key],
                imports,
                body,
                scope: [...scope, key],
                isNested: true
            });
        });
    }

    obj.keyTypes.forEach(field => {
        const keyTypeObject = makeKeyTypeObj(ref, field, scope);
        const name = getParsedObjectName(ref, {
            name: getKeyTypeObjectName(obj, field)
        }, scope);
        body.push(createProtoType(name, keyTypeObject));
        body.push(createCreateProtoType(name, keyTypeObject));
        body.push(createProtoObjectWithMethods(name, keyTypeObject));
    })

    // parse nested names
    let name = obj.name;
    if (isNested) {
        name = getParsedObjectName(ref, obj, scope);
    }

    body.push(createProtoType(name, obj));
    body.push(createCreateProtoType(name, obj));
    body.push(createProtoObjectWithMethods(name, obj));
};

export const parseEnum = (
    store: ProtoStore,
    ref: ProtoRef,
    obj: any,
    imports: object,
    body: any[],
    scope: string[],
    isNested: boolean = false
) => {
    let name = obj.name;
    // parse nested names
    if (isNested) {
        name = getParsedObjectName(ref, obj, scope);
    }
    body.push(createProtoEnum(name, obj));
};

interface ParseRecur {
    store: ProtoStore;
    ref: ProtoRef;
    obj: any;
    imports: object;
    body: any[];
    scope: string[];
    isNested: boolean;
}
export const parseRecur = ({
    store,
    ref,
    obj,
    imports,
    body,
    scope,
    isNested
}: ParseRecur) => {
    switch (obj.type) {
        case 'Type':
            return parseType(
                store, ref, obj, imports, body, scope, isNested
            );
        case 'Enum':
            return parseEnum(
                store, ref, obj, imports, body, scope, isNested
            );
        case 'Service':
            console.log(obj);
            return;
        case 'Field':
            console.log(obj);
            return;
        case 'Root':
        case 'Namespace':
            if (obj.nested) {
                return Object.keys(obj.nested).forEach(key => {
                    parseRecur({
                        store,
                        ref,
                        obj: obj.nested[key],
                        imports,
                        body,
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