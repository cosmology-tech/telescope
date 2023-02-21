import { GenericParseContext } from '../../../../encoding';
import { ProtoService } from '@osmonauts/types';
import * as t from '@babel/types';
export declare const createGrpcWebMsgInterface: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const createGrpcWebMsgClass: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const getMethodDesc: (context: GenericParseContext, service: ProtoService) => any[];
export declare const GetDesc: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const grpcWebRpcInterface: () => t.ExportNamedDeclaration;
export declare const getGrpcWebImpl: (context: GenericParseContext) => t.ExportNamedDeclaration;
