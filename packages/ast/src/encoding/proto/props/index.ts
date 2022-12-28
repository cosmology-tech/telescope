import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@osmonauts/types';
import { getAminoTypeName, getTypeUrl } from '../../amino';

export const createTypeUrlProperty = (
    context: ProtoParseContext,
    proto: ProtoType
) => {
    return t.objectProperty(
        t.identifier('typeUrl'),
        t.stringLiteral(getTypeUrl(context.ref.proto, proto))
    )
};

export const createAminoTypeProperty = (
    context: ProtoParseContext,
    proto: ProtoType
) => {
    return t.objectProperty(
        t.identifier('aminoType'),
        t.stringLiteral(getAminoTypeName(context, context.ref.proto, proto))
    )
};