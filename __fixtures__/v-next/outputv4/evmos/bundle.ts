import * as _153 from "./claims/v1/claims.js";
import * as _154 from "./claims/v1/genesis.js";
import * as _155 from "./claims/v1/query.js";
import * as _156 from "./epochs/v1/genesis.js";
import * as _157 from "./epochs/v1/query.js";
import * as _158 from "./erc20/v1/erc20.js";
import * as _159 from "./erc20/v1/genesis.js";
import * as _160 from "./erc20/v1/query.js";
import * as _161 from "./erc20/v1/tx.js";
import * as _162 from "./fees/v1/fees.js";
import * as _163 from "./fees/v1/genesis.js";
import * as _164 from "./fees/v1/query.js";
import * as _165 from "./fees/v1/tx.js";
import * as _166 from "./incentives/v1/genesis.js";
import * as _167 from "./incentives/v1/incentives.js";
import * as _168 from "./incentives/v1/query.js";
import * as _169 from "./inflation/v1/genesis.js";
import * as _170 from "./inflation/v1/inflation.js";
import * as _171 from "./inflation/v1/query.js";
import * as _172 from "./recovery/v1/genesis.js";
import * as _173 from "./recovery/v1/query.js";
import * as _174 from "./vesting/v1/query.js";
import * as _175 from "./vesting/v1/tx.js";
import * as _176 from "./vesting/v1/vesting.js";
import * as _439 from "./erc20/v1/tx.amino.js";
import * as _440 from "./fees/v1/tx.amino.js";
import * as _441 from "./vesting/v1/tx.amino.js";
import * as _442 from "./erc20/v1/tx.registry.js";
import * as _443 from "./fees/v1/tx.registry.js";
import * as _444 from "./vesting/v1/tx.registry.js";
import * as _445 from "./claims/v1/query.lcd.js";
import * as _446 from "./epochs/v1/query.lcd.js";
import * as _447 from "./erc20/v1/query.lcd.js";
import * as _448 from "./fees/v1/query.lcd.js";
import * as _449 from "./incentives/v1/query.lcd.js";
import * as _450 from "./inflation/v1/query.lcd.js";
import * as _451 from "./recovery/v1/query.lcd.js";
import * as _452 from "./vesting/v1/query.lcd.js";
import * as _453 from "./claims/v1/query.rpc.Query.js";
import * as _454 from "./epochs/v1/query.rpc.Query.js";
import * as _455 from "./erc20/v1/query.rpc.Query.js";
import * as _456 from "./fees/v1/query.rpc.Query.js";
import * as _457 from "./incentives/v1/query.rpc.Query.js";
import * as _458 from "./inflation/v1/query.rpc.Query.js";
import * as _459 from "./recovery/v1/query.rpc.Query.js";
import * as _460 from "./vesting/v1/query.rpc.Query.js";
import * as _461 from "./erc20/v1/tx.rpc.msg.js";
import * as _462 from "./fees/v1/tx.rpc.msg.js";
import * as _463 from "./vesting/v1/tx.rpc.msg.js";
import * as _464 from "./erc20/v1/query.pinia.store.js";
import * as _547 from "./lcd.js";
import * as _548 from "./custom-lcd-client.js";
import * as _549 from "./rpc.query.js";
import * as _550 from "./evmos-rpc-client.query.js";
import * as _551 from "./rpc.tx.js";
import * as _552 from "./evmos-rpc-client.tx.js";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._445,
      ..._453
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._156,
      ..._157,
      ..._446,
      ..._454
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._439,
      ..._442,
      ..._447,
      ..._455,
      ..._461,
      ..._464
    };
  }
  export namespace fees {
    export const v1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._440,
      ..._443,
      ..._448,
      ..._456,
      ..._462
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._449,
      ..._457
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._450,
      ..._458
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._172,
      ..._173,
      ..._451,
      ..._459
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._441,
      ..._444,
      ..._452,
      ..._460,
      ..._463
    };
  }
  export const ClientFactory = {
    ..._547,
    ..._548,
    ..._549,
    ..._550,
    ..._551,
    ..._552
  };
}