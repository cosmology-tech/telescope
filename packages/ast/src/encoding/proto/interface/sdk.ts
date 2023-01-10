import * as t from '@babel/types';
import { ProtoEnum, ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
import { createProtoType } from './proto';
import { SymbolNames } from '../../types';

export const createSDKType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    return createProtoType(
        context,
        name,
        proto,
        'SDKType'
    );
};

export const createEnumSDKType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoEnum
) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration('const', [
            t.variableDeclarator(
                t.identifier(SymbolNames.SDKType(name)),
                t.identifier(name)
            )
        ])
    );
    // return createProtoEnum(
    //     context,
    //     name + "SDKType",
    //     proto
    // );
};
