import * as _144 from "./claims/v1/claims";
import * as _145 from "./claims/v1/genesis";
import * as _146 from "./claims/v1/query";
import * as _147 from "./epochs/v1/genesis";
import * as _148 from "./epochs/v1/query";
import * as _149 from "./erc20/v1/erc20";
import * as _150 from "./erc20/v1/genesis";
import * as _151 from "./erc20/v1/query";
import * as _152 from "./erc20/v1/tx";
import * as _153 from "./fees/v1/fees";
import * as _154 from "./fees/v1/genesis";
import * as _155 from "./fees/v1/query";
import * as _156 from "./fees/v1/tx";
import * as _157 from "./incentives/v1/genesis";
import * as _158 from "./incentives/v1/incentives";
import * as _159 from "./incentives/v1/query";
import * as _160 from "./inflation/v1/genesis";
import * as _161 from "./inflation/v1/inflation";
import * as _162 from "./inflation/v1/query";
import * as _163 from "./recovery/v1/genesis";
import * as _164 from "./recovery/v1/query";
import * as _165 from "./vesting/v1/query";
import * as _166 from "./vesting/v1/tx";
import * as _167 from "./vesting/v1/vesting";
import * as _408 from "./erc20/v1/tx.amino";
import * as _409 from "./fees/v1/tx.amino";
import * as _410 from "./vesting/v1/tx.amino";
import * as _411 from "./erc20/v1/tx.registry";
import * as _412 from "./fees/v1/tx.registry";
import * as _413 from "./vesting/v1/tx.registry";
import * as _414 from "./claims/v1/query.lcd";
import * as _415 from "./epochs/v1/query.lcd";
import * as _416 from "./erc20/v1/query.lcd";
import * as _417 from "./fees/v1/query.lcd";
import * as _418 from "./incentives/v1/query.lcd";
import * as _419 from "./inflation/v1/query.lcd";
import * as _420 from "./recovery/v1/query.lcd";
import * as _421 from "./vesting/v1/query.lcd";
import * as _422 from "./claims/v1/query.rpc.query";
import * as _423 from "./epochs/v1/query.rpc.query";
import * as _424 from "./erc20/v1/query.rpc.query";
import * as _425 from "./fees/v1/query.rpc.query";
import * as _426 from "./incentives/v1/query.rpc.query";
import * as _427 from "./inflation/v1/query.rpc.query";
import * as _428 from "./recovery/v1/query.rpc.query";
import * as _429 from "./vesting/v1/query.rpc.query";
import * as _430 from "./erc20/v1/tx.rpc.msg";
import * as _431 from "./fees/v1/tx.rpc.msg";
import * as _432 from "./vesting/v1/tx.rpc.msg";
import * as _506 from "./lcd";
import * as _507 from "./custom-lcd-client";
import * as _508 from "./rpc.query";
import * as _509 from "./evmos-rpc-client.query";
import * as _510 from "./rpc.tx";
import * as _511 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._144,
      ..._145,
      ..._146,
      ..._414,
      ..._422
    };
  }
  export namespace epochs {
    export const v1 = { ..._147,
      ..._148,
      ..._415,
      ..._423
    };
  }
  export namespace erc20 {
    export const v1 = { ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._408,
      ..._411,
      ..._416,
      ..._424,
      ..._430
    };
  }
  export namespace fees {
    export const v1 = { ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._409,
      ..._412,
      ..._417,
      ..._425,
      ..._431
    };
  }
  export namespace incentives {
    export const v1 = { ..._157,
      ..._158,
      ..._159,
      ..._418,
      ..._426
    };
  }
  export namespace inflation {
    export const v1 = { ..._160,
      ..._161,
      ..._162,
      ..._419,
      ..._427
    };
  }
  export namespace recovery {
    export const v1 = { ..._163,
      ..._164,
      ..._420,
      ..._428
    };
  }
  export namespace vesting {
    export const v1 = { ..._165,
      ..._166,
      ..._167,
      ..._410,
      ..._413,
      ..._421,
      ..._429,
      ..._432
    };
  }
  export const ClientFactory = { ..._506,
    ..._507,
    ..._508,
    ..._509,
    ..._510,
    ..._511
  };
}