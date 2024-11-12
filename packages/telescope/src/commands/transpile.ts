import { prompt } from '../prompt';
import telescope from '../index';
import { writeFileSync, readFileSync } from 'fs';
import { defaultTelescopeOptions } from '@cosmology/types';
import * as path from 'path'
import * as dotty from 'dotty';
import deepmerge from 'deepmerge';

export default async (argv: {
  [key: string]: string | string[]
}) => {
  let options: {
    [key: string]: unknown
  } = {}
  let protoDirs
  let outPath
  let data: any
  try{
  //check if there's valid .telescope.json file to use
  data = JSON.parse(readFileSync('./.telescope.json', {
    encoding: 'utf8'
  }))
  } catch(e){}

  if (data?.protoDirs && data?.outPath && data?.options) {
    protoDirs = data.protoDirs
    outPath = data.outPath
    options = data.options
  } else {
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
          useByDefault: false,
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
          addTypeUrlToObjects: true,
          addTypeUrlToDecoders: true,

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
      const configs = Array.isArray(config) ? config : [config];
      const inputConfigFullPaths = configs.map(c => path.resolve(c));
      let configJson;

      for (const inputConfigPath of inputConfigFullPaths) {
        try {
          const configText = readFileSync(inputConfigPath, {
            encoding: 'utf8'
          })
          if (configJson) {
            configJson = deepmerge(configJson, JSON.parse(configText));
          } else {
            configJson = JSON.parse(configText);
          }
        } catch (ex) {
          console.log(ex);
          throw new Error("Must provide a .json file for --config.");
        }
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

    {
      ({ protoDirs, outPath } = await prompt(questions, argv));
    }

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
  }

  await telescope({
    protoDirs,
    outPath,
    options
  });

  console.log(`✨ transpilation successful!`);
};