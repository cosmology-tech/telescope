import * as _255 from "./claim/v1beta1/claim";
import * as _256 from "./claim/v1beta1/genesis";
import * as _257 from "./claim/v1beta1/params";
import * as _258 from "./claim/v1beta1/query";
import * as _259 from "./epochs/genesis";
import * as _260 from "./epochs/query";
import * as _261 from "./gamm/pool-models/balancer/balancerPool";
import * as _262 from "./gamm/pool-models/balancer/tx";
import * as _263 from "./gamm/v1beta1/genesis";
import * as _264 from "./gamm/v1beta1/query";
import * as _265 from "./gamm/v1beta1/tx";
import * as _266 from "./incentives/gauge";
import * as _267 from "./incentives/genesis";
import * as _268 from "./incentives/params";
import * as _269 from "./incentives/query";
import * as _270 from "./incentives/tx";
import * as _271 from "./lockup/genesis";
import * as _272 from "./lockup/lock";
import * as _273 from "./lockup/query";
import * as _274 from "./lockup/tx";
import * as _275 from "./mint/v1beta1/genesis";
import * as _276 from "./mint/v1beta1/mint";
import * as _277 from "./mint/v1beta1/query";
import * as _278 from "./pool-incentives/v1beta1/genesis";
import * as _279 from "./pool-incentives/v1beta1/gov";
import * as _280 from "./pool-incentives/v1beta1/incentives";
import * as _281 from "./pool-incentives/v1beta1/query";
import * as _282 from "./store/v1beta1/tree";
import * as _283 from "./superfluid/genesis";
import * as _284 from "./superfluid/params";
import * as _285 from "./superfluid/query";
import * as _286 from "./superfluid/superfluid";
import * as _287 from "./superfluid/tx";
import * as _288 from "./txfees/v1beta1/feetoken";
import * as _289 from "./txfees/v1beta1/genesis";
import * as _290 from "./txfees/v1beta1/gov";
import * as _291 from "./txfees/v1beta1/query";
import * as _408 from "./gamm/v1beta1/tx.amino";
import * as _409 from "./incentives/tx.amino";
import * as _410 from "./lockup/tx.amino";
import * as _411 from "./superfluid/tx.amino";
import * as _412 from "./gamm/v1beta1/tx.registry";
import * as _413 from "./incentives/tx.registry";
import * as _414 from "./lockup/tx.registry";
import * as _415 from "./superfluid/tx.registry";
import * as _416 from "./claim/v1beta1/query.lcd";
import * as _417 from "./epochs/query.lcd";
import * as _418 from "./gamm/v1beta1/query.lcd";
import * as _419 from "./incentives/query.lcd";
import * as _420 from "./lockup/query.lcd";
import * as _421 from "./mint/v1beta1/query.lcd";
import * as _422 from "./pool-incentives/v1beta1/query.lcd";
import * as _423 from "./superfluid/query.lcd";
import * as _424 from "./txfees/v1beta1/query.lcd";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._416
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._259,
      ..._260,
      ..._417
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._265,
      ..._408,
      ..._412,
      ..._418
    };
  }
  export const incentives = { ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._409,
    ..._413,
    ..._419
  };
  export const lockup = { ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._410,
    ..._414,
    ..._420
  };
  export namespace mint {
    export const v1beta1 = { ..._275,
      ..._276,
      ..._277,
      ..._421
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._278,
      ..._279,
      ..._280,
      ..._281,
      ..._422
    };
  }
  export namespace store {
    export const v1beta1 = { ..._282
    };
  }
  export const superfluid = { ..._283,
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._411,
    ..._415,
    ..._423
  };
  export namespace txfees {
    export const v1beta1 = { ..._288,
      ..._289,
      ..._290,
      ..._291,
      ..._424
    };
  }
}