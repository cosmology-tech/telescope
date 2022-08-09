import * as _299 from "./abci/types";
import * as _300 from "./crypto/keys";
import * as _301 from "./crypto/proof";
import * as _302 from "./libs/bits/types";
import * as _303 from "./p2p/types";
import * as _304 from "./types/block";
import * as _305 from "./types/evidence";
import * as _306 from "./types/params";
import * as _307 from "./types/types";
import * as _308 from "./types/validator";
import * as _309 from "./version/types";
export namespace tendermint {
  export const abci = { ..._299
  };
  export const crypto = { ..._300,
    ..._301
  };
  export namespace libs {
    export const bits = { ..._302
    };
  }
  export const p2p = { ..._303
  };
  export const types = { ..._304,
    ..._305,
    ..._306,
    ..._307,
    ..._308
  };
  export const version = { ..._309
  };
}