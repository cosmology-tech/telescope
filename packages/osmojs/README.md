# Osmosis Telescope 🔭
# usage

```sh
npm install osmojs
```

## Osmosis Stargate Client

Use `getSigningOsmosisClient` to get your `SigningStargateClient`, with the Osmosis protobuf messages full-loaded:

```js
import { getSigningOsmosisClient } from 'osmojs';
import { SigningStargateClient } from "@cosmjs/stargate";

const client: SigningStargateClient = await getSigningOsmosisClient({
  rpcEndpoint: rpcEndpoint,
  signer // OfflineSigner
});
```

## Composing Messages

NOTE: this API is in beta, and will be changing over the coming weeks. Please send us feedback if you have ideas!

```js
import * as gamm from 'osmojs/main/proto/osmosis/gamm/v1beta1/tx.registry';
import { coin } from '@cosmjs/amino';
const { swapExactAmountIn } = gamm.MessageComposer.withTypeUrl;

const msg = swapExactAmountIn({
  sender,
  routes,
  tokenIn: coin(amount, denom),
  tokenOutMinAmount
});
```

## Advanced Usage

[documentation](docs/readme.md)

## Disclaimer

AS DESCRIBED IN THE OSMOSIS LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating Telescope will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Telescope code or Telescope CLI, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
