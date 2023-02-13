import * as t from '@babel/types';
import { ProtoRef, TraverseTypeUrlRef } from '@osmonauts/types';
import { ProtoParseContext } from "../../context";
export declare const getInterfaceToAminoName: (str: string) => string;
export declare const createInterfaceToAmino: (context: ProtoParseContext, ref: ProtoRef, interfaceName: string) => t.ExportNamedDeclaration;
export declare const createInterfaceToAminoHelper: (context: ProtoParseContext, functionName: string, typeRefs: TraverseTypeUrlRef[]) => t.ExportNamedDeclaration;
