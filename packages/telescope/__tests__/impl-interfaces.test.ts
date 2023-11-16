import { TelescopeBuilder } from "../src/builder";
import { DepositDeploymentAuthorization } from "../../../__fixtures__/misc/output-impl-interfaces/akash/deployment/v1beta1/authz";
import {
  GenericAuthorization,
  Grant,
} from "../../../__fixtures__/misc/output-impl-interfaces/cosmos/authz/v1beta1/authz";
import { Any } from "../../../__fixtures__/misc/output-impl-interfaces/google/protobuf/any";
import deepmerge from "deepmerge";
import { TelescopeOptions } from "@cosmology/types";

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

describe("implements interface works", () => {
  beforeAll(async () => {
    const testFolder = "/output-impl-interfaces-gen";

    const telescope = new TelescopeBuilder({
      outPath: __dirname + "/../../../__fixtures__/misc" + testFolder,
      protoDirs: [__dirname + "/../../../__fixtures__/misc/proto-impl-interfaces"],
      options: deepmerge(options, {
        interfaces: {
          enabled: true,
          useGlobalDecoderRegistry: true,
          useUnionTypes: true,
        },

        useSDKTypes:true,

        prototypes: {
          addTypeUrlToDecoders: false,
          methods: {
            toSDK: false,
            fromSDK: false,
            fromSDKJSON: false,
            toAmino: false,
            fromAmino: false,
            toProto: true,
            fromProto: true,
          },
        },

        aminoEncoding: {
          enabled: true,
          useLegacyInlineEncoding: false,
        },
      }),
    });

    await telescope.build();

  });

  it("encodes and decodes", () => {
    const data = Grant.encode({
      authorization: {
        msg: "pass",
      },
      expiration: new Date(),
    }).finish();

    const message = Grant.decode(data);

    expect(
      GenericAuthorization.is(message.authorization)
        ? message.authorization.msg
        : ""
    ).toBe("pass");

    if (message.authorization) {
      if (GenericAuthorization.is(message.authorization)) {
        expect(message.authorization.msg).toBe("pass");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("encodes and decodes Any", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date(),
    }).finish();

    const message = Grant.decode(data);

    expect((message.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("encodes and decodes wrong types with error", () => {
    const auth = {
      num: 1,
    };
    expect(() => {
      Grant.encode({
        authorization: auth as unknown as Any,
        expiration: new Date(),
      });
    }).toThrowError(
      `There's no decoder for the instance ${JSON.stringify(auth)}`
    );
  });

  it("toJson for extended interface", () => {
    const data = Grant.encode({
      authorization: {
        msg: "pass",
      },
      expiration: new Date("2020-01-01"),
    }).finish();

    const message = Grant.decode(data);

    const json = Grant.toJSON(message);

    expect(json).toMatchSnapshot();
  });

  it("toJson for Any", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date("2020-01-01"),
    }).finish();

    const message = Grant.decode(data);

    const json = Grant.toJSON(message);

    expect(json).toMatchSnapshot();
  });

  it("fromJSON for extended interface", () => {
    const message = Grant.fromJSON({
      authorization: {
        msg: "pass",
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (GenericAuthorization.is(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.msg).toBe("pass");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("fromJSON for extended interface with $typeUrl", () => {
    const message = Grant.fromJSON({
      authorization: {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        msg: "pass",
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (GenericAuthorization.is(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.msg).toBe("pass");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("fromJSON for extended interface with wrong $typeUrl", () => {
    const auth = {
      $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization.wrong",
      msg: "pass",
    };

    expect(() => {
      Grant.fromJSON({
        authorization: auth,
        expiration: new Date("2020-01-01"),
      });
    }).toThrowError(
      `There's no decoder for the instance ${JSON.stringify(auth)}`
    );
  });

  it("fromJSON for Any", () => {
    const message = Grant.fromJSON({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    expect((decodedMessage.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("fromPartial for Any", () => {
    const message = Grant.fromPartial({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    expect((decodedMessage.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("fromPartial for encoded extended interface", () => {
    const message = Grant.fromPartial({
      authorization: {
        msg: "pass",
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (GenericAuthorization.is(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.msg).toBe("pass");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });
});
