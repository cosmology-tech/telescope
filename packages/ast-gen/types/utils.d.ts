import * as t from '@babel/types';
import { Field } from './types';
declare const BILLION: t.NumericLiteral;
export { BILLION };
export declare const recursiveNamespace: (names: any, moduleBlockBody: any) => any;
export declare const arrayTypeNDimensions: (body: any, n: any) => any;
export declare const FieldTypeAsts: {
    string: () => t.TSStringKeyword;
    array: (type: any) => t.TSArrayType;
    Duration: () => t.TSTypeReference;
    Height: () => t.TSTypeReference;
    Coin: () => t.TSTypeReference;
    Long: () => t.TSTypeReference;
};
export declare const typeUrlToAmino: (str: any, MsgName: any) => any;
export declare const shorthandProperty: (prop: string) => t.ObjectProperty;
export declare const importStmt: (names: string[], path: string) => t.ImportDeclaration;
export declare const importAminoMsg: () => t.ImportDeclaration;
export declare const getFieldDimensionality: (field: Field) => {
    typeName: string;
    dimensions: number;
    isArray: boolean;
};
export declare const memberExpressionOrIdentifier: (names: any) => any;
export declare const memberExpressionOrIdentifierSnake: (names: any) => any;
