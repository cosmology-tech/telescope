import { prompt } from '../prompt';
import telescope from '../index';

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

  const { protoDir, outPath } = await prompt(questions, argv);
  telescope({ protoDir, outPath })
};