import * as _267 from "./compute/v1beta1/genesis";
import * as _268 from "./compute/v1beta1/msg";
import * as _269 from "./compute/v1beta1/query";
import * as _270 from "./compute/v1beta1/types";
import * as _271 from "./registration/v1beta1/genesis";
import * as _272 from "./registration/v1beta1/msg";
import * as _273 from "./registration/v1beta1/query";
import * as _274 from "./registration/v1beta1/types";
import * as _275 from "./registration/v1beta1/remote_attestation/types";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._267,
      ..._268,
      ..._269,
      ..._270
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._271,
      ..._272,
      ..._273,
      ..._274
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._275
      };
    }
  }
}