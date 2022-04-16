import * as _1172 from "./compute/v1beta1/genesis";
import * as _1173 from "./compute/v1beta1/genesis";
import * as _1174 from "./compute/v1beta1/msg";
import * as _1175 from "./compute/v1beta1/msg";
import * as _1176 from "./compute/v1beta1/query";
import * as _1177 from "./compute/v1beta1/query";
import * as _1178 from "./compute/v1beta1/types";
import * as _1179 from "./compute/v1beta1/types";
import * as _1180 from "./registration/v1beta1/genesis";
import * as _1181 from "./registration/v1beta1/genesis";
import * as _1182 from "./registration/v1beta1/msg";
import * as _1183 from "./registration/v1beta1/msg";
import * as _1184 from "./registration/v1beta1/query";
import * as _1185 from "./registration/v1beta1/query";
import * as _1186 from "./registration/v1beta1/types";
import * as _1187 from "./registration/v1beta1/types";
import * as _1188 from "./registration/v1beta1/remote_attestation/types";
import * as _1189 from "./registration/v1beta1/remote_attestation/types";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._1172,
      ..._1173,
      ..._1174,
      ..._1175,
      ..._1176,
      ..._1177,
      ..._1178,
      ..._1179
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._1180,
      ..._1181,
      ..._1182,
      ..._1183,
      ..._1184,
      ..._1185,
      ..._1186,
      ..._1187
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._1188,
        ..._1189
      };
    }
  }
}