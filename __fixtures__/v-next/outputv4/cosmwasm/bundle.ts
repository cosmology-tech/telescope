import * as _147 from "./wasm/v1/genesis.js";
import * as _148 from "./wasm/v1/ibc.js";
import * as _149 from "./wasm/v1/proposal.js";
import * as _150 from "./wasm/v1/query.js";
import * as _151 from "./wasm/v1/tx.js";
import * as _152 from "./wasm/v1/types.js";
import * as _434 from "./wasm/v1/tx.amino.js";
import * as _435 from "./wasm/v1/tx.registry.js";
import * as _436 from "./wasm/v1/query.lcd.js";
import * as _437 from "./wasm/v1/query.rpc.Query.js";
import * as _438 from "./wasm/v1/tx.rpc.msg.js";
import * as _544 from "./lcd.js";
import * as _545 from "./rpc.query.js";
import * as _546 from "./rpc.tx.js";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._434,
      ..._435,
      ..._436,
      ..._437,
      ..._438
    };
  }
  export const ClientFactory = {
    ..._544,
    ..._545,
    ..._546
  };
}