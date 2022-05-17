import { prompt } from '../prompt';
import telescope from '../index';
import { resolve, join } from 'path';

export default async (argv) => {

  const questions = [
    {
      _: true,
      type: 'path',
      name: 'protoDir',
      message: 'where is the proto directory?',
      default: './proto'
    },
    {
      _: true,
      type: 'path',
      name: 'outPath',
      message: 'where is the output directory?',
      default: './src/proto'
    }
  ];

  let { protoDir, outPath } = await prompt(questions, argv);

  protoDir = resolve(join(process.cwd(), protoDir));
  outPath = resolve(process.cwd(), outPath);

  telescope({ protoDir, outPath })
};