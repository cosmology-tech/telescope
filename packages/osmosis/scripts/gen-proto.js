import { join, resolve } from 'path';
import telescope from '@cosmonauts/telescope';

const protoPath = resolve(join(__dirname, '..', 'out', 'proto'));
const outPath = resolve(__dirname, '..', 'src' ,'proto');

telescope(protoPath, outPath);
