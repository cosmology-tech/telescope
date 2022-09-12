import * as t from '@babel/types';
import { ProtoType } from '@osmonauts/types';
import { fromPartialMethod } from './proto/from-partial';
import { decodeMethod } from './proto/decode';
import { encodeMethod } from './proto/encode';
import { fromJSONMethod } from './proto/from-json';
import { toJSONMethod } from './proto/to-json';
import { ProtoParseContext } from './context';
import { fromApiJsonMethod, toApiJsonMethod } from './proto';

export const createObjectWithMethods = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const methods = [
        context.pluginValue('prototypes.methods.encode') && encodeMethod(context, name, proto),
        context.pluginValue('prototypes.methods.decode') && decodeMethod(context, name, proto),
        context.pluginValue('prototypes.methods.fromJSON') && fromJSONMethod(context, name, proto),
        context.pluginValue('prototypes.methods.toJSON') && toJSONMethod(context, name, proto),
        context.pluginValue('prototypes.methods.fromPartial') && fromPartialMethod(context, name, proto),
        context.pluginValue('prototypes.methods.toApiJson') && toApiJsonMethod(context, name, proto),
        context.pluginValue('prototypes.methods.fromApiJson') && fromApiJsonMethod(context, name, proto)
    ].filter(Boolean);

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