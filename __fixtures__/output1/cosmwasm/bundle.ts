import * as _148 from "./wasm/v1/genesis";
import * as _149 from "./wasm/v1/ibc";
import * as _150 from "./wasm/v1/proposal";
import * as _151 from "./wasm/v1/query";
import * as _152 from "./wasm/v1/tx";
import * as _153 from "./wasm/v1/types";
import * as _386 from "./wasm/v1/tx.amino";
import * as _387 from "./wasm/v1/tx.registry";
import * as _388 from "./wasm/v1/query.lcd";
import * as _443 from "./lcd";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._386,
      ..._387,
      ..._388
    };
  }
}
export const ClientFactory = { ..._443
};