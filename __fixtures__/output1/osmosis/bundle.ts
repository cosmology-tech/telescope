import * as _230 from "./claim/v1beta1/claim";
import * as _231 from "./claim/v1beta1/genesis";
import * as _232 from "./claim/v1beta1/params";
import * as _233 from "./claim/v1beta1/query";
import * as _234 from "./epochs/genesis";
import * as _235 from "./epochs/query";
import * as _236 from "./gamm/pool-models/balancer/balancerPool";
import * as _237 from "./gamm/pool-models/balancer/tx";
import * as _238 from "./gamm/v1beta1/genesis";
import * as _239 from "./gamm/v1beta1/query";
import * as _240 from "./gamm/v1beta1/tx";
import * as _241 from "./incentives/gauge";
import * as _242 from "./incentives/genesis";
import * as _243 from "./incentives/params";
import * as _244 from "./incentives/query";
import * as _245 from "./incentives/tx";
import * as _246 from "./lockup/genesis";
import * as _247 from "./lockup/lock";
import * as _248 from "./lockup/query";
import * as _249 from "./lockup/tx";
import * as _250 from "./mint/v1beta1/genesis";
import * as _251 from "./mint/v1beta1/mint";
import * as _252 from "./mint/v1beta1/query";
import * as _253 from "./pool-incentives/v1beta1/genesis";
import * as _254 from "./pool-incentives/v1beta1/gov";
import * as _255 from "./pool-incentives/v1beta1/incentives";
import * as _256 from "./pool-incentives/v1beta1/query";
import * as _257 from "./store/v1beta1/tree";
import * as _258 from "./superfluid/genesis";
import * as _259 from "./superfluid/params";
import * as _260 from "./superfluid/query";
import * as _261 from "./superfluid/superfluid";
import * as _262 from "./superfluid/tx";
import * as _263 from "./txfees/v1beta1/feetoken";
import * as _264 from "./txfees/v1beta1/genesis";
import * as _265 from "./txfees/v1beta1/gov";
import * as _266 from "./txfees/v1beta1/query";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._230,
      ..._231,
      ..._232,
      ..._233
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._234,
      ..._235
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240
    };
  }
  export const incentives = { ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._245
  };
  export const lockup = { ..._246,
    ..._247,
    ..._248,
    ..._249
  };
  export namespace mint {
    export const v1beta1 = { ..._250,
      ..._251,
      ..._252
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._253,
      ..._254,
      ..._255,
      ..._256
    };
  }
  export namespace store {
    export const v1beta1 = { ..._257
    };
  }
  export const superfluid = { ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  export namespace txfees {
    export const v1beta1 = { ..._263,
      ..._264,
      ..._265,
      ..._266
    };
  }
}