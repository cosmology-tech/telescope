import * as t from '@babel/types';
import { ProtoType } from '@cosmology/types';
import { ProtoParseContext } from './context';
export declare const createObjectWithMethods: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createRegisterObject: (name: string) => t.CallExpression;
