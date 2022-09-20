import { osmosis } from "./codegen";

const RPC_ENDPOINT = 'https://rpc.cosmos.directory/osmosis'

const main = async () => {
    const client = await osmosis.ClientFactory
        .createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT })
    const response = await client.osmosis.gamm.v1beta1.pools()

    // THIS WORKS but has to be manually applied
    const result = response.pools.map(({ typeUrl, value }) => {
        return osmosis.gamm.v1beta1.Pool.decode(value);
    });

    console.log(result);
};

main().then(() => {
    console.log('all done')
})