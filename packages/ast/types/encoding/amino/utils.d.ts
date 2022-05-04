import * as t from '@babel/types';
import { ProtoType } from '../types';
import { ProtoRoot, ProtoAny } from '../../types';
declare const BILLION: t.NumericLiteral;
export { BILLION };
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const arrayTypeNDimensions: (body: any, n: any) => any;
export declare const getFieldDimensionality: (field: any) => {
    typeName: any;
    dimensions: number;
    isArray: any;
};
export declare const typeUrlToAmino: (typeUrl: any, exceptions?: {}) => any;
