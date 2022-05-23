import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeParseContext } from './build';
export interface TelescopeOptions {
    includeAminos: boolean;
    includeLCDClient: boolean;
}
export interface TelescopeInput {
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
}
export declare class TelescopeBuilder {
    store: ProtoStore;
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
    contexts: TelescopeParseContext[];
    constructor({ protoDirs, outPath, store, options }: TelescopeInput & {
        store?: ProtoStore;
    });
    context(ref: any): TelescopeParseContext;
    build(): void;
}
declare const _default: (input: TelescopeInput) => void;
export default _default;
