import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import * as t from '@babel/types';
export declare const grpcGatewayMsgMethodDefinition: (name: string, svc: ProtoServiceMethod, packageImport: string, leadingComments?: t.CommentBlock[]) => t.ClassMethod;
export declare const createGRPCGatewayMsgClass: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
