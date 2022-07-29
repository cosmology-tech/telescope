import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, printCode } from '../../../../test-utils';
import { GenericParseContext } from '../../../encoding';
import { createRpcInterface, createRpcClientClass, createRpcClientInterface } from './rpc';
const store = new ProtoStore([__dirname + '/../../../../../../__fixtures__/chain1']);
store.traverseAll();

it('RPC Service Client', () => {
    const ref = store.findProto('cosmos/base/tendermint/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Service;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createRpcClientInterface(context, service))
    expectCode(createRpcClientClass(context, service))
    expectCode(createRpcInterface(context, service))
});
