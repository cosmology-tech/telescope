import { prompt } from '../prompt';
import telescope from '../index';
import { writeFileSync, readFileSync } from 'fs';
import { defaultTelescopeOptions } from '@osmonauts/types';
import * as path from 'path'
import * as dotty from 'dotty';

const OPTIONS_FIELD_MAPPINGS = {
  build: "prototypes.includes.protos",
  nobuild: "prototypes.excluded.protos",
  includeAminos: "aminoEncoding.enabled",
  includeLCDClients: "lcdClients.enabled",
  includeRPCClients: "rpcClients.enabled",
};

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
    },
    {
      _: true,
      type: 'path',
      name: 'build',
      message: 'which files to include. ex: osmosis/**/gamm/**/*.proto or cosmos/bank/v1beta1/bank.proto',
    },
    {
      _: true,
      type: 'path',
      name: 'nobuild',
      message: 'which files to exclude. ex: osmosis/**/gamm/**/*.proto or cosmos/bank/v1beta1/bank.proto',
    },
    {
      type: 'confirm',
      name: 'includeAminos',
      message: 'output amino messages?',
      default: true
    },
    {
      type: 'confirm',
      name: 'includeLCDClients',
      message: 'output LCD Clients?',
      default: true
    },
    {
      type: 'confirm',
      name: 'includeRPCClients',
      message: 'output RPC clients?',
      default: true
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

    if(configJson.outPath) {
      argv.outPath = configJson.outPath;
    }

    // For now, useDefaults will be override by --config
    if(configJson.options){
      options = configJson.options;
    }
  }

  // map options to argv
  mapOptionsToArgv(options, argv, OPTIONS_FIELD_MAPPINGS);

  let {
    protoDirs,
    outPath,
    ...answers
  } = await prompt(questions, argv);

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }

  // remove any duplicate protodirs
  protoDirs = [...new Set(protoDirs)];

  // map argv back to configs
  mapArgvToOptions(answers, options, OPTIONS_FIELD_MAPPINGS);

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

function mapOptionsToArgv(
  options: {
    [key: string]: unknown;
  },
  argv: {
    [key: string]: string | string[];
  },
  mappings: {
    [key: string]: string;
  }
) {
  for (const argvKey in mappings) {
    if (Object.prototype.hasOwnProperty.call(mappings, argvKey)) {
      const optionKey = mappings[argvKey];

      const value = dotty.get(options, optionKey);

      if(value){
        dotty.put(argv, argvKey, value)
      }
    }
  }
}

function mapArgvToOptions(
  argv: {
    [key: string]: string | string[];
  },
  options: {
    [key: string]: unknown;
  },
  mappings: {
    [key: string]: string;
  }
) {
  for (const argvKey in mappings) {
    if (Object.prototype.hasOwnProperty.call(mappings, argvKey)) {
      const optionKey = mappings[argvKey];

      const value = dotty.get(argv, argvKey);

      if(value){
        dotty.put(options, optionKey, value)
      }
    }
  }
}