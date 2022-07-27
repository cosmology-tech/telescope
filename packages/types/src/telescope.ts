import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake } from 'case';
import { camel } from '@osmonauts/utils';

interface TelescopeOpts {
    includePackageVar?: boolean;
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

    stargateClients?: {
        enabled: boolean;
        includeCosmosDefaults?: boolean;
    },

    typingsFormat?: {
        useExact?: boolean;
        date?: 'date' | 'timestamp',
        duration?: 'duration' | 'string'
    },

    aminoEncoding?: {
        enabled: boolean;
        casingFn?: Function;
        exceptions?: AminoExceptions;
        typeUrlToAmino?: (typeUrl: string) => string | undefined;
    };

    lcdClients?: {
        enabled: boolean;
        scopedIsExclusive?: boolean;
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            addToBundle: boolean;
            methodName?: string;
        }[];
    };

    rpcClients?: {
        enabled: boolean;
        camelCase?: boolean;
        scopedIsExclusive?: boolean;
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            addToBundle: boolean;
            methodNameQuery?: string;
            methodNameTx?: string;
        }[];
    };
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}

export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

export type TelescopeOption = keyof TelescopeOpts;

export const defaultTelescopeOptions: TelescopeOptions = {
    // global options (can be overridden through plugins)
    signingClientDefaults: true,
    includePackageVar: false,

    useDate: 'date',
    useDuration: 'duration',

    typingsFormat: {
        useExact: false,
        date: 'date',
        duration: 'duration'
    },

    aminoEncoding: {
        enabled: true,
        casingFn: snake,
        exceptions: {
            ...DEFAULT_AMINO_EXCEPTIONS
        }
    },
    lcdClients: {
        enabled: false,
        scopedIsExclusive: true
    },
    rpcClients: {
        enabled: false,
        camelCase: true,
        scopedIsExclusive: true
    },

    // packages
    packages: {
        cosmos: {
            signingClientDefaults: false
        },
        osmosis: {
            aminoEncoding: {
                casingFn: camel
            }
        }
    }
}
