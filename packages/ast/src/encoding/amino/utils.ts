import * as t from '@babel/types';
import { ProtoType } from '@cosmology/types';

export { getTypeUrlWithPkgAndName, getTypeUrl, getAminoTypeName } from '@cosmology/utils'

export const arrayTypeNDim = (body, n) => {
    if (!n || n <= 1) return t.tsArrayType(body);
    return t.tsArrayType(
        arrayTypeNDim(body, n - 1)
    );
};

export const protoFieldsToArray = (proto: ProtoType) => {
    return Object.keys(proto.fields).map(name => {
        return {
            name,
            ...proto.fields[name]
        };
    })
}