import * as _2 from "./authz/v1beta1/authz";
import * as _3 from "./authz/v1beta1/tx";
import * as _4 from "./bank/v1beta1/authz";
import * as _5 from "./bank/v1beta1/tx";
import * as _6 from "./base/v1beta1/coin";
import * as _11 from "./authz/v1beta1/tx.amino";
import * as _12 from "./authz/v1beta1/tx.registry";
import * as _13 from "./authz/v1beta1/tx.rpc.msg";
import * as _14 from "./rpc.tx";
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._11,
      ..._12,
      ..._13
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._4,
      ..._5
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._6
    };
  }
  export const ClientFactory = {
    ..._14
  };
}