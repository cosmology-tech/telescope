import * as t from '@babel/types';
import { GenericParseContext } from '../../../encoding';
export declare const grpcWebNewAwaitImport: (path: string, className: string) => t.CallExpression;
export declare const createScopedGrpcWebFactory: (context: GenericParseContext, obj: object, identifier: string) => t.ExportNamedDeclaration;
