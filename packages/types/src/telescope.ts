import { TSBuilderInput } from '@cosmwasm/ts-codegen';
import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake } from 'case';
import { camel } from '@osmonauts/utils';
interface TelescopeOpts {

    removeUnusedImports?: boolean;
    classesUseArrowFunctions?: boolean;
    useSDKTypes?: boolean;

    prototypes?: {
        enabled?: boolean;
        parser?: {
            keepCase?: boolean;
            alternateCommentMode?: boolean;
            preferTrailingComment?: boolean;
        },
        methods?: {
            encode?: boolean;
            decode?: boolean;
            fromJSON?: boolean;
            toJSON?: boolean;
            fromPartial?: boolean;
            toSDK?: boolean;
            fromSDK?: boolean;
        },
        includePackageVar?: boolean;
        fieldDefaultIsOptional?: boolean;
        useOptionalNullable?: boolean;
        allowUndefinedTypes?: boolean;

        optionalQueryParams?: boolean;
        optionalPageRequests?: boolean;

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

    eslintDisable?: {
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
        inline?: boolean;
        extensions?: boolean;
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
    classesUseArrowFunctions: false,
    useSDKTypes: true,

    prototypes: {
        enabled: true,
        parser: {
            keepCase: false,
            alternateCommentMode: true,
            preferTrailingComment: false
        },
        methods: {
            encode: true,
            decode: true,
            fromJSON: false,
            toJSON: false,
            fromPartial: true,
            toSDK: false,
            fromSDK: false
        },
        includePackageVar: false,
        fieldDefaultIsOptional: false,
        allowUndefinedTypes: false,
        useOptionalNullable: true,

        optionalQueryParams: false,
        optionalPageRequests: false,

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

    eslintDisable: {
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
        extensions: true,
        inline: false,
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
