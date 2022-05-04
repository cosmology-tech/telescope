import * as t from '@babel/types';
import { kebab } from "case";
import { ProtoType, ProtoAny } from '../types';
import { ProtoRoot } from '@osmonauts/proto-parser'
import { DEFAULT_AMINO_EXCEPTIONS } from './types';

const BILLION = t.numericLiteral(1_000_000_000);
BILLION.extra = { raw: "1_000_000_000", rawValue: 1000000000 };
export { BILLION };


export const getTypeUrl = (root: ProtoRoot, proto: ProtoAny | ProtoType) => {
    return `/${root.package}.${proto.name}`;
}

export const arrayTypeNDimensions = (body, n) => {
    if (!n) return t.tsArrayType(body);
    return t.tsArrayType(
        arrayTypeNDimensions(body, n - 1)
    );
};

export const typeUrlToAmino = (typeUrl, exceptions = {}) => {
    const exceptionsToCheck = {
        ...exceptions,
        ...DEFAULT_AMINO_EXCEPTIONS
    }
    const exceptionAminoName = exceptionsToCheck?.[typeUrl]?.aminoType;
    if (exceptionAminoName) return exceptionAminoName;

    const name = typeUrl.replace(/^\//, '');
    const elements = name.split('.');
    const pkg = elements[0];
    switch (pkg) {
        case 'cosmos':
        case 'ibc':
            return `cosmos-sdk/${elements[elements.length - 1]}`;
        case 'osmosis': {
            const n = elements.filter(a => !a.match(/v1beta1/));
            n[n.length - 1] = kebab(n[n.length - 1]);
            n[n.length - 1] = n[n.length - 1].replace(/^msg-/, '');
            return n.join('/');
        } default:
            return typeUrl;
    }
}
