export interface AminoOptions {
    aminoCasingFn: Function,
    exceptions?: AminoExceptions
}

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
