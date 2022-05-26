import * as _207 from "./applications/transfer/v1/genesis";
import * as _208 from "./applications/transfer/v1/query";
import * as _209 from "./applications/transfer/v1/transfer";
import * as _210 from "./applications/transfer/v1/tx";
import * as _211 from "./applications/transfer/v2/packet";
import * as _212 from "./core/channel/v1/channel";
import * as _213 from "./core/channel/v1/genesis";
import * as _214 from "./core/channel/v1/query";
import * as _215 from "./core/channel/v1/tx";
import * as _216 from "./core/client/v1/client";
import * as _217 from "./core/client/v1/genesis";
import * as _218 from "./core/client/v1/query";
import * as _219 from "./core/client/v1/tx";
import * as _220 from "./core/commitment/v1/commitment";
import * as _221 from "./core/connection/v1/connection";
import * as _222 from "./core/connection/v1/genesis";
import * as _223 from "./core/connection/v1/query";
import * as _224 from "./core/connection/v1/tx";
import * as _225 from "./core/port/v1/query";
import * as _226 from "./core/types/v1/genesis";
import * as _227 from "./lightclients/localhost/v1/localhost";
import * as _228 from "./lightclients/solomachine/v1/solomachine";
import * as _229 from "./lightclients/solomachine/v2/solomachine";
import * as _230 from "./lightclients/tendermint/v1/tendermint";
import * as _358 from "./applications/transfer/v1/tx.amino";
import * as _359 from "./core/channel/v1/tx.amino";
import * as _360 from "./core/client/v1/tx.amino";
import * as _361 from "./core/connection/v1/tx.amino";
import * as _362 from "./applications/transfer/v1/tx.registry";
import * as _363 from "./core/channel/v1/tx.registry";
import * as _364 from "./core/client/v1/tx.registry";
import * as _365 from "./core/connection/v1/tx.registry";
import * as _366 from "./applications/transfer/v1/query.lcd";
import * as _367 from "./core/channel/v1/query.lcd";
import * as _368 from "./core/client/v1/query.lcd";
import * as _369 from "./core/connection/v1/query.lcd";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._207,
        ..._208,
        ..._209,
        ..._210,
        ..._358,
        ..._362,
        ..._366
      };
      export const v2 = { ..._211
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._212,
        ..._213,
        ..._214,
        ..._215,
        ..._359,
        ..._363,
        ..._367
      };
    }
    export namespace client {
      export const v1 = { ..._216,
        ..._217,
        ..._218,
        ..._219,
        ..._360,
        ..._364,
        ..._368
      };
    }
    export namespace commitment {
      export const v1 = { ..._220
      };
    }
    export namespace connection {
      export const v1 = { ..._221,
        ..._222,
        ..._223,
        ..._224,
        ..._361,
        ..._365,
        ..._369
      };
    }
    export namespace port {
      export const v1 = { ..._225
      };
    }
    export namespace types {
      export const v1 = { ..._226
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._227
      };
    }
    export namespace solomachine {
      export const v1 = { ..._228
      };
      export const v2 = { ..._229
      };
    }
    export namespace tendermint {
      export const v1 = { ..._230
      };
    }
  }
}