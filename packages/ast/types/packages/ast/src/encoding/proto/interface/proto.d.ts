import * as t from '@babel/types';
import { ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
import { TelescopeBaseTypes } from '../../types';
export declare const createProtoType: (context: ProtoParseContext, name: string, proto: ProtoType, type?: TelescopeBaseTypes) => t.ExportNamedDeclaration;
export declare const createProtoTypeType: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createProtoInterfaceEncodedType: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createCreateProtoType: (context: ProtoParseContext, name: string, proto: ProtoType) => t.FunctionDeclaration;
