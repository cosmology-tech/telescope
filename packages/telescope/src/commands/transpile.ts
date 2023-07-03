import { prompt } from '../prompt';
import telescope from '../index';
import { writeFileSync } from 'fs';
import { defaultTelescopeOptions } from '@osmonauts/types';

export default async (argv) => {

  if (argv.useDefaults) {
    const SKIP = ['aminoEncoding', 'packages'];
    Object.keys(defaultTelescopeOptions)
      .forEach(key => {
        if (SKIP.includes(key)) return;
        argv[key] = defaultTelescopeOptions[key]
      })
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

  let {
    protoDirs,
    outPath,
    build,
    nobuild,
    includeAminos,
    includeLCDClients,
    includeRPCClients,
  } = await prompt(questions, argv);

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }

  const options: any = {
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

  if(build || nobuild){
    if(!options.prototypes){
      options.prototypes = {}
    }

  }

  if(build){
    if (!Array.isArray(build)) {
      build = [build];
    }

    if(!options.prototypes.includes){
      options.prototypes.includes = {}
    }

    options.prototypes.includes.protos = build;
  }

  if(nobuild){
    if (!Array.isArray(nobuild)) {
      nobuild = [nobuild];
    }

    if(!options.prototypes.excluded){
      options.prototypes.excluded = {}
    }

    options.prototypes.excluded.protos = nobuild;
  }

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