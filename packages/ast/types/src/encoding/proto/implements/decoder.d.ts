import * as t from '@babel/types';
import { ProtoRef, TraverseTypeUrlRef } from '@osmonauts/types';
import { ProtoParseContext } from "../../context";
export declare const getInterfaceDecoderName: (str: string) => string;
export declare const createInterfaceDecoder: (context: ProtoParseContext, ref: ProtoRef, interfaceName: string) => t.ExportNamedDeclaration;
export declare const createInterfaceDecoderHelper: (context: ProtoParseContext, functionName: string, typeRefs: TraverseTypeUrlRef[]) => t.ExportNamedDeclaration;
