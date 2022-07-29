import * as _299 from "./compute/v1beta1/genesis";
import * as _300 from "./compute/v1beta1/msg";
import * as _301 from "./compute/v1beta1/query";
import * as _302 from "./compute/v1beta1/types";
import * as _303 from "./registration/v1beta1/genesis";
import * as _304 from "./registration/v1beta1/msg";
import * as _305 from "./registration/v1beta1/query";
import * as _306 from "./registration/v1beta1/types";
import * as _307 from "./registration/v1beta1/remote_attestation/types";
import * as _524 from "./compute/v1beta1/query.lcd";
import * as _525 from "./registration/v1beta1/query.lcd";
import * as _526 from "./compute/v1beta1/query.rpc.query";
import * as _527 from "./registration/v1beta1/query.rpc.query";
import * as _552 from "./lcd";
import * as _553 from "./rpc.query";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._299,
      ..._300,
      ..._301,
      ..._302,
      ..._524,
      ..._526
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._525,
      ..._527
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._307
      };
    }
  }
  export const ClientFactory = { ..._552,
    ..._553
  };
}