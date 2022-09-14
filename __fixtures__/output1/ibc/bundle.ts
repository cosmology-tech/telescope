import * as _221 from "./applications/transfer/v1/genesis";
import * as _222 from "./applications/transfer/v1/query";
import * as _223 from "./applications/transfer/v1/transfer";
import * as _224 from "./applications/transfer/v1/tx";
import * as _225 from "./applications/transfer/v2/packet";
import * as _226 from "./core/channel/v1/channel";
import * as _227 from "./core/channel/v1/genesis";
import * as _228 from "./core/channel/v1/query";
import * as _229 from "./core/channel/v1/tx";
import * as _230 from "./core/client/v1/client";
import * as _231 from "./core/client/v1/genesis";
import * as _232 from "./core/client/v1/query";
import * as _233 from "./core/client/v1/tx";
import * as _234 from "./core/commitment/v1/commitment";
import * as _235 from "./core/connection/v1/connection";
import * as _236 from "./core/connection/v1/genesis";
import * as _237 from "./core/connection/v1/query";
import * as _238 from "./core/connection/v1/tx";
import * as _239 from "./core/port/v1/query";
import * as _240 from "./core/types/v1/genesis";
import * as _241 from "./lightclients/localhost/v1/localhost";
import * as _242 from "./lightclients/solomachine/v1/solomachine";
import * as _243 from "./lightclients/solomachine/v2/solomachine";
import * as _244 from "./lightclients/tendermint/v1/tendermint";
import * as _433 from "./applications/transfer/v1/tx.amino";
import * as _434 from "./core/channel/v1/tx.amino";
import * as _435 from "./core/client/v1/tx.amino";
import * as _436 from "./core/connection/v1/tx.amino";
import * as _437 from "./applications/transfer/v1/tx.registry";
import * as _438 from "./core/channel/v1/tx.registry";
import * as _439 from "./core/client/v1/tx.registry";
import * as _440 from "./core/connection/v1/tx.registry";
import * as _441 from "./applications/transfer/v1/query.lcd";
import * as _442 from "./core/channel/v1/query.lcd";
import * as _443 from "./core/client/v1/query.lcd";
import * as _444 from "./core/connection/v1/query.lcd";
import * as _445 from "./applications/transfer/v1/query.rpc.query";
import * as _446 from "./core/channel/v1/query.rpc.query";
import * as _447 from "./core/client/v1/query.rpc.query";
import * as _448 from "./core/connection/v1/query.rpc.query";
import * as _449 from "./core/port/v1/query.rpc.query";
import * as _450 from "./applications/transfer/v1/tx.rpc.msg";
import * as _451 from "./core/channel/v1/tx.rpc.msg";
import * as _452 from "./core/client/v1/tx.rpc.msg";
import * as _453 from "./core/connection/v1/tx.rpc.msg";
import * as _512 from "./lcd";
import * as _513 from "./rpc.query";
import * as _514 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._221,
        ..._222,
        ..._223,
        ..._224,
        ..._433,
        ..._437,
        ..._441,
        ..._445,
        ..._450
      };
      export const v2 = { ..._225
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._226,
        ..._227,
        ..._228,
        ..._229,
        ..._434,
        ..._438,
        ..._442,
        ..._446,
        ..._451
      };
    }
    export namespace client {
      export const v1 = { ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._435,
        ..._439,
        ..._443,
        ..._447,
        ..._452
      };
    }
    export namespace commitment {
      export const v1 = { ..._234
      };
    }
    export namespace connection {
      export const v1 = { ..._235,
        ..._236,
        ..._237,
        ..._238,
        ..._436,
        ..._440,
        ..._444,
        ..._448,
        ..._453
      };
    }
    export namespace port {
      export const v1 = { ..._239,
        ..._449
      };
    }
    export namespace types {
      export const v1 = { ..._240
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._241
      };
    }
    export namespace solomachine {
      export const v1 = { ..._242
      };
      export const v2 = { ..._243
      };
    }
    export namespace tendermint {
      export const v1 = { ..._244
      };
    }
  }
  export const ClientFactory = { ..._512,
    ..._513,
    ..._514
  };
}