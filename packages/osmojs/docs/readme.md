# OsmoJS

## usage

```sh
npm install osmojs
```

### Manually registering types

```js
import {
    AminoTypes,
    SigningStargateClient
} from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing'
import { osmosis } from 'osmojs';

export const getSigningOsmosisClient = async ({ rpcEndpoint, signer }: { rpcEndpoint: string, signer: OfflineSigner }) => {
  // registry
  const registry = new Registry(defaultRegistryTypes);

  // aminotypes
  const aminoTypes = new AminoTypes({
    ...osmosis.gamm.v1beta1.AminoConverter,
    ...osmosis.lockup.AminoConverter,
    ...osmosis.superfluid.AminoConverter
  });

  osmosis.gamm.v1beta1.load(registry);
  osmosis.lockup.load(registry);
  osmosis.superfluid.load(registry);

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    { registry, aminoTypes }
  );

  return client;
};
```

### working with messages

```js
import { osmosis, cosmos } from 'osmojs';

export const messages = {
  // osmosis use withTypeUrl
  ...osmosis.gamm.v1beta1.MessageComposer.withTypeUrl,
  ...osmosis.superfluid.MessageComposer.withTypeUrl,
  ...osmosis.lockup.MessageComposer.withTypeUrl,

  // cosmos messages use fromPartial
  ...cosmos.distribution.v1beta1.MessageComposer.fromPartial,
  ...cosmos.bank.v1beta1.MessageComposer.fromPartial,
  ...cosmos.staking.v1beta1.MessageComposer.fromPartial,
  ...cosmos.gov.v1beta1.MessageComposer.fromPartial
};

const stargateClient = await SigningStargateClient.connectWithSigner(
  rpcEndpoint,
  signer // keplr or cosmjs
);

const withdrawMsg = messages.withdrawDelegatorReward({
  delegatorAddress,
  validatorAddress
});

const delegateMsg = messages.delegate({
  delegatorAddress,
  validatorAddress,
  amount: {
    amount,
    denom
  }
});

const voteMsg = messages.vote({
  voter,
  proposalId,
  option
});

// now broadcast your messages
stargateClient.signAndBroadcast(address, [withdrawMsg], fee, '').then(
  (result) => {
    try {
      assertIsDeliverTxSuccess(result);
      stargateClient.disconnect();
    } catch (error) {
      console.log(error);
    }
  },
  (error) => {
    console.log(error);
  }
);
```
