import { createProtoType, createCreateProtoType } from './interface';
import authz from '../../../../../__fixtures__/proto-json/cosmos/authz/v1beta1/authz.json';
import gamm from '../../../../../__fixtures__/proto-json/osmosis/gamm/v1beta1/tx.json';
import types from '../../../../../__fixtures__/proto-json/tendermint/abci/types.json';
import types_tendermint from '../../../../../__fixtures__/proto-json/tendermint/types/types.json'

import { traverse, getNestedProto } from '@cosmology/proto-parser'
import { defaultTelescopeOptions } from '@cosmology/types'
import { ProtoParseContext } from '../context';
import { getTestProtoStore, expectCode, printCode } from '../../../test-utils';
import deepmerge from 'deepmerge';

const store = getTestProtoStore();
store.traverseAll();

it('ListValue', async () => {
    const ref = store.findProto('google/protobuf/struct.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createProtoType(context, 'ListValue', getNestedProto(ref.traversed).ListValue));
});

it('Struct', async () => {
    const ref = store.findProto('google/protobuf/struct.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createProtoType(context, 'Struct', getNestedProto(ref.traversed).Struct));
});

describe('oneofs', () => {
    it('Value', async () => {
        const ref = store.findProto('google/protobuf/struct.proto');
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createProtoType(context, 'Value', getNestedProto(ref.traversed).Value));
    });
});

it('authz', async () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    expectCode(createProtoType(context, 'authz',
        getNestedProto(authz).Grant
    ));
});

describe('createCreateProtoType', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    it('Grant', () => {
        expectCode(createCreateProtoType(
            context,
            'Grant',
            getNestedProto(authz).Grant
        ));
    });
    it('MsgJoinPool', () => {
        expectCode(createCreateProtoType(
            context,
            'MsgJoinPool',
            getNestedProto(gamm).MsgJoinPool
        ));
    });
});
//create type for pubKey
describe('createCreateProtoType', () => {
    const ref = store.findProto('tendermint/abci/types.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    it('ValidatorUpdate', () => {
        expectCode(createCreateProtoType(
            context,
            'ValidatorUpdate',
            getNestedProto(types).ValidatorUpdate
        ));
    });
});
//create type for Tendermint block header
describe('createCreateProtoType', () => {
    const ref = store.findProto('tendermint/types/types.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    it('Header', () => {
        expectCode(createCreateProtoType(
            context,
            'Header',
            getNestedProto(types_tendermint).Header
        ));
    });
});

describe('createCreateProtoType orginal logic', () => {
  const ref = store.findProto('tendermint/types/types.proto');

  const options = deepmerge(defaultTelescopeOptions, {
    prototypes: {
      typingsFormat:{
        setDefaultEnumToUnrecognized: false,
        setDefaultCustomTypesToUndefined: true,
      }
    }
  });

  const context = new ProtoParseContext(ref, store, options);

  it('Header', () => {
      expectCode(createCreateProtoType(
          context,
          'Header',
          getNestedProto(types_tendermint).Header
      ));
  });
});

describe('traversed', () => {
    it('osmosis/claim/v1beta1/params', async () => {
        const ref = store.findProto('osmosis/claim/v1beta1/params.proto');
        const res = traverse(store, ref);
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createProtoType(context, 'Params', res.root.nested.osmosis.nested.claim.nested.v1beta1.nested.Params));
    });
    it('cosmos/app/v1alpha1/config', async () => {
        const ref = store.findProto('cosmos/app/v1alpha1/config.proto');
        const res = traverse(store, ref);
        const node = getNestedProto(res)
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createProtoType(context, 'Config', node.Config));
        expectCode(createProtoType(context, 'ModuleConfig', node.ModuleConfig));
    });
    it('google/api/expr/v1alpha1/checked', async () => {
        const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
        const res = traverse(store, ref);
        const node = getNestedProto(res)
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        // console.log(JSON.stringify(res, null, 2))
        expectCode(createProtoType(context, 'CheckedExpr', node.CheckedExpr));
        expectCode(createProtoType(context, 'Reference', node.Reference));
    });
});
