import * as _254 from "./claim/v1beta1/claim";
import * as _255 from "./claim/v1beta1/genesis";
import * as _256 from "./claim/v1beta1/params";
import * as _257 from "./claim/v1beta1/query";
import * as _258 from "./epochs/genesis";
import * as _259 from "./epochs/query";
import * as _260 from "./gamm/pool-models/balancer/balancerPool";
import * as _261 from "./gamm/v1beta1/genesis";
import * as _262 from "./gamm/v1beta1/query";
import * as _263 from "./gamm/v1beta1/tx";
import * as _264 from "./gamm/pool-models/balancer/tx/tx";
import * as _265 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _266 from "./gamm/pool-models/stableswap/tx";
import * as _267 from "./gamm/v2/query";
import * as _268 from "./ibc-rate-limit/v1beta1/params";
import * as _269 from "./ibc-rate-limit/v1beta1/query";
import * as _270 from "./incentives/gauge";
import * as _271 from "./incentives/genesis";
import * as _272 from "./incentives/params";
import * as _273 from "./incentives/query";
import * as _274 from "./incentives/tx";
import * as _275 from "./lockup/genesis";
import * as _276 from "./lockup/lock";
import * as _277 from "./lockup/params";
import * as _278 from "./lockup/query";
import * as _279 from "./lockup/tx";
import * as _280 from "./mint/v1beta1/genesis";
import * as _281 from "./mint/v1beta1/mint";
import * as _282 from "./mint/v1beta1/query";
import * as _283 from "./pool-incentives/v1beta1/genesis";
import * as _284 from "./pool-incentives/v1beta1/gov";
import * as _285 from "./pool-incentives/v1beta1/incentives";
import * as _286 from "./pool-incentives/v1beta1/query";
import * as _287 from "./sumtree/v1beta1/tree";
import * as _288 from "./superfluid/genesis";
import * as _289 from "./superfluid/params";
import * as _290 from "./superfluid/query";
import * as _291 from "./superfluid/superfluid";
import * as _292 from "./superfluid/tx";
import * as _293 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _294 from "./tokenfactory/v1beta1/genesis";
import * as _295 from "./tokenfactory/v1beta1/params";
import * as _296 from "./tokenfactory/v1beta1/query";
import * as _297 from "./tokenfactory/v1beta1/tx";
import * as _298 from "./twap/v1beta1/genesis";
import * as _299 from "./twap/v1beta1/query";
import * as _300 from "./twap/v1beta1/twap_record";
import * as _301 from "./txfees/v1beta1/feetoken";
import * as _302 from "./txfees/v1beta1/genesis";
import * as _303 from "./txfees/v1beta1/gov";
import * as _304 from "./txfees/v1beta1/query";
import * as _428 from "./claim/v1beta1/query.lcd";
import * as _429 from "./epochs/query.lcd";
import * as _430 from "./gamm/v1beta1/query.lcd";
import * as _431 from "./gamm/v2/query.lcd";
import * as _432 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _433 from "./incentives/query.lcd";
import * as _434 from "./lockup/query.lcd";
import * as _435 from "./mint/v1beta1/query.lcd";
import * as _436 from "./pool-incentives/v1beta1/query.lcd";
import * as _437 from "./superfluid/query.lcd";
import * as _438 from "./tokenfactory/v1beta1/query.lcd";
import * as _439 from "./twap/v1beta1/query.lcd";
import * as _440 from "./txfees/v1beta1/query.lcd";
import * as _441 from "./claim/v1beta1/query.rpc.Query";
import * as _442 from "./epochs/query.rpc.Query";
import * as _443 from "./gamm/v1beta1/query.rpc.Query";
import * as _444 from "./gamm/v2/query.rpc.Query";
import * as _445 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _446 from "./incentives/query.rpc.Query";
import * as _447 from "./lockup/query.rpc.Query";
import * as _448 from "./mint/v1beta1/query.rpc.Query";
import * as _449 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _450 from "./superfluid/query.rpc.Query";
import * as _451 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _452 from "./twap/v1beta1/query.rpc.Query";
import * as _453 from "./txfees/v1beta1/query.rpc.Query";
import * as _454 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _455 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _456 from "./gamm/v1beta1/tx.rpc.msg";
import * as _457 from "./incentives/tx.rpc.msg";
import * as _458 from "./lockup/tx.rpc.msg";
import * as _459 from "./superfluid/tx.rpc.msg";
import * as _460 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _461 from "./gamm/v1beta1/query.pinia.store";
import * as _462 from "./gamm/v2/query.pinia.store";
import * as _484 from "./lcd";
import * as _485 from "./custom-lcd-client";
import * as _486 from "./rpc.query";
import * as _487 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._428,
      ..._441
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._258,
      ..._259,
      ..._429,
      ..._442
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._430,
      ..._443,
      ..._456,
      ..._461
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._264,
          ..._454
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._265,
          ..._266,
          ..._455
        };
      }
    }
    export const v2 = {
      ..._267,
      ..._431,
      ..._444,
      ..._462
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._268,
      ..._269,
      ..._432,
      ..._445
    };
  }
  export const incentives = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._433,
    ..._446,
    ..._457
  };
  export const lockup = {
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._434,
    ..._447,
    ..._458
  };
  export namespace mint {
    export const v1beta1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._435,
      ..._448
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._436,
      ..._449
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._287
    };
  }
  export const superfluid = {
    ..._288,
    ..._289,
    ..._290,
    ..._291,
    ..._292,
    ..._437,
    ..._450,
    ..._459
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._438,
      ..._451,
      ..._460
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._298,
      ..._299,
      ..._300,
      ..._439,
      ..._452
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._440,
      ..._453
    };
  }
  export const ClientFactory = {
    ..._484,
    ..._485,
    ..._486,
    ..._487
  };
}