import * as _138 from "./wasm/v1/genesis";
import * as _139 from "./wasm/v1/ibc";
import * as _140 from "./wasm/v1/proposal";
import * as _141 from "./wasm/v1/query";
import * as _142 from "./wasm/v1/tx";
import * as _143 from "./wasm/v1/types";
import * as _403 from "./wasm/v1/tx.amino";
import * as _404 from "./wasm/v1/tx.registry";
import * as _405 from "./wasm/v1/query.lcd";
import * as _406 from "./wasm/v1/query.rpc.query";
import * as _407 from "./wasm/v1/tx.rpc.msg";
import * as _503 from "./lcd";
import * as _504 from "./rpc.query";
import * as _505 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._403,
      ..._404,
      ..._405,
      ..._406,
      ..._407
    };
  }
  export const ClientFactory = { ..._503,
    ..._504,
    ..._505
  };
}