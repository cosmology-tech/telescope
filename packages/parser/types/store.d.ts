import { ProtoDep, ProtoRef } from '@osmonauts/types';
export declare const parseProto: (content: any) => import("@pyramation/protobufjs").IParserResult;
export declare class ProtoStore {
    files: string[];
    protoDirs: string[];
    deps: ProtoDep[];
    protos: ProtoRef[];
    packages: string[];
    _traversed: boolean;
    constructor(protoDirs?: string[]);
    findProto(filename: any): ProtoRef;
    findProtoWhere(fn: (ref: ProtoRef) => boolean): ProtoRef;
    filterProtoWhere(fn: (ref: ProtoRef) => boolean): ProtoRef[];
    findProtoObject(filename: any, name: any): any;
    getProtos(): ProtoRef[];
    getPackages(): string[];
    parseScope(type: string): {
        nested: string;
        package: string;
    };
    getDeps(): ProtoDep[];
    traverseAll(): void;
    get(from: ProtoRef, name: string): import("./lookup").Lookup;
}
