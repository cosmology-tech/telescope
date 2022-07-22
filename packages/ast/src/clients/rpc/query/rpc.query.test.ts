import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, printCode } from '../../../../test-utils';
import { GenericParseContext } from '../../../encoding';
import { createRpcInterface, createRpcQueryClientClass, createRpcQueryClientInterface } from './query';
const store = new ProtoStore([__dirname + '/../../../../../../__fixtures__/chain1']);
store.traverseAll();



it('RPC Query Client', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    // console.log(JSON.stringify(service, null, 2));
    // printCode(createRpcQueryClientInterface())
    // printCode(createRpcQueryClientClass())
    printCode(createRpcInterface())
});
