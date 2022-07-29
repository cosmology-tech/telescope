import * as _154 from "./claims/v1/claims";
import * as _155 from "./claims/v1/genesis";
import * as _156 from "./claims/v1/query";
import * as _157 from "./epochs/v1/genesis";
import * as _158 from "./epochs/v1/query";
import * as _159 from "./erc20/v1/erc20";
import * as _160 from "./erc20/v1/genesis";
import * as _161 from "./erc20/v1/query";
import * as _162 from "./erc20/v1/tx";
import * as _163 from "./fees/v1/fees";
import * as _164 from "./fees/v1/genesis";
import * as _165 from "./fees/v1/query";
import * as _166 from "./fees/v1/tx";
import * as _167 from "./incentives/v1/genesis";
import * as _168 from "./incentives/v1/incentives";
import * as _169 from "./incentives/v1/query";
import * as _170 from "./inflation/v1/genesis";
import * as _171 from "./inflation/v1/inflation";
import * as _172 from "./inflation/v1/query";
import * as _173 from "./recovery/v1/genesis";
import * as _174 from "./recovery/v1/query";
import * as _175 from "./vesting/v1/query";
import * as _176 from "./vesting/v1/tx";
import * as _177 from "./vesting/v1/vesting";
import * as _437 from "./erc20/v1/tx.amino";
import * as _438 from "./fees/v1/tx.amino";
import * as _439 from "./vesting/v1/tx.amino";
import * as _440 from "./erc20/v1/tx.registry";
import * as _441 from "./fees/v1/tx.registry";
import * as _442 from "./vesting/v1/tx.registry";
import * as _443 from "./claims/v1/query.lcd";
import * as _444 from "./epochs/v1/query.lcd";
import * as _445 from "./erc20/v1/query.lcd";
import * as _446 from "./fees/v1/query.lcd";
import * as _447 from "./incentives/v1/query.lcd";
import * as _448 from "./inflation/v1/query.lcd";
import * as _449 from "./recovery/v1/query.lcd";
import * as _450 from "./vesting/v1/query.lcd";
import * as _451 from "./claims/v1/query.rpc.query";
import * as _452 from "./epochs/v1/query.rpc.query";
import * as _453 from "./erc20/v1/query.rpc.query";
import * as _454 from "./fees/v1/query.rpc.query";
import * as _455 from "./incentives/v1/query.rpc.query";
import * as _456 from "./inflation/v1/query.rpc.query";
import * as _457 from "./recovery/v1/query.rpc.query";
import * as _458 from "./vesting/v1/query.rpc.query";
import * as _459 from "./erc20/v1/tx.rpc.msg";
import * as _460 from "./fees/v1/tx.rpc.msg";
import * as _461 from "./vesting/v1/tx.rpc.msg";
import * as _539 from "./lcd";
import * as _540 from "./custom-lcd-client";
import * as _541 from "./rpc.query";
import * as _542 from "./evmos-rpc-client.query";
import * as _543 from "./rpc.tx";
import * as _544 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._154,
      ..._155,
      ..._156,
      ..._443,
      ..._451
    };
  }
  export namespace epochs {
    export const v1 = { ..._157,
      ..._158,
      ..._444,
      ..._452
    };
  }
  export namespace erc20 {
    export const v1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._437,
      ..._440,
      ..._445,
      ..._453,
      ..._459
    };
  }
  export namespace fees {
    export const v1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._438,
      ..._441,
      ..._446,
      ..._454,
      ..._460
    };
  }
  export namespace incentives {
    export const v1 = { ..._167,
      ..._168,
      ..._169,
      ..._447,
      ..._455
    };
  }
  export namespace inflation {
    export const v1 = { ..._170,
      ..._171,
      ..._172,
      ..._448,
      ..._456
    };
  }
  export namespace recovery {
    export const v1 = { ..._173,
      ..._174,
      ..._449,
      ..._457
    };
  }
  export namespace vesting {
    export const v1 = { ..._175,
      ..._176,
      ..._177,
      ..._439,
      ..._442,
      ..._450,
      ..._458,
      ..._461
    };
  }
  export const ClientFactory = { ..._539,
    ..._540,
    ..._541,
    ..._542,
    ..._543,
    ..._544
  };
}