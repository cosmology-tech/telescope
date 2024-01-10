import { traverse } from '@cosmology/proto-parser'
import { getNestedProto } from '@cosmology/utils'
import { defaultTelescopeOptions, ProtoService } from '@cosmology/types';
import { expectCode, getTestProtoStore } from '../../../../test-utils';
import { GenericParseContext } from '../../../encoding';
import { createRpcClientImpl, createRpcMsgExtension, createRpcQueryExtension } from './extension';
const store = getTestProtoStore();
store.traverseAll();

it('createRpcQueryExtension', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createRpcQueryExtension(context, service))
});

it('createRpcMsgExtension', () => {
  const ref = store.findProto('cosmos/auth/v1beta1/query.proto');
  const res = traverse(store, ref);
  const service: ProtoService = getNestedProto(res).Query;
  const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
  expectCode(createRpcMsgExtension(context, 'getCosmosTxRpc'))
});

it('createRpcClientImpl', () => {
  const ref = store.findProto('cosmos/auth/v1beta1/query.proto');
  const res = traverse(store, ref);
  const service: ProtoService = getNestedProto(res).Query;
  const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
  expectCode(createRpcClientImpl(context, service))
});
