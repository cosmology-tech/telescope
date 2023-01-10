import { getNestedProto } from '../../src/utils';
import { getTestProtoStore } from '../../test-utils';
const store = getTestProtoStore();

it('Coin', () => {
    const objects = store.findProto('cosmos/base/v1beta1/coin.proto');
    expect(Object.keys(getNestedProto(objects.proto))).toEqual([
        "Coin",
        "DecCoin",
        "IntProto",
        "DecProto",
    ]);
});
