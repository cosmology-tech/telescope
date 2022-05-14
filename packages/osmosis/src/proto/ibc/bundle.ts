import * as _153 from "./applications/transfer/v1/genesis";
import * as _154 from "./applications/transfer/v1/query";
import * as _155 from "./applications/transfer/v1/transfer";
import * as _156 from "./applications/transfer/v1/tx";
import * as _157 from "./applications/transfer/v2/packet";
import * as _158 from "./core/channel/v1/channel";
import * as _159 from "./core/channel/v1/genesis";
import * as _160 from "./core/channel/v1/query";
import * as _161 from "./core/channel/v1/tx";
import * as _162 from "./core/client/v1/client";
import * as _163 from "./core/client/v1/genesis";
import * as _164 from "./core/client/v1/query";
import * as _165 from "./core/client/v1/tx";
import * as _166 from "./core/commitment/v1/commitment";
import * as _167 from "./core/connection/v1/connection";
import * as _168 from "./core/connection/v1/genesis";
import * as _169 from "./core/connection/v1/query";
import * as _170 from "./core/connection/v1/tx";
import * as _171 from "./core/port/v1/query";
import * as _172 from "./core/types/v1/genesis";
import * as _173 from "./lightclients/localhost/v1/localhost";
import * as _174 from "./lightclients/solomachine/v1/solomachine";
import * as _175 from "./lightclients/solomachine/v2/solomachine";
import * as _176 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._153,
        ..._154,
        ..._155,
        ..._156
      };
      export const v2 = { ..._157
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._158,
        ..._159,
        ..._160,
        ..._161
      };
    }
    export namespace client {
      export const v1 = { ..._162,
        ..._163,
        ..._164,
        ..._165
      };
    }
    export namespace commitment {
      export const v1 = { ..._166
      };
    }
    export namespace connection {
      export const v1 = { ..._167,
        ..._168,
        ..._169,
        ..._170
      };
    }
    export namespace port {
      export const v1 = { ..._171
      };
    }
    export namespace types {
      export const v1 = { ..._172
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._173
      };
    }
    export namespace solomachine {
      export const v1 = { ..._174
      };
      export const v2 = { ..._175
      };
    }
    export namespace tendermint {
      export const v1 = { ..._176
      };
    }
  }
}