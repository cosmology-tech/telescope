import { getTestProtoStore } from '../test-utils';
const store = getTestProtoStore();

it('Coin', () => {
    const Coin = store.findProtoObject('cosmos/base/v1beta1/coin.proto', 'Coin');
    expect(Coin).toMatchSnapshot();
});

it('DecCoin', () => {
    const DeCoin = store.findProtoObject('cosmos/base/v1beta1/coin.proto', 'DecCoin');
    expect(DeCoin).toMatchSnapshot();
});

it('IntProto', () => {
    const IntProto = store.findProtoObject('cosmos/base/v1beta1/coin.proto', 'IntProto');
    expect(IntProto).toMatchSnapshot();
});

it('DecProto', () => {
    const DecProto = store.findProtoObject('cosmos/base/v1beta1/coin.proto', 'DecProto');
    expect(DecProto).toMatchSnapshot();
});

it('MsgExitPool', () => {
    const MsgExitPool = store.findProtoObject('osmosis/gamm/v1beta1/tx.proto', 'MsgExitPool');
    expect(MsgExitPool).toMatchSnapshot();
});

