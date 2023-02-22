import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createGrpcWebMsgInterface, createGrpcWebMsgClass, GetDesc, getMethodDesc, grpcWebRpcInterface, getGrpcWebImpl } from './grpc-web.msg';
const store = getTestProtoStore();

store.traverseAll();

it('test gRPC-web Msg Client', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/tx.proto')
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Msg;
    const context = new GenericParseContext(ref, store, store.options);

    expectCode(createGrpcWebMsgInterface(context, service));
    expectCode(createGrpcWebMsgClass(context, service));
    expectCode(GetDesc(context, service)); 
    const Desces = getMethodDesc(context, service);
    for (let i = 0; i < Desces.length; i++) {
        const element = Desces[i];
        expectCode(element); 
    }

    expectCode(getGrpcWebImpl(context));
})
