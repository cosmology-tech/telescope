import { TelescopeInput } from "..";
import { TelescopeBuilder } from "../builder";
import { TelescopeOptions } from "@cosmology/types";

import { clone, extractProto } from "./recursive";
import { findAllProtoFiles, removeFolder } from "./utils";

import { join } from "path";

import { sync as globSync } from "glob";
import { file } from "@babel/types";

const GIT_MOUDLES = "git-modules";
let gitModules = join(
  __dirname,
  "../../../../__fixtures__/misc/proto-download",
  GIT_MOUDLES
);
const PROTO_FOLDER = "proto";
let protoFolder = join(
  __dirname,
  "../../../../__fixtures__/misc/proto-download",
  PROTO_FOLDER
);
const CODEGEN_FOLDER = "codegen";
let codegenFolder = join(
  __dirname,
  "../../../../__fixtures__/misc/proto-download",
  CODEGEN_FOLDER
);

const options: TelescopeOptions = {
  classesUseArrowFunctions: true,
  env: "v-next",
  useSDKTypes: false,
  prototypes: {
    useOptionalNullable: true,
    fieldDefaultIsOptional: false,
    enableRegistryLoader: false,
    enableMessageComposer: false,
    enabled: true,
    parser: {
      keepCase: false,
    },
    methods: {
      fromJSON: false,
      toJSON: false,
      encode: true,
      decode: true,
      fromPartial: true,
      toAmino: false,
      fromAmino: false,
      fromProto: false,
      toProto: false,
    },
    addTypeUrlToDecoders: false,
    addTypeUrlToObjects: true,
    addAminoTypeToObjects: true,
    typingsFormat: {
      duration: "duration",
      timestamp: "date",
      useExact: false,
      useDeepPartial: true,
      num64: "bigint",
      customTypes: {
        useCosmosSDKDec: false,
      },
      useTelescopeGeneratedType: true,
    },
  },
  bundle: {
    enabled: false,
  },
  stargateClients: {
    enabled: false,
  },
  lcdClients: {
    enabled: false,
  },
  rpcClients: {
    enabled: false,
    inline: false,
    extensions: false,
    camelCase: true,
    enabledServices: ["Query"],
  },
  interfaces: {
    enabled: false,
  },
  aminoEncoding: {
    enabled: false,
  },
};

const input: TelescopeInput = {
  outPath: codegenFolder,
  protoDirs: [protoFolder],
  options,
};

describe("Test `clone`", () => {
  it("should download `cosmos-sdk`, `googleapis`, `protobuf` to `./git-modules` and extract `cosmos/bank/v1beta1/tx.proto` to `./proto`", async () => {
    removeFolder(gitModules);
    const result = await clone({
      owner: "cosmos",
      repo: "cosmos-sdk",
      outDir: gitModules,
      branch: "release/v0.50.x",
      protoDirMapping:{
        "gogo/protobuf/master": ".",
      }
    });

    if (result) {
      removeFolder(protoFolder);
      extractProto({
        targets: ["cosmos/bank/v1beta1/tx.proto"],
        sources: result,
        outDir: protoFolder,
      });
    }
  });

  it("should successfully generate code in `./codegen`", async () => {
    removeFolder(codegenFolder);
    const telescope = new TelescopeBuilder(input);
    await telescope.build();
  });
});
