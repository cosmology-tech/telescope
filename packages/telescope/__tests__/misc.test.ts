import { TelescopeBuilder } from '../src/builder';
import { TelescopeOptions } from '@cosmology/types';
import { TelescopeInput } from '../src';
import deepmerge from 'deepmerge';

const outPath = __dirname + '/../../../__fixtures__/misc/output';

const options: TelescopeOptions = {
  env: 'v-next',
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
      hardProtos: ['google/api/expr/v1alpha1/eval1.proto'],
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
    isScalarDefaultToNullable: false,
    enforceNullCheck: false,
    allowUndefinedTypes: false,
    typingsFormat: {
      customTypes: {
        useCosmosSDKDec: true,
      },
      num64: 'bigint',
      useDeepPartial: true,
      useExact: false,
      timestamp: 'date',
      duration: 'duration',
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
      'Msg',
      'Query',
      'Service',
      'ReflectionService',
      'ABCIApplication',
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

const input: TelescopeInput = {
  outPath,
  protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
  options,
};

describe('misc', () => {
  it('generates', async () => {
    const telescope = new TelescopeBuilder(input);

    await telescope.build();
  });

  it('generates without amino', async () => {
    const testFolder = '/output-proto-amino/no-amino';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true,
          },
        },
        aminoEncoding: {
          enabled: false,
          useLegacyInlineEncoding: false,
        },
      }),
    });

    await telescope.build();
  });

  it('generates without amino, no proto', async () => {
    const testFolder = '/output-proto-amino/no-amino-no-proto';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: false,
            fromAmino: false,
            toProto: false,
            fromProto: false,
          },
        },
        aminoEncoding: {
          enabled: false,
          useLegacyInlineEncoding: false,
        },
      }),
    });

    await telescope.build();
  });

  it('generates amino legacy', async () => {
    const testFolder = '/output-proto-amino/amino-legacy';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true,
          },
        },
        aminoEncoding: {
          enabled: true,
          useLegacyInlineEncoding: true,
          customTypes: {
            useCosmosSDKDec: true,
          },
        },
      }),
    });

    await telescope.build();
  });

  it('generates without amino but legacy', async () => {
    const testFolder = '/output-proto-amino/no-amino-legacy';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true,
          },
        },
        aminoEncoding: {
          enabled: false,
          useLegacyInlineEncoding: true,
        },
      }),
    });

    await telescope.build();
  });

  it('generates without amino but legacy, no proto', async () => {
    const testFolder = '/output-proto-amino/no-amino-legacy-no-proto';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: false,
            fromAmino: false,
            toProto: false,
            fromProto: false,
          },
        },
        aminoEncoding: {
          enabled: false,
          useLegacyInlineEncoding: true,
        },
      }),
    });

    await telescope.build();
  });

  it('generates, proto only', async () => {
    const testFolder = '/output-proto-amino/proto-only';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: false,
            fromAmino: false,
            toProto: true,
            fromProto: true,
          },
        },
        aminoEncoding: {
          enabled: false,
          useLegacyInlineEncoding: false,
        },
      }),
    });

    await telescope.build();
  });

  it('generates, proto only, isScalarDefaultToNullable true', async () => {
    const testFolder = '/output-scalar-default-nullable-true';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: false,
            fromAmino: false,
            toProto: true,
            fromProto: true,
          },
          isScalarDefaultToNullable: true,
        },
        aminoEncoding: {
          enabled: false,
          useLegacyInlineEncoding: false,
        },
      }),
    });

    await telescope.build();
  });

    it('generates, proto only, enforceNullCheck true', async () => {
      const testFolder = '/enforce-null-check-true';

      const telescope = new TelescopeBuilder({
        outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
        protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
        options: deepmerge(options, {
          prototypes: {
            methods: {
              toAmino: false,
              fromAmino: false,
              toProto: true,
              fromProto: true,
            },
            enforceNullCheck: true,
          },
          aminoEncoding: {
            enabled: false,
            useLegacyInlineEncoding: false,
          },
        }),
      });

      await telescope.build();
    });

  it('generates, proto only, legacy', async () => {
    const testFolder = '/output-proto-amino/proto-only-legacy';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: false,
            fromAmino: false,
            toProto: true,
            fromProto: true,
          },
        },
        aminoEncoding: {
          enabled: false,
          useLegacyInlineEncoding: true,
        },
      }),
    });

    await telescope.build();
  });

  it('generates amino, useMsgTypes, with amino func', async () => {
    const testFolder = '/output-proto-amino/amino-msg-with-func';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true,
          },
          typingsFormat: {
            autoFixUndefinedEnumDefault: true,
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

  it('generates amino, useMsgTypes, no amino func', async () => {
    const testFolder = '/output-proto-amino/amino-msg-no-func';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
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

  it('generates amino, no useMsgTypes, with amino func', async () => {
    const testFolder = '/output-proto-amino/amino-no-msg-with-func';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          methods: {
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true,
          },
        },
        aminoEncoding: {
          enabled: true,
          useLegacyInlineEncoding: false,
          disableMsgTypes: true,
        },
      }),
    });

    await telescope.build();
  });

  it('generates with amino interface', async () => {
    const testFolder = '/output-proto-amino/amino-interface';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        interfaces: {
          enabled: true,
          useGlobalDecoderRegistry: true,
          useUnionTypes: true,
        },
        prototypes: {
          methods: {
            toAmino: true,
            fromAmino: true,
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

  it('generates with amino interface and proto optionality', async () => {
    const testFolder = '/output-proto-amino/amino-interface-proto-optionality';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        interfaces: {
          enabled: true,
          useGlobalDecoderRegistry: true,
          useUnionTypes: true,
        },
        prototypes: {
          methods: {
            toAmino: true,
            fromAmino: true,
            toProto: true,
            fromProto: true,
          },
        },
        aminoEncoding: {
          enabled: true,
          useProtoOptionality: true,
          useLegacyInlineEncoding: false,
        },
      }),
    });

    await telescope.build();
  });

  it('generates with useEnhancedDecimal', async () => {
    const testFolder = '/output-decimals';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          typingsFormat: {
            customTypes: {
              useEnhancedDecimal: true,
            },
          },
        },
      }),
    });

    await telescope.build();
  });

  it('generates with base64 lib', async () => {
    const testFolder = '/output-base64/';

    const telescope = new TelescopeBuilder({
      outPath: __dirname + '/../../../__fixtures__/misc' + testFolder,
      protoDirs: [__dirname + '/../../../__fixtures__/misc/proto'],
      options: deepmerge(options, {
        prototypes: {
          typingsFormat: {
            customTypes: {
              base64Lib: '@endo/base64',
            },
          },
        },
      }),
    });

    await telescope.build();
  });
});
