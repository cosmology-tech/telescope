import { TelescopeBuilder } from "../src/builder";
import deepmerge from "deepmerge";
import { TelescopeOptions } from "@subql/x-cosmology-types";

const options: TelescopeOptions = {
  env: "v-next",
  removeUnusedImports: false,
  classesUseArrowFunctions: false,

  interfaces: {
    enabled: false,
    useUnionTypes: false,
  },

  prototypes: {
    enabled: true,

    excluded: {
      // hard exclude faulty proto files
      hardProtos: ["google/api/expr/v1alpha1/eval1.proto"],
    },

    parser: {
      keepCase: false,
    },
    methods: {
      encode: true,
      decode: true,
      fromJSON: true,
      toJSON: true,
      fromPartial: true,
      toSDK: true,
      fromSDK: true,
      fromSDKJSON: true,
      toAmino: true,
      fromAmino: true,
      toProto: true,
      fromProto: true,
    },
    strictNullCheckForPrototypeMethods: true,
    includePackageVar: true,
    fieldDefaultIsOptional: false,
    useOptionalNullable: true,
    allowUndefinedTypes: false,
    typingsFormat: {
      customTypes: {
        useCosmosSDKDec: true,
      },
      num64: "bigint",
      useDeepPartial: true,
      useExact: false,
      timestamp: "date",
      duration: "duration",
    },
  },

  bundle: {
    enabled: true,
  },

  stargateClients: {
    enabled: true,
    includeCosmosDefaultTypes: true,
  },

  lcdClients: {
    enabled: true,
    scopedIsExclusive: false,
  },

  rpcClients: {
    enabled: true,
    camelCase: true,
    scopedIsExclusive: false,
    enabledServices: [
      "Msg",
      "Query",
      "Service",
      "ReflectionService",
      "ABCIApplication",
    ],
  },

  reactQuery: {
    enabled: true,
    needExtraQueryKey: true,
  },

  mobx: {
    enabled: true,
  },

  pinia: {
    enabled: true,
  },

  aminoEncoding: {
    enabled: true,
    useLegacyInlineEncoding: false,
  },
};

describe("implements interface gen", () => {
  it("gen", async () => {
    const testFolder = "/output-impl-interfaces-gen";

    const telescope = new TelescopeBuilder({
      outPath: __dirname + "/../../../__fixtures__/misc" + testFolder,
      protoDirs: [
        __dirname + "/../../../__fixtures__/misc/proto-impl-interfaces",
      ],
      options: deepmerge(options, {
        interfaces: {
          enabled: true,
          useGlobalDecoderRegistry: true,
          useUnionTypes: true,
        },

        useSDKTypes: true,

        prototypes: {
          addTypeUrlToDecoders: false,
        },

        aminoEncoding: {
          enabled: true,
          useLegacyInlineEncoding: false,
        },
      }),
    });

    await telescope.build();
  });
});

