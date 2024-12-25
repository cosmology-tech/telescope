import { TSBuilderInput } from "@cosmwasm/ts-codegen";
import { AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from "./aminos";
import { snake, camel } from "case";
import { Operation } from "fast-json-patch";

export enum TelescopeLogLevel {
  None = 0,
  Info,
  Warn,
  Error,
  Debug,
}

/**
 * The name mappers for helper functions.
 */
export interface HelperFuncNameMappersRule {
  funcBody: "unchanged" | "get" | ((name: string) => string);
  creatorPrefix?: string;
  hookPrefix?: string;
}

/**
 * The name mappers for helper functions.
 */
export interface HelperFuncNameMappers {
  /**
   * the key is a pattern to apply rules of followed body and prefix. case insensitive
   * .e.g: cosmos.gov.v1beta1.*Vote*
   */
  [key: string]: {
    // change the method name to a new name to make the body part without the prefix, if pattern matched.
    // Otherwise, see defaults in Query and Msg.
    funcBody: "unchanged" | "get" | ((name: string) => string);
    // prefix for the creator function, if pattern matched. Otherwise, default to "create"
    creatorPrefix?: string;
    // prefix for the hook function, if pattern matched. Otherwise, default to "use"
    hookPrefix?: string;
  };
}

export interface TelescopeOpts {
  env?: "default" | "v-next";
  useInterchainJs?: boolean;
  removeUnusedImports?: boolean;
  classesUseArrowFunctions?: boolean;
  useSDKTypes?: boolean;
  includeExternalHelpers?: boolean;
  restoreImportExtension?: string;

  logLevel?: TelescopeLogLevel;

  interfaces?: {
    enabled?: boolean;
    useGlobalDecoderRegistry?: boolean;
    useUseInterfacesParams?: boolean;
    useByDefault?: boolean;
    useByDefaultRpc?: boolean;
    useUnionTypes?: boolean;
  };

  prototypes?: {
    enabled?: boolean;
    parser?: {
      keepCase?: boolean;
      alternateCommentMode?: boolean;
      preferTrailingComment?: boolean;
    };
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
    };
    strictNullCheckForPrototypeMethods?: boolean;
    paginationDefaultFromPartial?: boolean;
    includePackageVar?: boolean;
    fieldDefaultIsOptional?: boolean;
    useOptionalNullable?: boolean;
    allowUndefinedTypes?: boolean;
    allowEncodeDefaultScalars?: boolean;
    isScalarDefaultToNullable?: boolean;
    enforceNullCheck?: boolean;

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
        useEnhancedDecimal?: boolean;
        base64Lib?: "@endo/base64";
      };

      num64?: "long" | "bigint";
      useDeepPartial?: boolean;
      useExact?: boolean;
      toJsonUnknown?: boolean;
      timestamp?: "date" | "timestamp";
      duration?: "duration" | "string";

      setDefaultEnumToUnrecognized?: boolean;
      autoFixUndefinedEnumDefault?: boolean;
      setDefaultCustomTypesToUndefined?: boolean;

      // temporary field to avoid breaking changes
      updatedDuration?: boolean;

      useTelescopeGeneratedType?: boolean;
    };

    patch?: {
      [key: string]: Operation[];
    };
  };

  enums?: {
    useCustomNames?: boolean;
  };

  tsDisable?: {
    files?: string[];
    disableAll?: boolean;
    patterns?: string[];
  };

  eslintDisable?: {
    files?: string[];
    disableAll?: boolean;
    patterns?: string[];
  };

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
    addGetTxRpc?: boolean;
  };

  aminoEncoding?: {
    enabled: boolean;
    customTypes?: {
      useCosmosSDKDec?: boolean;
    };
    omitEmptyTags?: ("omitempty" | "dont_omitempty")[];
    useProtoOptionality?: boolean;
    disableMsgTypes?: boolean;
    casingFn?: Function;
    exceptions?: AminoExceptions;
    typeUrlToAmino?: (typeUrl: string) => string | undefined;
    // temporary field for backwards compat

    /**
     * @deprecated The logic of useLegacyInlineEncoding will be deprecated in the future.
     */
    useLegacyInlineEncoding?: boolean;
    legacy?: {
      useNullHandling?: boolean;
      useOmitEmpty?: boolean;
    };
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
    type?: "tendermint" | "grpc-web" | "grpc-gateway";
    clientStyle?: {
      useUpdatedClientStyle?: boolean,
      type?: ("all-client" | "sdk-module-client" | "custom-client")[],
      customClientOption?: {
        name: string;
        fileName: string;
        include?: {
          patterns?: string[];
        };
      }[],
      sdkModuleClientOption?: string[],
    }
    enabled: boolean;
    inline?: boolean;
    extensions?: boolean;
    camelCase?: boolean;
    scopedIsExclusive?: boolean;
    bundle?: boolean;
    serviceImplement?: {
      [
      key:
        | "Msg"
        | "Query"
        | "Service"
        | "ReflectionService"
        | "ABCIApplication"
        | string
      ]: {
        include?: {
          patterns?: string[];
        };
        type: "Query" | "Tx" | string;
      };
    };
    enabledServices?: (
      | "Msg"
      | "Query"
      | "Service"
      | "ReflectionService"
      | "ABCIApplication"
      | string
    )[];
    scoped?: {
      dir: string;
      filename?: string;
      packages: string[];
      protos?: string[];
      addToBundle: boolean;
      methodNameQuery?: string;
      methodNameTx?: string;
    }[];
    instantOps?: {
      className: string;
      include?: {
        // a group of types of service to include, undefined for All.
        serviceTypes?: ("Query" | "Tx" | string)[];
        patterns?: string[];
      };
      nameMapping?: {
        All: {
          [key: string]: string;
        };
        Query?: {
          [key: string]: string;
        };
        Msg?: {
          [key: string]: string;
        };
      };
    }[];
    useConnectComet?: boolean;
  };
  helperFuncCreators?: {
    enabled: boolean;
    genCustomHooks?: boolean;
    include?: {
      // a group of types of service to include, undefined for All.
      serviceTypes?: ("Query" | "Tx")[];
      // case insensitive
      patterns?: string[];
    };
    nameMappers?: {
      /**
       * to map the method name based on the rules of followed body and prefix.
       * funcBody default to "unchanged"
       */
      All?: HelperFuncNameMappers;
      /**
       * to map the method name based on the rules of followed body and prefix.
       * this will override the All rules if pattern exists.
       * funcBody default to "get"
       */
      Query?: HelperFuncNameMappers;
      /**
       * to map the method name based on the rules of followed body and prefix.
       * this will override the All rules if pattern exists.
       * funcBody default to "unchanged"
       */
      Msg?: HelperFuncNameMappers;
    };
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
    };
    instantExport?: {
      include: {
        patterns?: string[];
      };
      nameMapping?: {
        [key: string]: string;
      };
    };
  };
  vueQuery?: {
    enabled: boolean;
    include?: {
      /**
       * @deprecated in favor of packages and protos supporting minimatch
       */
      patterns?: string[];
      packages?: string[];
      protos?: string[];
    };
  },
  mobx?: {
    enabled: boolean;
    include?: {
      /**
       * @deprecated in favor of packages and protos supporting minimatch
       */
      patterns?: string[];
      packages?: string[];
      protos?: string[];
    };
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
    };
  };
}
interface TelescopePackageOpts {
  packages?: Record<string, any>;
}

export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;

export type TelescopeOption = keyof TelescopeOpts;

export const defaultTelescopeOptions: TelescopeOptions = {
  // global options (can be overridden through plugins)

  env: "default",
  removeUnusedImports: true,
  classesUseArrowFunctions: false,
  useSDKTypes: true,
  includeExternalHelpers: false,
  logLevel: TelescopeLogLevel.None,

  interfaces: {
    enabled: true,
    useByDefault: true,
    useByDefaultRpc: true,
    useUnionTypes: false,
  },

  prototypes: {
    enabled: true,
    parser: {
      keepCase: false,
      alternateCommentMode: true,
      preferTrailingComment: false,
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
        useCosmosSDKDec: true,
      },
      num64: "bigint",
      useDeepPartial: false,
      useExact: false,
      toJsonUnknown: false,
      timestamp: "date",
      duration: "duration",
      updatedDuration: false,

      setDefaultEnumToUnrecognized: true,
      autoFixUndefinedEnumDefault: false,
    },
  },

  enums: {
    useCustomNames: false,
  },

  bundle: {
    enabled: true,
  },

  tsDisable: {
    files: [],
    patterns: [],
    disableAll: false,
  },

  eslintDisable: {
    files: [],
    patterns: [],
    disableAll: false,
  },

  stargateClients: {
    enabled: true,
    includeCosmosDefaultTypes: true,
  },

  aminoEncoding: {
    enabled: true,
    customTypes: {
      useCosmosSDKDec: false,
    },
    omitEmptyTags: ["omitempty", "dont_omitempty"],
    casingFn: snake,
    exceptions: {
      ...DEFAULT_AMINO_EXCEPTIONS,
    },
  },
  lcdClients: {
    bundle: true,
    enabled: true,
    scopedIsExclusive: true,
  },
  rpcClients: {
    type: "tendermint",
    clientStyle: {
      useUpdatedClientStyle: false,
    },
    enabled: true,
    extensions: true,
    inline: false,
    bundle: true,
    camelCase: true,
    enabledServices: ["Msg", "Query", "Service"],
    scopedIsExclusive: true,
  },

  reactQuery: {
    enabled: false,
    include: {
      patterns: [],
      packages: [],
      protos: [],
    },
  },

  vueQuery: {
    enabled: false,
    include: {
      patterns: [],
      packages: [],
      protos: [],
    },
  },

  mobx: {
    enabled: false,
    include: {
      patterns: [],
      packages: [],
      protos: [],
    },
  },

  pinia: {
    enabled: false,
    include: {
      patterns: [],
      packages: [],
      protos: [],
    },
  },

  // packages
  packages: {
    cosmos: {
      stargateClients: {
        includeCosmosDefaultTypes: false,
      },
    },
    osmosis: {
      aminoEncoding: {
        casingFn: camel,
      },
    },
  },
};
