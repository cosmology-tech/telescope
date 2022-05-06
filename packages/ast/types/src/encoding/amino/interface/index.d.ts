import * as t from '@babel/types';
import { ParseContext } from '../../context';
import { ProtoField, ProtoType } from '../../proto/types';
import { AminoOptions } from '../types';
export interface RenderAminoField {
    context: ParseContext;
    field: ProtoField;
    currentProtoPath: string;
    options: AminoOptions;
}
export declare const renderAminoField: ({ context, field, currentProtoPath, options }: RenderAminoField) => any;
export interface MakeAminoTypeInterface {
    context: ParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const makeAminoTypeInterface: ({ context, proto, options }: MakeAminoTypeInterface) => t.ExportNamedDeclaration;
