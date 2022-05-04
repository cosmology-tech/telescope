import { ProtoDep, ProtoRef } from './types';
export declare class ProtoStore {
    files: string[];
    protoDir: string;
    deps: ProtoDep[];
    protos: ProtoRef[];
    _traversed: boolean;
    constructor(protoDir: any);
    findProto(filename: any): ProtoRef;
    findProtoObject(filename: any, name: any): any;
    getProtos(): ProtoRef[];
    getDeps(): ProtoDep[];
    traverseAll(): void;
    get(from: ProtoRef, name: string): import("./lookup").Lookup;
}
