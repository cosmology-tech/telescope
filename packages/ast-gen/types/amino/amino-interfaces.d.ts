import * as t from '@babel/types';
import { Enum, Field, Interface, MessageSchema, AminoExceptions } from '../types';
export declare const makeAminoConverterItem: ({ schema, enums, interfaces, aminoCasingFn, exceptions }: {
    schema: MessageSchema;
    enums: Enum[];
    interfaces: Interface[];
    aminoCasingFn: Function;
    exceptions?: AminoExceptions;
}) => t.ObjectProperty;
export declare const aminoConverter: ({ schemata, enums, interfaces, aminoCasingFn }: {
    schemata: MessageSchema[];
    enums: Enum[];
    interfaces: Interface[];
    aminoCasingFn: Function;
}) => t.ExportNamedDeclaration;
export declare const renderAminoField: ({ field, enums, interfaces, imports, aminoCasingFn }: {
    field: Field;
    enums: Enum[];
    interfaces?: any[];
    imports?: any[];
    aminoCasingFn: Function;
}) => any;
export declare const makeAminoTypeInterface: ({ schema, enums, interfaces, imports, aminoCasingFn, exceptions }: {
    schema: MessageSchema;
    enums: Enum[];
    interfaces: any[];
    imports?: any[];
    aminoCasingFn: Function;
    exceptions?: AminoExceptions;
}) => t.ExportNamedDeclaration;
