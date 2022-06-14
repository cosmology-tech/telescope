import * as _292 from "./compute/v1beta1/genesis";
import * as _293 from "./compute/v1beta1/msg";
import * as _294 from "./compute/v1beta1/query";
import * as _295 from "./compute/v1beta1/types";
import * as _296 from "./registration/v1beta1/genesis";
import * as _297 from "./registration/v1beta1/msg";
import * as _298 from "./registration/v1beta1/query";
import * as _299 from "./registration/v1beta1/types";
import * as _300 from "./registration/v1beta1/remote_attestation/types";
import * as _425 from "./compute/v1beta1/query.lcd";
import * as _426 from "./registration/v1beta1/query.lcd";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._292,
      ..._293,
      ..._294,
      ..._295,
      ..._425
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._296,
      ..._297,
      ..._298,
      ..._299,
      ..._426
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._300
      };
    }
  }
}