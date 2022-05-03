// export declare type fieldType = 'Long' | 'Coin' | 'Duration' | 'Height' | string;

// export interface Field {
//     name: string;
//     type: fieldType;
//     node: any;
// };
// export interface Interface {
//     name: string;
//     fields: Field[]
// };

// export interface MessageSchema extends Interface {
//     typeUrl: string;
//     name: string;
//     fields: Field[]
// };

// DUPLICATE: proto-parser
export interface ProtoRoot {
    package: string;
    imports: string[];
    root: any;
};

export interface ProtoAny {
    type: string;
    name: string;
    [key: string]: any;
};
export interface AminoException {
    aminoType?: string;
    toAmino?: object;
    fromAmino?: object;
    AminoMsg?: object;
    Msg?: object;
}
export interface AminoExceptions {
    [key: string]: AminoException;
}

export const DEFAULT_AMINO_EXCEPTIONS: AminoExceptions = {
    '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': {
        aminoType: 'cosmos-sdk/MsgModifyWithdrawAddress'
    },
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': {
        aminoType: 'cosmos-sdk/MsgWithdrawDelegationReward'
    }
}