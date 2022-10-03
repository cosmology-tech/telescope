import { ProtoRoot, ProtoRef } from '@osmonauts/types';
import { camel } from '@osmonauts/utils';
import { relative, dirname, extname } from 'path';
import { ImportObj } from '../types';

export const getRoot = (ref: ProtoRef): ProtoRoot => {
    if (ref.traversed) return ref.traversed;
    return ref.proto;
};

export const UTILS = {
    AminoHeight: '__helpers__',
    AminoMsg: '@cosmjs/amino',
    AminoTypes: '@cosmjs/stargate',
    decodeBech32Pubkey: '@cosmjs/amino',
    defaultRegistryTypes: '@cosmjs/stargate',
    encodeBech32Pubkey: '@cosmjs/amino',
    fromBase64: '@cosmjs/encoding',
    fromBech32: '@cosmjs/encoding',
    fromDuration: '__helpers__',
    fromHex: '@cosmjs/encoding',
    fromUtf8: '@cosmjs/encoding',
    fromJsonTimestamp: '__helpers__',
    fromTimestamp: '__helpers__',
    GeneratedType: '@cosmjs/proto-signing',
    isSet: '__helpers__',
    isObject: '__helpers__',
    Long: '__helpers__', // exports Long and also calls the magic Long code
    // Long: { type: 'default', path: 'long', name: 'Long ' },
    createProtobufRpcClient: '@cosmjs/stargate',
    QueryClient: '@cosmjs/stargate',
    Tendermint34Client: '@cosmjs/tendermint-rpc',
    OfflineSigner: '@cosmjs/proto-signing',
    omitDefault: '__helpers__',
    Registry: '@cosmjs/proto-signing',
    SigningStargateClient: '@cosmjs/stargate',
    toBase64: '@cosmjs/encoding',
    toUtf8: '@cosmjs/encoding',
    toDuration: '__helpers__',
    toTimestamp: '__helpers__',
    bytesFromBase64: '__helpers__',
    base64FromBytes: '__helpers__',
    setPaginationParams: '__helpers__',
    _m0: { type: 'namespace', path: 'protobufjs/minimal', name: '_m0' },
    Exact: '__helpers__',
    Rpc: '__helpers__',
    LCDClient: '@osmonauts/lcd',
    DeepPartial: '__helpers__'
};


export const fixlocalpaths = (imports: ImportObj[]) => {
    return imports.map(imp => {
        return {
            ...imp,
            path: (imp.path === '__helpers__' || imp.path.startsWith('.') || imp.path.startsWith('@')) ?
                imp.path : `./${imp.path}`
        };
    })
};


export const getRelativePath = (f1: string, f2: string) => {
    const rel = relative(dirname(f1), f2);
    let importPath = rel.replace(extname(rel), '');
    if (!/^\./.test(importPath)) importPath = `./${importPath}`;
    return importPath;
}


export const variableSlug = (str) => {
    str = String(str).toString();
    str = str.replace(/\//g, '_');
    str = str.replace('.', '_');
    str = str.replace(extname(str), '');
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
    str = str
        .replace(/[^a-z0-9_ -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-/g, "");

    return camel(str);
}