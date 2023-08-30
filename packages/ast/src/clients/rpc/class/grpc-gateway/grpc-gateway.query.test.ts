import { traverse } from '@cosmology/proto-parser'
import { getNestedProto } from '@cosmology/utils'
import { defaultTelescopeOptions, ProtoService } from '@cosmology/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils';
import { GenericParseContext } from '../../../../encoding';
import { createGRPCGatewayQueryClass, createGRPCGatewayWrapperClass } from './grpc-gateway.query';

const store = getTestProtoStore();
store.traverseAll();

it('GRPC-Gateway Query Client', () => {
    const ref = store.findProto('cosmos/bank/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, store.options);
    expectCode(createGRPCGatewayQueryClass(context, service));
    expectCode(createGRPCGatewayWrapperClass(context, service));
});

it('GRPC-Gateway Service Client', () => {
    const ref = store.findProto('cosmos/tx/v1beta1/service.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Service;
    const context = new GenericParseContext(ref, store, store.options);
    expectCode(createGRPCGatewayQueryClass(context, service));
    expectCode(createGRPCGatewayWrapperClass(context, service));
});

it('GRPC-Gateway Query Client with 2 params', () => {
    const ref = store.findProto('cosmos/staking/v1beta1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, store.options);
    expectCode(createGRPCGatewayQueryClass(context, service));
    expectCode(createGRPCGatewayWrapperClass(context, service));
});