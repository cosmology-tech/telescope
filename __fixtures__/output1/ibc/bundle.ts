import * as _230 from "./applications/transfer/v1/genesis";
import * as _231 from "./applications/transfer/v1/query";
import * as _232 from "./applications/transfer/v1/transfer";
import * as _233 from "./applications/transfer/v1/tx";
import * as _234 from "./applications/transfer/v2/packet";
import * as _235 from "./core/channel/v1/channel";
import * as _236 from "./core/channel/v1/genesis";
import * as _237 from "./core/channel/v1/query";
import * as _238 from "./core/channel/v1/tx";
import * as _239 from "./core/client/v1/client";
import * as _240 from "./core/client/v1/genesis";
import * as _241 from "./core/client/v1/query";
import * as _242 from "./core/client/v1/tx";
import * as _243 from "./core/commitment/v1/commitment";
import * as _244 from "./core/connection/v1/connection";
import * as _245 from "./core/connection/v1/genesis";
import * as _246 from "./core/connection/v1/query";
import * as _247 from "./core/connection/v1/tx";
import * as _248 from "./core/port/v1/query";
import * as _249 from "./core/types/v1/genesis";
import * as _250 from "./lightclients/localhost/v1/localhost";
import * as _251 from "./lightclients/solomachine/v1/solomachine";
import * as _252 from "./lightclients/solomachine/v2/solomachine";
import * as _253 from "./lightclients/tendermint/v1/tendermint";
import * as _452 from "./applications/transfer/v1/tx.amino";
import * as _453 from "./core/channel/v1/tx.amino";
import * as _454 from "./core/client/v1/tx.amino";
import * as _455 from "./core/connection/v1/tx.amino";
import * as _456 from "./applications/transfer/v1/tx.registry";
import * as _457 from "./core/channel/v1/tx.registry";
import * as _458 from "./core/client/v1/tx.registry";
import * as _459 from "./core/connection/v1/tx.registry";
import * as _460 from "./applications/transfer/v1/query.lcd";
import * as _461 from "./core/channel/v1/query.lcd";
import * as _462 from "./core/client/v1/query.lcd";
import * as _463 from "./core/connection/v1/query.lcd";
import * as _464 from "./applications/transfer/v1/query.rpc.query";
import * as _465 from "./core/channel/v1/query.rpc.query";
import * as _466 from "./core/client/v1/query.rpc.query";
import * as _467 from "./core/connection/v1/query.rpc.query";
import * as _468 from "./core/port/v1/query.rpc.query";
import * as _469 from "./applications/transfer/v1/tx.rpc.msg";
import * as _470 from "./core/channel/v1/tx.rpc.msg";
import * as _471 from "./core/client/v1/tx.rpc.msg";
import * as _472 from "./core/connection/v1/tx.rpc.msg";
import * as _531 from "./lcd";
import * as _532 from "./rpc.query";
import * as _533 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._452,
        ..._456,
        ..._460,
        ..._464,
        ..._469
      };
      export const v2 = { ..._234
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._235,
        ..._236,
        ..._237,
        ..._238,
        ..._453,
        ..._457,
        ..._461,
        ..._465,
        ..._470
      };
    }
    export namespace client {
      export const v1 = { ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._454,
        ..._458,
        ..._462,
        ..._466,
        ..._471
      };
    }
    export namespace commitment {
      export const v1 = { ..._243
      };
    }
    export namespace connection {
      export const v1 = { ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._455,
        ..._459,
        ..._463,
        ..._467,
        ..._472
      };
    }
    export namespace port {
      export const v1 = { ..._248,
        ..._468
      };
    }
    export namespace types {
      export const v1 = { ..._249
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._250
      };
    }
    export namespace solomachine {
      export const v1 = { ..._251
      };
      export const v2 = { ..._252
      };
    }
    export namespace tendermint {
      export const v1 = { ..._253
      };
    }
  }
  export const ClientFactory = { ..._531,
    ..._532,
    ..._533
  };
}