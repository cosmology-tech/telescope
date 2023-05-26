import { prompt } from '../prompt';
import telescope from '../index';
import path from 'path';
import { writeFileSync } from 'fs';
import { TelescopeOptions, defaultTelescopeOptions, TelescopeIncludes } from '@osmonauts/types';

export default async (argv) => {
  if (argv.useDefaults) {
    const SKIP = ['aminoEncoding', 'packages'];
    Object.keys(defaultTelescopeOptions)
      .forEach(key => {
        if (SKIP.includes(key)) return;
        argv[key] = defaultTelescopeOptions[key]
      })
  }

  // Set config file as a separate Q to allow us to skip the rest of the interactive prompts if valid json is provided.
  const configQ = [
    {
      type: 'path',
      name: 'config',
      message: 'where is the config file?',
      default: './.telescope.json'
    }
  ];

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
      name: 'includeDirs',
      message: 'where is the include directory?',
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

  // Get the config filename and path
  let { config } = await prompt(configQ, argv);
  let configFullPath = path.resolve(...config.split('/'));
  // Create empy config object
  let conf: TelescopeOptions & TelescopeIncludes = {};
  // Extract provided protoDirs from argv
  let { protoDirs: extraProtoDirs, ...args } = argv;
  if (!Array.isArray(extraProtoDirs)) {
    extraProtoDirs = [extraProtoDirs];
  }
  try {
    // Read the config JSON
    let json = require(configFullPath);
    // Assign values from config JSON to our empty config object
    Object.assign(conf, json);
    // Override any options with explicitly provided ones
    Object.assign(conf, args);
    // Append provided protoDirs if any    
    if (extraProtoDirs) {
      conf.protoDirs = [...(conf.protoDirs ?? []), ...extraProtoDirs];
    }
  } catch (_e) {
    if (path.extname(config).toLowerCase() != '.json') {
      // if not JSON exit.
      throw new Error('Must provide a .json file for --config.');
    } else {
      // New config file to create. copy provided argv to our empty conf object
      console.log("Config will be written to: " + configFullPath);
      Object.assign(conf, argv);
    }
  }
  // Get missing options interactively.
  let {
    protoDirs,
    includeDirs,
    outPath,
    includeAminos,
    includeLCDClients,
    includeRPCClients,
  } = await prompt(questions, conf);

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }
  if (!Array.isArray(includeDirs)) {
    includeDirs = [includeDirs];
  }
  // remove any duplicate protodirs
  protoDirs = [...new Set(protoDirs)];
  includeDirs = [...new Set(includeDirs)];
  const options = {
    aminoEncoding: {
      enabled: includeAminos
    },
    lcdClients: {
      enabled: includeLCDClients
    },
    rpcClients: {
      enabled: includeRPCClients,
    }
  };
  // Write out final config to provided config path.
  writeFileSync(
    configFullPath,
    JSON.stringify(
      {
        protoDirs,
        includeDirs,
        outPath,
        includeAminos,
        includeLCDClients,
        includeRPCClients,
        options
      }, null, 2)
  );

  await telescope({
    protoDirs,
    includeDirs,
    outPath,
    options
  });

  console.log(`✨ transpilation successful!`);
};