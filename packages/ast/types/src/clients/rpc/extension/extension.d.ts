import * as t from '@babel/types';
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../../encoding';
export declare const createRpcExtension: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const createRpcInterface: (context: GenericParseContext, service: ProtoService) => t.TSInterfaceDeclaration;
