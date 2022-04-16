import * as t from '@babel/types';
import { Enum, Field, Interface, MessageSchema } from '../types';
export declare const makeAminoConverterItem: (schema: MessageSchema, enums: Enum[], interfaces: Interface[]) => t.ObjectProperty;
export declare const aminoConverter: (schemas: MessageSchema[], enums: Enum[], interfaces: Interface[]) => t.ExportNamedDeclaration;
export declare const renderAminoField: (field: Field, enums: Enum[], interfaces?: any[], imports?: any[]) => any;
export declare const makeAminoTypeInterface: (schema: MessageSchema, enums: Enum[], interfaces?: any[], imports?: any[]) => t.ExportNamedDeclaration;
