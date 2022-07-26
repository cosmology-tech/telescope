import * as t from '@babel/types';
import { DEFAULT_AMINO_EXCEPTIONS, ProtoAny, ProtoRoot, ProtoType } from '@osmonauts/types';
import { kebab } from "case";
import { GenericParseContext } from '../context';

export const getTypeUrl = (root: ProtoRoot, proto: ProtoAny | ProtoType) => {
    return `/${root.package}.${proto.name}`;
}

export const arrayTypeNDim = (body, n) => {
    if (!n || n <= 1) return t.tsArrayType(body);
    return t.tsArrayType(
        arrayTypeNDim(body, n - 1)
    );
};

export const typeUrlToAmino = (
    context: GenericParseContext,
    typeUrl: string
) => {

    const exceptionsToCheck = {
        ...(context.options.aminoExceptions ?? {}),
        ...DEFAULT_AMINO_EXCEPTIONS
    }
    const exceptionAminoName = exceptionsToCheck?.[typeUrl]?.aminoType;
    if (exceptionAminoName) return exceptionAminoName;


    if (typeof context.options.aminoTypeUrl === 'function') {
        const result = context.options.aminoTypeUrl(typeUrl);
        if (result) return result;
    }

    const name = typeUrl.replace(/^\//, '');
    const elements = name.split('.');
    const pkg = elements[0];
    switch (pkg) {
        case 'cosmos':
        case 'ibc':
            return `cosmos-sdk/${elements[elements.length - 1]}`;
        case 'cosmwasm':
            return `wasm/${elements[elements.length - 1]}`;
        case 'osmosis': {
            if (/poolmodels/.test(typeUrl) && /stableswap/.test(typeUrl)) {
                const n = elements
                    .filter(a => a !== 'v1beta1')
                    .filter(a => a !== 'poolmodels')
                    .filter(a => a !== 'stableswap')
                    ;
                n[n.length - 1] = kebab(n[n.length - 1]);
                n[n.length - 1] = n[n.length - 1].replace(/^msg-/, '');
                return n.join('/');
            }

            if (/superfluid/.test(typeUrl)) {

                switch (typeUrl) {
                    case '/osmosis.superfluid.MsgUnPoolWhitelistedPool':
                        return 'osmosis/unpool-whitelisted-pool';
                }

                const n = elements
                    .filter(a => a !== 'superfluid')
                    ;
                n[n.length - 1] = kebab(n[n.length - 1]);
                n[n.length - 1] = n[n.length - 1].replace(/^msg-/, '');
                return n.join('/');
            }

            const n = elements.filter(a => !a.match(/v1beta1/));
            n[n.length - 1] = kebab(n[n.length - 1]);
            n[n.length - 1] = n[n.length - 1].replace(/^msg-/, '');
            return n.join('/');
        } default:
            return typeUrl;
    }
}

export const protoFieldsToArray = (proto: ProtoType) => {
    return Object.keys(proto.fields).map(name => {
        return {
            name,
            ...proto.fields[name]
        };
    })
}