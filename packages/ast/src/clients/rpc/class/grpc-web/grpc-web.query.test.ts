import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createGrpcWebQueryInterface, createGrpcWebQueryClass } from './grpc-web.query';
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