import { ProtoResolver, ProtoStore } from '../src/index'
import { getObjectName, importLookup, lookup } from '../src/utils';
const store = new ProtoStore(__dirname + '/../__fixtures__/chain1');

it('top-level lookup', () => {
    const ref = store.findProto('cosmos/gov/v1beta1/gov.proto');
    const result = lookup(store, ref.proto, 'VoteOption');
    expect(result).toMatchSnapshot();
    const name = getObjectName('VoteOption', result.scope);
    expect(name).toEqual('VoteOption')

});

it('nested lookup', () => {
    const ref = store.findProto('google/api/expr/conformance/v1alpha1/conformance_service.proto');
    const result = lookup(store, ref.proto, 'Severity');
    expect(result).toMatchSnapshot();
    const name = getObjectName('Severity', result.scope);
    expect(name).toEqual('IssueDetails_Severity')
});

describe('recursive nested lookup', () => {
    const ref = store.findProto('cosmos/tx/signing/v1beta1/signing.proto');
    it('Multi', () => {
        const Multi = lookup(store, ref.proto, 'Multi');
        expect(Multi).toMatchSnapshot();
        expect(Multi.scope).toMatchSnapshot();
        const result = getObjectName('Multi', Multi.scope);
        expect(result).toEqual('SignatureDescriptor_Data_Multi')

    });
    it('Data', () => {
        const Data = lookup(store, ref.proto, 'Data');
        expect(Data).toMatchSnapshot();
        expect(Data.scope).toMatchSnapshot();
        const result = getObjectName('Data', Data.scope);
        expect(result).toEqual('SignatureDescriptor_Data')
    });
});