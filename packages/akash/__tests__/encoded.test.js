import { coin } from '@cosmjs/amino';
import Long from 'long';
import { MsgJoinPool } from '../src/proto/osmosis/gamm/v1beta1/tx';
import { encoded } from '../src/proto/osmosis/gamm/v1beta1/tx.encoded';
import { osmosis } from '../src/proto';

it('encoded', async () => {
  const msg = encoded.joinPool({
    poolId: Long.fromString('606'),
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
  })

  expect(msg.value instanceof Uint8Array).toBe(true);
  const decoded = MsgJoinPool.decode(msg.value);
  expect(decoded).toMatchSnapshot();

});

it('encoded.scoped', async () => {
  const msg =  osmosis.gamm.v1beta1.encoded.joinPool({
    poolId: Long.fromString('606'),
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
  })

  expect(msg.value instanceof Uint8Array).toBe(true);
  const decoded = MsgJoinPool.decode(msg.value);
  expect(decoded).toMatchSnapshot();

});
