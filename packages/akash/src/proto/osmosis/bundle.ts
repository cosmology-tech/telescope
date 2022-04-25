import * as _981 from "./claim/v1beta1/claim";
import * as _982 from "./claim/v1beta1/genesis";
import * as _983 from "./claim/v1beta1/params";
import * as _984 from "./claim/v1beta1/query";
import * as _985 from "./epochs/genesis";
import * as _986 from "./epochs/query";
import * as _987 from "./gamm/pool-models/balancer/balancerPool";
import * as _988 from "./gamm/pool-models/balancer/tx";
import * as _989 from "./gamm/v1beta1/genesis";
import * as _990 from "./gamm/v1beta1/query";
import * as _991 from "./gamm/v1beta1/tx";
import * as _992 from "./gamm/v1beta1/tx.messages";
import * as _993 from "./gamm/v1beta1/tx.json";
import * as _994 from "./gamm/v1beta1/tx.toJSON";
import * as _995 from "./gamm/v1beta1/tx.fromJSON";
import * as _996 from "./gamm/v1beta1/tx.encoded";
import * as _997 from "./gamm/v1beta1/tx.aminos";
import * as _998 from "./gamm/v1beta1/tx.registry";
import * as _999 from "./gamm/v1beta1/tx";
import * as _1000 from "./incentives/gauge";
import * as _1001 from "./incentives/genesis";
import * as _1002 from "./incentives/params";
import * as _1003 from "./incentives/query";
import * as _1004 from "./incentives/tx";
import * as _1005 from "./incentives/tx.messages";
import * as _1006 from "./incentives/tx.json";
import * as _1007 from "./incentives/tx.toJSON";
import * as _1008 from "./incentives/tx.fromJSON";
import * as _1009 from "./incentives/tx.encoded";
import * as _1010 from "./incentives/tx.aminos";
import * as _1011 from "./incentives/tx.registry";
import * as _1012 from "./incentives/tx";
import * as _1013 from "./lockup/genesis";
import * as _1014 from "./lockup/lock";
import * as _1015 from "./lockup/query";
import * as _1016 from "./lockup/tx";
import * as _1017 from "./lockup/tx.messages";
import * as _1018 from "./lockup/tx.json";
import * as _1019 from "./lockup/tx.toJSON";
import * as _1020 from "./lockup/tx.fromJSON";
import * as _1021 from "./lockup/tx.encoded";
import * as _1022 from "./lockup/tx.aminos";
import * as _1023 from "./lockup/tx.registry";
import * as _1024 from "./lockup/tx";
import * as _1025 from "./mint/v1beta1/genesis";
import * as _1026 from "./mint/v1beta1/mint";
import * as _1027 from "./mint/v1beta1/query";
import * as _1028 from "./pool-incentives/v1beta1/genesis";
import * as _1029 from "./pool-incentives/v1beta1/gov";
import * as _1030 from "./pool-incentives/v1beta1/incentives";
import * as _1031 from "./pool-incentives/v1beta1/query";
import * as _1032 from "./store/v1beta1/tree";
import * as _1033 from "./superfluid/genesis";
import * as _1034 from "./superfluid/params";
import * as _1035 from "./superfluid/query";
import * as _1036 from "./superfluid/superfluid";
import * as _1037 from "./superfluid/tx";
import * as _1038 from "./superfluid/tx.messages";
import * as _1039 from "./superfluid/tx.json";
import * as _1040 from "./superfluid/tx.toJSON";
import * as _1041 from "./superfluid/tx.fromJSON";
import * as _1042 from "./superfluid/tx.encoded";
import * as _1043 from "./superfluid/tx.aminos";
import * as _1044 from "./superfluid/tx.registry";
import * as _1045 from "./superfluid/tx";
import * as _1046 from "./txfees/v1beta1/feetoken";
import * as _1047 from "./txfees/v1beta1/genesis";
import * as _1048 from "./txfees/v1beta1/gov";
import * as _1049 from "./txfees/v1beta1/query";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._981,
      ..._982,
      ..._983,
      ..._984
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._985,
      ..._986
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._987,
      ..._988,
      ..._989,
      ..._990,
      ..._991,
      ..._992,
      ..._993,
      ..._994,
      ..._995,
      ..._996,
      ..._997,
      ..._998,
      ..._999
    };
  }
  export const incentives = { ..._1000,
    ..._1001,
    ..._1002,
    ..._1003,
    ..._1004,
    ..._1005,
    ..._1006,
    ..._1007,
    ..._1008,
    ..._1009,
    ..._1010,
    ..._1011,
    ..._1012
  };
  export const lockup = { ..._1013,
    ..._1014,
    ..._1015,
    ..._1016,
    ..._1017,
    ..._1018,
    ..._1019,
    ..._1020,
    ..._1021,
    ..._1022,
    ..._1023,
    ..._1024
  };
  export namespace mint {
    export const v1beta1 = { ..._1025,
      ..._1026,
      ..._1027
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._1028,
      ..._1029,
      ..._1030,
      ..._1031
    };
  }
  export namespace store {
    export const v1beta1 = { ..._1032
    };
  }
  export const superfluid = { ..._1033,
    ..._1034,
    ..._1035,
    ..._1036,
    ..._1037,
    ..._1038,
    ..._1039,
    ..._1040,
    ..._1041,
    ..._1042,
    ..._1043,
    ..._1044,
    ..._1045
  };
  export namespace txfees {
    export const v1beta1 = { ..._1046,
      ..._1047,
      ..._1048,
      ..._1049
    };
  }
}