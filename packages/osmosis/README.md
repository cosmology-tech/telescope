# Osmosis Telescope 🔭
# usage

```sh
npm install @osmonauts/osmosis
```

## Osmosis Stargate Client

Use `getSigningOsmosisClient` to get your `SigningStargateClient`, with the Osmosis protobuf messages full-loaded:

```js
import { getSigningOsmosisClient } from '@osmonauts/osmosis';
import { SigningStargateClient } from "@cosmjs/stargate";

const client: SigningStargateClient = await getSigningOsmosisClient({
  rpcEndpoint: rpcEndpoint,
  signer // OfflineSigner
});
```

## Composing Messages

```js
import { osmosis } from '@osmonauts/osmosis';
import { coin } from '@cosmjs/amino';

const msg = osmosis.gamm.v1beta1.json.swapExactAmountIn({
  sender,
  routes,
  tokenIn: coin(amount, denom),
  tokenOutMinAmount
});
```

## Advanced Usage

[documentation](./docs/readme.md)
