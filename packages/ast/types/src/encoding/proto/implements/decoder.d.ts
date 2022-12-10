import * as t from '@babel/types';
import { ProtoRef } from '@osmonauts/types';
import { ProtoParseContext } from "../../context";
export declare const createInterfaceDecoder: (context: ProtoParseContext, ref: ProtoRef, interfaceName: string) => t.ExportNamedDeclaration;
export declare const createInterfaceDecoderHelper: (context: ProtoParseContext, decoder: string, typeHash: Record<string, string>) => t.ExportNamedDeclaration;
