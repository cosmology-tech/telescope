import { ProtoStore } from '@cosmology/proto-parser';
import { TelescopeParseContext } from './build';
import { TelescopeOptions } from '@cosmology/types';
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
    readonly rpcQueryClients: BundlerFile[];
    readonly rpcMsgClients: BundlerFile[];
    readonly registries: BundlerFile[];
    readonly stateManagers: Record<string, BundlerFile[]>;
    constructor({ protoDirs, outPath, store, options }: TelescopeInput & {
        store?: ProtoStore;
    });
    context(ref: any): TelescopeParseContext;
    addStateManagers(type: string, files: BundlerFile[]): void;
    addRPCQueryClients(files: BundlerFile[]): void;
    addRPCMsgClients(files: BundlerFile[]): void;
    addLCDClients(files: BundlerFile[]): void;
    addRegistries(files: BundlerFile[]): void;
    addConverters(files: BundlerFile[]): void;
    build(): Promise<void>;
}
