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
import * as _427 from "./erc20/v1/tx.amino";
import * as _428 from "./fees/v1/tx.amino";
import * as _429 from "./vesting/v1/tx.amino";
import * as _430 from "./erc20/v1/tx.registry";
import * as _431 from "./fees/v1/tx.registry";
import * as _432 from "./vesting/v1/tx.registry";
import * as _433 from "./claims/v1/query.lcd";
import * as _434 from "./epochs/v1/query.lcd";
import * as _435 from "./erc20/v1/query.lcd";
import * as _436 from "./fees/v1/query.lcd";
import * as _437 from "./incentives/v1/query.lcd";
import * as _438 from "./inflation/v1/query.lcd";
import * as _439 from "./recovery/v1/query.lcd";
import * as _440 from "./vesting/v1/query.lcd";
import * as _441 from "./claims/v1/query.rpc.query";
import * as _442 from "./epochs/v1/query.rpc.query";
import * as _443 from "./erc20/v1/query.rpc.query";
import * as _444 from "./fees/v1/query.rpc.query";
import * as _445 from "./incentives/v1/query.rpc.query";
import * as _446 from "./inflation/v1/query.rpc.query";
import * as _447 from "./recovery/v1/query.rpc.query";
import * as _448 from "./vesting/v1/query.rpc.query";
import * as _449 from "./erc20/v1/tx.rpc.msg";
import * as _450 from "./fees/v1/tx.rpc.msg";
import * as _451 from "./vesting/v1/tx.rpc.msg";
import * as _525 from "./lcd";
import * as _526 from "./custom-lcd-client";
import * as _527 from "./rpc.query";
import * as _528 from "./evmos-rpc-client.query";
import * as _529 from "./rpc.tx";
import * as _530 from "./evmos-rpc-client.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._153,
      ..._154,
      ..._155,
      ..._433,
      ..._441
    };
  }
  export namespace epochs {
    export const v1 = { ..._156,
      ..._157,
      ..._434,
      ..._442
    };
  }
  export namespace erc20 {
    export const v1 = { ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._427,
      ..._430,
      ..._435,
      ..._443,
      ..._449
    };
  }
  export namespace fees {
    export const v1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._428,
      ..._431,
      ..._436,
      ..._444,
      ..._450
    };
  }
  export namespace incentives {
    export const v1 = { ..._166,
      ..._167,
      ..._168,
      ..._437,
      ..._445
    };
  }
  export namespace inflation {
    export const v1 = { ..._169,
      ..._170,
      ..._171,
      ..._438,
      ..._446
    };
  }
  export namespace recovery {
    export const v1 = { ..._172,
      ..._173,
      ..._439,
      ..._447
    };
  }
  export namespace vesting {
    export const v1 = { ..._174,
      ..._175,
      ..._176,
      ..._429,
      ..._432,
      ..._440,
      ..._448,
      ..._451
    };
  }
  export const ClientFactory = { ..._525,
    ..._526,
    ..._527,
    ..._528,
    ..._529,
    ..._530
  };
}