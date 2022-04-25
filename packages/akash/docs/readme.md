# Osmosis Telescope 🔭

# usage

```sh
npm install @osmonauts/osmosis
```

## Manually registering types

```js
import {
    AminoTypes,
    SigningStargateClient
} from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing'
import { osmosis } from '@osmonauts/osmosis';

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
