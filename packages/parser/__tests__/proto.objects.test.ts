import { ProtoResolver, ProtoStore } from '../src/index'
import { getNestedProto, getServices } from '../src/utils';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

it('Coin', () => {
    const objects = store.findProto('cosmos/base/v1beta1/coin.proto');
    expect(Object.keys(getNestedProto(objects.proto))).toEqual([
        "Coin",
        "DecCoin",
        "IntProto",
        "DecProto",
    ]);
});

it('Msg', () => {
    const tx = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const services = getServices(tx.proto);
    expect(services.length).toBe(1);
    expect(services[0].name).toEqual('Msg');
});

it('Query', () => {
    const query = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const services = getServices(query.proto);
    expect(services.length).toBe(1);
    expect(services[0].name).toEqual('Query');
});
