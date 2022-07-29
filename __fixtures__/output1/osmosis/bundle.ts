import * as _255 from "./claim/v1beta1/claim";
import * as _256 from "./claim/v1beta1/genesis";
import * as _257 from "./claim/v1beta1/params";
import * as _258 from "./claim/v1beta1/query";
import * as _259 from "./epochs/genesis";
import * as _260 from "./epochs/query";
import * as _261 from "./gamm/pool-models/balancer/balancerPool";
import * as _262 from "./gamm/v1beta1/genesis";
import * as _263 from "./gamm/v1beta1/query";
import * as _264 from "./gamm/v1beta1/tx";
import * as _265 from "./gamm/pool-models/balancer/tx";
import * as _266 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _267 from "./gamm/pool-models/stableswap/tx";
import * as _268 from "./incentives/gauge";
import * as _269 from "./incentives/genesis";
import * as _270 from "./incentives/params";
import * as _271 from "./incentives/query";
import * as _272 from "./incentives/tx";
import * as _273 from "./lockup/genesis";
import * as _274 from "./lockup/lock";
import * as _275 from "./lockup/query";
import * as _276 from "./lockup/tx";
import * as _277 from "./mint/v1beta1/genesis";
import * as _278 from "./mint/v1beta1/mint";
import * as _279 from "./mint/v1beta1/query";
import * as _280 from "./pool-incentives/v1beta1/genesis";
import * as _281 from "./pool-incentives/v1beta1/gov";
import * as _282 from "./pool-incentives/v1beta1/incentives";
import * as _283 from "./pool-incentives/v1beta1/query";
import * as _284 from "./store/v1beta1/tree";
import * as _285 from "./superfluid/genesis";
import * as _286 from "./superfluid/params";
import * as _287 from "./superfluid/query";
import * as _288 from "./superfluid/superfluid";
import * as _289 from "./superfluid/tx";
import * as _290 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _291 from "./tokenfactory/v1beta1/genesis";
import * as _292 from "./tokenfactory/v1beta1/params";
import * as _293 from "./tokenfactory/v1beta1/query";
import * as _294 from "./tokenfactory/v1beta1/tx";
import * as _295 from "./txfees/v1beta1/feetoken";
import * as _296 from "./txfees/v1beta1/genesis";
import * as _297 from "./txfees/v1beta1/gov";
import * as _298 from "./txfees/v1beta1/query";
import * as _483 from "./gamm/pool-models/balancer/tx.amino";
import * as _484 from "./gamm/pool-models/stableswap/tx.amino";
import * as _485 from "./gamm/v1beta1/tx.amino";
import * as _486 from "./incentives/tx.amino";
import * as _487 from "./lockup/tx.amino";
import * as _488 from "./superfluid/tx.amino";
import * as _489 from "./tokenfactory/v1beta1/tx.amino";
import * as _490 from "./gamm/pool-models/balancer/tx.registry";
import * as _491 from "./gamm/pool-models/stableswap/tx.registry";
import * as _492 from "./gamm/v1beta1/tx.registry";
import * as _493 from "./incentives/tx.registry";
import * as _494 from "./lockup/tx.registry";
import * as _495 from "./superfluid/tx.registry";
import * as _496 from "./tokenfactory/v1beta1/tx.registry";
import * as _497 from "./claim/v1beta1/query.lcd";
import * as _498 from "./epochs/query.lcd";
import * as _499 from "./gamm/v1beta1/query.lcd";
import * as _500 from "./incentives/query.lcd";
import * as _501 from "./lockup/query.lcd";
import * as _502 from "./mint/v1beta1/query.lcd";
import * as _503 from "./pool-incentives/v1beta1/query.lcd";
import * as _504 from "./superfluid/query.lcd";
import * as _505 from "./tokenfactory/v1beta1/query.lcd";
import * as _506 from "./txfees/v1beta1/query.lcd";
import * as _507 from "./claim/v1beta1/query.rpc.query";
import * as _508 from "./epochs/query.rpc.query";
import * as _509 from "./gamm/v1beta1/query.rpc.query";
import * as _510 from "./incentives/query.rpc.query";
import * as _511 from "./lockup/query.rpc.query";
import * as _512 from "./mint/v1beta1/query.rpc.query";
import * as _513 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _514 from "./superfluid/query.rpc.query";
import * as _515 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _516 from "./txfees/v1beta1/query.rpc.query";
import * as _517 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _518 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _519 from "./gamm/v1beta1/tx.rpc.msg";
import * as _520 from "./incentives/tx.rpc.msg";
import * as _521 from "./lockup/tx.rpc.msg";
import * as _522 from "./superfluid/tx.rpc.msg";
import * as _523 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _548 from "./lcd";
import * as _549 from "./custom-lcd-client";
import * as _550 from "./rpc.query";
import * as _551 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._497,
      ..._507
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._259,
      ..._260,
      ..._498,
      ..._508
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._485,
      ..._492,
      ..._499,
      ..._509,
      ..._519
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._265,
          ..._483,
          ..._490,
          ..._517
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._266,
          ..._267,
          ..._484,
          ..._491,
          ..._518
        };
      }
    }
  }
  export const incentives = { ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._486,
    ..._493,
    ..._500,
    ..._510,
    ..._520
  };
  export const lockup = { ..._273,
    ..._274,
    ..._275,
    ..._276,
    ..._487,
    ..._494,
    ..._501,
    ..._511,
    ..._521
  };
  export namespace mint {
    export const v1beta1 = { ..._277,
      ..._278,
      ..._279,
      ..._502,
      ..._512
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._503,
      ..._513
    };
  }
  export namespace store {
    export const v1beta1 = { ..._284
    };
  }
  export const superfluid = { ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._289,
    ..._488,
    ..._495,
    ..._504,
    ..._514,
    ..._522
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._489,
      ..._496,
      ..._505,
      ..._515,
      ..._523
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._506,
      ..._516
    };
  }
  export const ClientFactory = { ..._548,
    ..._549,
    ..._550,
    ..._551
  };
}