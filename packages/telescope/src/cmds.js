
import _generate from './commands/generate';
import _transpile from './commands/transpile';
import _ts_proto from './commands/ts-proto';
const Commands = {};
Commands['generate'] = _generate;
Commands['transpile'] = _transpile;
Commands['ts-proto'] = _ts_proto;

  export { Commands }; 

  