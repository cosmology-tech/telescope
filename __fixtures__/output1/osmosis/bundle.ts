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
import * as _264 from "./gamm/pool-models/balancer/tx";
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
import * as _284 from "./superfluid/genesis";
import * as _285 from "./superfluid/params";
import * as _286 from "./superfluid/query";
import * as _287 from "./superfluid/superfluid";
import * as _288 from "./superfluid/tx";
import * as _289 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _290 from "./tokenfactory/v1beta1/genesis";
import * as _291 from "./tokenfactory/v1beta1/params";
import * as _292 from "./tokenfactory/v1beta1/query";
import * as _293 from "./tokenfactory/v1beta1/tx";
import * as _294 from "./txfees/v1beta1/feetoken";
import * as _295 from "./txfees/v1beta1/genesis";
import * as _296 from "./txfees/v1beta1/gov";
import * as _297 from "./txfees/v1beta1/query";
import * as _475 from "./gamm/pool-models/balancer/tx.amino";
import * as _476 from "./gamm/pool-models/stableswap/tx.amino";
import * as _477 from "./gamm/v1beta1/tx.amino";
import * as _478 from "./incentives/tx.amino";
import * as _479 from "./lockup/tx.amino";
import * as _480 from "./superfluid/tx.amino";
import * as _481 from "./tokenfactory/v1beta1/tx.amino";
import * as _482 from "./gamm/pool-models/balancer/tx.registry";
import * as _483 from "./gamm/pool-models/stableswap/tx.registry";
import * as _484 from "./gamm/v1beta1/tx.registry";
import * as _485 from "./incentives/tx.registry";
import * as _486 from "./lockup/tx.registry";
import * as _487 from "./superfluid/tx.registry";
import * as _488 from "./tokenfactory/v1beta1/tx.registry";
import * as _489 from "./claim/v1beta1/query.lcd";
import * as _490 from "./epochs/query.lcd";
import * as _491 from "./gamm/v1beta1/query.lcd";
import * as _492 from "./incentives/query.lcd";
import * as _493 from "./lockup/query.lcd";
import * as _494 from "./mint/v1beta1/query.lcd";
import * as _495 from "./pool-incentives/v1beta1/query.lcd";
import * as _496 from "./superfluid/query.lcd";
import * as _497 from "./tokenfactory/v1beta1/query.lcd";
import * as _498 from "./txfees/v1beta1/query.lcd";
import * as _499 from "./claim/v1beta1/query.rpc.query";
import * as _500 from "./epochs/query.rpc.query";
import * as _501 from "./gamm/v1beta1/query.rpc.query";
import * as _502 from "./incentives/query.rpc.query";
import * as _503 from "./lockup/query.rpc.query";
import * as _504 from "./mint/v1beta1/query.rpc.query";
import * as _505 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _506 from "./superfluid/query.rpc.query";
import * as _507 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _508 from "./txfees/v1beta1/query.rpc.query";
import * as _509 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _510 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _511 from "./gamm/v1beta1/tx.rpc.msg";
import * as _512 from "./incentives/tx.rpc.msg";
import * as _513 from "./lockup/tx.rpc.msg";
import * as _514 from "./superfluid/tx.rpc.msg";
import * as _515 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _536 from "./lcd";
import * as _537 from "./custom-lcd-client";
import * as _538 from "./rpc.query";
import * as _539 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._489,
      ..._499
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._258,
      ..._259,
      ..._490,
      ..._500
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._477,
      ..._484,
      ..._491,
      ..._501,
      ..._511
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._264,
          ..._475,
          ..._482,
          ..._509
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._265,
          ..._266,
          ..._476,
          ..._483,
          ..._510
        };
      }
    }
  }
  export const incentives = { ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._478,
    ..._485,
    ..._492,
    ..._502,
    ..._512
  };
  export const lockup = { ..._272,
    ..._273,
    ..._274,
    ..._275,
    ..._479,
    ..._486,
    ..._493,
    ..._503,
    ..._513
  };
  export namespace mint {
    export const v1beta1 = { ..._276,
      ..._277,
      ..._278,
      ..._494,
      ..._504
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._279,
      ..._280,
      ..._281,
      ..._282,
      ..._495,
      ..._505
    };
  }
  export namespace store {
    export const v1beta1 = { ..._283
    };
  }
  export const superfluid = { ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._480,
    ..._487,
    ..._496,
    ..._506,
    ..._514
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._481,
      ..._488,
      ..._497,
      ..._507,
      ..._515
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._498,
      ..._508
    };
  }
  export const ClientFactory = { ..._536,
    ..._537,
    ..._538,
    ..._539
  };
}