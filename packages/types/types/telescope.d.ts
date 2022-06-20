import { AminoExceptions } from "./aminos";
interface TelescopeOpts {
    includeAminos?: boolean;
    includeLCDClient?: boolean;
    aminoCasingFn?: Function;
    aminoExceptions?: AminoExceptions;
    useDate?: boolean;
    useExact?: boolean;
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}
export declare type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;
export declare type TelescopeOption = keyof TelescopeOpts;
export declare const defaultTelescopeOptions: TelescopeOptions;
export {};
