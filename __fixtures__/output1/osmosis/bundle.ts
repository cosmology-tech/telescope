import * as _245 from "./claim/v1beta1/claim";
import * as _246 from "./claim/v1beta1/genesis";
import * as _247 from "./claim/v1beta1/params";
import * as _248 from "./claim/v1beta1/query";
import * as _249 from "./epochs/genesis";
import * as _250 from "./epochs/query";
import * as _251 from "./gamm/pool-models/balancer/balancerPool";
import * as _252 from "./gamm/v1beta1/genesis";
import * as _253 from "./gamm/v1beta1/query";
import * as _254 from "./gamm/v1beta1/tx";
import * as _255 from "./gamm/pool-models/balancer/tx";
import * as _256 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _257 from "./gamm/pool-models/stableswap/tx";
import * as _258 from "./incentives/gauge";
import * as _259 from "./incentives/genesis";
import * as _260 from "./incentives/params";
import * as _261 from "./incentives/query";
import * as _262 from "./incentives/tx";
import * as _263 from "./lockup/genesis";
import * as _264 from "./lockup/lock";
import * as _265 from "./lockup/query";
import * as _266 from "./lockup/tx";
import * as _267 from "./mint/v1beta1/genesis";
import * as _268 from "./mint/v1beta1/mint";
import * as _269 from "./mint/v1beta1/query";
import * as _270 from "./pool-incentives/v1beta1/genesis";
import * as _271 from "./pool-incentives/v1beta1/gov";
import * as _272 from "./pool-incentives/v1beta1/incentives";
import * as _273 from "./pool-incentives/v1beta1/query";
import * as _274 from "./store/v1beta1/tree";
import * as _275 from "./superfluid/genesis";
import * as _276 from "./superfluid/params";
import * as _277 from "./superfluid/query";
import * as _278 from "./superfluid/superfluid";
import * as _279 from "./superfluid/tx";
import * as _280 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _281 from "./tokenfactory/v1beta1/genesis";
import * as _282 from "./tokenfactory/v1beta1/params";
import * as _283 from "./tokenfactory/v1beta1/query";
import * as _284 from "./tokenfactory/v1beta1/tx";
import * as _285 from "./txfees/v1beta1/feetoken";
import * as _286 from "./txfees/v1beta1/genesis";
import * as _287 from "./txfees/v1beta1/gov";
import * as _288 from "./txfees/v1beta1/query";
import * as _454 from "./gamm/pool-models/balancer/tx.amino";
import * as _455 from "./gamm/pool-models/stableswap/tx.amino";
import * as _456 from "./gamm/v1beta1/tx.amino";
import * as _457 from "./incentives/tx.amino";
import * as _458 from "./lockup/tx.amino";
import * as _459 from "./superfluid/tx.amino";
import * as _460 from "./tokenfactory/v1beta1/tx.amino";
import * as _461 from "./gamm/pool-models/balancer/tx.registry";
import * as _462 from "./gamm/pool-models/stableswap/tx.registry";
import * as _463 from "./gamm/v1beta1/tx.registry";
import * as _464 from "./incentives/tx.registry";
import * as _465 from "./lockup/tx.registry";
import * as _466 from "./superfluid/tx.registry";
import * as _467 from "./tokenfactory/v1beta1/tx.registry";
import * as _468 from "./claim/v1beta1/query.lcd";
import * as _469 from "./epochs/query.lcd";
import * as _470 from "./gamm/v1beta1/query.lcd";
import * as _471 from "./incentives/query.lcd";
import * as _472 from "./lockup/query.lcd";
import * as _473 from "./mint/v1beta1/query.lcd";
import * as _474 from "./pool-incentives/v1beta1/query.lcd";
import * as _475 from "./superfluid/query.lcd";
import * as _476 from "./tokenfactory/v1beta1/query.lcd";
import * as _477 from "./txfees/v1beta1/query.lcd";
import * as _478 from "./claim/v1beta1/query.rpc.query";
import * as _479 from "./epochs/query.rpc.query";
import * as _480 from "./gamm/v1beta1/query.rpc.query";
import * as _481 from "./incentives/query.rpc.query";
import * as _482 from "./lockup/query.rpc.query";
import * as _483 from "./mint/v1beta1/query.rpc.query";
import * as _484 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _485 from "./superfluid/query.rpc.query";
import * as _486 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _487 from "./txfees/v1beta1/query.rpc.query";
import * as _488 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _489 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _490 from "./gamm/v1beta1/tx.rpc.msg";
import * as _491 from "./incentives/tx.rpc.msg";
import * as _492 from "./lockup/tx.rpc.msg";
import * as _493 from "./superfluid/tx.rpc.msg";
import * as _494 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _515 from "./lcd";
import * as _516 from "./custom-lcd-client";
import * as _517 from "./rpc.query";
import * as _518 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._245,
      ..._246,
      ..._247,
      ..._248,
      ..._468,
      ..._478
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._249,
      ..._250,
      ..._469,
      ..._479
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._456,
      ..._463,
      ..._470,
      ..._480,
      ..._490
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._255,
          ..._454,
          ..._461,
          ..._488
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._256,
          ..._257,
          ..._455,
          ..._462,
          ..._489
        };
      }
    }
  }
  export const incentives = { ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._457,
    ..._464,
    ..._471,
    ..._481,
    ..._491
  };
  export const lockup = { ..._263,
    ..._264,
    ..._265,
    ..._266,
    ..._458,
    ..._465,
    ..._472,
    ..._482,
    ..._492
  };
  export namespace mint {
    export const v1beta1 = { ..._267,
      ..._268,
      ..._269,
      ..._473,
      ..._483
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._474,
      ..._484
    };
  }
  export namespace store {
    export const v1beta1 = { ..._274
    };
  }
  export const superfluid = { ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._459,
    ..._466,
    ..._475,
    ..._485,
    ..._493
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._460,
      ..._467,
      ..._476,
      ..._486,
      ..._494
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._285,
      ..._286,
      ..._287,
      ..._288,
      ..._477,
      ..._487
    };
  }
  export const ClientFactory = { ..._515,
    ..._516,
    ..._517,
    ..._518
  };
}