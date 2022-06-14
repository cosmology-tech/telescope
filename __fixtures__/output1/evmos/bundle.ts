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
import * as _382 from "./erc20/v1/tx.amino";
import * as _383 from "./fees/v1/tx.amino";
import * as _384 from "./vesting/v1/tx.amino";
import * as _385 from "./erc20/v1/tx.registry";
import * as _386 from "./fees/v1/tx.registry";
import * as _387 from "./vesting/v1/tx.registry";
import * as _388 from "./claims/v1/query.lcd";
import * as _389 from "./epochs/v1/query.lcd";
import * as _390 from "./erc20/v1/query.lcd";
import * as _391 from "./fees/v1/query.lcd";
import * as _392 from "./incentives/v1/query.lcd";
import * as _393 from "./inflation/v1/query.lcd";
import * as _394 from "./recovery/v1/query.lcd";
import * as _395 from "./vesting/v1/query.lcd";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._154,
      ..._155,
      ..._156,
      ..._388
    };
  }
  export namespace epochs {
    export const v1 = { ..._157,
      ..._158,
      ..._389
    };
  }
  export namespace erc20 {
    export const v1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._382,
      ..._385,
      ..._390
    };
  }
  export namespace fees {
    export const v1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._383,
      ..._386,
      ..._391
    };
  }
  export namespace incentives {
    export const v1 = { ..._167,
      ..._168,
      ..._169,
      ..._392
    };
  }
  export namespace inflation {
    export const v1 = { ..._170,
      ..._171,
      ..._172,
      ..._393
    };
  }
  export namespace recovery {
    export const v1 = { ..._173,
      ..._174,
      ..._394
    };
  }
  export namespace vesting {
    export const v1 = { ..._175,
      ..._176,
      ..._177,
      ..._384,
      ..._387,
      ..._395
    };
  }
}