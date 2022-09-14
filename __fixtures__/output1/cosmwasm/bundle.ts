import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _424 from "./wasm/v1/tx.amino";
import * as _425 from "./wasm/v1/tx.registry";
import * as _426 from "./wasm/v1/query.lcd";
import * as _427 from "./wasm/v1/query.rpc.query";
import * as _428 from "./wasm/v1/tx.rpc.msg";
import * as _524 from "./lcd";
import * as _525 from "./rpc.query";
import * as _526 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._424,
      ..._425,
      ..._426,
      ..._427,
      ..._428
    };
  }
  export const ClientFactory = { ..._524,
    ..._525,
    ..._526
  };
}