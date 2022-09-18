import { ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
import { createProtoType } from './interface';

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
