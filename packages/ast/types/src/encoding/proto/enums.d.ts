import * as t from '@babel/types';
import { ProtoEnum } from '@osmonauts/types';
export declare const createProtoEnum: (name: string, proto: ProtoEnum) => t.ExportNamedDeclaration;
export declare const createProtoEnumFromJSON: (name: string, proto: ProtoEnum) => t.ExportNamedDeclaration;
export declare const createProtoEnumToJSON: (name: string, proto: ProtoEnum) => t.ExportNamedDeclaration;
