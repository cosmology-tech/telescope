import * as _2 from "./authz/v1beta1/authz";
import * as _3 from "./bank/v1beta1/authz";
import * as _4 from "./bank/v1beta1/tx";
import * as _5 from "./base/v1beta1/coin";
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = {
      ..._2
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._3,
      ..._4
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._5
    };
  }
}