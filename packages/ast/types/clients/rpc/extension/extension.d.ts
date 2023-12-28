import * as t from '@babel/types';
import { ProtoService } from '@cosmology/types';
import { GenericParseContext } from '../../../encoding';
export declare const createRpcQueryExtension: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const createRpcClientImpl: (context: GenericParseContext, service: ProtoService, functionName?: string) => t.ExportNamedDeclaration;
