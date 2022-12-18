import { ProtoEnum, ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
import { createProtoEnum } from '../enums';
import { createProtoType } from './proto';
import * as t from '@babel/types';

export const createSDKType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    return createProtoType(
        context,
        name,
        proto,
        {
            useOriginalCase: true,
            typeNameSuffix: 'SDKType',
        }
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
                t.identifier(name + 'SDKType'),
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
