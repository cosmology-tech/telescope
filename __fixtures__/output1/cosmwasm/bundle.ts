import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _431 from "./wasm/v1/tx.amino";
import * as _432 from "./wasm/v1/tx.registry";
import * as _433 from "./wasm/v1/query.lcd";
import * as _434 from "./wasm/v1/query.rpc.query";
import * as _435 from "./wasm/v1/tx.rpc.msg";
import * as _538 from "./lcd";
import * as _539 from "./rpc.query";
import * as _540 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._431,
      ..._432,
      ..._433,
      ..._434,
      ..._435
    };
  }
  export const ClientFactory = { ..._538,
    ..._539,
    ..._540
  };
}