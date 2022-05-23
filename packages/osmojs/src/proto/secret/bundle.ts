import * as _214 from "./compute/v1beta1/genesis";
import * as _215 from "./compute/v1beta1/msg";
import * as _216 from "./compute/v1beta1/query";
import * as _217 from "./compute/v1beta1/types";
import * as _218 from "./registration/v1beta1/genesis";
import * as _219 from "./registration/v1beta1/msg";
import * as _220 from "./registration/v1beta1/query";
import * as _221 from "./registration/v1beta1/types";
import * as _222 from "./registration/v1beta1/remote_attestation/types";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._214,
      ..._215,
      ..._216,
      ..._217
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._218,
      ..._219,
      ..._220,
      ..._221
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._222
      };
    }
  }
}