import { ProtoDep, ProtoRef, ProtoServiceMethod, TelescopeOptions } from '@cosmology/types';
import { TraversalSymbol, IProtoStore } from '@cosmology/types';
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
    _enumValueMapping: Record<string, Set<number>>;
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
    get(from: ProtoRef, name: string): import("@cosmology/types").Lookup;
    getImportFromRef(ref: ProtoRef, name: string): import("@cosmology/types").Lookup;
    getTypeUrlMap(ref: ProtoRef): import("@cosmology/types").InterfaceTypeUrlMap;
    getServices(myBase: string): Record<string, ProtoRef[]>;
    setEnumValues(pkg: string, name: string, values: number[]): void;
    isEnumValueExisting(pkg: string, name: string, value: number): boolean;
    getExistingSmallestValue(pkg: string, name: string, value: number): number;
}
export {};
