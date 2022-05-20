export interface ProtoEnum {
    type?: 'Enum';
    name?: string;
    values: { [key: string]: number };
    comment?: string;
    comments?: { [key: string]: string };
};
export interface ProtoType {
    type?: 'Type';
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
};
export interface ProtoField {
    type?: 'Field';
    name?: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    },

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
    }
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
};
export interface ProtoServiceMethod {
    type: 'ServiceMethod';
    name: string;
    options: {
        [key: string]: any;
        "(google.api.http).get"?: string;
    }
    comment?: string;
    requestType: string;
    responseType: string;
    fields: Record<string, ProtoField>
};
export interface ProtoService {
    type: 'Service';
    name: string;
    serviceType: 'Msg' | 'Query' | string;
    methods: Record<string, ProtoServiceMethod>
};
export interface ProtoAny {
    type: string;
    name: string;
    [key: string]: any;
};
export interface ProtoDep {
    filename: string;
    package: string;
    imports: string[]
}
export interface ProtoRef {
    absolute: string;
    filename: string;
    proto: ProtoRoot;
    traversed?: ProtoRoot;
}
export interface ProtoRoot {
    package: string;
    imports: string[];
    importNames?: Record<string, Record<string, string>>;
    root: any;
};
