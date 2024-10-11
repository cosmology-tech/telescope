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
import * as _491 from "./erc20/v1/tx.amino";
import * as _492 from "./fees/v1/tx.amino";
import * as _493 from "./vesting/v1/tx.amino";
import * as _494 from "./erc20/v1/tx.registry";
import * as _495 from "./fees/v1/tx.registry";
import * as _496 from "./vesting/v1/tx.registry";
import * as _497 from "./claims/v1/query.lcd";
import * as _498 from "./epochs/v1/query.lcd";
import * as _499 from "./erc20/v1/query.lcd";
import * as _500 from "./fees/v1/query.lcd";
import * as _501 from "./incentives/v1/query.lcd";
import * as _502 from "./inflation/v1/query.lcd";
import * as _503 from "./recovery/v1/query.lcd";
import * as _504 from "./vesting/v1/query.lcd";
import * as _505 from "./claims/v1/query.rpc.func";
import * as _506 from "./epochs/v1/query.rpc.func";
import * as _507 from "./erc20/v1/query.rpc.func";
import * as _508 from "./fees/v1/query.rpc.func";
import * as _509 from "./incentives/v1/query.rpc.func";
import * as _510 from "./inflation/v1/query.rpc.func";
import * as _511 from "./recovery/v1/query.rpc.func";
import * as _512 from "./vesting/v1/query.rpc.func";
import * as _513 from "./claims/v1/query.rpc.Query";
import * as _514 from "./epochs/v1/query.rpc.Query";
import * as _515 from "./erc20/v1/query.rpc.Query";
import * as _516 from "./fees/v1/query.rpc.Query";
import * as _517 from "./incentives/v1/query.rpc.Query";
import * as _518 from "./inflation/v1/query.rpc.Query";
import * as _519 from "./recovery/v1/query.rpc.Query";
import * as _520 from "./vesting/v1/query.rpc.Query";
import * as _521 from "./erc20/v1/tx.rpc.func";
import * as _522 from "./fees/v1/tx.rpc.func";
import * as _523 from "./vesting/v1/tx.rpc.func";
import * as _524 from "./erc20/v1/tx.rpc.msg";
import * as _525 from "./fees/v1/tx.rpc.msg";
import * as _526 from "./vesting/v1/tx.rpc.msg";
import * as _527 from "./erc20/v1/query.pinia.store";
import * as _640 from "./lcd";
import * as _641 from "./custom-lcd-client";
import * as _642 from "./rpc.query";
import * as _643 from "./evmos-rpc-client.query";
import * as _644 from "./rpc.tx";
import * as _645 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._497,
      ..._505,
      ..._513
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._156,
      ..._157,
      ..._498,
      ..._506,
      ..._514
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._491,
      ..._494,
      ..._499,
      ..._507,
      ..._515,
      ..._521,
      ..._524,
      ..._527
    };
  }
  export namespace fees {
    export const v1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._492,
      ..._495,
      ..._500,
      ..._508,
      ..._516,
      ..._522,
      ..._525
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._501,
      ..._509,
      ..._517
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._502,
      ..._510,
      ..._518
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._172,
      ..._173,
      ..._503,
      ..._511,
      ..._519
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._493,
      ..._496,
      ..._504,
      ..._512,
      ..._520,
      ..._523,
      ..._526
    };
  }
  export const ClientFactory = {
    ..._640,
    ..._641,
    ..._642,
    ..._643,
    ..._644,
    ..._645
  };
}