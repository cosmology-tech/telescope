import { ProtoDep, ProtoRef } from './types';
export declare class ProtoStore {
    files: string[];
    protoDir: string;
    deps: ProtoDep[];
    protos: ProtoRef[];
    constructor(protoDir: any);
    findProto(filename: any): ProtoRef;
    findProtoObject(filename: any, name: any): any;
    getProtos(): ProtoRef[];
    getDeps(): ProtoDep[];
}
