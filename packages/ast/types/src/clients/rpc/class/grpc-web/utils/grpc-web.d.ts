import * as t from '@babel/types';
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../../../../encoding';
export declare const metadata: t.Identifier;
export declare const bindThis: (name: string) => t.ExpressionStatement;
export declare const makeComment: (comment: string) => {
    type: string;
    value: string;
}[];
export declare const getRpcClassName: (service: ProtoService) => string;
export declare const GetDesc: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const getMethodDesc: (context: GenericParseContext, service: ProtoService, methodName: string) => t.ExportNamedDeclaration;
