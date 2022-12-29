import * as t from '@babel/types';
import { ProtoType } from '@osmonauts/types';
import { fromPartialMethod } from './proto/from-partial';
import { decodeMethod } from './proto/decode';
import { encodeMethod } from './proto/encode';
import { fromJSONMethod } from './proto/from-json';
import { toJSONMethod } from './proto/to-json';
import { fromAminoJSONMethod, fromAminoMsgMethod } from './proto/from-amino';
import { toAminoJSONMethod, toAminoMsgMethod } from './proto/to-amino';
import { toSDKMethod } from './proto/to-sdk';
import { fromSDKMethod } from './proto/from-sdk';
import { ProtoParseContext } from './context';
import { createAminoTypeProperty, createTypeUrlProperty, fromProtoMsgMethod, toProtoMethod, toProtoMsgMethod } from './proto';

export const createObjectWithMethods = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const methodsAndProps = [
        context.pluginValue('prototypes.addTypeUrlToObjects') && createTypeUrlProperty(context, proto),
        context.pluginValue('prototypes.addAminoTypeToObjects') && createAminoTypeProperty(context, proto),
        context.pluginValue('prototypes.methods.encode') && encodeMethod(context, name, proto),
        context.pluginValue('prototypes.methods.decode') && decodeMethod(context, name, proto),
        context.pluginValue('prototypes.methods.fromJSON') && fromJSONMethod(context, name, proto),
        context.pluginValue('prototypes.methods.toJSON') && toJSONMethod(context, name, proto),
        context.pluginValue('prototypes.methods.fromPartial') && fromPartialMethod(context, name, proto),
        context.pluginValue('prototypes.methods.fromSDK') && fromSDKMethod(context, name, proto),
        context.pluginValue('prototypes.methods.toSDK') && toSDKMethod(context, name, proto),
        (context.pluginValue('aminoEncoding.useRecursiveV2encoding') || context.pluginValue('prototypes.methods.fromAmino')) && fromAminoJSONMethod(context, name, proto),
        (context.pluginValue('aminoEncoding.useRecursiveV2encoding') || context.pluginValue('prototypes.methods.toAmino')) && toAminoJSONMethod(context, name, proto),
        (context.pluginValue('aminoEncoding.useRecursiveV2encoding') || context.pluginValue('prototypes.methods.fromAmino')) && fromAminoMsgMethod(context, name, proto),
        (context.pluginValue('aminoEncoding.useRecursiveV2encoding') || context.pluginValue('prototypes.methods.toAmino')) && toAminoMsgMethod(context, name, proto),
        (context.pluginValue('aminoEncoding.useRecursiveV2encoding') || context.pluginValue('prototypes.methods.fromProto')) && fromProtoMsgMethod(context, name, proto),
        (context.pluginValue('aminoEncoding.useRecursiveV2encoding') || context.pluginValue('prototypes.methods.toProto')) && toProtoMethod(context, name, proto),
        (context.pluginValue('aminoEncoding.useRecursiveV2encoding') || context.pluginValue('prototypes.methods.toProto')) && toProtoMsgMethod(context, name, proto),
        // context.options.aminoEncoding.useRecursiveV2encoding && fromAminoJSONMethod(context, name, proto),
        // context.options.aminoEncoding.useRecursiveV2encoding && toAminoJSONMethod(context, name, proto),
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