import * as _1074 from "./claim/v1beta1/claim";
import * as _1075 from "./claim/v1beta1/claim";
import * as _1076 from "./claim/v1beta1/genesis";
import * as _1077 from "./claim/v1beta1/genesis";
import * as _1078 from "./claim/v1beta1/params";
import * as _1079 from "./claim/v1beta1/params";
import * as _1080 from "./claim/v1beta1/query";
import * as _1081 from "./claim/v1beta1/query";
import * as _1082 from "./epochs/genesis";
import * as _1083 from "./epochs/genesis";
import * as _1084 from "./epochs/query";
import * as _1085 from "./epochs/query";
import * as _1086 from "./gamm/pool-models/balancer/balancerPool";
import * as _1087 from "./gamm/pool-models/balancer/balancerPool";
import * as _1088 from "./gamm/pool-models/balancer/tx";
import * as _1089 from "./gamm/pool-models/balancer/tx";
import * as _1090 from "./gamm/v1beta1/genesis";
import * as _1091 from "./gamm/v1beta1/genesis";
import * as _1092 from "./gamm/v1beta1/query";
import * as _1093 from "./gamm/v1beta1/query";
import * as _1094 from "./gamm/v1beta1/tx";
import * as _1095 from "./gamm/v1beta1/tx.messages";
import * as _1096 from "./gamm/v1beta1/tx.json";
import * as _1097 from "./gamm/v1beta1/tx.toJSON";
import * as _1098 from "./gamm/v1beta1/tx.fromJSON";
import * as _1099 from "./gamm/v1beta1/tx.encoded";
import * as _1100 from "./gamm/v1beta1/tx.aminos";
import * as _1101 from "./gamm/v1beta1/tx";
import * as _1102 from "./incentives/gauge";
import * as _1103 from "./incentives/gauge";
import * as _1104 from "./incentives/genesis";
import * as _1105 from "./incentives/genesis";
import * as _1106 from "./incentives/params";
import * as _1107 from "./incentives/params";
import * as _1108 from "./incentives/query";
import * as _1109 from "./incentives/query";
import * as _1110 from "./incentives/tx";
import * as _1111 from "./incentives/tx.messages";
import * as _1112 from "./incentives/tx.json";
import * as _1113 from "./incentives/tx.toJSON";
import * as _1114 from "./incentives/tx.fromJSON";
import * as _1115 from "./incentives/tx.encoded";
import * as _1116 from "./incentives/tx.aminos";
import * as _1117 from "./incentives/tx";
import * as _1118 from "./lockup/genesis";
import * as _1119 from "./lockup/genesis";
import * as _1120 from "./lockup/lock";
import * as _1121 from "./lockup/lock";
import * as _1122 from "./lockup/query";
import * as _1123 from "./lockup/query";
import * as _1124 from "./lockup/tx";
import * as _1125 from "./lockup/tx.messages";
import * as _1126 from "./lockup/tx.json";
import * as _1127 from "./lockup/tx.toJSON";
import * as _1128 from "./lockup/tx.fromJSON";
import * as _1129 from "./lockup/tx.encoded";
import * as _1130 from "./lockup/tx.aminos";
import * as _1131 from "./lockup/tx";
import * as _1132 from "./mint/v1beta1/genesis";
import * as _1133 from "./mint/v1beta1/genesis";
import * as _1134 from "./mint/v1beta1/mint";
import * as _1135 from "./mint/v1beta1/mint";
import * as _1136 from "./mint/v1beta1/query";
import * as _1137 from "./mint/v1beta1/query";
import * as _1138 from "./pool-incentives/v1beta1/genesis";
import * as _1139 from "./pool-incentives/v1beta1/genesis";
import * as _1140 from "./pool-incentives/v1beta1/gov";
import * as _1141 from "./pool-incentives/v1beta1/gov";
import * as _1142 from "./pool-incentives/v1beta1/incentives";
import * as _1143 from "./pool-incentives/v1beta1/incentives";
import * as _1144 from "./pool-incentives/v1beta1/query";
import * as _1145 from "./pool-incentives/v1beta1/query";
import * as _1146 from "./store/v1beta1/tree";
import * as _1147 from "./store/v1beta1/tree";
import * as _1148 from "./superfluid/genesis";
import * as _1149 from "./superfluid/genesis";
import * as _1150 from "./superfluid/params";
import * as _1151 from "./superfluid/params";
import * as _1152 from "./superfluid/query";
import * as _1153 from "./superfluid/query";
import * as _1154 from "./superfluid/superfluid";
import * as _1155 from "./superfluid/superfluid";
import * as _1156 from "./superfluid/tx";
import * as _1157 from "./superfluid/tx.messages";
import * as _1158 from "./superfluid/tx.json";
import * as _1159 from "./superfluid/tx.toJSON";
import * as _1160 from "./superfluid/tx.fromJSON";
import * as _1161 from "./superfluid/tx.encoded";
import * as _1162 from "./superfluid/tx.aminos";
import * as _1163 from "./superfluid/tx";
import * as _1164 from "./txfees/v1beta1/feetoken";
import * as _1165 from "./txfees/v1beta1/feetoken";
import * as _1166 from "./txfees/v1beta1/genesis";
import * as _1167 from "./txfees/v1beta1/genesis";
import * as _1168 from "./txfees/v1beta1/gov";
import * as _1169 from "./txfees/v1beta1/gov";
import * as _1170 from "./txfees/v1beta1/query";
import * as _1171 from "./txfees/v1beta1/query";
export namespace osmosis {
  export namespace claim {
    export const v1beta1 = { ..._1074,
      ..._1075,
      ..._1076,
      ..._1077,
      ..._1078,
      ..._1079,
      ..._1080,
      ..._1081
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._1082,
      ..._1083,
      ..._1084,
      ..._1085
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._1086,
      ..._1087,
      ..._1088,
      ..._1089,
      ..._1090,
      ..._1091,
      ..._1092,
      ..._1093,
      ..._1094,
      ..._1095,
      ..._1096,
      ..._1097,
      ..._1098,
      ..._1099,
      ..._1100,
      ..._1101
    };
  }
  export const incentives = { ..._1102,
    ..._1103,
    ..._1104,
    ..._1105,
    ..._1106,
    ..._1107,
    ..._1108,
    ..._1109,
    ..._1110,
    ..._1111,
    ..._1112,
    ..._1113,
    ..._1114,
    ..._1115,
    ..._1116,
    ..._1117
  };
  export const lockup = { ..._1118,
    ..._1119,
    ..._1120,
    ..._1121,
    ..._1122,
    ..._1123,
    ..._1124,
    ..._1125,
    ..._1126,
    ..._1127,
    ..._1128,
    ..._1129,
    ..._1130,
    ..._1131
  };
  export namespace mint {
    export const v1beta1 = { ..._1132,
      ..._1133,
      ..._1134,
      ..._1135,
      ..._1136,
      ..._1137
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._1138,
      ..._1139,
      ..._1140,
      ..._1141,
      ..._1142,
      ..._1143,
      ..._1144,
      ..._1145
    };
  }
  export namespace store {
    export const v1beta1 = { ..._1146,
      ..._1147
    };
  }
  export const superfluid = { ..._1148,
    ..._1149,
    ..._1150,
    ..._1151,
    ..._1152,
    ..._1153,
    ..._1154,
    ..._1155,
    ..._1156,
    ..._1157,
    ..._1158,
    ..._1159,
    ..._1160,
    ..._1161,
    ..._1162,
    ..._1163
  };
  export namespace txfees {
    export const v1beta1 = { ..._1164,
      ..._1165,
      ..._1166,
      ..._1167,
      ..._1168,
      ..._1169,
      ..._1170,
      ..._1171
    };
  }
}