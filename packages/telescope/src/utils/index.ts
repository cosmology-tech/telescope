import { ProtoRoot, ProtoRef } from '@osmonauts/types';
import { camel } from 'case';
import { relative, dirname, extname } from 'path';

export const getRoot = (ref: ProtoRef): ProtoRoot => {
    if (ref.traversed) return ref.traversed;
    return ref.proto;
};

export const UTILS = {
    AminoHeight: '@osmonauts/helpers',
    AminoMsg: '@cosmjs/amino',
    AminoTypes: '@cosmjs/stargate',
    decodeBech32Pubkey: '@cosmjs/amino',
    defaultRegistryTypes: '@cosmjs/stargate',
    encodeBech32PubKey: '@cosmjs/amino',
    fromBase64: '@cosmjs/encoding',
    fromBech32: '@cosmjs/encoding',
    fromDuration: '@osmonauts/helpers',
    fromHex: '@cosmjs/encoding',
    fromJsonTimestamp: '@osmonauts/helpers',
    fromTimestamp: '@osmonauts/helpers',
    GeneratedType: '@cosmjs/proto-signing',
    isSet: '@osmonauts/helpers',
    isObject: '@osmonauts/helpers',
    Long: '@osmonauts/helpers', // exports Long and also calls the magic Long code
    // Long: { type: 'default', path: 'long', name: 'Long ' },
    OfflineSigner: '@cosmjs/proto-signing',
    omitDefault: '@osmonauts/helpers',
    Registry: '@cosmjs/proto-signing',
    SigningStargateClient: '@cosmjs/stargate',
    toBase64: '@cosmjs/encoding',
    toUtf8: '@cosmjs/encoding',
    toDuration: '@osmonauts/helpers',
    toTimestamp: '@osmonauts/helpers',
    bytesFromBase64: '@osmonauts/helpers',
    base64FromBytes: '@osmonauts/helpers',
    _m0: { type: 'namespace', path: 'protobufjs/minimal', name: '_m0' },
    Exact: '@osmonauts/helpers',
    LCDClient: '@osmonauts/lcd',
    DeepPartial: '@osmonauts/helpers'
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
        .replace(/-+/g, "-") // collapse dashes
        .replace(/^-+/, "") // trim - from start of text
        .replace(/-+$/, "");

    return camel(str);
}