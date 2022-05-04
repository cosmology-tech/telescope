import { ProtoType, ProtoAny, ProtoField } from '../proto/types';
import { ProtoRoot } from '@osmonauts/proto-parser';
import { AminoParseContext } from './types';
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const arrayTypeNDim: (body: any, n: any) => any;
export declare const typeUrlToAmino: (typeUrl: any, exceptions?: {}) => any;
export declare const protoFieldsToArray: (proto: ProtoType) => {
    name: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    };
    keyType?: string;
    rule?: string;
    type: string;
    id: number;
    options: {
        [key: string]: any;
        "(gogoproto.nullable)"?: boolean;
        "(gogoproto.moretags)"?: string;
    };
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
}[];
export declare const getTypeFromContext: (field: ProtoField, context: AminoParseContext) => any;
