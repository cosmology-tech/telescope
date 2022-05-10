import * as _153 from "../../../packages/transpiler/ibc/applications/transfer/v1/genesis";
import * as _154 from "../../../packages/transpiler/ibc/applications/transfer/v1/query";
import * as _155 from "../../../packages/transpiler/ibc/applications/transfer/v1/transfer";
import * as _156 from "../../../packages/transpiler/ibc/applications/transfer/v1/tx";
import * as _157 from "../../../packages/transpiler/ibc/applications/transfer/v2/packet";
import * as _158 from "../../../packages/transpiler/ibc/core/channel/v1/channel";
import * as _159 from "../../../packages/transpiler/ibc/core/channel/v1/genesis";
import * as _160 from "../../../packages/transpiler/ibc/core/channel/v1/query";
import * as _161 from "../../../packages/transpiler/ibc/core/channel/v1/tx";
import * as _162 from "../../../packages/transpiler/ibc/core/client/v1/client";
import * as _163 from "../../../packages/transpiler/ibc/core/client/v1/genesis";
import * as _164 from "../../../packages/transpiler/ibc/core/client/v1/query";
import * as _165 from "../../../packages/transpiler/ibc/core/client/v1/tx";
import * as _166 from "../../../packages/transpiler/ibc/core/commitment/v1/commitment";
import * as _167 from "../../../packages/transpiler/ibc/core/connection/v1/connection";
import * as _168 from "../../../packages/transpiler/ibc/core/connection/v1/genesis";
import * as _169 from "../../../packages/transpiler/ibc/core/connection/v1/query";
import * as _170 from "../../../packages/transpiler/ibc/core/connection/v1/tx";
import * as _171 from "../../../packages/transpiler/ibc/core/port/v1/query";
import * as _172 from "../../../packages/transpiler/ibc/core/types/v1/genesis";
import * as _173 from "../../../packages/transpiler/ibc/lightclients/localhost/v1/localhost";
import * as _174 from "../../../packages/transpiler/ibc/lightclients/solomachine/v1/solomachine";
import * as _175 from "../../../packages/transpiler/ibc/lightclients/solomachine/v2/solomachine";
import * as _176 from "../../../packages/transpiler/ibc/lightclients/tendermint/v1/tendermint";
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