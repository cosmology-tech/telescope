import * as _223 from "./abci/types";
import * as _224 from "./crypto/keys";
import * as _225 from "./crypto/proof";
import * as _226 from "./libs/bits/types";
import * as _227 from "./p2p/types";
import * as _228 from "./types/block";
import * as _229 from "./types/evidence";
import * as _230 from "./types/params";
import * as _231 from "./types/types";
import * as _232 from "./types/validator";
import * as _233 from "./version/types";
export namespace tendermint {
  export const abci = { ..._223
  };
  export const crypto = { ..._224,
    ..._225
  };
  export namespace libs {
    export const bits = { ..._226
    };
  }
  export const p2p = { ..._227
  };
  export const types = { ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232
  };
  export const version = { ..._233
  };
}