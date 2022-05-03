import { Service, Type, Enum, Root, Namespace } from 'protobufjs';
import { ProtoStore, ProtoRoot, getObjectName, lookup } from '@osmonauts/proto-parser';
import { createProtoType, createCreateProtoType, createProtoEnum, createProtoObjectWithMethods, ProtoField, ProtoType } from '@osmonauts/ast';

export const parse = (
    store: ProtoStore,
    root: ProtoRoot,
    traversed: any
) => {
    const imports = {};
    const body = []

    // TODO type any
    const obj: any & { parsedImports: Record<string, string[]> } = {
        imports: root.imports,
        package: root.package,
        root: parseRecur(
            store,
            root,
            traversed.root,
            imports,
            body,
            []
        ),
        parsedImports: null
    };
    obj.parsedImports = imports;
    obj.body = body;

    return obj;
};

export const getParsedObjectName = (
    root: ProtoRoot,
    obj: any,
    scope: string[],
) => {
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


// TODO should this be moved to parseType in proto-parser?
export const parseType = (
    store: ProtoStore,
    root: ProtoRoot,
    obj: any,
    imports: object,
    body: any[],
    scope: string[],
    isNested: boolean = false
) => {

    if (obj.nested) {
        Object.keys(obj.nested).forEach(key => {
            // isNested = true;
            parseRecur(store, root, obj.nested[key], imports, body, [...scope, key], true);
        });
    }

    const hasKeyType = Object.keys(obj.fields).some(field => !!obj.fields[field].keyType);
    let keyTypes = [];
    if (hasKeyType) {
        keyTypes = Object.keys(obj.fields)
            .filter(field => !!obj.fields[field].keyType)
            .map(field => {
                return {
                    name: field,
                    ...obj.fields[field]
                };
            })

        keyTypes.forEach(field => {
            const name = getKeyTypeObjectName(obj, field);
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
            body.push(createProtoType(name, adhocObj));
            body.push(createCreateProtoType(name, adhocObj));
            body.push(createProtoObjectWithMethods(name, adhocObj));
        })
    }

    // parse nested names
    let name = obj.name;
    if (isNested) {
        name = getParsedObjectName(root, obj, scope);
    }

    body.push(createProtoType(name, obj));
    body.push(createCreateProtoType(name, obj));
    body.push(createProtoObjectWithMethods(name, obj));
};

export const parseEnum = (
    store: ProtoStore,
    root: ProtoRoot,
    obj: any,
    imports: object,
    body: any[],
    scope: string[],
    isNested: boolean = false
) => {
    let name = obj.name;
    // parse nested names
    if (isNested) {
        name = getParsedObjectName(root, obj, scope);
    }
    body.push(createProtoEnum(name, obj));
};

export const parseRecur = (
    store: ProtoStore,
    root: ProtoRoot,
    obj: any,
    imports: object,
    body: any[],
    scope: string[],
    isNested: boolean = false
) => {
    switch (obj.type) {
        case 'Type':
            return parseType(
                store, root, obj, imports, body, scope, isNested
            );
        case 'Enum':
            return parseEnum(
                store, root, obj, imports, body, scope, isNested
            );
        case 'Service':
            console.log(obj);
            return;
        case 'Root':
        case 'Namespace':
            if (obj.nested) {
                return Object.keys(obj.nested).forEach(key => {
                    parseRecur(store, root, obj.nested[key], imports, body, [...scope, key], isNested);
                });
            } else {
                throw new Error('parseRecur() cannot find protobufjs Type')
            }
        default:
            throw new Error('parseRecur() cannot find protobufjs Type')
    }
};