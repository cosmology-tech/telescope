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
import * as _528 from "./applications/transfer/v1/tx.amino";
import * as _529 from "./core/channel/v1/tx.amino";
import * as _530 from "./core/client/v1/tx.amino";
import * as _531 from "./core/connection/v1/tx.amino";
import * as _532 from "./applications/transfer/v1/tx.registry";
import * as _533 from "./core/channel/v1/tx.registry";
import * as _534 from "./core/client/v1/tx.registry";
import * as _535 from "./core/connection/v1/tx.registry";
import * as _536 from "./applications/transfer/v1/query.lcd";
import * as _537 from "./core/channel/v1/query.lcd";
import * as _538 from "./core/client/v1/query.lcd";
import * as _539 from "./core/connection/v1/query.lcd";
import * as _540 from "./applications/transfer/v1/query.rpc.func";
import * as _541 from "./core/channel/v1/query.rpc.func";
import * as _542 from "./core/client/v1/query.rpc.func";
import * as _543 from "./core/connection/v1/query.rpc.func";
import * as _544 from "./core/port/v1/query.rpc.func";
import * as _545 from "./applications/transfer/v1/query.rpc.Query";
import * as _546 from "./core/channel/v1/query.rpc.Query";
import * as _547 from "./core/client/v1/query.rpc.Query";
import * as _548 from "./core/connection/v1/query.rpc.Query";
import * as _549 from "./core/port/v1/query.rpc.Query";
import * as _550 from "./applications/transfer/v1/tx.rpc.func";
import * as _551 from "./core/channel/v1/tx.rpc.func";
import * as _552 from "./core/client/v1/tx.rpc.func";
import * as _553 from "./core/connection/v1/tx.rpc.func";
import * as _554 from "./applications/transfer/v1/tx.rpc.msg";
import * as _555 from "./core/channel/v1/tx.rpc.msg";
import * as _556 from "./core/client/v1/tx.rpc.msg";
import * as _557 from "./core/connection/v1/tx.rpc.msg";
import * as _646 from "./lcd";
import * as _647 from "./rpc.query";
import * as _648 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._528,
        ..._532,
        ..._536,
        ..._540,
        ..._545,
        ..._550,
        ..._554
      };
      export const v2 = {
        ..._234
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._235,
        ..._236,
        ..._237,
        ..._238,
        ..._529,
        ..._533,
        ..._537,
        ..._541,
        ..._546,
        ..._551,
        ..._555
      };
    }
    export namespace client {
      export const v1 = {
        ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._530,
        ..._534,
        ..._538,
        ..._542,
        ..._547,
        ..._552,
        ..._556
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._243
      };
    }
    export namespace connection {
      export const v1 = {
        ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._531,
        ..._535,
        ..._539,
        ..._543,
        ..._548,
        ..._553,
        ..._557
      };
    }
    export namespace port {
      export const v1 = {
        ..._248,
        ..._544,
        ..._549
      };
    }
    export namespace types {
      export const v1 = {
        ..._249
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._250
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._251
      };
      export const v2 = {
        ..._252
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._253
      };
    }
  }
  export const ClientFactory = {
    ..._646,
    ..._647,
    ..._648
  };
}