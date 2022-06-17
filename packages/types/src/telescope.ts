
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

export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

export type TelescopeOption = keyof TelescopeOpts;