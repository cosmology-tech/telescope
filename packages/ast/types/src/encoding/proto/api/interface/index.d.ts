import * as t from '@babel/types';
import { ProtoField, ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../../context';
export interface RenderApiField {
    context: ProtoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    isOptional: boolean;
}
export declare const renderApiField: ({ context, field, currentProtoPath, isOptional }: RenderApiField) => any;
export declare const makeApiInterface: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExportNamedDeclaration;
