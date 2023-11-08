import { TSBuilderInput } from '@cosmwasm/ts-codegen';
import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake, camel } from 'case';

export enum TelescopeLogLevel {
    None = 0,
    Info,
    Warn,
    Error,
    Debug
}
interface TelescopeOpts {

    env?: 'default' | 'v-next';
    removeUnusedImports?: boolean;
    classesUseArrowFunctions?: boolean;
    useSDKTypes?: boolean;
    includeExternalHelpers?: boolean;

    logLevel?: TelescopeLogLevel;

    interfaces?: {
        enabled?: boolean;
        useUnionTypes?: boolean;
    },

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
            /**
            * @deprecated The 'fromPartial' option will be deprecated in a future version. Encoder objects need fromPartial to be a creator function to create instance of the type. So it should always be left on.
            */
            fromPartial?: boolean;
            toSDK?: boolean;
            fromSDK?: boolean;
            fromSDKJSON?: boolean;
            toAmino?: boolean;
            fromAmino?: boolean;
            toProto?: boolean;
            fromProto?: boolean;
        },
        strictNullCheckForPrototypeMethods?: boolean;
        paginationDefaultFromPartial?: boolean;
        includePackageVar?: boolean;
        fieldDefaultIsOptional?: boolean;
        useOptionalNullable?: boolean;
        allowUndefinedTypes?: boolean;
        allowEncodeDefaultScalars?: boolean;

        optionalQueryParams?: boolean;
        optionalPageRequests?: boolean;

        // add $typeUrl field to interfaces
        addTypeUrlToObjects?: boolean;
        // add aminoType field to Decoders
        addAminoTypeToObjects?: boolean;
        // add typeUrl field to Decoders
        addTypeUrlToDecoders?: boolean;

        enableRegistryLoader?: boolean;
        enableMessageComposer?: boolean;

        excluded?: {
            packages?: string[];
            protos?: string[];
            hardProtos?: string[];
        };
        includes?: {
            packages?: string[];
            protos?: string[];
        };

        typingsFormat?: {
            customTypes?: {
                useCosmosSDKDec?: boolean;
            },
            num64?: 'long' | 'bigint';
            useDeepPartial?: boolean;
            useExact?: boolean;
            timestamp?: 'date' | 'timestamp',
            duration?: 'duration' | 'string',

            setDefaultEnumToUnrecognized?: boolean;
            setDefaultCustomTypesToUndefined?: boolean;

            // temporary field to avoid breaking changes
            updatedDuration?: boolean

            useTelescopeGeneratedType?: boolean
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
        protos?: string[];
        addToBundle: boolean;
    };

    stargateClients?: {
        enabled: boolean;
        includeCosmosDefaultTypes?: boolean;
    };

    aminoEncoding?: {
        enabled: boolean;
        disableMsgTypes?: boolean;
        casingFn?: Function;
        exceptions?: AminoExceptions;
        typeUrlToAmino?: (typeUrl: string) => string | undefined;
        // temporary field for backwards compat

        /**
        * @deprecated The logic of useLegacyInlineEncoding will be deprecated in the future.
        */
        useLegacyInlineEncoding?: boolean;
    };

    lcdClients?: {
        enabled: boolean;
        scopedIsExclusive?: boolean;
        bundle?: boolean;
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            protos?: string[];
            addToBundle: boolean;
            methodName?: string;
        }[];
    };
    rpcClients?: {
        type?: 'tendermint' | 'grpc-web' | 'grpc-gateway';
        enabled: boolean;
        inline?: boolean;
        extensions?: boolean;
        camelCase?: boolean;
        scopedIsExclusive?: boolean;
        bundle?: boolean;
        enabledServices?: (
            'Msg' |
            'Query' |
            'Service' |
            'ReflectionService' |
            'ABCIApplication' |
            string
        )[],
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            protos?: string[];
            addToBundle: boolean;
            methodNameQuery?: string;
            methodNameTx?: string;
        }[];
    };
    reactQuery?: {
        enabled: boolean;
        needExtraQueryKey?: boolean;
        include?: {
            /**
             * @deprecated in favor of packages and protos supporting minimatch
             */
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        },
        instantExport?: {
            include: {
              patterns?: string[];
            },
            nameMapping?:{
              [key: string]: string;
            }
        }
    };
    mobx?: {
        enabled: boolean;
        include?: {
            /**
             * @deprecated in favor of packages and protos supporting minimatch
             */
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        }
    };
    pinia?: {
        enabled: boolean;
        include?: {
            /**
             * @deprecated in favor of packages and protos supporting minimatch
             */
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        }
    };
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}

export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

export type TelescopeOption = keyof TelescopeOpts;

export const defaultTelescopeOptions: TelescopeOptions = {
    // global options (can be overridden through plugins)

    env: 'default',
    removeUnusedImports: true,
    classesUseArrowFunctions: false,
    useSDKTypes: true,
    includeExternalHelpers: false,
    logLevel: TelescopeLogLevel.None,

    interfaces: {
        enabled: true,
        useUnionTypes: false,
    },

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
            fromSDK: false,
            fromSDKJSON: false,
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true,
        },
        strictNullCheckForPrototypeMethods: false,
        includePackageVar: false,
        fieldDefaultIsOptional: false,
        allowUndefinedTypes: false,
        useOptionalNullable: true,

        addTypeUrlToObjects: true,
        addAminoTypeToObjects: false,
        addTypeUrlToDecoders: true,

        enableRegistryLoader: true,
        enableMessageComposer: true,

        optionalQueryParams: false,
        optionalPageRequests: false,

        typingsFormat: {
            customTypes: {
              useCosmosSDKDec: true
            },
            num64: 'bigint',
            useDeepPartial: false,
            useExact: false,
            timestamp: 'date',
            duration: 'duration',
            updatedDuration: false,

            setDefaultEnumToUnrecognized: true,
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
        },
    },
    lcdClients: {
        bundle: true,
        enabled: true,
        scopedIsExclusive: true
    },
    rpcClients: {
        type: 'tendermint',
        enabled: true,
        extensions: true,
        inline: false,
        bundle: true,
        camelCase: true,
        enabledServices: [
            'Msg',
            'Query',
            'Service'
        ],
        scopedIsExclusive: true
    },

    reactQuery: {
        enabled: false,
        include: {
            patterns: [],
            packages: [],
            protos: []
        },
    },

    mobx: {
        enabled: false,
        include: {
            patterns: [],
            packages: [],
            protos: []
        }
    },

    pinia: {
        enabled: false,
        include: {
            patterns: [],
            packages: [],
            protos: []
        }
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
