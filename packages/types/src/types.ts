export interface ProtoEnum {
    name?: string;
    values: { [key: string]: number };
    comment?: string;
    comments?: { [key: string]: string };
}

export interface ProtoType {
    name?: string;
    oneofs?: { [key: string]: { oneof: string[], comment: string | undefined } },
    options?: {
        [key: string]: any;
        deprecated?: boolean;
        "(cosmos_proto.implements_interface)"?: string;
    },
    fields: {
        [key: string]: ProtoField;
    },
    comment: string | undefined;
}

export interface ProtoField {
    name?: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    },

    keyType?: string;
    rule?: string;
    type: string;
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
    }
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
}
