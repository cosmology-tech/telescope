import * as t from '@babel/types';
import { ProtoType } from './types';
import { fromPartialMethod } from './from-partial';
import { decodeMethod } from './decode';
import { encodeMethod } from './encode';
import { fromJSONMethod } from './from-json';
import { toJSONMethod } from './to-json';

export const createProtoObjectWithMethods = (name: string, proto: ProtoType) => {

    const methods = [
        encodeMethod(name, proto),
        decodeMethod(name, proto),
        fromJSONMethod(name, proto),
        toJSONMethod(name, proto),
        fromPartialMethod(name, proto),
    ];

    return t.exportNamedDeclaration(
        t.variableDeclaration('const',
            [t.variableDeclarator(
                t.identifier(name),
                t.objectExpression(
                    methods
                )
            )]
        )
    )
};