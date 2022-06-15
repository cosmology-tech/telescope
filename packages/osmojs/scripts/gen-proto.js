import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { camel, snake } from 'case';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '/../src/proto');

telescope({
  protoDirs,
  outPath,
  options: {
    includeAminos: true,
    includeLCDClient: false
  },
  plugins: [
    {
      name: 'aminoCasing',
      plugin: ({ protoPackage }) => {
        if (protoPackage.startsWith('osmosis')) {
          return camel;
        }
        return snake;
      }
    }
  ]
});
