import { TelescopeBuilder } from "../src/builder";
import { TelescopeOptions } from "@cosmology/types";
import { TelescopeInput } from "../src";

const outPath = __dirname + "/../../../__fixtures__/misc/output";

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
    useLegacyInlineEncoding: false
  },
};

const input: TelescopeInput = {
  outPath,
  protoDirs: [__dirname + "/../../../__fixtures__/misc/proto"],
  options,
};

const telescope = new TelescopeBuilder(input);

describe("misc", () => {
  it("generates", async () => {
    await telescope.build();
  });
});
