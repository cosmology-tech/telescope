import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { AminoParseContext, ProtoParseContext } from '@osmonauts/ast';
import { ServiceMutation, ServiceQuery } from './types';
export declare const getMutations: (mutations: ServiceMutation[]) => {
    typeUrl: string;
    TypeName: string;
    methodName: string;
}[];
export declare const getAminoProtos: (mutations: ServiceMutation[], store: ProtoStore) => any[];
export declare const buildBaseTypeScriptClass: (context: TelescopeParseContext, name: string, obj: any) => void;
export declare const buildEnums: (context: TelescopeParseContext, name: string, obj: any) => void;
export interface TelescopeParseContext {
    proto: ProtoParseContext;
    amino: AminoParseContext;
    store: ProtoStore;
    ref: ProtoRef;
    parsedImports: Record<string, any>;
    body: any[];
    mutations: ServiceMutation[];
    queries: any[];
    types: any[];
    options: any;
}
export declare class TelescopeParseContext implements TelescopeParseContext {
    constructor(ref: ProtoRef, store: ProtoStore);
    hasMutations(): boolean;
    addType(name: string, obj: any, isNested: boolean): void;
    addMutation(mutation: ServiceMutation): void;
    addQuery(query: ServiceQuery): void;
    buildBase(): void;
    buildRegistry(): void;
    buildRegistryLoader(): void;
    buildAminoInterfaces(): void;
    buildAminoConverter(): void;
    buildHelperObject(): void;
}
