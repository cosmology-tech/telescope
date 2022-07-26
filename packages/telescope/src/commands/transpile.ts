import { prompt } from '../prompt';
import telescope from '../index';
import { writeFileSync } from 'fs';
import { defaultTelescopeOptions } from '@osmonauts/types';

export default async (argv) => {

  if (argv.useDefaults) {
    const SKIP = ['aminoCasingFn', 'aminoExceptions', 'packages'];
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
      default: './src/proto'
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
      default: false
    },
    {
      type: 'confirm',
      name: 'includePackageVar',
      message: 'export protobuf package names as variable?',
      default: false
    },
    {
      type: 'confirm',
      name: 'camelRpcMethods',
      message: 'camelcase RpcMethods?',
      default: true
    },
    {
      type: 'confirm',
      name: 'includeRPCClients',
      message: 'output RPC clients?',
      default: false
    },
    {
      type: 'list',
      name: 'useDate',
      message: 'treat timestamps as Date or Timestamp?',
      default: 'date',
      choices: ['date', 'timestamp']
    },
    {
      type: 'list',
      name: 'useDuration',
      message: 'treat durations as Duration or string?',
      default: 'duration',
      choices: ['duration', 'string']
    }
  ];

  let {
    protoDirs,
    outPath,
    includeAminos,
    includeLCDClients,
    includePackageVar,
    camelRpcMethods,
    includeRPCClients,
    useDate,
    useDuration
  } = await prompt(questions, argv);

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }

  const options = {
    includeAminos,
    includeLCDClients,
    includePackageVar,
    camelRpcMethods,
    includeRPCClients,
    useDate,
    useDuration,
    useExact: false
  };

  writeFileSync(
    process.cwd() + '/.telescope.json',
    JSON.stringify(
      {
        protoDirs,
        outPath,
        options
      }, null, 2)
  );

  telescope({
    protoDirs,
    outPath,
    options
  });

  console.log(`✨ transpilation successful!`);
};