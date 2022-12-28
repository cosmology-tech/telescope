import * as t from '@babel/types';
import { ProtoType } from '@osmonauts/types';
import { fromPartialMethod } from './proto/from-partial';
import { decodeMethod } from './proto/decode';
import { encodeMethod } from './proto/encode';
import { fromJSONMethod } from './proto/from-json';
import { toJSONMethod } from './proto/to-json';
import { fromAminoJSONMethod } from './proto/from-amino';
import { toAminoJSONMethod } from './proto/to-amino';
import { toSDKMethod } from './proto/to-sdk';
import { fromSDKMethod } from './proto/from-sdk';
import { ProtoParseContext } from './context';
import { createAminoTypeProperty, createTypeUrlProperty } from './proto';

export const createObjectWithMethods = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const gv = context.pluginValue;

    const methodsAndProps = [
        gv('prototypes.addTypeUrlToObjects') && createTypeUrlProperty(context, proto),
        gv('prototypes.addAminoTypeToObjects') && createAminoTypeProperty(context, proto),
        gv('prototypes.methods.encode') && encodeMethod(context, name, proto),
        gv('prototypes.methods.decode') && decodeMethod(context, name, proto),
        gv('prototypes.methods.fromJSON') && fromJSONMethod(context, name, proto),
        gv('prototypes.methods.toJSON') && toJSONMethod(context, name, proto),
        gv('prototypes.methods.fromPartial') && fromPartialMethod(context, name, proto),
        gv('prototypes.methods.fromSDK') && fromSDKMethod(context, name, proto),
        gv('prototypes.methods.toSDK') && toSDKMethod(context, name, proto),
        (gv('aminoEncoding.useRecursiveV2encoding') || gv('prototypes.methods.fromAmino')) && fromAminoJSONMethod(context, name, proto),
        (gv('aminoEncoding.useRecursiveV2encoding') || gv('prototypes.methods.toAmino')) && toAminoJSONMethod(context, name, proto),
        context.options.aminoEncoding.useRecursiveV2encoding && fromAminoJSONMethod(context, name, proto),
        context.options.aminoEncoding.useRecursiveV2encoding && toAminoJSONMethod(context, name, proto),
    ].filter(Boolean);

    return t.exportNamedDeclaration(
        t.variableDeclaration('const',
            [
                t.variableDeclarator(
                    t.identifier(name),
                    t.objectExpression(
                        methodsAndProps
                    )
                )
            ]
        )
    )
};