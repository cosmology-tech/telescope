import { ProtoDep } from '@subql/x-cosmology-types';
export declare class ProtoResolver {
    deps: ProtoDep[];
    constructor(deps: any);
    resolve(proto: any): any[];
    resolveAll(): any[];
}
