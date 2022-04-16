import { prompt } from '../prompt';
import telescope from '../index';

export default async (argv) => {

  const questions = [
    {
      _: true,
      type: 'path',
      name: 'tsProtoPath',
      message: 'which directory contains the the output ts-proto TS files?',
      default: './out/proto'
    },
    {
      _: true,
      type: 'path',
      name: 'outPath',
      message: 'where is the output directory?',
      default: './src/proto'
    }
  ];

  const { tsProtoPath, outPath } = await prompt(questions, argv);
  telescope(tsProtoPath, outPath);
};