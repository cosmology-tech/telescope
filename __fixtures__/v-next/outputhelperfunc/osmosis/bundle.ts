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
import * as _558 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _559 from "./gamm/pool-models/stableswap/tx.amino";
import * as _560 from "./gamm/v1beta1/tx.amino";
import * as _561 from "./incentives/tx.amino";
import * as _562 from "./lockup/tx.amino";
import * as _563 from "./superfluid/tx.amino";
import * as _564 from "./tokenfactory/v1beta1/tx.amino";
import * as _565 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _566 from "./gamm/pool-models/stableswap/tx.registry";
import * as _567 from "./gamm/v1beta1/tx.registry";
import * as _568 from "./incentives/tx.registry";
import * as _569 from "./lockup/tx.registry";
import * as _570 from "./superfluid/tx.registry";
import * as _571 from "./tokenfactory/v1beta1/tx.registry";
import * as _572 from "./claim/v1beta1/query.lcd";
import * as _573 from "./epochs/query.lcd";
import * as _574 from "./gamm/v1beta1/query.lcd";
import * as _575 from "./gamm/v2/query.lcd";
import * as _576 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _577 from "./incentives/query.lcd";
import * as _578 from "./lockup/query.lcd";
import * as _579 from "./mint/v1beta1/query.lcd";
import * as _580 from "./pool-incentives/v1beta1/query.lcd";
import * as _581 from "./superfluid/query.lcd";
import * as _582 from "./tokenfactory/v1beta1/query.lcd";
import * as _583 from "./twap/v1beta1/query.lcd";
import * as _584 from "./txfees/v1beta1/query.lcd";
import * as _585 from "./claim/v1beta1/query.rpc.func";
import * as _586 from "./epochs/query.rpc.func";
import * as _587 from "./gamm/v1beta1/query.rpc.func";
import * as _588 from "./gamm/v2/query.rpc.func";
import * as _589 from "./ibc-rate-limit/v1beta1/query.rpc.func";
import * as _590 from "./incentives/query.rpc.func";
import * as _591 from "./lockup/query.rpc.func";
import * as _592 from "./mint/v1beta1/query.rpc.func";
import * as _593 from "./pool-incentives/v1beta1/query.rpc.func";
import * as _594 from "./superfluid/query.rpc.func";
import * as _595 from "./tokenfactory/v1beta1/query.rpc.func";
import * as _596 from "./twap/v1beta1/query.rpc.func";
import * as _597 from "./txfees/v1beta1/query.rpc.func";
import * as _598 from "./claim/v1beta1/query.rpc.Query";
import * as _599 from "./epochs/query.rpc.Query";
import * as _600 from "./gamm/v1beta1/query.rpc.Query";
import * as _601 from "./gamm/v2/query.rpc.Query";
import * as _602 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _603 from "./incentives/query.rpc.Query";
import * as _604 from "./lockup/query.rpc.Query";
import * as _605 from "./mint/v1beta1/query.rpc.Query";
import * as _606 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _607 from "./superfluid/query.rpc.Query";
import * as _608 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _609 from "./twap/v1beta1/query.rpc.Query";
import * as _610 from "./txfees/v1beta1/query.rpc.Query";
import * as _611 from "./gamm/pool-models/balancer/tx/tx.rpc.func";
import * as _612 from "./gamm/pool-models/stableswap/tx.rpc.func";
import * as _613 from "./gamm/v1beta1/tx.rpc.func";
import * as _614 from "./incentives/tx.rpc.func";
import * as _615 from "./lockup/tx.rpc.func";
import * as _616 from "./superfluid/tx.rpc.func";
import * as _617 from "./tokenfactory/v1beta1/tx.rpc.func";
import * as _618 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _619 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _620 from "./gamm/v1beta1/tx.rpc.msg";
import * as _621 from "./incentives/tx.rpc.msg";
import * as _622 from "./lockup/tx.rpc.msg";
import * as _623 from "./superfluid/tx.rpc.msg";
import * as _624 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _625 from "./gamm/v1beta1/query.pinia.store";
import * as _626 from "./gamm/v2/query.pinia.store";
import * as _649 from "./lcd";
import * as _650 from "./custom-lcd-client";
import * as _651 from "./rpc.query";
import * as _652 from "./rpc.tx";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = {
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._572,
      ..._585,
      ..._598
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._258,
      ..._259,
      ..._573,
      ..._586,
      ..._599
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._560,
      ..._567,
      ..._574,
      ..._587,
      ..._600,
      ..._613,
      ..._620,
      ..._625
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._264,
          ..._558,
          ..._565,
          ..._611,
          ..._618
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._265,
          ..._266,
          ..._559,
          ..._566,
          ..._612,
          ..._619
        };
      }
    }
    export const v2 = {
      ..._267,
      ..._575,
      ..._588,
      ..._601,
      ..._626
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._268,
      ..._269,
      ..._576,
      ..._589,
      ..._602
    };
  }
  export const incentives = {
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._561,
    ..._568,
    ..._577,
    ..._590,
    ..._603,
    ..._614,
    ..._621
  };
  export const lockup = {
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._562,
    ..._569,
    ..._578,
    ..._591,
    ..._604,
    ..._615,
    ..._622
  };
  export namespace mint {
    export const v1beta1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._579,
      ..._592,
      ..._605
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._580,
      ..._593,
      ..._606
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
    ..._563,
    ..._570,
    ..._581,
    ..._594,
    ..._607,
    ..._616,
    ..._623
  };
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._564,
      ..._571,
      ..._582,
      ..._595,
      ..._608,
      ..._617,
      ..._624
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._298,
      ..._299,
      ..._300,
      ..._583,
      ..._596,
      ..._609
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._584,
      ..._597,
      ..._610
    };
  }
  export const ClientFactory = {
    ..._649,
    ..._650,
    ..._651,
    ..._652
  };
}