import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake } from 'case';
import { camel } from '@osmonauts/utils';
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
        packages: string[]
    },
    createLCDBundles?: boolean;
    lcds?: {
        dir: string;
        filename?: string;
        packages: string[];
        addToBundle: boolean;
        methodName?: string;
    }[]
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}

export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

export type TelescopeOption = keyof TelescopeOpts;

export const defaultTelescopeOptions: TelescopeOptions = {
    // global options (can be overridden through plugins)
    includeAminos: true,
    includeLCDClients: false,
    signingClientDefaults: true,
    includePackageVar: false,
    includeRpcClients: false,
    createLCDBundles: false,
    camelRpcMethods: true,
    useDate: 'date',
    useDuration: 'duration',
    useExact: false,
    aminoCasingFn: snake,
    aminoExceptions: {
        ...DEFAULT_AMINO_EXCEPTIONS
    },

    packages: {
        cosmos: {
            signingClientDefaults: false
        },
        osmosis: {
            aminoCasingFn: camel
        }
    }
}
