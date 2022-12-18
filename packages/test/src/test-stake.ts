import {
  baseUnitsToDisplayUnitsByDenom,
  gasEstimation,
  noDecimals,
} from '@cosmology/core';
import {
  decodeCosmosSdkDecFromProto,
  assertIsDeliverTxSuccess
} from '@cosmjs/stargate';
import { Dec } from '@keplr-wallet/unit';

import { cosmos, getSigningCosmosClient } from './codegen';
import { getOfflineSignerAmino } from 'cosmjs-utils';

const RPC_ENDPOINT = 'https://rpc.cosmos.directory/osmosis'

const main = async () => {

  const {
    delegate
  } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

  const signer = await getOfflineSignerAmino({
    mnemonic: process.env.MNEMONIC,
    chain: {
      bech32_prefix: 'osmo',
      slip44: 118
    }
  });

  const client = await cosmos.ClientFactory.createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

  const [mainAccount] = await signer.getAccounts();

  const { address } = mainAccount;

  const msg = delegate({
    delegatorAddress: address,
    validatorAddress: 'osmovaloper1jvqv650snr7gaee2wsvkx9nf9gwuj946zxa7z4',
    amount: {
      amount: noDecimals('1'),
      denom: 'uosmo'
    }
  });

  const stargateClient = await getSigningCosmosClient({
    rpcEndpoint: RPC_ENDPOINT,
    signer
  });

  const fee = await gasEstimation(
    'uosmo',
    // @ts-ignore
    stargateClient,
    address,
    [msg],
    '',
    1.3
  );

  const result = await stargateClient.signAndBroadcast(
    address,
    [msg],
    fee
  )

  assertIsDeliverTxSuccess(result);
  stargateClient.disconnect();
  console.log(
    `⚛️  success`
  );
  console.log(result);

};

main().then(() => {
  console.log('all done')
})