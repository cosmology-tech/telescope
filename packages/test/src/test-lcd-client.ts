import { LCDClient } from "@cosmology/lcd";
import { osmosis } from "./codegen";

const REST_ENDPOINT = 'https://rest.cosmos.directory/osmosis'

export const main = async () => {
    const requestClient = new LCDClient({ restEndpoint: REST_ENDPOINT });
    const client = new osmosis.gamm.v1beta1.LCDQueryClient({ requestClient });
    const pools = await client.pools();
    console.log(pools);
};

main().then(() => {
    console.log('all done')
})