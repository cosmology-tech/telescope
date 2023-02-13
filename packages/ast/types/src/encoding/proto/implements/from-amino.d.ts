import * as t from '@babel/types';
import { ProtoRef, TraverseTypeUrlRef } from '@osmonauts/types';
import { ProtoParseContext } from "../../context";
export declare const getInterfaceFromAminoName: (str: string) => string;
export declare const createInterfaceFromAmino: (context: ProtoParseContext, ref: ProtoRef, interfaceName: string) => t.ExportNamedDeclaration;
export declare const createInterfaceFromAminoHelper: (context: ProtoParseContext, functionName: string, typeRefs: TraverseTypeUrlRef[]) => t.ExportNamedDeclaration;
