import { TSBuilderInput } from '@cosmwasm/ts-codegen';
import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake } from 'case';
import { camel } from '@osmonauts/utils';
interface TelescopeOpts {

    removeUnusedImports?: boolean;

    prototypes?: {
        parser?: {
            keepCase?: boolean;
            alternateCommentMode?: boolean;
            preferTrailingComment?: boolean;
        },
        includePackageVar?: boolean;
        fieldDefaultIsOptional?: boolean;
        useOptionalNullable?: boolean;
        allowUndefinedTypes?: boolean;
        excluded?: {
            packages?: string[];
            protos?: string[];
        };
        typingsFormat?: {
            useDeepPartial?: boolean;
            useExact?: boolean;
            timestamp?: 'date' | 'timestamp',
            duration?: 'duration' | 'string'
        };
    };

    tsDisable?: {
        files?: string[];
        disableAll?: boolean;
        patterns?: string[];
    },

    bundle?: {
        enabled: boolean;
    };

    cosmwasm?: TSBuilderInput;

    aggregatedLCD?: {
        dir: string;
        filename: string;
        packages: string[];
        addToBundle: boolean;
    };

    stargateClients?: {
        enabled: boolean;
        includeCosmosDefaultTypes?: boolean;
    };

    aminoEncoding?: {
        enabled: boolean;
        casingFn?: Function;
        exceptions?: AminoExceptions;
        typeUrlToAmino?: (typeUrl: string) => string | undefined;
    };

    lcdClients?: {
        enabled: boolean;
        scopedIsExclusive?: boolean;
        bundle?: boolean;
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
        bundle?: boolean;
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

    removeUnusedImports: true,

    prototypes: {
        parser: {
            keepCase: true,
            alternateCommentMode: true,
            preferTrailingComment: false
        },
        includePackageVar: false,
        fieldDefaultIsOptional: false,
        allowUndefinedTypes: false,
        useOptionalNullable: true,
        typingsFormat: {
            useDeepPartial: true,
            useExact: false,
            timestamp: 'date',
            duration: 'duration'
        },
    },

    bundle: {
        enabled: true
    },

    tsDisable: {
        files: [],
        patterns: [],
        disableAll: false
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
        bundle: true,
        enabled: true,
        scopedIsExclusive: true
    },
    rpcClients: {
        enabled: true,
        bundle: true,
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
