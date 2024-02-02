import * as t from '@babel/types';
import { ProtoType } from '@subql/x-cosmology-types';
import { ProtoParseContext } from './context';
export declare const createObjectWithMethods: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createRegisterObject: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExpressionStatement;
export declare const createRegisterAminoProtoMapping: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExpressionStatement;
