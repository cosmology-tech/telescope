export interface AminoException {
    aminoType?: string;
    toAmino?: any;
    fromAmino?: any;
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
    },
    '/cosmos.nft.v1beta1.MsgSend': {
        // TODO find aminoType name
        aminoType: 'cosmos-sdk/MsgNFTSend'
    }
}
