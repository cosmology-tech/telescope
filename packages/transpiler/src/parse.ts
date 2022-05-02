import { Service, Type, Enum, Root, Namespace } from 'protobufjs';
import { ProtoStore, ProtoRoot } from '@osmonauts/proto-parser';
import { createProtoType, createCreateProtoType, createProtoEnum } from '@osmonauts/ast';

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
    scope: string[]
) => {
    if (obj.type === 'Type') {
        body.push(createProtoType(obj.name, obj));
        return createProtoType(obj.name, obj);
    }
    if (obj.type === 'Enum') {
        body.push(createProtoEnum(obj.name, obj));
        return createProtoEnum(obj.name, obj);
    }
    if (obj.type === 'Service') {
        // todo return empty ast element.
        return 'Service';
    }
    if (obj.type === 'Root' || obj.type === 'Namespace') {
        if (obj.nested) {
            return Object.keys(obj.nested).reduce((m, key) => {
                m.nested[key] = parseRecur(store, root, obj.nested[key], imports, body, [...scope, key]);
                return m;
            }, { nested: {} });
        } else {
            throw new Error('parseRecur() cannot find protobufjs Type')
        }
    }
    throw new Error('parseRecur() cannot find protobufjs Type')
};