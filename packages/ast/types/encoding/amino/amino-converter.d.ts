import * as t from '@babel/types';
import { ProtoType } from '../types';
import { ProtoRoot, ProtoAny, AminoExceptions } from '../../types';
export interface AminoOptions {
    aminoCasingFn: Function;
    exceptions?: AminoExceptions;
}
interface Context {
    enums: any[];
    types: any[];
}
export interface AminoConverterItemParams {
    root: ProtoRoot;
    context: Context;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const makeAminoConverterItem: ({ root, context, proto, options }: AminoConverterItemParams) => t.ObjectProperty;
interface AminoConverterParams {
    name: string;
    root: ProtoRoot;
    context: Context;
    protos: ProtoAny[];
    options: AminoOptions;
    exceptions?: AminoExceptions;
}
export declare const aminoConverter: ({ name, root, context, protos, options, exceptions }: AminoConverterParams) => t.ExportNamedDeclaration;
export {};
