# Advanced Usage

## programatic usage

```js
import telescope from '@osmonauts/telescope';

// specify proto path and out path
telescope(protoPath, outPath);
```

### Manually registering types

This example is with `osmosis` module in `osmojs`, but it is the same pattern for any module.

#### `@cosmjs/stargate@0.28.4`

```js
import {
    AminoTypes,
    SigningStargateClient
} from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing'
import { osmosis } from 'osmojs';

export const getCustomSigningClient = async ({ rpcEndpoint, signer }: { rpcEndpoint: string, signer: OfflineSigner }) => {
  // registry
  const registry = new Registry(defaultRegistryTypes);

  // aminotypes
  const aminoTypes = new AminoTypes({
    ...osmosis.gamm.v1beta1.AminoConverter,
    ...osmosis.lockup.AminoConverter,
    ...osmosis.superfluid.AminoConverter
  });

  // load the 
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