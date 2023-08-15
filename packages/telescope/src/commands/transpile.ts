import { prompt } from '../prompt';
import telescope from '../index';
import { writeFileSync, readFileSync } from 'fs';
import { defaultTelescopeOptions } from '@cosmology/types';
import * as path from 'path'
import * as dotty from 'dotty';

export default async (argv: {
  [key: string]: string | string[]
}) => {
  let options: {
    [key: string]: unknown
  } = {}
  if (argv.useDefaults) {
    const defaultOptions = { ...defaultTelescopeOptions };

    dotty.remove(defaultOptions, "aminoEncoding");
    dotty.remove(defaultOptions, "packages");

    options = defaultOptions;
  } else {
    options = {
      // global options (can be overridden through plugins)


      interfaces: {
        enabled: false,
        useUnionTypes: false,
      },

      prototypes: {
        enabled: true,
        parser: {
          keepCase: false
        },
        methods: {
          fromJSON: false,
          toJSON: false,
          encode: true,
          decode: true,
          fromPartial: true,
          toAmino: true,
          fromAmino: true,
          fromProto: true,
          toProto: true
        },
        addTypeUrlToDecoders: true,
        addTypeUrlToObjects: true,

        typingsFormat: {
          duration: 'duration',
          timestamp: 'date',
          useExact: false,
          useDeepPartial: false,
          num64: 'bigint',
          customTypes: {
            useCosmosSDKDec: true
          }
        },
      },

      bundle: {
        enabled: true
      },

      stargateClients: {
        enabled: true,
        includeCosmosDefaultTypes: true
      },

      aminoEncoding: {
        enabled: true,
        useRecursiveV2encoding: false
      },

      lcdClients: {
        enabled: true
      },

      rpcClients: {
        enabled: true,
        camelCase: true
      }
    }

  }

  const questions = [
    {
      _: true,
      type: 'path',
      name: 'protoDirs',
      message: 'where is the proto directory?',
      default: './proto'
    },
    {
      _: true,
      type: 'path',
      name: 'outPath',
      message: 'where is the output directory?',
      default: './src/codegen'
    }
  ];

  if (argv.config) {
    const { config } = argv;
    const inputConfigFullPath = path.resolve(Array.isArray(config) ? config[0] : config);
    let configJson = null;

    try {
      const configText = readFileSync(inputConfigFullPath, {
        encoding: 'utf8'
      })
      configJson = JSON.parse(configText);
    } catch (ex) {
      console.log(ex);
      throw new Error("Must provide a .json file for --config.");
    }

    // append protoDirs in config to argv.protoDirs
    argv.protoDirs = [
      ...(argv.protoDirs
        ? Array.isArray(argv.protoDirs)
          ? argv.protoDirs
          : [argv.protoDirs]
        : []),
      ...(configJson.protoDirs ?? []),
    ];

    if (configJson.outPath) {
      argv.outPath = configJson.outPath;
    }

    // For now, useDefaults will be override by --config
    if (configJson.options) {
      options = configJson.options;
    }
  }


  let {
    protoDirs,
    outPath,
  } = await prompt(questions, argv);

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }

  // remove any duplicate protodirs
  protoDirs = [...new Set(protoDirs)];

  writeFileSync(
    process.cwd() + '/.telescope.json',
    JSON.stringify(
      {
        protoDirs,
        outPath,
        options
      }, null, 2)
  );

  await telescope({
    protoDirs,
    outPath,
    options
  });

  console.log(`✨ transpilation successful!`);
};