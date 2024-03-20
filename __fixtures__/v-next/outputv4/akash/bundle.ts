import * as _0 from "./audit/v1beta1/audit.js";
import * as _1 from "./audit/v1beta2/audit.js";
import * as _2 from "./audit/v1beta2/genesis.js";
import * as _3 from "./audit/v1beta2/query.js";
import * as _4 from "./base/v1beta1/attribute.js";
import * as _5 from "./base/v1beta1/endpoint.js";
import * as _6 from "./base/v1beta1/resource.js";
import * as _7 from "./base/v1beta1/resourcevalue.js";
import * as _8 from "./base/v1beta2/attribute.js";
import * as _9 from "./base/v1beta2/endpoint.js";
import * as _10 from "./base/v1beta2/resource.js";
import * as _11 from "./base/v1beta2/resourceunits.js";
import * as _12 from "./base/v1beta2/resourcevalue.js";
import * as _13 from "./cert/v1beta2/cert.js";
import * as _14 from "./cert/v1beta2/genesis.js";
import * as _15 from "./cert/v1beta2/query.js";
import * as _16 from "./deployment/v1beta1/authz.js";
import * as _17 from "./deployment/v1beta1/deployment.js";
import * as _18 from "./deployment/v1beta1/genesis.js";
import * as _19 from "./deployment/v1beta1/group.js";
import * as _20 from "./deployment/v1beta1/params.js";
import * as _21 from "./deployment/v1beta1/query.js";
import * as _22 from "./deployment/v1beta2/authz.js";
import * as _23 from "./deployment/v1beta2/deployment.js";
import * as _24 from "./deployment/v1beta2/deploymentmsg.js";
import * as _25 from "./deployment/v1beta2/genesis.js";
import * as _26 from "./deployment/v1beta2/group.js";
import * as _27 from "./deployment/v1beta2/groupid.js";
import * as _28 from "./deployment/v1beta2/groupmsg.js";
import * as _29 from "./deployment/v1beta2/groupspec.js";
import * as _30 from "./deployment/v1beta2/params.js";
import * as _31 from "./deployment/v1beta2/query.js";
import * as _32 from "./deployment/v1beta2/resource.js";
import * as _33 from "./deployment/v1beta2/service.js";
import * as _34 from "./escrow/v1beta1/genesis.js";
import * as _35 from "./escrow/v1beta1/query.js";
import * as _36 from "./escrow/v1beta1/types.js";
import * as _37 from "./escrow/v1beta2/genesis.js";
import * as _38 from "./escrow/v1beta2/query.js";
import * as _39 from "./escrow/v1beta2/types.js";
import * as _40 from "./inflation/v1beta2/genesis.js";
import * as _41 from "./inflation/v1beta2/params.js";
import * as _42 from "./market/v1beta2/bid.js";
import * as _43 from "./market/v1beta2/genesis.js";
import * as _44 from "./market/v1beta2/lease.js";
import * as _45 from "./market/v1beta2/order.js";
import * as _46 from "./market/v1beta2/params.js";
import * as _47 from "./market/v1beta2/query.js";
import * as _48 from "./market/v1beta2/service.js";
import * as _49 from "./provider/v1beta1/provider.js";
import * as _50 from "./provider/v1beta2/genesis.js";
import * as _51 from "./provider/v1beta2/provider.js";
import * as _52 from "./provider/v1beta2/query.js";
import * as _316 from "./audit/v1beta1/audit.amino.js";
import * as _317 from "./audit/v1beta2/audit.amino.js";
import * as _318 from "./cert/v1beta2/cert.amino.js";
import * as _319 from "./deployment/v1beta2/service.amino.js";
import * as _320 from "./market/v1beta2/service.amino.js";
import * as _321 from "./provider/v1beta1/provider.amino.js";
import * as _322 from "./provider/v1beta2/provider.amino.js";
import * as _323 from "./audit/v1beta1/audit.registry.js";
import * as _324 from "./audit/v1beta2/audit.registry.js";
import * as _325 from "./cert/v1beta2/cert.registry.js";
import * as _326 from "./deployment/v1beta2/service.registry.js";
import * as _327 from "./market/v1beta2/service.registry.js";
import * as _328 from "./provider/v1beta1/provider.registry.js";
import * as _329 from "./provider/v1beta2/provider.registry.js";
import * as _330 from "./audit/v1beta2/query.lcd.js";
import * as _331 from "./cert/v1beta2/query.lcd.js";
import * as _332 from "./deployment/v1beta1/query.lcd.js";
import * as _333 from "./deployment/v1beta2/query.lcd.js";
import * as _334 from "./escrow/v1beta1/query.lcd.js";
import * as _335 from "./escrow/v1beta2/query.lcd.js";
import * as _336 from "./market/v1beta2/query.lcd.js";
import * as _337 from "./provider/v1beta2/query.lcd.js";
import * as _338 from "./audit/v1beta2/query.rpc.Query.js";
import * as _339 from "./cert/v1beta2/query.rpc.Query.js";
import * as _340 from "./deployment/v1beta2/query.rpc.Query.js";
import * as _341 from "./escrow/v1beta1/query.rpc.Query.js";
import * as _342 from "./escrow/v1beta2/query.rpc.Query.js";
import * as _343 from "./market/v1beta2/query.rpc.Query.js";
import * as _344 from "./provider/v1beta2/query.rpc.Query.js";
import * as _345 from "./audit/v1beta1/audit.rpc.msg.js";
import * as _346 from "./audit/v1beta2/audit.rpc.msg.js";
import * as _347 from "./cert/v1beta2/cert.rpc.msg.js";
import * as _348 from "./deployment/v1beta2/service.rpc.msg.js";
import * as _349 from "./market/v1beta2/service.rpc.msg.js";
import * as _350 from "./provider/v1beta1/provider.rpc.msg.js";
import * as _351 from "./provider/v1beta2/provider.rpc.msg.js";
import * as _352 from "./cert/v1beta2/query.pinia.store.js";
import * as _536 from "./lcd.js";
import * as _537 from "./rpc.query.js";
import * as _538 from "./rpc.tx.js";
export namespace akash {
  export namespace audit {
    export const v1beta1 = {
      ..._0,
      ..._316,
      ..._323,
      ..._345
    };
    export const v1beta2 = {
      ..._1,
      ..._2,
      ..._3,
      ..._317,
      ..._324,
      ..._330,
      ..._338,
      ..._346
    };
  }
  export namespace base {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7
    };
    export const v1beta2 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12
    };
  }
  export namespace cert {
    export const v1beta2 = {
      ..._13,
      ..._14,
      ..._15,
      ..._318,
      ..._325,
      ..._331,
      ..._339,
      ..._347,
      ..._352
    };
  }
  export namespace deployment {
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._332
    };
    export const v1beta2 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._319,
      ..._326,
      ..._333,
      ..._340,
      ..._348
    };
  }
  export namespace escrow {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._334,
      ..._341
    };
    export const v1beta2 = {
      ..._37,
      ..._38,
      ..._39,
      ..._335,
      ..._342
    };
  }
  export namespace inflation {
    export const v1beta2 = {
      ..._40,
      ..._41
    };
  }
  export namespace market {
    export const v1beta2 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._320,
      ..._327,
      ..._336,
      ..._343,
      ..._349
    };
  }
  export namespace provider {
    export const v1beta1 = {
      ..._49,
      ..._321,
      ..._328,
      ..._350
    };
    export const v1beta2 = {
      ..._50,
      ..._51,
      ..._52,
      ..._322,
      ..._329,
      ..._337,
      ..._344,
      ..._351
    };
  }
  export const ClientFactory = {
    ..._536,
    ..._537,
    ..._538
  };
}