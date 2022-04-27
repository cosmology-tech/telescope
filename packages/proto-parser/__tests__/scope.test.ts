import { ProtoResolver, ProtoStore } from '../src/index'
import { importLookup, lookup } from '../src/utils';
const store = new ProtoStore(__dirname + '/../__fixtures__/chain1');

it('top-level lookup', () => {
    const ref = store.findProto('cosmos/gov/v1beta1/gov.proto');
    const result = lookup(store, ref.proto, 'VoteOption');
    expect(result).toMatchSnapshot();
});

it('nested lookup', () => {
    const ref = store.findProto('google/api/expr/conformance/v1alpha1/conformance_service.proto');
    const result = lookup(store, ref.proto, 'Severity');
    expect(result).toMatchSnapshot();
});

describe('recursive nested lookup', () => {
    const ref = store.findProto('cosmos/tx/signing/v1beta1/signing.proto');
    it('Multi', () => {
        const Multi = lookup(store, ref.proto, 'Multi');
        expect(Multi).toMatchSnapshot();
        expect(Multi.scope).toMatchSnapshot();
        // TODO get the name! 
        // should be SignatureDescriptor_Data_Multi
    });
    it('Data', () => {
        const Data = lookup(store, ref.proto, 'Data');
        expect(Data).toMatchSnapshot();
        expect(Data.scope).toMatchSnapshot();
        // TODO get the name! 
        // should be SignatureDescriptor_Data
    });
});

describe('imports lookup', () => {
    it('Any', () => {
        // - [ ] google.protobuf.Any -> Any (imported)
        const ref = store.findProto('cosmos/app/v1alpha1/config.proto');
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/cosmos/app/v1alpha1/config.json#L31
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/cosmos/app/v1alpha1/config.ts#L4
        const Any = importLookup(store, ref.proto, 'Any');
        expect(Any.import).toMatchSnapshot();
    });
    it('Empty and NullValue', () => {
        const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
        // - [ ] google.protobuf.Empty -> Empty (imported)
        // - [ ] google.protobuf.NullValue -> NullValue (imported enum)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/google/api/expr/v1alpha1/checked.json#L74-L78
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/google/api/expr/v1alpha1/checked.ts#L5-L6        
    });
    it('Duration', () => {
        const ref = store.findProto('osmosis/claim/v1beta1/params.proto');
        // - [ ] google.protobuf.Duration -> string | Duration (imported from google)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/osmosis/claim/v1beta1/params.json#L32-L38
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/osmosis/claim/v1beta1/params.ts#L5    });
    });
    it('cosmos.base.query.v1beta1.PageResponse', () => {
        const ref = store.findProto('cosmos/authz/v1beta1/query.proto');
        // - [ ] cosmos.base.query.v1beta1.PageResponse -> PageResponse (imported)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/cosmos/authz/v1beta1/query.json#L101
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/cosmos/authz/v1beta1/query.ts#L27
    });
    it('.tendermint.types.BlockID', () => {
        const ref = store.findProto('cosmos/tx/v1beta1/service.proto');
        //     - [ ] .tendermint.types.BlockID -> BlockID (imported from tendermint/types/types)
        //     - [ ] .tendermint.types.Block ->Block (imported from tendermint/types/block)
        //    https://github.com/pyramation/protobuf-example-reference/blob/master/ts/cosmos/tx/v1beta1/service.ts#L7-L8
        //    https://github.com/pyramation/protobuf-example-reference/blob/master/json/cosmos/tx/v1beta1/service.json#L238-L242
    });
    it('google.rpc.Status', () => {
        const ref1 = store.findProto('google/api/expr/v1alpha1/eval.proto');
        const ref2 = store.findProto('google/rpc/status.proto');
        // - [ ] google.rpc.Status -> Status (imported from status rpc nested Status obj)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/google/api/expr/v1alpha1/eval.json#L82
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/google/rpc/status.json#L21
    });
    it('ibc.core.client.v1.Height', () => {
        const ref = store.findProto('ibc/core/channel/v1/query.proto');
        // - [ ] ibc.core.client.v1.Height -> Height (imported from ibc/core/client/v1/client)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/ibc/core/channel/v1/query.json#L234
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/ibc/core/channel/v1/query.ts#L5

    });
});