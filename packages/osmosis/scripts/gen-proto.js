import { join, resolve } from 'path';
import telescope from '@cosmonauts/telescope';
import { camel, snake } from 'case';

const protoPath = resolve(join(__dirname, '..', 'out', 'proto'));
const outPath = resolve(__dirname, '..', 'src' ,'proto');

telescope(protoPath, outPath, [
    {
        name: 'aminoCasing',
        plugin: ({protoPackage}) => {
            if (protoPackage.startsWith('osmosis')) {
                return camel;
            }
            return snake;
        }
    }
]);
