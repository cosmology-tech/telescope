import * as t from '@babel/types';
import { ProtoType, ProtoAny } from '../types';
import { ProtoRoot } from '@osmonauts/proto-parser';
declare const BILLION: t.NumericLiteral;
export { BILLION };
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const arrayTypeNDimensions: (body: any, n: any) => any;
export declare const typeUrlToAmino: (typeUrl: any, exceptions?: {}) => any;
