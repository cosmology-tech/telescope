import * as t from '@babel/types';
import { ProtoType } from './types';
import { ProtoParseContext } from '../context';
export declare const createProtoObjectWithMethods: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
