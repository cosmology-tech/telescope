import { SigningStargateClient } from '@cosmjs/stargate';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

export const signAndBroadcast = async ({
    client,
    chainId,
    address,
    msgs,
    fee,
    memo = ''
}: {
    client: SigningStargateClient,
    chainId: string,
    address: string,
    msgs: any[],
    fee: any,
    memo: string
}) => {
    const { accountNumber, sequence } = await client.getSequence(address);
    const txRaw = await client.sign(address, msgs, fee, memo, {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId
    });
    const txBytes = TxRaw.encode(txRaw).finish();
    return await client.broadcastTx(txBytes);
};
