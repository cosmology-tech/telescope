import { osmosis } from "./codegen";

const REST_ENDPOINT = 'https://rest.cosmos.directory/osmosis'

export const main = async () => {
    const client = await osmosis.ClientFactory.createLCDClient({ restEndpoint: REST_ENDPOINT });
    const pools = await client.osmosis.gamm.v1beta1.pools()
    console.log(pools);
};

main().then(() => {
    console.log('all done')
})