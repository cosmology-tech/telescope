interface TelescopeOpts {
    includeAminos?: boolean;
    includeLCDClient?: boolean;
    aminoCasing: Function;
    useDate?: boolean;
    useExact?: boolean;
}
interface TelescopePackageOpts {
    packages?: Record<string, TelescopeOpts>;
}
export declare type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;
export declare type TelescopeOption = keyof TelescopeOpts;
export {};
