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
        "(cosmos_proto.scalar)"?: string;
        "(gogoproto.customtype)"?: string;
        "(gogoproto.moretags)"?: string;
        "(cosmos_proto.accepts_interface)"?: string;
    };
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
}[];
export declare const getTypeFromFieldViaImport: (field: ProtoField, context: AminoParseContext, importPath: string) => import("@osmonauts/proto-parser").Lookup;
export declare const getAllImportsOfField: (field: ProtoField, context: AminoParseContext) => void;
export declare const getTypeFromNestedContext: (field: ProtoField, context: AminoParseContext) => import("@osmonauts/proto-parser").Lookup;
export declare const getTypeFromContext: (field: ProtoField, context: AminoParseContext) => any;
export declare const getTypeFromCurrentProtoPath: (field: ProtoField, currentProtoPath: string, context: AminoParseContext) => any;
