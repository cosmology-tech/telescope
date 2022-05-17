
import _generate from './commands/generate';
import _install from './commands/install';
import _transpile from './commands/transpile';
const Commands = {};
Commands['generate'] = _generate;
Commands['install'] = _install;
Commands['transpile'] = _transpile;

  export { Commands }; 

  