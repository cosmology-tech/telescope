import { getServices } from '../src/utils';
import { getTestProtoStore } from '../test-utils';
const store = getTestProtoStore();

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

it('ReflectionService', () => {
    const query = store.findProto('cosmos/base/reflection/v1beta1/reflection.proto');
    const services = getServices(query.proto);
    expect(services.length).toBe(1);
    expect(services[0].name).toEqual('ReflectionService');
});

it('ABCIApplication', () => {
    const query = store.findProto('tendermint/abci/types.proto');
    const services = getServices(query.proto);
    expect(services.length).toBe(1);
    expect(services[0].name).toEqual('ABCIApplication');
});
