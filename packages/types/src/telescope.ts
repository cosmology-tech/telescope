import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { camel, snake } from 'case';
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

export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

export type TelescopeOption = keyof TelescopeOpts;

export const defaultTelescopeOptions: TelescopeOptions = {
    // global options (can be overridden through plugins)
    includeAminos: true,
    includeLCDClient: false,
    useDate: false,
    useExact: false,
    aminoCasingFn: snake,
    aminoExceptions: {
        ...DEFAULT_AMINO_EXCEPTIONS
    },

    packages: {
        osmosis: {
            aminoCasingFn: camel
        }
    }
}
