import * as _153 from "./claims/v1/claims";
import * as _154 from "./claims/v1/genesis";
import * as _155 from "./claims/v1/query";
import * as _156 from "./epochs/v1/genesis";
import * as _157 from "./epochs/v1/query";
import * as _158 from "./erc20/v1/erc20";
import * as _159 from "./erc20/v1/genesis";
import * as _160 from "./erc20/v1/query";
import * as _161 from "./erc20/v1/tx";
import * as _162 from "./fees/v1/fees";
import * as _163 from "./fees/v1/genesis";
import * as _164 from "./fees/v1/query";
import * as _165 from "./fees/v1/tx";
import * as _166 from "./incentives/v1/genesis";
import * as _167 from "./incentives/v1/incentives";
import * as _168 from "./incentives/v1/query";
import * as _169 from "./inflation/v1/genesis";
import * as _170 from "./inflation/v1/inflation";
import * as _171 from "./inflation/v1/query";
import * as _172 from "./recovery/v1/genesis";
import * as _173 from "./recovery/v1/query";
import * as _174 from "./vesting/v1/query";
import * as _175 from "./vesting/v1/tx";
import * as _176 from "./vesting/v1/vesting";
import * as _442 from "./erc20/v1/tx.amino";
import * as _443 from "./fees/v1/tx.amino";
import * as _444 from "./vesting/v1/tx.amino";
import * as _445 from "./erc20/v1/tx.registry";
import * as _446 from "./fees/v1/tx.registry";
import * as _447 from "./vesting/v1/tx.registry";
import * as _448 from "./claims/v1/query.lcd";
import * as _449 from "./epochs/v1/query.lcd";
import * as _450 from "./erc20/v1/query.lcd";
import * as _451 from "./fees/v1/query.lcd";
import * as _452 from "./incentives/v1/query.lcd";
import * as _453 from "./inflation/v1/query.lcd";
import * as _454 from "./recovery/v1/query.lcd";
import * as _455 from "./vesting/v1/query.lcd";
import * as _456 from "./claims/v1/query.rpc.Query";
import * as _457 from "./epochs/v1/query.rpc.Query";
import * as _458 from "./erc20/v1/query.rpc.Query";
import * as _459 from "./fees/v1/query.rpc.Query";
import * as _460 from "./incentives/v1/query.rpc.Query";
import * as _461 from "./inflation/v1/query.rpc.Query";
import * as _462 from "./recovery/v1/query.rpc.Query";
import * as _463 from "./vesting/v1/query.rpc.Query";
import * as _464 from "./erc20/v1/tx.rpc.msg";
import * as _465 from "./fees/v1/tx.rpc.msg";
import * as _466 from "./vesting/v1/tx.rpc.msg";
import * as _467 from "./erc20/v1/query.pinia.store";
import * as _550 from "./lcd";
import * as _551 from "./custom-lcd-client";
import * as _552 from "./rpc.query";
import * as _553 from "./evmos-rpc-client.query";
import * as _554 from "./rpc.tx";
import * as _555 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._448,
      ..._456
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._156,
      ..._157,
      ..._449,
      ..._457
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._442,
      ..._445,
      ..._450,
      ..._458,
      ..._464,
      ..._467
    };
  }
  export namespace fees {
    export const v1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._443,
      ..._446,
      ..._451,
      ..._459,
      ..._465
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._452,
      ..._460
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._453,
      ..._461
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._172,
      ..._173,
      ..._454,
      ..._462
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._444,
      ..._447,
      ..._455,
      ..._463,
      ..._466
    };
  }
  export const ClientFactory = {
    ..._550,
    ..._551,
    ..._552,
    ..._553,
    ..._554,
    ..._555
  };
}