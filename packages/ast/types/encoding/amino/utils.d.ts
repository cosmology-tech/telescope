import { ProtoType } from '@subql/x-cosmology-types';
export { getTypeUrlWithPkgAndName, getTypeUrl, getAminoTypeName } from '@subql/x-cosmology-utils';
export declare const arrayTypeNDim: (body: any, n: any) => any;
export declare const protoFieldsToArray: (proto: ProtoType) => {
    type?: string;
    name: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    };
    message?: string;
    package?: string;
    keyType?: string;
    rule?: string;
    id: number;
    options: {
        [key: string]: any;
        deprecated?: boolean;
        json_name?: string;
        "(cosmos_proto.json_tag)"?: string;
        "(cosmos_proto.accepts_interface)"?: string;
        "(cosmos_proto.scalar)"?: string;
        "(telescope:name)"?: string;
        "(telescope:orig)"?: string;
        "(telescope:camel)"?: string;
        "(telescope:map_entry_type_field)"?: boolean;
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
