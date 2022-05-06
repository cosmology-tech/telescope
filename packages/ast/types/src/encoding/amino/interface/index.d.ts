import * as t from '@babel/types';
import { AminoParseContext } from '../../context';
import { ProtoField, ProtoType } from '../../proto/types';
import { AminoOptions } from '../types';
export interface RenderAminoField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    options: AminoOptions;
}
export declare const renderAminoField: ({ context, field, currentProtoPath, options }: RenderAminoField) => any;
export interface MakeAminoTypeInterface {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const makeAminoTypeInterface: ({ context, proto, options }: MakeAminoTypeInterface) => t.ExportNamedDeclaration;
