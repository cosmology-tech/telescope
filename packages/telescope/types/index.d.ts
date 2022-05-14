import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeParseContext } from './build';
export interface TelescopeInput {
    protoDir: string;
    outPath: string;
}
export declare class TelescopeBuilder {
    store: ProtoStore;
    protoDir: string;
    outPath: string;
    contexts: TelescopeParseContext[];
    constructor({ protoDir, outPath, store }: TelescopeInput & {
        store?: ProtoStore;
    });
    context(ref: any): TelescopeParseContext;
    build(input: TelescopeInput): void;
}
declare const _default: (input: TelescopeInput) => void;
export default _default;
