import * as _231 from "./claim/v1beta1/claim";
import * as _232 from "./claim/v1beta1/genesis";
import * as _233 from "./claim/v1beta1/params";
import * as _234 from "./claim/v1beta1/query";
import * as _235 from "./epochs/genesis";
import * as _236 from "./epochs/query";
import * as _237 from "./gamm/pool-models/balancer/balancerPool";
import * as _238 from "./gamm/pool-models/balancer/tx";
import * as _239 from "./gamm/v1beta1/genesis";
import * as _240 from "./gamm/v1beta1/query";
import * as _241 from "./gamm/v1beta1/tx";
import * as _242 from "./incentives/gauge";
import * as _243 from "./incentives/genesis";
import * as _244 from "./incentives/params";
import * as _245 from "./incentives/query";
import * as _246 from "./incentives/tx";
import * as _247 from "./lockup/genesis";
import * as _248 from "./lockup/lock";
import * as _249 from "./lockup/query";
import * as _250 from "./lockup/tx";
import * as _251 from "./mint/v1beta1/genesis";
import * as _252 from "./mint/v1beta1/mint";
import * as _253 from "./mint/v1beta1/query";
import * as _254 from "./pool-incentives/v1beta1/genesis";
import * as _255 from "./pool-incentives/v1beta1/gov";
import * as _256 from "./pool-incentives/v1beta1/incentives";
import * as _257 from "./pool-incentives/v1beta1/query";
import * as _258 from "./store/v1beta1/tree";
import * as _259 from "./superfluid/genesis";
import * as _260 from "./superfluid/params";
import * as _261 from "./superfluid/query";
import * as _262 from "./superfluid/superfluid";
import * as _263 from "./superfluid/tx";
import * as _264 from "./txfees/v1beta1/feetoken";
import * as _265 from "./txfees/v1beta1/genesis";
import * as _266 from "./txfees/v1beta1/gov";
import * as _267 from "./txfees/v1beta1/query";
import * as _370 from "./gamm/v1beta1/tx.amino";
import * as _371 from "./incentives/tx.amino";
import * as _372 from "./lockup/tx.amino";
import * as _373 from "./superfluid/tx.amino";
import * as _374 from "./gamm/v1beta1/tx.registry";
import * as _375 from "./incentives/tx.registry";
import * as _376 from "./lockup/tx.registry";
import * as _377 from "./superfluid/tx.registry";
import * as _378 from "./claim/v1beta1/query.lcd";
import * as _379 from "./epochs/query.lcd";
import * as _380 from "./gamm/v1beta1/query.lcd";
import * as _381 from "./incentives/query.lcd";
import * as _382 from "./lockup/query.lcd";
import * as _383 from "./mint/v1beta1/query.lcd";
import * as _384 from "./pool-incentives/v1beta1/query.lcd";
import * as _385 from "./superfluid/query.lcd";
import * as _386 from "./txfees/v1beta1/query.lcd";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._378
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._235,
      ..._236,
      ..._379
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._370,
      ..._374,
      ..._380
    };
  }
  export const incentives = { ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._371,
    ..._375,
    ..._381
  };
  export const lockup = { ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._372,
    ..._376,
    ..._382
  };
  export namespace mint {
    export const v1beta1 = { ..._251,
      ..._252,
      ..._253,
      ..._383
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._384
    };
  }
  export namespace store {
    export const v1beta1 = { ..._258
    };
  }
  export const superfluid = { ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._373,
    ..._377,
    ..._385
  };
  export namespace txfees {
    export const v1beta1 = { ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._386
    };
  }
}