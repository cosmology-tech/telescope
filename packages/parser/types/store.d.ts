import { ProtoDep, ProtoRef } from '@osmonauts/types';
export declare const parseProto: (content: any) => import("protobufjs").IParserResult;
export declare class ProtoStore {
    files: string[];
    protoDir: string;
    deps: ProtoDep[];
    protos: ProtoRef[];
    packages: string[];
    _traversed: boolean;
    constructor(protoDir: any);
    findProto(filename: any): ProtoRef;
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
