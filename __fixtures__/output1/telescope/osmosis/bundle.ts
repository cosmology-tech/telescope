import * as _177 from "../../osmosis/claim/v1beta1/claim";
import * as _178 from "../../osmosis/claim/v1beta1/genesis";
import * as _179 from "../../osmosis/claim/v1beta1/params";
import * as _180 from "../../osmosis/claim/v1beta1/query";
import * as _181 from "../../osmosis/epochs/genesis";
import * as _182 from "../../osmosis/epochs/query";
import * as _183 from "../../osmosis/gamm/pool-models/balancer/balancerPool";
import * as _184 from "../../osmosis/gamm/pool-models/balancer/tx";
import * as _185 from "../../osmosis/gamm/v1beta1/genesis";
import * as _186 from "../../osmosis/gamm/v1beta1/query";
import * as _187 from "../../osmosis/gamm/v1beta1/tx";
import * as _188 from "../../osmosis/incentives/gauge";
import * as _189 from "../../osmosis/incentives/genesis";
import * as _190 from "../../osmosis/incentives/params";
import * as _191 from "../../osmosis/incentives/query";
import * as _192 from "../../osmosis/incentives/tx";
import * as _193 from "../../osmosis/lockup/genesis";
import * as _194 from "../../osmosis/lockup/lock";
import * as _195 from "../../osmosis/lockup/query";
import * as _196 from "../../osmosis/lockup/tx";
import * as _197 from "../../osmosis/mint/v1beta1/genesis";
import * as _198 from "../../osmosis/mint/v1beta1/mint";
import * as _199 from "../../osmosis/mint/v1beta1/query";
import * as _200 from "../../osmosis/pool-incentives/v1beta1/genesis";
import * as _201 from "../../osmosis/pool-incentives/v1beta1/gov";
import * as _202 from "../../osmosis/pool-incentives/v1beta1/incentives";
import * as _203 from "../../osmosis/pool-incentives/v1beta1/query";
import * as _204 from "../../osmosis/store/v1beta1/tree";
import * as _205 from "../../osmosis/superfluid/genesis";
import * as _206 from "../../osmosis/superfluid/params";
import * as _207 from "../../osmosis/superfluid/query";
import * as _208 from "../../osmosis/superfluid/superfluid";
import * as _209 from "../../osmosis/superfluid/tx";
import * as _210 from "../../osmosis/txfees/v1beta1/feetoken";
import * as _211 from "../../osmosis/txfees/v1beta1/genesis";
import * as _212 from "../../osmosis/txfees/v1beta1/gov";
import * as _213 from "../../osmosis/txfees/v1beta1/query";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._177,
      ..._178,
      ..._179,
      ..._180
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._181,
      ..._182
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187
    };
  }
  export const incentives = { ..._188,
    ..._189,
    ..._190,
    ..._191,
    ..._192
  };
  export const lockup = { ..._193,
    ..._194,
    ..._195,
    ..._196
  };
  export namespace mint {
    export const v1beta1 = { ..._197,
      ..._198,
      ..._199
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._200,
      ..._201,
      ..._202,
      ..._203
    };
  }
  export namespace store {
    export const v1beta1 = { ..._204
    };
  }
  export const superfluid = { ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._209
  };
  export namespace txfees {
    export const v1beta1 = { ..._210,
      ..._211,
      ..._212,
      ..._213
    };
  }
}