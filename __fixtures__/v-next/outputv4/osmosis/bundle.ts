import * as _254 from "./claim/v1beta1/claim.js";
import * as _255 from "./claim/v1beta1/genesis.js";
import * as _256 from "./claim/v1beta1/params.js";
import * as _257 from "./claim/v1beta1/query.js";
import * as _258 from "./epochs/genesis.js";
import * as _259 from "./epochs/query.js";
import * as _260 from "./gamm/pool-models/balancer/balancerPool.js";
import * as _261 from "./gamm/v1beta1/genesis.js";
import * as _262 from "./gamm/v1beta1/query.js";
import * as _263 from "./gamm/v1beta1/tx.js";
import * as _264 from "./gamm/pool-models/balancer/tx/tx.js";
import * as _265 from "./gamm/pool-models/stableswap/stableswap_pool.js";
import * as _266 from "./gamm/pool-models/stableswap/tx.js";
import * as _267 from "./gamm/v2/query.js";
import * as _268 from "./ibc-rate-limit/v1beta1/params.js";
import * as _269 from "./ibc-rate-limit/v1beta1/query.js";
import * as _270 from "./incentives/gauge.js";
import * as _271 from "./incentives/genesis.js";
import * as _272 from "./incentives/params.js";
import * as _273 from "./incentives/query.js";
import * as _274 from "./incentives/tx.js";
import * as _275 from "./lockup/genesis.js";
import * as _276 from "./lockup/lock.js";
import * as _277 from "./lockup/params.js";
import * as _278 from "./lockup/query.js";
import * as _279 from "./lockup/tx.js";
import * as _280 from "./mint/v1beta1/genesis.js";
import * as _281 from "./mint/v1beta1/mint.js";
import * as _282 from "./mint/v1beta1/query.js";
import * as _283 from "./pool-incentives/v1beta1/genesis.js";
import * as _284 from "./pool-incentives/v1beta1/gov.js";
import * as _285 from "./pool-incentives/v1beta1/incentives.js";
import * as _286 from "./pool-incentives/v1beta1/query.js";
import * as _287 from "./sumtree/v1beta1/tree.js";
import * as _288 from "./superfluid/genesis.js";
import * as _289 from "./superfluid/params.js";
import * as _290 from "./superfluid/query.js";
import * as _291 from "./superfluid/superfluid.js";
import * as _292 from "./superfluid/tx.js";
import * as _293 from "./tokenfactory/v1beta1/authorityMetadata.js";
import * as _294 from "./tokenfactory/v1beta1/genesis.js";
import * as _295 from "./tokenfactory/v1beta1/params.js";
import * as _296 from "./tokenfactory/v1beta1/query.js";
import * as _297 from "./tokenfactory/v1beta1/tx.js";
import * as _298 from "./twap/v1beta1/genesis.js";
import * as _299 from "./twap/v1beta1/query.js";
import * as _300 from "./twap/v1beta1/twap_record.js";
import * as _301 from "./txfees/v1beta1/feetoken.js";
import * as _302 from "./txfees/v1beta1/genesis.js";
import * as _303 from "./txfees/v1beta1/gov.js";
import * as _304 from "./txfees/v1beta1/query.js";
import * as _486 from "./gamm/pool-models/balancer/tx/tx.amino.js";
import * as _487 from "./gamm/pool-models/stableswap/tx.amino.js";
import * as _488 from "./gamm/v1beta1/tx.amino.js";
import * as _489 from "./incentives/tx.amino.js";
import * as _490 from "./lockup/tx.amino.js";
import * as _491 from "./superfluid/tx.amino.js";
import * as _492 from "./tokenfactory/v1beta1/tx.amino.js";
import * as _493 from "./gamm/pool-models/balancer/tx/tx.registry.js";
import * as _494 from "./gamm/pool-models/stableswap/tx.registry.js";
import * as _495 from "./gamm/v1beta1/tx.registry.js";
import * as _496 from "./incentives/tx.registry.js";
import * as _497 from "./lockup/tx.registry.js";
import * as _498 from "./superfluid/tx.registry.js";
import * as _499 from "./tokenfactory/v1beta1/tx.registry.js";
import * as _500 from "./claim/v1beta1/query.lcd.js";
import * as _501 from "./epochs/query.lcd.js";
import * as _502 from "./gamm/v1beta1/query.lcd.js";
import * as _503 from "./gamm/v2/query.lcd.js";
import * as _504 from "./ibc-rate-limit/v1beta1/query.lcd.js";
import * as _505 from "./incentives/query.lcd.js";
import * as _506 from "./lockup/query.lcd.js";
import * as _507 from "./mint/v1beta1/query.lcd.js";
import * as _508 from "./pool-incentives/v1beta1/query.lcd.js";
import * as _509 from "./superfluid/query.lcd.js";
import * as _510 from "./tokenfactory/v1beta1/query.lcd.js";
import * as _511 from "./twap/v1beta1/query.lcd.js";
import * as _512 from "./txfees/v1beta1/query.lcd.js";
import * as _513 from "./claim/v1beta1/query.rpc.Query.js";
import * as _514 from "./epochs/query.rpc.Query.js";
import * as _515 from "./gamm/v1beta1/query.rpc.Query.js";
import * as _516 from "./gamm/v2/query.rpc.Query.js";
import * as _517 from "./ibc-rate-limit/v1beta1/query.rpc.Query.js";
import * as _518 from "./incentives/query.rpc.Query.js";
import * as _519 from "./lockup/query.rpc.Query.js";
import * as _520 from "./mint/v1beta1/query.rpc.Query.js";
import * as _521 from "./pool-incentives/v1beta1/query.rpc.Query.js";
import * as _522 from "./superfluid/query.rpc.Query.js";
import * as _523 from "./tokenfactory/v1beta1/query.rpc.Query.js";
import * as _524 from "./twap/v1beta1/query.rpc.Query.js";
import * as _525 from "./txfees/v1beta1/query.rpc.Query.js";
import * as _526 from "./gamm/pool-models/balancer/tx/tx.rpc.msg.js";
import * as _527 from "./gamm/pool-models/stableswap/tx.rpc.msg.js";
import * as _528 from "./gamm/v1beta1/tx.rpc.msg.js";
import * as _529 from "./incentives/tx.rpc.msg.js";
import * as _530 from "./lockup/tx.rpc.msg.js";
import * as _531 from "./superfluid/tx.rpc.msg.js";
import * as _532 from "./tokenfactory/v1beta1/tx.rpc.msg.js";
import * as _533 from "./gamm/v1beta1/query.pinia.store.js";
import * as _534 from "./gamm/v2/query.pinia.store.js";
import * as _556 from "./lcd.js";
import * as _557 from "./custom-lcd-client.js";
import * as _558 from "./rpc.query.js";
import * as _559 from "./rpc.tx.js";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._500,
      ..._513
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._258,
      ..._259,
      ..._501,
      ..._514
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._488,
      ..._495,
      ..._502,
      ..._515,
      ..._528,
      ..._533
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._264,
          ..._486,
          ..._493,
          ..._526
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._265,
          ..._266,
          ..._487,
          ..._494,
          ..._527
        };
      }
    }
    export const v2 = {
      ..._267,
      ..._503,
      ..._516,
      ..._534
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._268,
      ..._269,
      ..._504,
      ..._517
    };
  }
  export const incentives = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._489,
    ..._496,
    ..._505,
    ..._518,
    ..._529
  };
  export const lockup = {
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._490,
    ..._497,
    ..._506,
    ..._519,
    ..._530
  };
  export namespace mint {
    export const v1beta1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._507,
      ..._520
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._508,
      ..._521
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
    ..._491,
    ..._498,
    ..._509,
    ..._522,
    ..._531
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._492,
      ..._499,
      ..._510,
      ..._523,
      ..._532
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._298,
      ..._299,
      ..._300,
      ..._511,
      ..._524
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._512,
      ..._525
    };
  }
  export const ClientFactory = {
    ..._556,
    ..._557,
    ..._558,
    ..._559
  };
}