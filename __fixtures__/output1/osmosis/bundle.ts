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
import * as _473 from "./gamm/pool-models/balancer/tx.amino";
import * as _474 from "./gamm/pool-models/stableswap/tx.amino";
import * as _475 from "./gamm/v1beta1/tx.amino";
import * as _476 from "./incentives/tx.amino";
import * as _477 from "./lockup/tx.amino";
import * as _478 from "./superfluid/tx.amino";
import * as _479 from "./tokenfactory/v1beta1/tx.amino";
import * as _480 from "./gamm/pool-models/balancer/tx.registry";
import * as _481 from "./gamm/pool-models/stableswap/tx.registry";
import * as _482 from "./gamm/v1beta1/tx.registry";
import * as _483 from "./incentives/tx.registry";
import * as _484 from "./lockup/tx.registry";
import * as _485 from "./superfluid/tx.registry";
import * as _486 from "./tokenfactory/v1beta1/tx.registry";
import * as _487 from "./claim/v1beta1/query.lcd";
import * as _488 from "./epochs/query.lcd";
import * as _489 from "./gamm/v1beta1/query.lcd";
import * as _490 from "./incentives/query.lcd";
import * as _491 from "./lockup/query.lcd";
import * as _492 from "./mint/v1beta1/query.lcd";
import * as _493 from "./pool-incentives/v1beta1/query.lcd";
import * as _494 from "./superfluid/query.lcd";
import * as _495 from "./tokenfactory/v1beta1/query.lcd";
import * as _496 from "./txfees/v1beta1/query.lcd";
import * as _497 from "./claim/v1beta1/query.rpc.query";
import * as _498 from "./epochs/query.rpc.query";
import * as _499 from "./gamm/v1beta1/query.rpc.query";
import * as _500 from "./incentives/query.rpc.query";
import * as _501 from "./lockup/query.rpc.query";
import * as _502 from "./mint/v1beta1/query.rpc.query";
import * as _503 from "./pool-incentives/v1beta1/query.rpc.query";
import * as _504 from "./superfluid/query.rpc.query";
import * as _505 from "./tokenfactory/v1beta1/query.rpc.query";
import * as _506 from "./txfees/v1beta1/query.rpc.query";
import * as _507 from "./gamm/pool-models/balancer/tx.rpc.msg";
import * as _508 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _509 from "./gamm/v1beta1/tx.rpc.msg";
import * as _510 from "./incentives/tx.rpc.msg";
import * as _511 from "./lockup/tx.rpc.msg";
import * as _512 from "./superfluid/tx.rpc.msg";
import * as _513 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _534 from "./lcd";
import * as _535 from "./custom-lcd-client";
import * as _536 from "./rpc.query";
import * as _537 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._487,
      ..._497
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._258,
      ..._259,
      ..._488,
      ..._498
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._475,
      ..._482,
      ..._489,
      ..._499,
      ..._509
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._264,
          ..._473,
          ..._480,
          ..._507
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._265,
          ..._266,
          ..._474,
          ..._481,
          ..._508
        };
      }
    }
  }
  export const incentives = { ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._476,
    ..._483,
    ..._490,
    ..._500,
    ..._510
  };
  export const lockup = { ..._272,
    ..._273,
    ..._274,
    ..._275,
    ..._477,
    ..._484,
    ..._491,
    ..._501,
    ..._511
  };
  export namespace mint {
    export const v1beta1 = { ..._276,
      ..._277,
      ..._278,
      ..._492,
      ..._502
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._279,
      ..._280,
      ..._281,
      ..._282,
      ..._493,
      ..._503
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
    ..._478,
    ..._485,
    ..._494,
    ..._504,
    ..._512
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._479,
      ..._486,
      ..._495,
      ..._505,
      ..._513
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._496,
      ..._506
    };
  }
  export const ClientFactory = { ..._534,
    ..._535,
    ..._536,
    ..._537
  };
}