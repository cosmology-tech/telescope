import { GenericParseContext } from '../../../../../encoding';
import { ProtoServiceMethod } from '@osmonauts/types';
import * as t from '@babel/types';
export declare const initRequest: t.Identifier;
export declare const grpcGatewayMethodDefinitionNoBody: (context: GenericParseContext, name: string, msg: string, svc: ProtoServiceMethod, packageImport: string) => {
    classMethod: t.ClassMethod;
    fetchArgs: any[];
};
