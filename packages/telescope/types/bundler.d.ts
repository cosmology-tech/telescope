import * as t from '@babel/types';
import { TelescopeParseContext } from './build';
import { TelescopeBuilder } from './builder';
import { ProtoRef } from '@osmonauts/types';
export interface Bundle {
    bundleVariables: {};
    bundleFile: string;
    importPaths: any[];
    base: string;
}
export declare class Bundler {
    builder: TelescopeBuilder;
    contexts: TelescopeParseContext[];
    bundle: Bundle;
    files: string[];
    converters: any[];
    registries: any[];
    constructor(builder: TelescopeBuilder, bundle: Bundle);
    getFreshContext(context: TelescopeParseContext): TelescopeParseContext;
    getLocalFilename(ref: ProtoRef, suffix?: string): string;
    getFilename(localname: string): string;
    writeAst(program: t.Statement[], filename: string): void;
    addToBundle(context: TelescopeParseContext, localname: string): void;
}
