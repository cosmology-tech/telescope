import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions, ProtoService } from '@osmonauts/types';
import { getGenericParseContext, expectCode, getTestProtoStore, printCode } from '../../../test-utils/';
import { createWebSocketClient } from './websocket'

it('GRPC-Gateway Msg Client', () => {
    const context = getGenericParseContext();
    expectCode(createWebSocketClient(context));
});