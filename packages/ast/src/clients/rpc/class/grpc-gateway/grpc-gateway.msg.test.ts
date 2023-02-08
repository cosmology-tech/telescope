import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createGRPCGatewayMsgClass } from './grpc-gateway.msg';

const store = getTestProtoStore();
store.traverseAll();

it('GRPC-Gateway Msg Client', () => {
    const ref = store.findProto('cosmos/bank/v1beta1/tx.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Msg;
    const context = new GenericParseContext(ref, store, store.options);
    expectCode(createGRPCGatewayMsgClass(context, service))
});


// use static in interface declaration: 
// https://stackoverflow.com/questions/13955157/how-to-define-static-property-in-typescript-interface