import * as _1190 from "./abci/types";
import * as _1191 from "./abci/types";
import * as _1192 from "./crypto/keys";
import * as _1193 from "./crypto/keys";
import * as _1194 from "./crypto/proof";
import * as _1195 from "./crypto/proof";
import * as _1196 from "./libs/bits/types";
import * as _1197 from "./libs/bits/types";
import * as _1198 from "./p2p/types";
import * as _1199 from "./p2p/types";
import * as _1200 from "./types/block";
import * as _1201 from "./types/block";
import * as _1202 from "./types/evidence";
import * as _1203 from "./types/evidence";
import * as _1204 from "./types/params";
import * as _1205 from "./types/params";
import * as _1206 from "./types/types";
import * as _1207 from "./types/types";
import * as _1208 from "./types/validator";
import * as _1209 from "./types/validator";
import * as _1210 from "./version/types";
import * as _1211 from "./version/types";
export namespace tendermint {
  export const abci = { ..._1190,
    ..._1191
  };
  export const crypto = { ..._1192,
    ..._1193,
    ..._1194,
    ..._1195
  };
  export namespace libs {
    export const bits = { ..._1196,
      ..._1197
    };
  }
  export const p2p = { ..._1198,
    ..._1199
  };
  export const types = { ..._1200,
    ..._1201,
    ..._1202,
    ..._1203,
    ..._1204,
    ..._1205,
    ..._1206,
    ..._1207,
    ..._1208,
    ..._1209
  };
  export const version = { ..._1210,
    ..._1211
  };
}