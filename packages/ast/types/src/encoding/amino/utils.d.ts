import { ProtoAny, ProtoType } from '@cosmology/types';
import { GenericParseContext } from '../context';
export declare const getTypeUrlWithPkgAndName: (pkg: string, name: string) => string;
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const arrayTypeNDim: (body: any, n: any) => any;
export declare const getAminoTypeName: (context: GenericParseContext, root: ProtoRoot, proto: ProtoType) => any;
export declare const protoFieldsToArray: (proto: ProtoType) => any[];
