import { LCDClient } from '@cosmology/lcd';
import { cosmos } from './codegen';
import { createRPCQueryClient } from './codegen/cosmos/rpc.query';
import { PageRequest } from './codegen/cosmos/base/query/v1beta1/pagination';

const REST_ENDPOINT = 'https://rest.cosmos.directory/osmosis';

export const main = async () => {
  const requestClient = new LCDClient({ restEndpoint: REST_ENDPOINT });
  const bankClient = new cosmos.bank.v1beta1.LCDQueryClient({ requestClient });
  const pools = await bankClient.allBalances({
    address: 'osmo19mywfjzj324w5ukf7ss6jak0dg9hnljfp0rfx4'
  })
  console.log(pools);

  const balance = await bankClient.balance({
    address: 'osmo19mywfjzj324w5ukf7ss6jak0dg9hnljfp0rfx4',
    denom: 'uatom',
  })
  console.log(balance);

  const authClient = new cosmos.auth.v1beta1.LCDQueryClient({ requestClient });

  const accounts = await authClient.accounts({
    pagination: PageRequest.fromPartial({})
  });
  console.log(accounts)
};

main().then(() => {
  console.log('all done');
});
