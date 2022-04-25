import * as _1059 from "./abci/types";
import * as _1060 from "./crypto/keys";
import * as _1061 from "./crypto/proof";
import * as _1062 from "./libs/bits/types";
import * as _1063 from "./p2p/types";
import * as _1064 from "./types/block";
import * as _1065 from "./types/evidence";
import * as _1066 from "./types/params";
import * as _1067 from "./types/types";
import * as _1068 from "./types/validator";
import * as _1069 from "./version/types";
export namespace tendermint {
  export const abci = { ..._1059
  };
  export const crypto = { ..._1060,
    ..._1061
  };
  export namespace libs {
    export const bits = { ..._1062
    };
  }
  export const p2p = { ..._1063
  };
  export const types = { ..._1064,
    ..._1065,
    ..._1066,
    ..._1067,
    ..._1068
  };
  export const version = { ..._1069
  };
}