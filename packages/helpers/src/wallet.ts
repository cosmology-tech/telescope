import { Secp256k1HdWallet } from '@cosmjs/amino';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Slip10RawIndex } from '@cosmjs/crypto';

export function makeHdPath(coinType = 118, account = 0) {
    return [
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(coinType),
        Slip10RawIndex.hardened(0),
        Slip10RawIndex.normal(0),
        Slip10RawIndex.normal(account)
    ];
}

interface GetWalletProps {
    mnemonic: string;
    chain: {
        bech32_prefix: string;
        slip44: number;
    };
}

export const getOfflineSignerProto = async ({ mnemonic, chain }: GetWalletProps): Promise<DirectSecp256k1HdWallet> => {
    try {
        const { bech32_prefix, slip44 } = chain;
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            prefix: bech32_prefix,
            hdPaths: [makeHdPath(slip44, 0)]
        });
        return wallet;
    } catch (e) {
        console.log('bad mnemonic');
    }
};

export const getOfflineSignerAmino = async ({ mnemonic, chain }: GetWalletProps): Promise<Secp256k1HdWallet> => {
    try {
        const { bech32_prefix, slip44 } = chain;
        const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
            prefix: bech32_prefix,
            hdPaths: [makeHdPath(slip44, 0)]
        });
        return wallet;
    } catch (e) {
        console.log('bad mnemonic');
    }
};