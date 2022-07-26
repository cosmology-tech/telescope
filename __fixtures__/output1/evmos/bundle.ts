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
import * as _389 from "./erc20/v1/tx.amino";
import * as _390 from "./fees/v1/tx.amino";
import * as _391 from "./vesting/v1/tx.amino";
import * as _392 from "./erc20/v1/tx.registry";
import * as _393 from "./fees/v1/tx.registry";
import * as _394 from "./vesting/v1/tx.registry";
import * as _395 from "./claims/v1/query.lcd";
import * as _396 from "./epochs/v1/query.lcd";
import * as _397 from "./erc20/v1/query.lcd";
import * as _398 from "./fees/v1/query.lcd";
import * as _399 from "./incentives/v1/query.lcd";
import * as _400 from "./inflation/v1/query.lcd";
import * as _401 from "./recovery/v1/query.lcd";
import * as _402 from "./vesting/v1/query.lcd";
import * as _444 from "./lcd";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._154,
      ..._155,
      ..._156,
      ..._395
    };
  }
  export namespace epochs {
    export const v1 = { ..._157,
      ..._158,
      ..._396
    };
  }
  export namespace erc20 {
    export const v1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._389,
      ..._392,
      ..._397
    };
  }
  export namespace fees {
    export const v1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._390,
      ..._393,
      ..._398
    };
  }
  export namespace incentives {
    export const v1 = { ..._167,
      ..._168,
      ..._169,
      ..._399
    };
  }
  export namespace inflation {
    export const v1 = { ..._170,
      ..._171,
      ..._172,
      ..._400
    };
  }
  export namespace recovery {
    export const v1 = { ..._173,
      ..._174,
      ..._401
    };
  }
  export namespace vesting {
    export const v1 = { ..._175,
      ..._176,
      ..._177,
      ..._391,
      ..._394,
      ..._402
    };
  }
}
export const ClientFactory = { ..._444
};