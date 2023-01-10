import {
  baseUnitsToDisplayUnitsByDenom,
  gasEstimation,
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
    withdrawDelegatorReward
  } = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

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

  const delegations = await client.cosmos.staking.v1beta1.delegatorDelegations({
    delegatorAddr: address
  });

  if (!delegations.delegationResponses || !delegations.delegationResponses.length) {
    console.log('no delegations. Exiting.');
    return;
  }

  const messagesToClaim = [];
  let totalClaimable = new Dec(0);

  const rewards = await client.cosmos.distribution.v1beta1.delegationTotalRewards({
    delegatorAddress: address
  });

  if (rewards && rewards.rewards && rewards.rewards.length) {
    rewards.rewards.forEach((data) => {
      const { validatorAddress, reward } = data;
      if (reward && reward.length) {
        const rewardWeWant = reward.find((r) => r.denom === 'uosmo');
        if (!rewardWeWant) return;
        // https://github.com/osmosis-labs/telescope/issues/247
        totalClaimable = totalClaimable.add(new Dec(decodeCosmosSdkDecFromProto(rewardWeWant.amount).toString()));
        messagesToClaim.push(
          withdrawDelegatorReward({
            delegatorAddress: address,
            validatorAddress
          })
        );
      }
    });
  }

  if (!messagesToClaim.length) {
    console.log('no rewards. Exiting.');
    return;
  }

  const stargateClient = await getSigningCosmosClient({
    rpcEndpoint: RPC_ENDPOINT,
    signer
  });

  const fee = await gasEstimation(
    'uosmo',
    // @ts-ignore
    stargateClient,
    address,
    messagesToClaim,
    '',
    1.3
  );

  const totalClaimableInDisplayUnits = new Dec(baseUnitsToDisplayUnitsByDenom(
    'uosmo',
    totalClaimable.toString()
  ));


  console.log(
    `${totalClaimableInDisplayUnits} available, starting claim process...`
  );

  const result = await stargateClient.signAndBroadcast(
    address,
    messagesToClaim,
    fee
  )

  assertIsDeliverTxSuccess(result);
  stargateClient.disconnect();
  console.log(
    `⚛️  success in claiming ${totalClaimableInDisplayUnits.toString()} rewards`
  );
  console.log(result);


};

main().then(() => {
  console.log('all done')
})