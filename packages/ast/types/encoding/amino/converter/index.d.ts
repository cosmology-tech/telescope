import * as t from '@babel/types';
import { ProtoType } from '../../types';
import { ProtoRoot } from '@osmonauts/proto-parser';
import { AminoParseContext, AminoOptions } from '../types';
interface AminoConverterItemParams {
    root: ProtoRoot;
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const makeAminoConverterItem: ({ root, context, proto, options }: AminoConverterItemParams) => t.ObjectProperty;
interface AminoConverterParams {
    name: string;
    root: ProtoRoot;
    context: AminoParseContext;
    protos: ProtoType[];
    options: AminoOptions;
}
export declare const aminoConverter: ({ name, root, context, protos, options }: AminoConverterParams) => t.ExportNamedDeclaration;
export {};
