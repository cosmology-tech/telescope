import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _484 from "./wasm/v1/tx.amino";
import * as _485 from "./wasm/v1/tx.registry";
import * as _486 from "./wasm/v1/query.lcd";
import * as _487 from "./wasm/v1/query.rpc.func";
import * as _488 from "./wasm/v1/query.rpc.Query";
import * as _489 from "./wasm/v1/tx.rpc.func";
import * as _490 from "./wasm/v1/tx.rpc.msg";
import * as _637 from "./lcd";
import * as _638 from "./rpc.query";
import * as _639 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._484,
      ..._485,
      ..._486,
      ..._487,
      ..._488,
      ..._489,
      ..._490
    };
  }
  export const ClientFactory = {
    ..._637,
    ..._638,
    ..._639
  };
}