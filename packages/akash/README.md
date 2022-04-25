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

## Disclaimer

AS DESCRIBED IN THE OSMOSIS LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating Telescope will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Telescope code or Telescope CLI, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
