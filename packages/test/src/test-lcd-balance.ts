import { LCDClient } from "@osmonauts/lcd";
import { cosmos } from "./codegen";

const REST_ENDPOINT = 'https://rest.cosmos.directory/osmosis'

export const main = async () => {
    const requestClient = new LCDClient({ restEndpoint: REST_ENDPOINT });
    const client = new cosmos.bank.v1beta1.LCDQueryClient({ requestClient });
    const pools = await client.allBalances({
        address: 'osmo19mywfjzj324w5ukf7ss6jak0dg9hnljfp0rfx4'
    })
    console.log(pools);
};

main().then(() => {
    console.log('all done')
})