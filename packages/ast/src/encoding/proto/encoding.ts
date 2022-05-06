import * as t from '@babel/types';
import { ProtoType } from './types';
import { fromPartialMethod } from './from-partial';
import { decodeMethod } from './decode';
import { encodeMethod } from './encode';
import { fromJSONMethod } from './from-json';
import { toJSONMethod } from './to-json';
import { ProtoParseContext } from '../context';

export const createProtoObjectWithMethods = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const methods = [
        encodeMethod(context, name, proto),
        decodeMethod(context, name, proto),
        fromJSONMethod(context, name, proto),
        toJSONMethod(context, name, proto),
        fromPartialMethod(context, name, proto),
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