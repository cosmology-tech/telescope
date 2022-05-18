import * as _206 from "./applications/transfer/v1/genesis";
import * as _207 from "./applications/transfer/v1/query";
import * as _208 from "./applications/transfer/v1/transfer";
import * as _209 from "./applications/transfer/v1/tx";
import * as _210 from "./applications/transfer/v2/packet";
import * as _211 from "./core/channel/v1/channel";
import * as _212 from "./core/channel/v1/genesis";
import * as _213 from "./core/channel/v1/query";
import * as _214 from "./core/channel/v1/tx";
import * as _215 from "./core/client/v1/client";
import * as _216 from "./core/client/v1/genesis";
import * as _217 from "./core/client/v1/query";
import * as _218 from "./core/client/v1/tx";
import * as _219 from "./core/commitment/v1/commitment";
import * as _220 from "./core/connection/v1/connection";
import * as _221 from "./core/connection/v1/genesis";
import * as _222 from "./core/connection/v1/query";
import * as _223 from "./core/connection/v1/tx";
import * as _224 from "./core/port/v1/query";
import * as _225 from "./core/types/v1/genesis";
import * as _226 from "./lightclients/localhost/v1/localhost";
import * as _227 from "./lightclients/solomachine/v1/solomachine";
import * as _228 from "./lightclients/solomachine/v2/solomachine";
import * as _229 from "./lightclients/tendermint/v1/tendermint";
import * as _333 from "./applications/transfer/v1/tx.amino";
import * as _334 from "./core/channel/v1/tx.amino";
import * as _335 from "./core/client/v1/tx.amino";
import * as _336 from "./core/connection/v1/tx.amino";
import * as _337 from "./applications/transfer/v1/tx.registry";
import * as _338 from "./core/channel/v1/tx.registry";
import * as _339 from "./core/client/v1/tx.registry";
import * as _340 from "./core/connection/v1/tx.registry";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._206,
        ..._207,
        ..._208,
        ..._209,
        ..._333,
        ..._337
      };
      export const v2 = { ..._210
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._211,
        ..._212,
        ..._213,
        ..._214,
        ..._334,
        ..._338
      };
    }
    export namespace client {
      export const v1 = { ..._215,
        ..._216,
        ..._217,
        ..._218,
        ..._335,
        ..._339
      };
    }
    export namespace commitment {
      export const v1 = { ..._219
      };
    }
    export namespace connection {
      export const v1 = { ..._220,
        ..._221,
        ..._222,
        ..._223,
        ..._336,
        ..._340
      };
    }
    export namespace port {
      export const v1 = { ..._224
      };
    }
    export namespace types {
      export const v1 = { ..._225
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._226
      };
    }
    export namespace solomachine {
      export const v1 = { ..._227
      };
      export const v2 = { ..._228
      };
    }
    export namespace tendermint {
      export const v1 = { ..._229
      };
    }
  }
}