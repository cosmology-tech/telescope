import * as t from '@babel/types';
import { ProtoType, ProtoEnum } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
export declare const createAminoType: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createAminoTypeType: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createEnumAminoType: (context: ProtoParseContext, name: string, proto: ProtoEnum) => t.ExportNamedDeclaration;
