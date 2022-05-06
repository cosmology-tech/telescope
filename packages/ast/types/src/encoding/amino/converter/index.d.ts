import * as t from '@babel/types';
import { ProtoType } from '../../proto/types';
import { ProtoRoot } from '@osmonauts/proto-parser';
import { AminoOptions } from '../types';
import { ParseContext } from '../../context';
interface AminoConverterItemParams {
    root: ProtoRoot;
    context: ParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const makeAminoConverterItem: ({ root, context, proto, options }: AminoConverterItemParams) => t.ObjectProperty;
interface AminoConverterParams {
    name: string;
    root: ProtoRoot;
    context: ParseContext;
    protos: ProtoType[];
    options: AminoOptions;
}
export declare const aminoConverter: ({ name, root, context, protos, options }: AminoConverterParams) => t.ExportNamedDeclaration;
export {};
