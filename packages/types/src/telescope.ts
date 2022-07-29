import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake } from 'case';
import { camel } from '@osmonauts/utils';

interface TelescopeOpts {
    includePackageVar?: boolean;

    aggregatedLCD?: {
        dir: string;
        filename: string;
        packages: string[];
        addToBundle: boolean;
    },

    stargateClients?: {
        enabled: boolean;
        includeCosmosDefaultTypes?: boolean;
    },

    typingsFormat?: {
        useExact?: boolean;
        timestamp?: 'date' | 'timestamp',
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
    includePackageVar: false,

    typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
    },

    stargateClients: {
        enabled: true,
        includeCosmosDefaultTypes: true
    },

    aminoEncoding: {
        enabled: true,
        casingFn: snake,
        exceptions: {
            ...DEFAULT_AMINO_EXCEPTIONS
        }
    },
    lcdClients: {
        enabled: true,
        scopedIsExclusive: true
    },
    rpcClients: {
        enabled: true,
        camelCase: true,
        scopedIsExclusive: true
    },

    // packages
    packages: {
        cosmos: {
            stargateClients: {
                enabled: true,
                includeCosmosDefaultTypes: false
            }
        },
        osmosis: {
            aminoEncoding: {
                casingFn: camel
            }
        }
    }
}
