import Long from 'long';
import { coins } from '@cosmjs/amino';
import {
    prettyPool,
    getPricesFromCoinGecko,
    makePoolPairs,
    makePoolsPretty
} from '@cosmology/core';
import { getSigningOsmosisClient, osmosis } from './codegen';
// import { osmosis as cosmology } from 'osmojs';
import { getOfflineSignerAmino, signAndBroadcast } from 'cosmjs-utils';
import { MsgLockTokens } from './codegen/osmosis/lockup/tx';
// import { MsgLockTokens as MsgLockTokens2 } from 'osmojs/main/codegen/osmosis/lockup/tx';

const RPC_ENDPOINT = 'https://rpc.cosmos.directory/osmosis'

const main = async () => {

    const {
        lockTokens
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

    const accountBalances = await client.cosmos.bank.v1beta1.allBalances({
        address: account.address
    })

    const gammTokens = accountBalances.balances
        .filter((a) => a.denom.startsWith('gamm'))
        .map((obj) => {
            return {
                ...obj,
                poolId: obj.denom.split('/')[2]
            };
        });

    if (!gammTokens.length) {
        return console.log('no gamm tokens to stake');
    }

    console.log({ gammTokens })

    const tokens = gammTokens.find((gamm) => gamm.poolId == '1');
    if (!tokens) {
        return console.log('no gamm tokens from pool to stake');
    }
    const gammCoins = [tokens].map(
        ({ denom, amount }) => ({ amount, denom })
    );

    const msg = lockTokens({
        owner: account.address,
        coins: gammCoins,
        duration: {
            seconds: Long.fromValue(8),
            // seconds: Long.fromValue(86400),
            nanos: 0
        }
    });

    console.log(JSON.stringify(msg));

    const aminoVersion = MsgLockTokens.toAmino(msg.value);
    const fromAmino = MsgLockTokens.fromAmino(aminoVersion);

    console.log(JSON.stringify({
        msg,
        aminoVersion,
        fromAmino
    }, null, 2))

    const stargateClient = await getSigningOsmosisClient({
        rpcEndpoint: RPC_ENDPOINT,
        signer
    });

    // const result = await signAndBroadcast({
    //     client: stargateClient,
    //     address: account.address,
    //     chainId: 'osmosis-1',
    //     fee,
    //     memo: '',
    //     msgs: [msg]
    // })

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