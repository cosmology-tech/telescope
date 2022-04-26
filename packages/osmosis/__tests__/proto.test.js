import { Field, Enum, Type, Root } from 'protobufjs';
import Long from 'long';
import { MsgJoinPool as TSMsgJoinPool } from '../src/proto/osmosis/gamm/v1beta1/tx';

it('messages', () => {
  const Coin = new Type('Coin')
    .add(new Field('amount', 1, 'string'))
    .add(new Field('denom', 2, 'string'));

  const MsgJoinPool = new Type('MsgJoinPool')
    .add(new Field('sender', 1, 'string'))
    .add(new Field('poolId', 2, 'uint64'))
    .add(new Field('shareOutAmount', 3, 'string'))
    .add(new Field('tokenInMaxs', 4, 'Coin', 'repeated'))
    .add(Coin);

  const result = MsgJoinPool.encode({
    sender: 'asdf',
    poolId: Long.fromString('1'),
    shareOutAmount: '234',
    tokenInMaxs: [
      {
        denom: 'ibc/rules',
        amount: '1'
      }
    ]
  });
  console.log(result);

  const result2 = TSMsgJoinPool.encode({
    sender: 'asdf',
    poolId: Long.fromString('1'),
    shareOutAmount: '234',
    tokenInMaxs: [
      {
        denom: 'ibc/rules',
        amount: '1'
      }
    ]
  });
  expect(result).toEqual(result2);
  // console.log(JSON.stringify(result, null, 2));
  // console.log(JSON.stringify(result2, null, 2));
});
