import { ProtoResolver, ProtoGlobber } from '../src/index'
import dotty from 'dotty';
const globber = new ProtoGlobber(__dirname + '/../__fixtures__/chain1');
const resolver = new ProtoResolver(globber.getDeps());

const logstringify = (obj) => console.log(JSON.stringify(obj, null, 2));

it('Coin', () => {
    const Coin = globber.getProtoNestedObjectSchema('cosmos/base/v1beta1/coin.proto', 'Coin');
    expect(Coin).toMatchSnapshot();
});

it('DecCoin', () => {
    const DeCoin = globber.getProtoNestedObjectSchema('cosmos/base/v1beta1/coin.proto', 'DecCoin');
    expect(DeCoin).toMatchSnapshot();
});

it('IntProto', () => {
    const IntProto = globber.getProtoNestedObjectSchema('cosmos/base/v1beta1/coin.proto', 'IntProto');
    expect(IntProto).toMatchSnapshot();
});

it('DecProto', () => {
    const DecProto = globber.getProtoNestedObjectSchema('cosmos/base/v1beta1/coin.proto', 'DecProto');
    expect(DecProto).toMatchSnapshot();
});
