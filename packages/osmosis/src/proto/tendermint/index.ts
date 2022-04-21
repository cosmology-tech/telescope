import * as _825 from "./abci/types";
import * as _826 from "./crypto/keys";
import * as _827 from "./crypto/proof";
import * as _828 from "./libs/bits/types";
import * as _829 from "./p2p/types";
import * as _830 from "./types/block";
import * as _831 from "./types/evidence";
import * as _832 from "./types/params";
import * as _833 from "./types/types";
import * as _834 from "./types/validator";
import * as _835 from "./version/types";
export namespace tendermint {
  export const abci = { ..._825
  };
  export const crypto = { ..._826,
    ..._827
  };
  export namespace libs {
    export const bits = { ..._828
    };
  }
  export const p2p = { ..._829
  };
  export const types = { ..._830,
    ..._831,
    ..._832,
    ..._833,
    ..._834
  };
  export const version = { ..._835
  };
}