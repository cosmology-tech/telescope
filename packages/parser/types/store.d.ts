import { ProtoDep, ProtoRef, ProtoServiceMethod, TelescopeOptions } from '@subql/x-cosmology-types';
import { TraversalSymbol, IProtoStore } from '@subql/x-cosmology-types';
interface ParseProtoOptions {
    keepCase?: boolean;
    alternateCommentMode?: boolean;
    preferTrailingComment?: boolean;
}
export declare const parseProto: (content: any, options?: ParseProtoOptions) => import("@cosmology/protobufjs").IParserResult;
export declare class ProtoStore implements IProtoStore {
    files: string[];
    protoDirs: string[];
    deps: ProtoDep[];
    protos: ProtoRef[];
    packages: string[];
    options: TelescopeOptions;
    requests: Record<string, ProtoServiceMethod>;
    responses: Record<string, ProtoServiceMethod>;
    _traversed: boolean;
    _symbols: TraversalSymbol[];
    constructor(protoDirs?: string[], options?: TelescopeOptions);
    findProto(filename: any): ProtoRef;
    findProtoWhere(fn: (ref: ProtoRef) => boolean): ProtoRef;
    filterProtoWhere(fn: (ref: ProtoRef) => boolean): ProtoRef[];
    findProtoObject(filename: any, name: any): any;
    registerRequest(svc: ProtoServiceMethod): void;
    processProtos(contents: {
        absolute: string;
        filename: string;
        content: string;
    }[]): {
        absolute: string;
        filename: string;
        proto: import("@cosmology/protobufjs").IParserResult;
    }[];
    getProtos(): ProtoRef[];
    getPackages(): string[];
    parseScope(type: string): {
        nested: string;
        package: string;
    };
    getDeps(): ProtoDep[];
    getDependencies(protos: ProtoRef[]): ProtoDep[];
    traverseAll(): void;
    get(from: ProtoRef, name: string): import("@subql/x-cosmology-types").Lookup;
    getImportFromRef(ref: ProtoRef, name: string): import("@subql/x-cosmology-types").Lookup;
    getTypeUrlMap(ref: ProtoRef): import("@subql/x-cosmology-types").InterfaceTypeUrlMap;
    getServices(myBase: string): Record<string, ProtoRef[]>;
}
export {};
