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
import * as _428 from "./erc20/v1/tx.amino";
import * as _429 from "./fees/v1/tx.amino";
import * as _430 from "./vesting/v1/tx.amino";
import * as _431 from "./erc20/v1/tx.registry";
import * as _432 from "./fees/v1/tx.registry";
import * as _433 from "./vesting/v1/tx.registry";
import * as _434 from "./claims/v1/query.lcd";
import * as _435 from "./epochs/v1/query.lcd";
import * as _436 from "./erc20/v1/query.lcd";
import * as _437 from "./fees/v1/query.lcd";
import * as _438 from "./incentives/v1/query.lcd";
import * as _439 from "./inflation/v1/query.lcd";
import * as _440 from "./recovery/v1/query.lcd";
import * as _441 from "./vesting/v1/query.lcd";
import * as _442 from "./claims/v1/query.rpc.query";
import * as _443 from "./epochs/v1/query.rpc.query";
import * as _444 from "./erc20/v1/query.rpc.query";
import * as _445 from "./fees/v1/query.rpc.query";
import * as _446 from "./incentives/v1/query.rpc.query";
import * as _447 from "./inflation/v1/query.rpc.query";
import * as _448 from "./recovery/v1/query.rpc.query";
import * as _449 from "./vesting/v1/query.rpc.query";
import * as _450 from "./erc20/v1/tx.rpc.msg";
import * as _451 from "./fees/v1/tx.rpc.msg";
import * as _452 from "./vesting/v1/tx.rpc.msg";
import * as _526 from "./lcd";
import * as _527 from "./custom-lcd-client";
import * as _528 from "./rpc.query";
import * as _529 from "./evmos-rpc-client.query";
import * as _530 from "./rpc.tx";
import * as _531 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._154,
      ..._155,
      ..._156,
      ..._434,
      ..._442
    };
  }
  export namespace epochs {
    export const v1 = { ..._157,
      ..._158,
      ..._435,
      ..._443
    };
  }
  export namespace erc20 {
    export const v1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._428,
      ..._431,
      ..._436,
      ..._444,
      ..._450
    };
  }
  export namespace fees {
    export const v1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._429,
      ..._432,
      ..._437,
      ..._445,
      ..._451
    };
  }
  export namespace incentives {
    export const v1 = { ..._167,
      ..._168,
      ..._169,
      ..._438,
      ..._446
    };
  }
  export namespace inflation {
    export const v1 = { ..._170,
      ..._171,
      ..._172,
      ..._439,
      ..._447
    };
  }
  export namespace recovery {
    export const v1 = { ..._173,
      ..._174,
      ..._440,
      ..._448
    };
  }
  export namespace vesting {
    export const v1 = { ..._175,
      ..._176,
      ..._177,
      ..._430,
      ..._433,
      ..._441,
      ..._449,
      ..._452
    };
  }
  export const ClientFactory = { ..._526,
    ..._527,
    ..._528,
    ..._529,
    ..._530,
    ..._531
  };
}