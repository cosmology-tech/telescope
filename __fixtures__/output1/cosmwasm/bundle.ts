import * as _148 from "./wasm/v1/genesis";
import * as _149 from "./wasm/v1/ibc";
import * as _150 from "./wasm/v1/proposal";
import * as _151 from "./wasm/v1/query";
import * as _152 from "./wasm/v1/tx";
import * as _153 from "./wasm/v1/types";
import * as _423 from "./wasm/v1/tx.amino";
import * as _424 from "./wasm/v1/tx.registry";
import * as _425 from "./wasm/v1/query.lcd";
import * as _426 from "./wasm/v1/query.rpc.query";
import * as _427 from "./wasm/v1/tx.rpc.msg";
import * as _523 from "./lcd";
import * as _524 from "./rpc.query";
import * as _525 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._423,
      ..._424,
      ..._425,
      ..._426,
      ..._427
    };
  }
  export const ClientFactory = { ..._523,
    ..._524,
    ..._525
  };
}