import * as _1050 from "./compute/v1beta1/genesis";
import * as _1051 from "./compute/v1beta1/msg";
import * as _1052 from "./compute/v1beta1/query";
import * as _1053 from "./compute/v1beta1/types";
import * as _1054 from "./registration/v1beta1/genesis";
import * as _1055 from "./registration/v1beta1/msg";
import * as _1056 from "./registration/v1beta1/query";
import * as _1057 from "./registration/v1beta1/types";
import * as _1058 from "./registration/v1beta1/remote_attestation/types";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._1050,
      ..._1051,
      ..._1052,
      ..._1053
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._1054,
      ..._1055,
      ..._1056,
      ..._1057
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._1058
      };
    }
  }
}