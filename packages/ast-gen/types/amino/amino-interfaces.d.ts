import * as t from '@babel/types';
import { Enum, Field, Interface, MessageSchema } from '../types';
export declare const makeAminoConverterItem: (schema: MessageSchema, enums: Enum[], interfaces: Interface[], aminoCasingFn: Function) => t.ObjectProperty;
export declare const aminoConverter: (schemas: MessageSchema[], enums: Enum[], interfaces: Interface[], aminoCasingFn: Function) => t.ExportNamedDeclaration;
export declare const renderAminoField: (field: Field, enums: Enum[], interfaces: any[], imports: any[], aminoCasingFn: Function) => any;
export declare const makeAminoTypeInterface: (schema: MessageSchema, enums: Enum[], interfaces: any[], imports: any[], aminoCasingFn: Function) => t.ExportNamedDeclaration;
