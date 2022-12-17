import { coins } from '@cosmjs/amino';
import {
    lookupRoutesForTrade,
    calculateAmountWithSlippage,
    prettyPool,
    getPricesFromCoinGecko,
    makePoolPairs,
    makePoolsPretty,
    noDecimals,
    baseUnitsToDisplayUnits,
    symbolToOsmoDenom,
    baseUnitsToDollarValue,
    dollarValueToDenomUnits,
    getPrice
} from '@cosmology/core';
import Long from 'long';
import { getSigningOsmosisClient, osmosis } from './codegen';
import { getOfflineSignerAmino } from 'cosmjs-utils';

const RPC_ENDPOINT = 'https://rpc.cosmos.directory/osmosis'

const main = async () => {

    const {
        swapExactAmountIn
    } = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

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

    const value = '0.2';
    const buy = 'ATOM';
    const sell = 'OSMO';

    const slippage = '1';

    const tokenInPrice = getPrice(prices, sell);
    const tokenInAmount = dollarValueToDenomUnits(prices, sell, value);
    const tokenOutPrice = getPrice(prices, buy);
    const tokenOutAmount = dollarValueToDenomUnits(prices, buy, value);
    const tokenOutAmountWithSlippage = calculateAmountWithSlippage(
        tokenOutAmount,
        slippage
    );

    const tokenInValue = baseUnitsToDollarValue(prices, sell, tokenInAmount);
    const tokenOutValue = baseUnitsToDollarValue(
        prices,
        buy,
        tokenOutAmountWithSlippage
    );

    const tokenIn = {
        denom: symbolToOsmoDenom(sell),
        symbol: sell,
        amount: tokenInAmount,
        displayAmount: baseUnitsToDisplayUnits(sell, tokenInAmount),
        tokenInPrice,
        tokenInValue
    };

    const tokenOut = {
        denom: symbolToOsmoDenom(buy),
        symbol: buy,
        amount: tokenOutAmountWithSlippage,
        displayAmount: baseUnitsToDisplayUnits(buy, tokenOutAmountWithSlippage),
        tokenOutPrice,
        tokenOutValue
    };


    const routes = lookupRoutesForTrade({
        pools,
        trade: {
            sell: {
                denom: tokenIn.denom,
                amount: tokenInAmount
            },
            buy: {
                denom: tokenOut.denom,
                amount: tokenOutAmount
            },
            beliefValue: value
        },
        pairs
    }).map((tradeRoute) => {
        const {
            poolId,
            tokenOutDenom
        } = tradeRoute;
        return {
            poolId,
            tokenOutDenom
        };
    });

    const [account] = await signer.getAccounts();

    const fee = {
        amount: coins('0', 'uosmo'),
        gas: '250000'
    }
    const msg = swapExactAmountIn({
        sender: account.address,
        routes,
        tokenIn: {
            denom: tokenIn.denom,
            amount: noDecimals(tokenIn.amount)
        },
        tokenOutMinAmount: noDecimals(tokenOut.amount)
    });

    console.log(account.address, msg);

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