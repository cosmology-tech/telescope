import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../../../__fixtures__/chain1')];
const outPath = join(__dirname, '/../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    prototypes: {
      excluded: {
        packages: [
          'cosmos.group.v1'
        ]
      },
      methods: {
        fromJSON: false,
        toJSON: false
      },
      parser: {
        keepCase: false
      },
      typingsFormat: {
        duration: 'duration',
        timestamp: 'date',
        useExact: false
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
}).then(()=>{
  console.log('✨ all done!');
}).catch(e=>{
  console.error(e);
  process.exit(1);
});
