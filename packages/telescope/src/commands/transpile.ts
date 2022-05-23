import { prompt } from '../prompt';
import telescope from '../index';

export default async (argv) => {

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
      name: 'includeLCDClient',
      message: 'output LCD Clients?',
      default: false
    }
  ];

  let { protoDirs, outPath, includeAminos, includeLCDClient } = await prompt(questions, argv);

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }

  telescope({ protoDirs, outPath, options: { includeAminos, includeLCDClient } });

  console.log(`✨ transpilation successful!`);
};