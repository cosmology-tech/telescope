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
import * as _415 from "./gamm/pool-models/balancer/tx.amino";
import * as _416 from "./gamm/pool-models/stableswap/tx.amino";
import * as _417 from "./gamm/v1beta1/tx.amino";
import * as _418 from "./incentives/tx.amino";
import * as _419 from "./lockup/tx.amino";
import * as _420 from "./superfluid/tx.amino";
import * as _421 from "./tokenfactory/v1beta1/tx.amino";
import * as _422 from "./gamm/pool-models/balancer/tx.registry";
import * as _423 from "./gamm/pool-models/stableswap/tx.registry";
import * as _424 from "./gamm/v1beta1/tx.registry";
import * as _425 from "./incentives/tx.registry";
import * as _426 from "./lockup/tx.registry";
import * as _427 from "./superfluid/tx.registry";
import * as _428 from "./tokenfactory/v1beta1/tx.registry";
import * as _429 from "./claim/v1beta1/query.lcd";
import * as _430 from "./epochs/query.lcd";
import * as _431 from "./gamm/v1beta1/query.lcd";
import * as _432 from "./incentives/query.lcd";
import * as _433 from "./lockup/query.lcd";
import * as _434 from "./mint/v1beta1/query.lcd";
import * as _435 from "./pool-incentives/v1beta1/query.lcd";
import * as _436 from "./superfluid/query.lcd";
import * as _437 from "./tokenfactory/v1beta1/query.lcd";
import * as _438 from "./txfees/v1beta1/query.lcd";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._429
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._259,
      ..._260,
      ..._430
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._417,
      ..._424,
      ..._431
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._265,
          ..._415,
          ..._422
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._266,
          ..._267,
          ..._416,
          ..._423
        };
      }
    }
  }
  export const incentives = { ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._418,
    ..._425,
    ..._432
  };
  export const lockup = { ..._273,
    ..._274,
    ..._275,
    ..._276,
    ..._419,
    ..._426,
    ..._433
  };
  export namespace mint {
    export const v1beta1 = { ..._277,
      ..._278,
      ..._279,
      ..._434
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._435
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
    ..._420,
    ..._427,
    ..._436
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._421,
      ..._428,
      ..._437
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._438
    };
  }
}