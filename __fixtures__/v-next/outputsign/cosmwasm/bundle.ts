import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _392 from "./wasm/v1/query.lcd";
import * as _393 from "./wasm/v1/query.rpc.Query";
import * as _394 from "./wasm/v1/tx.rpc.msg";
import * as _472 from "./lcd";
import * as _473 from "./rpc.query";
import * as _474 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._392,
      ..._393,
      ..._394
    };
  }
  export const ClientFactory = {
    ..._472,
    ..._473,
    ..._474
  };
}