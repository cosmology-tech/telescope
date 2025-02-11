import * as _230 from "./applications/transfer/v1/genesis.js";
import * as _231 from "./applications/transfer/v1/query.js";
import * as _232 from "./applications/transfer/v1/transfer.js";
import * as _233 from "./applications/transfer/v1/tx.js";
import * as _234 from "./applications/transfer/v2/packet.js";
import * as _235 from "./core/channel/v1/channel.js";
import * as _236 from "./core/channel/v1/genesis.js";
import * as _237 from "./core/channel/v1/query.js";
import * as _238 from "./core/channel/v1/tx.js";
import * as _239 from "./core/client/v1/client.js";
import * as _240 from "./core/client/v1/genesis.js";
import * as _241 from "./core/client/v1/query.js";
import * as _242 from "./core/client/v1/tx.js";
import * as _243 from "./core/commitment/v1/commitment.js";
import * as _244 from "./core/connection/v1/connection.js";
import * as _245 from "./core/connection/v1/genesis.js";
import * as _246 from "./core/connection/v1/query.js";
import * as _247 from "./core/connection/v1/tx.js";
import * as _248 from "./core/port/v1/query.js";
import * as _249 from "./core/types/v1/genesis.js";
import * as _250 from "./lightclients/localhost/v1/localhost.js";
import * as _251 from "./lightclients/solomachine/v1/solomachine.js";
import * as _252 from "./lightclients/solomachine/v2/solomachine.js";
import * as _253 from "./lightclients/tendermint/v1/tendermint.js";
import * as _465 from "./applications/transfer/v1/tx.amino.js";
import * as _466 from "./core/channel/v1/tx.amino.js";
import * as _467 from "./core/client/v1/tx.amino.js";
import * as _468 from "./core/connection/v1/tx.amino.js";
import * as _469 from "./applications/transfer/v1/tx.registry.js";
import * as _470 from "./core/channel/v1/tx.registry.js";
import * as _471 from "./core/client/v1/tx.registry.js";
import * as _472 from "./core/connection/v1/tx.registry.js";
import * as _473 from "./applications/transfer/v1/query.lcd.js";
import * as _474 from "./core/channel/v1/query.lcd.js";
import * as _475 from "./core/client/v1/query.lcd.js";
import * as _476 from "./core/connection/v1/query.lcd.js";
import * as _477 from "./applications/transfer/v1/query.rpc.Query.js";
import * as _478 from "./core/channel/v1/query.rpc.Query.js";
import * as _479 from "./core/client/v1/query.rpc.Query.js";
import * as _480 from "./core/connection/v1/query.rpc.Query.js";
import * as _481 from "./core/port/v1/query.rpc.Query.js";
import * as _482 from "./applications/transfer/v1/tx.rpc.msg.js";
import * as _483 from "./core/channel/v1/tx.rpc.msg.js";
import * as _484 from "./core/client/v1/tx.rpc.msg.js";
import * as _485 from "./core/connection/v1/tx.rpc.msg.js";
import * as _553 from "./lcd.js";
import * as _554 from "./rpc.query.js";
import * as _555 from "./rpc.tx.js";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._465,
        ..._469,
        ..._473,
        ..._477,
        ..._482
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
        ..._466,
        ..._470,
        ..._474,
        ..._478,
        ..._483
      };
    }
    export namespace client {
      export const v1 = {
        ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._467,
        ..._471,
        ..._475,
        ..._479,
        ..._484
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
        ..._468,
        ..._472,
        ..._476,
        ..._480,
        ..._485
      };
    }
    export namespace port {
      export const v1 = {
        ..._248,
        ..._481
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
    ..._553,
    ..._554,
    ..._555
  };
}