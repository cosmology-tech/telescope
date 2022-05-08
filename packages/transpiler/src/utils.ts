import { ProtoStore, ProtoRoot, ProtoRef, getObjectName } from '@osmonauts/proto-parser';
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
    Long: '@osmonauts/helpers', // exports Long and also calls the magic Long code
    // Long: {type: 'default', 'long'}
    OfflineSigner: '@cosmjs/proto-signing',
    omitDefault: '@osmonauts/helpers',
    Registry: '@cosmjs/proto-signing',
    SigningStargateClient: '@cosmjs/stargate',
    toBase64: '@cosmjs/encoding',
    toDuration: '@osmonauts/helpers',
    toTimestamp: '@osmonauts/helpers',
    bytesFromBase64: '@osmonauts/helpers',
    base64FromBytes: '@osmonauts/helpers',
    _m0: 'protobuf/minimal'
    // _m0: { type: 'namespace', path: 'protobuf/minimal' }
};


export const getRelativePath = (f1: string, f2: string) => {
    const rel = relative(dirname(f1), f2);
    let importPath = rel.replace(extname(rel), '');
    if (!/\//.test(importPath)) importPath = `./${importPath}`;
    return importPath;
}

export const insertUniq = (array: string[], el: string) => {
    if (!array.includes(el)) {
        array.push(el);
    }
}
