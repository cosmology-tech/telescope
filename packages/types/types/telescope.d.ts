import { AminoExceptions } from "./aminos";
export interface NestableTelescopeOpts {
    aminoCasingFn?: Function;
    signingClientDefaults?: boolean;
    useExact?: boolean;
}
interface TelescopeOpts {
    aminoCasingFn?: Function;
    aminoExceptions?: AminoExceptions;
    aminoTypeUrl?: (typeUrl: string) => string | undefined;
    camelRpcMethods?: boolean;
    includeAminos?: boolean;
    includeLCDClients?: boolean;
    includePackageVar?: boolean;
    includeRPCClients?: boolean;
    signingClientDefaults?: boolean;
    useDate?: 'date' | 'timestamp';
    useDuration?: 'duration' | 'string';
    useExact?: boolean;
    aggregatedLCD?: {
        dir: string;
        filename: string;
        packages: string[];
        addToBundle: boolean;
    };
    createLCDBundles?: boolean;
    createRPCBundles?: boolean;
    lcds?: {
        dir: string;
        filename?: string;
        packages: string[];
        addToBundle: boolean;
        methodName?: string;
    }[];
    rpcs?: {
        dir: string;
        filename?: string;
        packages: string[];
        addToBundle: boolean;
        methodName?: string;
    }[];
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}
export declare type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;
export declare type TelescopeOption = keyof TelescopeOpts;
export declare const defaultTelescopeOptions: TelescopeOptions;
export {};
