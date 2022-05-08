import * as t from '@babel/types';
import { ProtoType } from './proto/types';
import { fromPartialMethod } from './proto/from-partial';
import { decodeMethod } from './proto/decode';
import { encodeMethod } from './proto/encode';
import { fromJSONMethod } from './proto/from-json';
import { toJSONMethod } from './proto/to-json';
import { ProtoParseContext } from './context';

export const createObjectWithMethods = (
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
            [
                t.variableDeclarator(
                    t.identifier(name),
                    t.objectExpression(
                        methods
                    )
                )
            ]
        )
    )
};