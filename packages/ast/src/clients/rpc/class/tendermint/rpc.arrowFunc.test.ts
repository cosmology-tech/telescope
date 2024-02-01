import { traverse } from '@subql/x-cosmology-proto-parser'
import { getNestedProto } from '@subql/x-cosmology-utils'
import { ProtoService } from '@subql/x-cosmology-types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createRpcInterface, createRpcClientClass, createRpcClientInterface } from './rpc';
const store = getTestProtoStore({
    classesUseArrowFunctions: true
});
store.traverseAll();

it('RPC Query Client', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, store.options);
    expectCode(createRpcClientInterface(context, service))
    expectCode(createRpcClientClass(context, service))
    expectCode(createRpcInterface(context, service))
});
