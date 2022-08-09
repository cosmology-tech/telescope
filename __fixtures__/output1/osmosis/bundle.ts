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
import * as _474 from "./gamm/pool-models/balancer/tx.amino";
import * as _475 from "./gamm/pool-models/stableswap/tx.amino";
import * as _476 from "./gamm/v1beta1/tx.amino";
import * as _477 from "./incentives/tx.amino";
import * as _478 from "./lockup/tx.amino";
import * as _479 from "./superfluid/tx.amino";
import * as _480 from "./tokenfactory/v1beta1/tx.amino";
import * as _481 from "./gamm/pool-models/balancer/tx.registry";
import * as _482 from "./gamm/pool-models/stableswap/tx.registry";
import * as _483 from "./gamm/v1beta1/tx.registry";
import * as _484 from "./incentives/tx.registry";
import * as _485 from "./lockup/tx.registry";
import * as _486 from "./superfluid/tx.registry";
import * as _487 from "./tokenfactory/v1beta1/tx.registry";
import * as _488 from "./claim/v1beta1/query.lcd";
import * as _489 from "./epochs/query.lcd";
import * as _490 from "./gamm/v1beta1/query.lcd";
import * as _491 from "./incentives/query.lcd";
import * as _492 from "./lockup/query.lcd";
import * as _493 from "./mint/v1beta1/query.lcd";
import * as _494 from "./pool-incentives/v1beta1/query.lcd";
import * as _495 from "./superfluid/query.lcd";
import * as _496 from "./tokenfactory/v1beta1/query.lcd";
import * as _497 from "./txfees/v1beta1/query.lcd";
import * as _498 from "./claim/v1beta1/query.rpc.query";
import * as _499 from "./epochs/query.rpc.query";
import * as _500 from "./gamm/v1beta1/query.rpc.query";
import * as _501 from "./incentives/query.rpc.query";
import * as _502 from "./lockup/query.rpc.query";
import * as _503 from "./mint/v1beta1/query.rpc.query";
import * as _504 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _505 from "./superfluid/query.rpc.query";
import * as _506 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _507 from "./txfees/v1beta1/query.rpc.query";
import * as _508 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _509 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _510 from "./gamm/v1beta1/tx.rpc.msg";
import * as _511 from "./incentives/tx.rpc.msg";
import * as _512 from "./lockup/tx.rpc.msg";
import * as _513 from "./superfluid/tx.rpc.msg";
import * as _514 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _535 from "./lcd";
import * as _536 from "./custom-lcd-client";
import * as _537 from "./rpc.query";
import * as _538 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._488,
      ..._498
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._259,
      ..._260,
      ..._489,
      ..._499
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._476,
      ..._483,
      ..._490,
      ..._500,
      ..._510
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._265,
          ..._474,
          ..._481,
          ..._508
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._266,
          ..._267,
          ..._475,
          ..._482,
          ..._509
        };
      }
    }
  }
  export const incentives = { ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._477,
    ..._484,
    ..._491,
    ..._501,
    ..._511
  };
  export const lockup = { ..._273,
    ..._274,
    ..._275,
    ..._276,
    ..._478,
    ..._485,
    ..._492,
    ..._502,
    ..._512
  };
  export namespace mint {
    export const v1beta1 = { ..._277,
      ..._278,
      ..._279,
      ..._493,
      ..._503
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._494,
      ..._504
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
    ..._479,
    ..._486,
    ..._495,
    ..._505,
    ..._513
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._480,
      ..._487,
      ..._496,
      ..._506,
      ..._514
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._497,
      ..._507
    };
  }
  export const ClientFactory = { ..._535,
    ..._536,
    ..._537,
    ..._538
  };
}