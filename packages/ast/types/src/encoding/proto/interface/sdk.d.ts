import { ProtoEnum, ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
export declare const createSDKType: (context: ProtoParseContext, name: string, proto: ProtoType) => import("@babel/types").ExportNamedDeclaration;
export declare const createEnumSDKType: (name: string, proto: ProtoEnum) => import("@babel/types").ExportNamedDeclaration;
