import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeParseContext } from './build';
import { TelescopeOptions } from '@osmonauts/types';
import { BundlerFile, TelescopeInput } from './types';
export declare class TelescopeBuilder {
    store: ProtoStore;
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
    contexts: TelescopeParseContext[];
    files: string[];
    readonly converters: BundlerFile[];
    readonly lcdClients: BundlerFile[];
    readonly registries: BundlerFile[];
    constructor({ protoDirs, outPath, store, options }: TelescopeInput & {
        store?: ProtoStore;
    });
    context(ref: any): TelescopeParseContext;
    addLCDClients(files: BundlerFile[]): void;
    addRegistries(files: BundlerFile[]): void;
    addConverters(files: BundlerFile[]): void;
    build(): void;
}
