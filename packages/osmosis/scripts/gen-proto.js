import { join, resolve } from 'path';
import telescope from '@osmonauts/telescope';
import { camel, snake } from 'case';

const protoDir = resolve(join(__dirname, '..', 'out', 'proto'));
const outPath = resolve(__dirname, '..', 'src' ,'proto');

telescope({protoDir, outPath, plugins: [
    {
        name: 'aminoCasing',
        plugin: ({protoPackage}) => {
            if (protoPackage.startsWith('osmosis')) {
                return camel;
            }
            return snake;
        }
    }
]});
