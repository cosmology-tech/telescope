import { ProtoAny, ProtoRoot, ProtoType } from '@osmonauts/types';
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const arrayTypeNDim: (body: any, n: any) => any;
export declare const typeUrlToAmino: (typeUrl: any, exceptions?: {}) => any;
export declare const protoFieldsToArray: (proto: ProtoType) => {
    type: string;
    name: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    };
    keyType?: string;
    rule?: string;
    id: number;
    options: {
        [key: string]: any;
        deprecated?: boolean;
        "(cosmos_proto.accepts_interface)"?: string;
        "(cosmos_proto.scalar)"?: string;
        "(gogoproto.casttype)"?: string;
        "(gogoproto.customtype)"?: string;
        "(gogoproto.moretags)"?: string;
        "(gogoproto.nullable)"?: boolean;
    };
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
}[];
