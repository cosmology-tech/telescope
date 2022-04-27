import { ProtoResolver, ProtoStore } from '../src/index'
import { importLookup, lookup, protoImportLookup } from '../src/utils';
const store = new ProtoStore(__dirname + '/../__fixtures__/chain1');

describe('imports lookup', () => {
    it('Any', () => {
        // - [x] google.protobuf.Any -> Any (imported)
        const ref = store.findProto('cosmos/app/v1alpha1/config.proto');
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/cosmos/app/v1alpha1/config.json#L31
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/cosmos/app/v1alpha1/config.ts#L4
        const { obj: _obj, ...Any } = importLookup(store, ref.proto, 'Any');
        expect(Any).toMatchSnapshot();
    });
    describe('google/api/expr/v1alpha1/checked', () => {
        const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
        // - [x] Empty -> Empty (imported)
        // - [x] NullValue -> NullValue (imported enum)
        // - [x] google.protobuf.Empty -> Empty (imported)
        // - [x] google.protobuf.NullValue -> NullValue (imported enum)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/google/api/expr/v1alpha1/checked.json#L74-L78
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/google/api/expr/v1alpha1/checked.ts#L5-L6        
        it('Empty', () => {
            const { obj, ...Empty } = importLookup(store, ref.proto, 'Empty');
            expect(obj.name).toEqual('Empty')
            expect(obj.scope).toEqual(['google.protobuf'])
            expect(Empty).toMatchSnapshot();
        });
        it('NullValue', () => {
            const { obj, ...NullValue } = importLookup(store, ref.proto, 'NullValue');
            expect(obj.name).toEqual('NullValue')
            expect(obj.scope).toEqual(['google.protobuf'])
            expect(NullValue).toMatchSnapshot();
        });
        it('google.protobuf.NullValue', () => {
            const { obj, importedName, ...NullValue } = protoImportLookup(store, ref.proto, 'google.protobuf.NullValue');
            expect(obj.name).toEqual('NullValue')
            expect(obj.scope).toEqual(['google.protobuf'])
            expect(importedName).toEqual('google.protobuf.NullValue')
            expect(NullValue).toMatchSnapshot();
        });
        it('google.protobuf.Empty', () => {
            const { obj, importedName, ...Empty } = protoImportLookup(store, ref.proto, 'google.protobuf.Empty');
            expect(obj.name).toEqual('Empty')
            expect(importedName).toEqual('google.protobuf.Empty')
            expect(obj.scope).toEqual(['google.protobuf'])
            expect(Empty).toMatchSnapshot();
        });
    });
    describe('osmosis/claim/v1beta1/params.proto', () => {
        const ref = store.findProto('osmosis/claim/v1beta1/params.proto');
        // - [x] google.protobuf.Duration -> string | Duration (imported from google)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/osmosis/claim/v1beta1/params.json#L32-L38
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/osmosis/claim/v1beta1/params.ts#L5    });
        it('google.protobuf.Duration', () => {
            const { obj, importedName, ...Duration } = protoImportLookup(store, ref.proto, 'google.protobuf.Duration');
            expect(obj.name).toEqual('Duration')
            expect(importedName).toEqual('google.protobuf.Duration')
            expect(obj.scope).toEqual(['google.protobuf'])
            expect(Duration).toMatchSnapshot();
        });
        it('Duration', () => {
            const { obj, ...Duration } = importLookup(store, ref.proto, 'Duration');
            expect(obj.name).toEqual('Duration')
            expect(obj.scope).toEqual(['google.protobuf'])
            expect(Duration).toMatchSnapshot();
        });
    });
    it('cosmos.base.query.v1beta1.PageResponse', () => {
        const ref = store.findProto('cosmos/authz/v1beta1/query.proto');
        // - [x] cosmos.base.query.v1beta1.PageResponse -> PageResponse (imported)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/cosmos/authz/v1beta1/query.json#L101
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/cosmos/authz/v1beta1/query.ts#L27
        const { obj, importedName, ...PageResponse } = protoImportLookup(store, ref.proto, 'cosmos.base.query.v1beta1.PageResponse');
        expect(obj.name).toEqual('PageResponse')
        expect(importedName).toEqual('cosmos.base.query.v1beta1.PageResponse')
        expect(obj.scope).toEqual(['cosmos.base.query.v1beta1'])
        expect(PageResponse).toMatchSnapshot();

    });
    describe('cosmos/tx/v1beta1/service.proto', () => {
        const ref = store.findProto('cosmos/tx/v1beta1/service.proto');
        it('.tendermint.types.BlockID', () => {
            //  - [x] .tendermint.types.BlockID -> BlockID (imported from tendermint/types/types)
            //  - [x] .tendermint.types.Block ->Block (imported from tendermint/types/block)
            // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/cosmos/tx/v1beta1/service.ts#L7-L8
            // https://github.com/pyramation/protobuf-example-reference/blob/master/json/cosmos/tx/v1beta1/service.json#L238-L242
            const { obj, importedName, ...BlockID } = protoImportLookup(store, ref.proto, '.tendermint.types.BlockID');
            expect(obj.name).toEqual('BlockID')
            expect(importedName).toEqual('tendermint.types.BlockID')
            expect(obj.scope).toEqual(['tendermint.types'])
            expect(BlockID).toMatchSnapshot();
        });
        it('.tendermint.types.Block', () => {
            //  - [x] .tendermint.types.BlockID -> BlockID (imported from tendermint/types/types)
            //  - [x] .tendermint.types.Block ->Block (imported from tendermint/types/block)
            // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/cosmos/tx/v1beta1/service.ts#L7-L8
            // https://github.com/pyramation/protobuf-example-reference/blob/master/json/cosmos/tx/v1beta1/service.json#L238-L242
            const { obj, importedName, ...Block } = protoImportLookup(store, ref.proto, '.tendermint.types.Block');
            expect(obj.name).toEqual('Block')
            expect(importedName).toEqual('tendermint.types.Block')
            expect(obj.scope).toEqual(['tendermint.types'])
            expect(Block).toMatchSnapshot();
        });
    })
    it('google.rpc.Status', () => {
        // - [x] google.rpc.Status -> Status (imported from status rpc nested Status obj)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/google/api/expr/v1alpha1/eval.json#L82
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/google/rpc/status.json#L21
        const ref = store.findProto('google/api/expr/v1alpha1/eval.proto');
        const { obj, importedName, ...Status } = protoImportLookup(store, ref.proto, 'google.rpc.Status');
        expect(obj.name).toEqual('Status')
        expect(importedName).toEqual('google.rpc.Status')
        expect(obj.scope).toEqual(['google.rpc'])
        expect(Status).toMatchSnapshot();
    });
    it('ibc.core.client.v1.Height', () => {
        // - [x] ibc.core.client.v1.Height -> Height (imported from ibc/core/client/v1/client)
        // https://github.com/pyramation/protobuf-example-reference/blob/master/json/ibc/core/channel/v1/query.json#L234
        // https://github.com/pyramation/protobuf-example-reference/blob/master/ts/ibc/core/channel/v1/query.ts#L5
        const ref = store.findProto('ibc/core/channel/v1/query.proto');
        const { obj, importedName, ...Height } = protoImportLookup(store, ref.proto, 'ibc.core.client.v1.Height');
        expect(obj.name).toEqual('Height');
        expect(importedName).toEqual('ibc.core.client.v1.Height')
        expect(obj.scope).toEqual(['ibc.core.client.v1'])
        expect(Height).toMatchSnapshot();
    });
});