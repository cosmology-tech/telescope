# Osmosis Protobufs 🔭

Typescript Protobuf Messages for Osmosis

# usage

```sh
npm install @cosmonauts/osmosis
```

## Example

```js
import { coin } from '@cosmjs/amino';
import { MsgJoinPool } from '@cosmonauts/osmosis/main/proto/osmosis/gamm/v1beta1/tx';
const msg = MsgJoinPool.fromPartial({
  poolId: '606',
  sender: 'osmo1f4vxvvvvvvvvvv3luuddddddddddcccccccccc',
  shareOutAmount: '101010101',
  tokenInMaxs: [
    coin(
      10248,
      'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
    ),
    coin(
      64837969,
      'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228'
    )
  ]
});
```

## API

Current exports the following messages:

- `MsgExitPool`
- `MsgExitPoolResponse`
- `MsgExitSwapExternAmountOut`
- `MsgExitSwapExternAmountOutResponse`
- `MsgExitSwapShareAmountIn`
- `MsgExitSwapShareAmountInResponse`
- `MsgJoinPool`
- `MsgJoinPoolResponse`
- `MsgJoinSwapExternAmountIn`
- `MsgJoinSwapExternAmountInResponse`
- `MsgJoinSwapShareAmountOut`
- `MsgJoinSwapShareAmountOutResponse`
- `MsgSwapExactAmountIn`
- `MsgSwapExactAmountInResponse`
- `MsgSwapExactAmountOut`
- `MsgSwapExactAmountOutResponse`
- `SwapAmountInRoute`
- `SwapAmountOutRoute`


