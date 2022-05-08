import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { AminoOptions } from './amino';
export interface ParseContext {
    utils: Record<string, boolean>;
    addUtil: Function;
}
export declare class GenericParseContext implements ParseContext {
    imports: Record<string, object>;
    utils: Record<string, boolean>;
    addUtil(util: any): void;
}
export declare class AminoParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;
    options: AminoOptions;
    utils: Record<string, boolean>;
    constructor(ref: ProtoRef, store: ProtoStore, options?: AminoOptions);
    addUtil(util: any): void;
}
export declare class ProtoParseContext implements ParseContext {
    imports: Record<string, object>;
    utils: Record<string, boolean>;
    addUtil(util: any): void;
}
