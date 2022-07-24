import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeParseContext } from './build';
import { TelescopeOptions } from '@osmonauts/types';
import { TelescopeInput } from './types';
export declare class TelescopeBuilder {
    store: ProtoStore;
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
    contexts: TelescopeParseContext[];
    files: string[];
    constructor({ protoDirs, outPath, store, options }: TelescopeInput & {
        store?: ProtoStore;
    });
    context(ref: any): TelescopeParseContext;
    build(): void;
}
