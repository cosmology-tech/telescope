import * as t from '@babel/types';
import { GenericParseContext } from '../../../encoding';
export declare const grpcWebClientScaffold: () => t.Statement[];
export declare const grpcFuncArguments: () => t.ObjectPattern[];
export declare const grpcWebNewAwaitImport: (path: string, className: string) => t.NewExpression;
export declare const grpcNestedImportObject: (obj: object, className: string) => any;
export declare const createScopedGrpcWebFactory: (context: GenericParseContext, obj: object, identifier: string) => t.ExportNamedDeclaration;
export declare const createScopedGrpcWebMsgFactory: (obj: object, identifier: string, className: string) => t.ExportNamedDeclaration;
