import * as t from '@babel/types';
import { AminoOptions } from '../types';
import { ProtoField } from '../../types';
import { RenderAminoField } from '.';
export declare const aminoInterface: {
    defaultType(field: ProtoField, options: AminoOptions, ast: any): t.TSPropertySignature;
    long(field: ProtoField, options: AminoOptions): t.TSPropertySignature;
    height(field: ProtoField, options: AminoOptions): t.TSPropertySignature;
    enum(field: ProtoField, options: AminoOptions): t.TSPropertySignature;
    enumArray(field: ProtoField, options: AminoOptions): t.TSPropertySignature;
    type({ context, field, options }: RenderAminoField): any;
    typeArray({ context, field, options }: RenderAminoField): any;
    array(field: ProtoField, options: AminoOptions): t.TSPropertySignature;
};
