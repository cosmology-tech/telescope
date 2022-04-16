import { existsSync } from 'fs';
import { prompt } from '../prompt';
import shell from 'shelljs';
import { sync as glob } from 'glob';
import { sync as mkdirp } from 'mkdirp';

export default async (argv) => {

  const questions = [
    {
      _: true,
      type: 'path',
      name: 'protoPath',
      message: 'which directory contains the the output .proto files?',
      default: './proto'
    },
    {
      _: true,
      type: 'path',
      name: 'outPath',
      message: 'where is the output directory?',
      default: './out/proto'
    },
    {
      _: true,
      type: 'string',
      name: 'tsProtoBin',
      message: 'where is the ts-proto bin file?',
      default: './node_modules/.bin/protoc-gen-ts_proto'
    }
  ];

  const { protoPath, outPath, tsProtoBin } = await prompt(questions, argv);

  const pattern = '/**/*.proto';
  const protos = glob(protoPath + pattern);

  if (!protos.length) {
    console.error("no proto files found!");
    process.exit(1);
  }

  if (!existsSync(tsProtoBin)) {
    console.error('cannot find ts-proto .bin cmd');
    process.exit(1);
  }

  const cmd = [
    'protoc',
    `--plugin="${tsProtoBin}"`,
    `--ts_proto_out="${outPath}"`,
    `--proto_path="${protoPath}"`,
    `--ts_proto_opt="esModuleInterop=true,forceLong=string,useOptionals='messages',outputClientImpl=true"`,
    ...protos
  ];

  console.log(cmd.join(' \\ \n'));

  mkdirp(outPath);
  shell.exec(cmd.join(' '));

};
