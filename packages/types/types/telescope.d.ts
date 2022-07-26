import { AminoExceptions } from "./aminos";
interface TelescopeOpts {
    aminoCasingFn?: Function;
    aminoExceptions?: AminoExceptions;
    aminoTypeUrl?: (typeUrl: string) => string | undefined;
    camelRpcMethods?: boolean;
    includeAminos?: boolean;
    includeLCDClients?: boolean;
    includePackageVar?: boolean;
    includeRpcClients?: boolean;
    signingClientDefaults?: boolean;
    useDate?: 'date' | 'timestamp';
    useDuration?: 'duration' | 'string';
    useExact?: boolean;
    lcd?: {
        dir: string;
        packages: string[];
    };
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}
export declare type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;
export declare type TelescopeOption = keyof TelescopeOpts;
export declare const defaultTelescopeOptions: TelescopeOptions;
export {};
