import * as _298 from "./abci/types";
import * as _299 from "./crypto/keys";
import * as _300 from "./crypto/proof";
import * as _301 from "./libs/bits/types";
import * as _302 from "./p2p/types";
import * as _303 from "./types/block";
import * as _304 from "./types/evidence";
import * as _305 from "./types/params";
import * as _306 from "./types/types";
import * as _307 from "./types/validator";
import * as _308 from "./version/types";
export namespace tendermint {
  export const abci = { ..._298
  };
  export const crypto = { ..._299,
    ..._300
  };
  export namespace libs {
    export const bits = { ..._301
    };
  }
  export const p2p = { ..._302
  };
  export const types = { ..._303,
    ..._304,
    ..._305,
    ..._306,
    ..._307
  };
  export const version = { ..._308
  };
}