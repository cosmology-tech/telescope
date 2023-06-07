import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createGrpcWebQueryInterface, createGrpcWebQueryClass } from './grpc-web.query';
import { GetDesc, getMethodDesc } from './grpc-web.msg';
const store = getTestProtoStore();
store.traverseAll();

it('test gRPC-web Query Client', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/query.proto')
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, store.options);
    
    expectCode(createGrpcWebQueryInterface(context, service));
    expectCode(createGrpcWebQueryClass(context, service));
})

it('test Osmosis gRPC-web Query Client', () => {
    const ref = store.findProto('osmosis/epochs/query.proto')
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, store.options);
    expectCode(GetDesc(context, service)); 
    const Desces = getMethodDesc(context, service);
    for (let i = 0; i < Desces.length; i++) {
        const element = Desces[i];
        expectCode(element); 
    }
    
    expectCode(createGrpcWebQueryInterface(context, service));
    expectCode(createGrpcWebQueryClass(context, service));
})