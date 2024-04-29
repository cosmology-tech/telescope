#!/usr/bin/env node
import { cli } from './cli';
var argv = require('minimist')(process.argv.slice(2), {
  boolean: ['ssh']
});

(async () => {
  await cli(argv);
})();
