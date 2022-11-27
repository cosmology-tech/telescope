import { ProtoEnum, ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
import * as t from '@babel/types';
export declare const createSDKType: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createEnumSDKType: (context: ProtoParseContext, name: string, proto: ProtoEnum) => t.ExportNamedDeclaration;
