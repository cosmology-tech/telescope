import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createGRPCWebClass } from './grpc-web';
const store = getTestProtoStore();
store.traverseAll();

it('test gRPC-web Msg Client', () => {
    const ref = store.findProto('cosmos/bank/v1beta1/tx.proto')
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Msg;
    const context = new GenericParseContext(ref, store, store.options);
    printCode(createGRPCWebClass(context, service));
})