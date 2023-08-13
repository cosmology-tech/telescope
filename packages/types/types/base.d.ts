import { TelescopeOptions } from "./telescope";
export interface IParseContext {
    ref: ProtoRef;
    options: TelescopeOptions;
    imports: ImportUsage[];
    utils: Record<string, boolean>;
    addUtil: Function;
    pluginValue(name: any): any;
}
export interface ImportUsage {
    type: 'typeImport' | 'toJSONEnum' | 'fromJSONEnum';
    name: string;
    import: string;
    importedAs?: string;
}
export interface ProtoEnum {
    type?: 'Enum';
    name?: string;
    values: {
        [key: string]: number;
    };
    comment?: string;
    comments?: {
        [key: string]: string;
    };
}
export interface ProtoType {
    type?: 'Type';
    name?: string;
    package?: string;
    oneofs?: {
        [key: string]: {
            oneof: string[];
            comment: string | undefined;
        };
    };
    options?: {
        [key: string]: any;
        deprecated?: boolean;
        "(cosmos_proto.implements_interface)"?: string;
        "(amino.name)"?: string;
    };
    fields: {
        [key: string]: ProtoField;
    };
    comment: string | undefined;
}
export interface ProtoField {
    type?: 'string' | 'double' | 'float' | 'int32' | 'uint32' | 'sint32' | 'fixed32' | 'sfixed32' | 'uint64' | 'int64' | 'sint64' | 'fixed64' | 'sfixed64' | 'bytes' | 'bool' | string;
    name?: string;
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
        "(gogoproto.casttype)"?: string;
        "(gogoproto.customtype)"?: string;
        "(gogoproto.moretags)"?: string;
        "(gogoproto.nullable)"?: boolean;
    };
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
}
export declare const ALLOWED_RPC_SERVICES: string[];
export interface ProtoServiceMethodInfo {
    method: 'get' | 'post';
    url: string;
    pathParams: string[];
    queryParams: string[];
    paramMap: Record<string, string>;
    casing: Record<string, string>;
}
export interface ProtoServiceMethod {
    type: 'ServiceMethod';
    info?: ProtoServiceMethodInfo;
    name: string;
    options: {
        [key: string]: any;
        "(google.api.http).get"?: string;
        "(google.api.http).post"?: string;
        "(google.api.http)"?: {
            post: string;
            body: string;
        };
    };
    comment?: string;
    requestType: string;
    responseType: string;
    fields: Record<string, ProtoField>;
}
export interface ProtoService {
    type: 'Service';
    name: 'Msg' | 'Query' | 'Service' | string;
    methods: Record<string, ProtoServiceMethod>;
    comment?: string;
}
export interface ProtoAny {
    type: string;
    name: string;
    [key: string]: any;
}
export interface ProtoDep {
    filename: string;
    package: string;
    imports: string[];
}
export interface ProtoRef {
    absolute: string;
    filename: string;
    proto: ProtoRoot;
    traversed?: TraversedProtoRoot;
}
export interface ProtoRoot {
    package: string;
    imports: string[];
    importNames?: Record<string, Record<string, string>>;
    root: any;
}
export interface TraverseRecord {
    filename: string;
    implementsType: string;
    msgName: string;
}
export interface TraverseLocalSymbol {
    type: 'import' | 'export' | 'importFromImplements';
    symbolName: string;
    readAs: string;
    source: string;
    implementsType?: string;
}
export type TraverseImportNames = Record<string, Record<string, string>>;
export type TraverseImport = Record<string, string[]>;
export type TraverseAccept = Record<string, string[]>;
export type TraverseImplement = Record<string, string[]>;
export type TraverseExport = Record<string, boolean>;
export interface TypeUrlRef {
    typeUrl: string;
    aminoType: string;
    type: string;
    importAs: string;
}
export interface TraverseTypeUrlRef {
    ref: string;
    pkg: string;
    types: TypeUrlRef[];
}
export type TraversedProtoRoot = ProtoRoot & {
    parsedImports: TraverseImport;
    parsedExports: TraverseExport;
    acceptsInterface: TraverseAccept;
    implementsInterface: TraverseImplement;
    importNames: TraverseImportNames | null;
    symbols: TraverseLocalSymbol | null;
};
export type InterfaceTypeUrlMap = Record<string, TraverseTypeUrlRef[]>;
export type TraversalSymbol = TraverseLocalSymbol & {
    ref: string;
};
export interface Lookup {
    obj: any;
    name: string;
    import: string;
    importType: string;
    importedName: string;
    package: string;
}
export interface IProtoStore {
    requests: Record<string, ProtoServiceMethod>;
    responses: Record<string, ProtoServiceMethod>;
    _symbols: TraversalSymbol[];
    findProto(filename: any): ProtoRef;
    get(from: ProtoRef, name: string): Lookup;
    getTypeUrlMap(ref: ProtoRef): any;
}
