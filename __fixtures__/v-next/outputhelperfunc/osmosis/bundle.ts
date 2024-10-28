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
import * as _488 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _489 from "./gamm/pool-models/stableswap/tx.amino";
import * as _490 from "./gamm/v1beta1/tx.amino";
import * as _491 from "./incentives/tx.amino";
import * as _492 from "./lockup/tx.amino";
import * as _493 from "./superfluid/tx.amino";
import * as _494 from "./tokenfactory/v1beta1/tx.amino";
import * as _495 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _496 from "./gamm/pool-models/stableswap/tx.registry";
import * as _497 from "./gamm/v1beta1/tx.registry";
import * as _498 from "./incentives/tx.registry";
import * as _499 from "./lockup/tx.registry";
import * as _500 from "./superfluid/tx.registry";
import * as _501 from "./tokenfactory/v1beta1/tx.registry";
import * as _502 from "./claim/v1beta1/query.lcd";
import * as _503 from "./epochs/query.lcd";
import * as _504 from "./gamm/v1beta1/query.lcd";
import * as _505 from "./gamm/v2/query.lcd";
import * as _506 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _507 from "./incentives/query.lcd";
import * as _508 from "./lockup/query.lcd";
import * as _509 from "./mint/v1beta1/query.lcd";
import * as _510 from "./pool-incentives/v1beta1/query.lcd";
import * as _511 from "./superfluid/query.lcd";
import * as _512 from "./tokenfactory/v1beta1/query.lcd";
import * as _513 from "./twap/v1beta1/query.lcd";
import * as _514 from "./txfees/v1beta1/query.lcd";
import * as _515 from "./claim/v1beta1/query.rpc.Query";
import * as _516 from "./epochs/query.rpc.Query";
import * as _517 from "./gamm/v1beta1/query.rpc.Query";
import * as _518 from "./gamm/v2/query.rpc.Query";
import * as _519 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _520 from "./incentives/query.rpc.Query";
import * as _521 from "./lockup/query.rpc.Query";
import * as _522 from "./mint/v1beta1/query.rpc.Query";
import * as _523 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _524 from "./superfluid/query.rpc.Query";
import * as _525 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _526 from "./twap/v1beta1/query.rpc.Query";
import * as _527 from "./txfees/v1beta1/query.rpc.Query";
import * as _528 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _529 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _530 from "./gamm/v1beta1/tx.rpc.msg";
import * as _531 from "./incentives/tx.rpc.msg";
import * as _532 from "./lockup/tx.rpc.msg";
import * as _533 from "./superfluid/tx.rpc.msg";
import * as _534 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _535 from "./gamm/v1beta1/query.pinia.store";
import * as _536 from "./gamm/v2/query.pinia.store";
import * as _558 from "./lcd";
import * as _559 from "./custom-lcd-client";
import * as _560 from "./rpc.query";
import * as _561 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._502,
      ..._515
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._258,
      ..._259,
      ..._503,
      ..._516
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._490,
      ..._497,
      ..._504,
      ..._517,
      ..._530,
      ..._535
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._264,
          ..._488,
          ..._495,
          ..._528
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._265,
          ..._266,
          ..._489,
          ..._496,
          ..._529
        };
      }
    }
    export const v2 = {
      ..._267,
      ..._505,
      ..._518,
      ..._536
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._268,
      ..._269,
      ..._506,
      ..._519
    };
  }
  export const incentives = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._491,
    ..._498,
    ..._507,
    ..._520,
    ..._531
  };
  export const lockup = {
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._492,
    ..._499,
    ..._508,
    ..._521,
    ..._532
  };
  export namespace mint {
    export const v1beta1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._509,
      ..._522
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._510,
      ..._523
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
    ..._493,
    ..._500,
    ..._511,
    ..._524,
    ..._533
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._494,
      ..._501,
      ..._512,
      ..._525,
      ..._534
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._298,
      ..._299,
      ..._300,
      ..._513,
      ..._526
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._514,
      ..._527
    };
  }
  export const ClientFactory = {
    ..._558,
    ..._559,
    ..._560,
    ..._561
  };
}