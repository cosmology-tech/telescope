import * as _816 from "./compute/v1beta1/genesis";
import * as _817 from "./compute/v1beta1/msg";
import * as _818 from "./compute/v1beta1/query";
import * as _819 from "./compute/v1beta1/types";
import * as _820 from "./registration/v1beta1/genesis";
import * as _821 from "./registration/v1beta1/msg";
import * as _822 from "./registration/v1beta1/query";
import * as _823 from "./registration/v1beta1/types";
import * as _824 from "./registration/v1beta1/remote_attestation/types";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._816,
      ..._817,
      ..._818,
      ..._819
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._820,
      ..._821,
      ..._822,
      ..._823
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._824
      };
    }
  }
}