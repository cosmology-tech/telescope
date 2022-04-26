import { ProtoResolver, ProtoGlobber } from '../src/index'
import dotty from 'dotty';
const globber = new ProtoGlobber(__dirname + '/../__fixtures__/chain1');
const resolver = new ProtoResolver(globber.getDeps());
import { Service } from 'protobufjs';

const logstringify = (obj) => console.log(JSON.stringify(obj, null, 2));

it('Coin', () => {
    const objects = globber.listProtoObjects('cosmos/base/v1beta1/coin.proto');
    expect(objects).toEqual([
        "Coin",
        "DecCoin",
        "IntProto",
        "DecProto",
    ]);
});

it('Msg', () => {
    const nested = globber.getProtoNested('osmosis/gamm/v1beta1/tx.proto');
    const objects = globber.listProtoObjects('osmosis/gamm/v1beta1/tx.proto');
    const services = globber.listServicesObjects('osmosis/gamm/v1beta1/tx.proto');
    expect(services.length).toBe(1);
    expect(services[0].name).toEqual('Msg');
});

it('Query', () => {
    const services = globber.listServicesObjects('osmosis/gamm/v1beta1/query.proto');
    // console.log(services);
    expect(services.length).toBe(1);
    expect(services[0].name).toEqual('Query');
});

it('Query listServices', () => {
    const services = globber.listServices('osmosis/gamm/v1beta1/query.proto');
    expect(services).toMatchSnapshot();
});

it('Msg listServices', () => {
    const services = globber.listServices('osmosis/gamm/v1beta1/tx.proto');
    expect(services).toMatchSnapshot();
});
