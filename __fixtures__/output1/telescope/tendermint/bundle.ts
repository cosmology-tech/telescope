import * as _223 from "../../tendermint/abci/types";
import * as _224 from "../../tendermint/crypto/keys";
import * as _225 from "../../tendermint/crypto/proof";
import * as _226 from "../../tendermint/libs/bits/types";
import * as _227 from "../../tendermint/p2p/types";
import * as _228 from "../../tendermint/types/block";
import * as _229 from "../../tendermint/types/evidence";
import * as _230 from "../../tendermint/types/params";
import * as _231 from "../../tendermint/types/types";
import * as _232 from "../../tendermint/types/validator";
import * as _233 from "../../tendermint/version/types";
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