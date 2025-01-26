import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _440 from "./wasm/v1/tx.amino";
import * as _441 from "./wasm/v1/tx.registry";
import * as _442 from "./wasm/v1/query.lcd";
import * as _443 from "./wasm/v1/query.rpc.Query";
import * as _444 from "./wasm/v1/tx.rpc.msg";
import * as _550 from "./lcd";
import * as _551 from "./rpc.query";
import * as _552 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._440,
      ..._441,
      ..._442,
      ..._443,
      ..._444
    };
  }
  export const ClientFactory = {
    ..._550,
    ..._551,
    ..._552
  };
}