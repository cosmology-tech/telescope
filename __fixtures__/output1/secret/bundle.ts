import * as _268 from "./compute/v1beta1/genesis";
import * as _269 from "./compute/v1beta1/msg";
import * as _270 from "./compute/v1beta1/query";
import * as _271 from "./compute/v1beta1/types";
import * as _272 from "./registration/v1beta1/genesis";
import * as _273 from "./registration/v1beta1/msg";
import * as _274 from "./registration/v1beta1/query";
import * as _275 from "./registration/v1beta1/types";
import * as _276 from "./registration/v1beta1/remote_attestation/types";
import * as _387 from "./compute/v1beta1/query.lcd";
import * as _388 from "./registration/v1beta1/query.lcd";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._387
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._388
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._276
      };
    }
  }
}