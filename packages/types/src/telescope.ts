import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake } from 'case';
import { camel } from '@osmonauts/utils';

// NestableTelescopeOpts keeps track of which options 
// actually use getPluginValue()
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
    },
    createLCDBundles?: boolean;
    createRPCBundles?: boolean;
    lcds?: {
        dir: string;
        filename?: string;
        packages: string[];
        addToBundle: boolean;
        methodName?: string;
    }[]
    rpcs?: {
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
    includeRPCClients: false,
    createLCDBundles: false,
    createRPCBundles: false,
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
