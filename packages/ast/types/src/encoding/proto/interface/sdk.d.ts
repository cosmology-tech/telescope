import * as t from '@babel/types';
import { ProtoEnum, ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
export declare const createSDKType: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createEnumSDKType: (context: ProtoParseContext, name: string, proto: ProtoEnum) => t.ExportNamedDeclaration;
