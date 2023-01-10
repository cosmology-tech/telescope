import Long from 'long';
import { coins } from '@cosmjs/amino';
import {
    prettyPool,
    getPricesFromCoinGecko,
    makePoolPairs,
    makePoolsPretty
} from '@cosmology/core';
import { getSigningOsmosisClient, osmosis } from './codegen';
import { getOfflineSignerAmino } from 'cosmjs-utils';
import { MsgBeginUnlocking } from './codegen/osmosis/lockup/tx';

const RPC_ENDPOINT = 'https://rpc.cosmos.directory/osmosis'

const main = async () => {

    const {
        beginUnlocking
    } = osmosis.lockup.MessageComposer.withTypeUrl;

    const signer = await getOfflineSignerAmino({
        mnemonic: process.env.MNEMONIC,
        chain: {
            bech32_prefix: 'osmo',
            slip44: 118
        }
    });

    const client = await osmosis.ClientFactory.createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

    const data = await client.osmosis.gamm.v1beta1.pools({
        pagination: {
            key: new Uint8Array(),
            offset: Long.fromNumber(0),
            limit: Long.fromNumber(1500),
            countTotal: false,
            reverse: false
        }
    })
    const pools = data.pools.filter(p => p.$typeUrl === '/osmosis.gamm.v1beta1.Pool')
        .map((pool) => prettyPool(pool));
    const prices = await getPricesFromCoinGecko();
    const prettyPools = makePoolsPretty(prices, pools);
    const pairs = makePoolPairs(prettyPools);

    const [account] = await signer.getAccounts();

    const fee = {
        amount: coins('0', 'uosmo'),
        gas: '250000'
    }


    const accountLockedLongerDurationDenom = await client.osmosis.lockup.accountLockedLongerDurationDenom({
        owner: account.address,
        denom: 'gamm/pool/1'
    })

    const accountLockedCoins = await client.osmosis.lockup.accountLockedCoins({
        owner: account.address
    })

    const accountUnlockableCoins = await client.osmosis.lockup.accountUnlockableCoins({
        owner: account.address
    })

    console.log(JSON.stringify({ accountUnlockableCoins, accountLockedCoins, accountLockedLongerDurationDenom }, null, 2));

    if (!accountLockedLongerDurationDenom.locks.length) {
        throw new Error('no locks!');
    }

    const [lock] = accountLockedLongerDurationDenom.locks;

    const msg = beginUnlocking({
        owner: account.address,
        coins: [],
        ID: lock.ID
    });

    console.log(JSON.stringify(msg));

    const aminoVersion = MsgBeginUnlocking.toAmino(msg.value);
    const fromAmino = MsgBeginUnlocking.fromAmino(aminoVersion);

    console.log(JSON.stringify({
        msg,
        aminoVersion,
        fromAmino
    }, null, 2))

    const stargateClient = await getSigningOsmosisClient({
        rpcEndpoint: RPC_ENDPOINT,
        signer
    });

    const result = await stargateClient.signAndBroadcast(
        account.address,
        [msg],
        fee
    );

    console.log(result);

};

main().then(() => {
    console.log('all done')
})