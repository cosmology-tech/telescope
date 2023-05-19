import * as t from '@babel/types';
import { GenericParseContext } from '../../../encoding';
export declare const grpcGatewayClientScaffold: () => t.Statement[];
export declare const createScopedGrpcGatewayFactory: (context: GenericParseContext, obj: object, identifier: string) => t.ExportNamedDeclaration;
