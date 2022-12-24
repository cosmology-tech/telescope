import * as t from '@babel/types';
import { ProtoType, ProtoEnum } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
import { CreateProtoTypeOptions } from '../../types';
export declare const createAminoTypeOptionsDefaults: CreateProtoTypeOptions;
export declare const createAminoType: (context: ProtoParseContext, name: string, proto: ProtoType, options?: CreateProtoTypeOptions) => t.ExportNamedDeclaration;
export declare const createAminoTypeType: (context: ProtoParseContext, name: string, proto: ProtoType, options?: CreateProtoTypeOptions) => t.ExportNamedDeclaration;
export declare const createEnumAminoType: (context: ProtoParseContext, name: string, proto: ProtoEnum) => t.ExportNamedDeclaration;
