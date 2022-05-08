import * as t from '@babel/types';
import { AminoParseContext } from '../../context';
import { ProtoField, ProtoType } from '../../proto/types';
export interface RenderAminoField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
}
export declare const renderAminoField: ({ context, field, currentProtoPath }: RenderAminoField) => any;
export interface MakeAminoTypeInterface {
    context: AminoParseContext;
    proto: ProtoType;
}
export declare const makeAminoTypeInterface: ({ context, proto }: MakeAminoTypeInterface) => t.ExportNamedDeclaration;
