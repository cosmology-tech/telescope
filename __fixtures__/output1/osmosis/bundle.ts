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
import * as _267 from "./incentives/gauge";
import * as _268 from "./incentives/genesis";
import * as _269 from "./incentives/params";
import * as _270 from "./incentives/query";
import * as _271 from "./incentives/tx";
import * as _272 from "./lockup/genesis";
import * as _273 from "./lockup/lock";
import * as _274 from "./lockup/query";
import * as _275 from "./lockup/tx";
import * as _276 from "./mint/v1beta1/genesis";
import * as _277 from "./mint/v1beta1/mint";
import * as _278 from "./mint/v1beta1/query";
import * as _279 from "./pool-incentives/v1beta1/genesis";
import * as _280 from "./pool-incentives/v1beta1/gov";
import * as _281 from "./pool-incentives/v1beta1/incentives";
import * as _282 from "./pool-incentives/v1beta1/query";
import * as _283 from "./store/v1beta1/tree";
import * as _284 from "./streamswap/v1/event";
import * as _285 from "./streamswap/v1/genesis";
import * as _286 from "./streamswap/v1/params";
import * as _287 from "./streamswap/v1/query";
import * as _288 from "./streamswap/v1/state";
import * as _289 from "./streamswap/v1/tx";
import * as _290 from "./superfluid/genesis";
import * as _291 from "./superfluid/params";
import * as _292 from "./superfluid/query";
import * as _293 from "./superfluid/superfluid";
import * as _294 from "./superfluid/tx";
import * as _295 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _296 from "./tokenfactory/v1beta1/genesis";
import * as _297 from "./tokenfactory/v1beta1/params";
import * as _298 from "./tokenfactory/v1beta1/query";
import * as _299 from "./tokenfactory/v1beta1/tx";
import * as _300 from "./twap/v1beta1/genesis";
import * as _301 from "./twap/v1beta1/query";
import * as _302 from "./twap/v1beta1/twap_record";
import * as _303 from "./txfees/v1beta1/feetoken";
import * as _304 from "./txfees/v1beta1/genesis";
import * as _305 from "./txfees/v1beta1/gov";
import * as _306 from "./txfees/v1beta1/query";
import * as _482 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _483 from "./gamm/pool-models/stableswap/tx.amino";
import * as _484 from "./gamm/v1beta1/tx.amino";
import * as _485 from "./incentives/tx.amino";
import * as _486 from "./lockup/tx.amino";
import * as _487 from "./streamswap/v1/tx.amino";
import * as _488 from "./superfluid/tx.amino";
import * as _489 from "./tokenfactory/v1beta1/tx.amino";
import * as _490 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _491 from "./gamm/pool-models/stableswap/tx.registry";
import * as _492 from "./gamm/v1beta1/tx.registry";
import * as _493 from "./incentives/tx.registry";
import * as _494 from "./lockup/tx.registry";
import * as _495 from "./streamswap/v1/tx.registry";
import * as _496 from "./superfluid/tx.registry";
import * as _497 from "./tokenfactory/v1beta1/tx.registry";
import * as _498 from "./claim/v1beta1/query.lcd";
import * as _499 from "./epochs/query.lcd";
import * as _500 from "./gamm/v1beta1/query.lcd";
import * as _501 from "./incentives/query.lcd";
import * as _502 from "./lockup/query.lcd";
import * as _503 from "./mint/v1beta1/query.lcd";
import * as _504 from "./pool-incentives/v1beta1/query.lcd";
import * as _505 from "./streamswap/v1/query.lcd";
import * as _506 from "./superfluid/query.lcd";
import * as _507 from "./tokenfactory/v1beta1/query.lcd";
import * as _508 from "./twap/v1beta1/query.lcd";
import * as _509 from "./txfees/v1beta1/query.lcd";
import * as _510 from "./claim/v1beta1/query.rpc.query";
import * as _511 from "./epochs/query.rpc.query";
import * as _512 from "./gamm/v1beta1/query.rpc.query";
import * as _513 from "./incentives/query.rpc.query";
import * as _514 from "./lockup/query.rpc.query";
import * as _515 from "./mint/v1beta1/query.rpc.query";
import * as _516 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _517 from "./streamswap/v1/query.rpc.query";
import * as _518 from "./superfluid/query.rpc.query";
import * as _519 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _520 from "./twap/v1beta1/query.rpc.query";
import * as _521 from "./txfees/v1beta1/query.rpc.query";
import * as _522 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _523 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _524 from "./gamm/v1beta1/tx.rpc.msg";
import * as _525 from "./incentives/tx.rpc.msg";
import * as _526 from "./lockup/tx.rpc.msg";
import * as _527 from "./streamswap/v1/tx.rpc.msg";
import * as _528 from "./superfluid/tx.rpc.msg";
import * as _529 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _550 from "./lcd";
import * as _551 from "./custom-lcd-client";
import * as _552 from "./rpc.query";
import * as _553 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._498,
      ..._510
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._258,
      ..._259,
      ..._499,
      ..._511
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._484,
      ..._492,
      ..._500,
      ..._512,
      ..._524
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._264,
          ..._482,
          ..._490,
          ..._522
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._265,
          ..._266,
          ..._483,
          ..._491,
          ..._523
        };
      }
    }
  }
  export const incentives = { ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._485,
    ..._493,
    ..._501,
    ..._513,
    ..._525
  };
  export const lockup = { ..._272,
    ..._273,
    ..._274,
    ..._275,
    ..._486,
    ..._494,
    ..._502,
    ..._514,
    ..._526
  };
  export namespace mint {
    export const v1beta1 = { ..._276,
      ..._277,
      ..._278,
      ..._503,
      ..._515
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._279,
      ..._280,
      ..._281,
      ..._282,
      ..._504,
      ..._516
    };
  }
  export namespace store {
    export const v1beta1 = { ..._283
    };
  }
  export namespace streamswap {
    export const v1 = { ..._284,
      ..._285,
      ..._286,
      ..._287,
      ..._288,
      ..._289,
      ..._487,
      ..._495,
      ..._505,
      ..._517,
      ..._527
    };
  }
  export const superfluid = { ..._290,
    ..._291,
    ..._292,
    ..._293,
    ..._294,
    ..._488,
    ..._496,
    ..._506,
    ..._518,
    ..._528
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._299,
      ..._489,
      ..._497,
      ..._507,
      ..._519,
      ..._529
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._300,
      ..._301,
      ..._302,
      ..._508,
      ..._520
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._509,
      ..._521
    };
  }
  export const ClientFactory = { ..._550,
    ..._551,
    ..._552,
    ..._553
  };
}