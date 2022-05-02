import { Service, Type, Enum, Root, Namespace } from 'protobufjs';
import { ProtoStore, ProtoRoot, getObjectName } from '@osmonauts/proto-parser';
import { createProtoType, createCreateProtoType, createProtoEnum, createProtoObjectWithMethods } from '@osmonauts/ast';

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

export const parseRecur = (
    store: ProtoStore,
    root: ProtoRoot,
    obj: any,
    imports: object,
    body: any[],
    scope: string[],
    isNested: boolean = false
) => {
    if (obj.type === 'Type') {
        if (obj.nested) {
            return Object.keys(obj.nested).forEach(key => {
                // isNested = true;
                parseRecur(store, root, obj.nested[key], imports, body, [...scope, key], true);
            });
        }

        // MARKED AS NOT DRY 
        // parse nested names
        let name = obj.name;
        if (isNested) {
            const allButPackage = scope.splice(root.package.split('.').length);
            // pull off "this" name
            allButPackage.pop();
            name = getObjectName(obj.name, [root.package, ...allButPackage]);
        }

        body.push(createProtoType(name, obj));
        body.push(createCreateProtoType(name, obj));
        body.push(createProtoObjectWithMethods(name, obj));


        return;
    }
    if (obj.type === 'Enum') {


        // MARKED AS NOT DRY 
        // parse nested names
        let name = obj.name;
        if (isNested) {
            const allButPackage = scope.splice(root.package.split('.').length);
            // pull off "this" name
            allButPackage.pop();
            name = getObjectName(obj.name, [root.package, ...allButPackage]);
        }

        body.push(createProtoEnum(name, obj));
        return;
    }
    if (obj.type === 'Service') {
        // todo return empty ast element.
        return;
    }
    if (obj.type === 'Root' || obj.type === 'Namespace') {
        if (obj.nested) {
            return Object.keys(obj.nested).forEach(key => {
                parseRecur(store, root, obj.nested[key], imports, body, [...scope, key], isNested);
            });
        } else {
            throw new Error('parseRecur() cannot find protobufjs Type')
        }
    }
    throw new Error('parseRecur() cannot find protobufjs Type')
};