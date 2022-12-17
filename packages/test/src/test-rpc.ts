import { osmosis } from "./codegen";
import Long from 'long';

const RPC_ENDPOINT = 'https://rpc.cosmos.directory/osmosis'

const main = async () => {
    const client = await osmosis.ClientFactory
        .createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT })
    const response = await client.osmosis.gamm.v1beta1.pools({
        pagination: {
            key: new Uint8Array(),
            offset: Long.fromNumber(0),
            limit: Long.fromNumber(1500),
            countTotal: false,
            reverse: false
        }
    })


    const stables = response.pools.filter(p => p.$typeUrl === '/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool')
    const balancers = response.pools.filter(p => p.$typeUrl === '/osmosis.gamm.v1beta1.Pool')
    console.log(balancers[0]);
    console.log(stables[0]);
};

main().then(() => {
    console.log('all done')
})