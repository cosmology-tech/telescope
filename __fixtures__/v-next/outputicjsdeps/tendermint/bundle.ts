import * as _305 from "./abci/types.js";
import * as _306 from "./crypto/keys.js";
import * as _307 from "./crypto/proof.js";
import * as _308 from "./libs/bits/types.js";
import * as _309 from "./p2p/types.js";
import * as _310 from "./types/block.js";
import * as _311 from "./types/evidence.js";
import * as _312 from "./types/params.js";
import * as _313 from "./types/types.js";
import * as _314 from "./types/validator.js";
import * as _315 from "./version/types.js";
import * as _535 from "./abci/types.rpc.ABCIApplication.js";
import * as _560 from "./lcd.js";
import * as _561 from "./rpc.query.js";
export namespace tendermint {
  export const abci = {
    ..._305,
    ..._535
  };
  export const crypto = {
    ..._306,
    ..._307
  };
  export namespace libs {
    export const bits = {
      ..._308
    };
  }
  export const p2p = {
    ..._309
  };
  export const types = {
    ..._310,
    ..._311,
    ..._312,
    ..._313,
    ..._314
  };
  export const version = {
    ..._315
  };
  export const ClientFactory = {
    ..._560,
    ..._561
  };
}