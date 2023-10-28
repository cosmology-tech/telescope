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
import * as _395 from "./claims/v1/query.lcd";
import * as _396 from "./epochs/v1/query.lcd";
import * as _397 from "./erc20/v1/query.lcd";
import * as _398 from "./fees/v1/query.lcd";
import * as _399 from "./incentives/v1/query.lcd";
import * as _400 from "./inflation/v1/query.lcd";
import * as _401 from "./recovery/v1/query.lcd";
import * as _402 from "./vesting/v1/query.lcd";
import * as _403 from "./claims/v1/query.rpc.Query";
import * as _404 from "./epochs/v1/query.rpc.Query";
import * as _405 from "./erc20/v1/query.rpc.Query";
import * as _406 from "./fees/v1/query.rpc.Query";
import * as _407 from "./incentives/v1/query.rpc.Query";
import * as _408 from "./inflation/v1/query.rpc.Query";
import * as _409 from "./recovery/v1/query.rpc.Query";
import * as _410 from "./vesting/v1/query.rpc.Query";
import * as _411 from "./erc20/v1/tx.rpc.msg";
import * as _412 from "./fees/v1/tx.rpc.msg";
import * as _413 from "./vesting/v1/tx.rpc.msg";
import * as _414 from "./erc20/v1/query.pinia.store";
import * as _475 from "./lcd";
import * as _476 from "./custom-lcd-client";
import * as _477 from "./rpc.query";
import * as _478 from "./evmos-rpc-client.query";
import * as _479 from "./rpc.tx";
import * as _480 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._395,
      ..._403
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._156,
      ..._157,
      ..._396,
      ..._404
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._397,
      ..._405,
      ..._411,
      ..._414
    };
  }
  export namespace fees {
    export const v1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._398,
      ..._406,
      ..._412
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._166,
      ..._167,
      ..._168,
      ..._399,
      ..._407
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._400,
      ..._408
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._172,
      ..._173,
      ..._401,
      ..._409
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._402,
      ..._410,
      ..._413
    };
  }
  export const ClientFactory = {
    ..._475,
    ..._476,
    ..._477,
    ..._478,
    ..._479,
    ..._480
  };
}