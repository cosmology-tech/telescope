import { GenericParseContext } from '../../../../encoding';
import { ProtoService } from '@osmonauts/types';
import * as t from '@babel/types';
export declare const createGrpcWebMsgInterface: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const createGrpcWebMsgClass: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
