import * as _1002 from "./applications/transfer/v1/genesis";
import * as _1003 from "./applications/transfer/v1/genesis";
import * as _1004 from "./applications/transfer/v1/query";
import * as _1005 from "./applications/transfer/v1/query";
import * as _1006 from "./applications/transfer/v1/transfer";
import * as _1007 from "./applications/transfer/v1/transfer";
import * as _1008 from "./applications/transfer/v1/tx";
import * as _1009 from "./applications/transfer/v1/tx.messages";
import * as _1010 from "./applications/transfer/v1/tx.json";
import * as _1011 from "./applications/transfer/v1/tx.toJSON";
import * as _1012 from "./applications/transfer/v1/tx.fromJSON";
import * as _1013 from "./applications/transfer/v1/tx.encoded";
import * as _1014 from "./applications/transfer/v1/tx.aminos";
import * as _1015 from "./applications/transfer/v1/tx";
import * as _1016 from "./applications/transfer/v2/packet";
import * as _1017 from "./applications/transfer/v2/packet";
import * as _1018 from "./core/channel/v1/channel";
import * as _1019 from "./core/channel/v1/channel";
import * as _1020 from "./core/channel/v1/genesis";
import * as _1021 from "./core/channel/v1/genesis";
import * as _1022 from "./core/channel/v1/query";
import * as _1023 from "./core/channel/v1/query";
import * as _1024 from "./core/channel/v1/tx";
import * as _1025 from "./core/channel/v1/tx.messages";
import * as _1026 from "./core/channel/v1/tx.json";
import * as _1027 from "./core/channel/v1/tx.toJSON";
import * as _1028 from "./core/channel/v1/tx.fromJSON";
import * as _1029 from "./core/channel/v1/tx.encoded";
import * as _1030 from "./core/channel/v1/tx.aminos";
import * as _1031 from "./core/channel/v1/tx";
import * as _1032 from "./core/client/v1/client";
import * as _1033 from "./core/client/v1/client";
import * as _1034 from "./core/client/v1/genesis";
import * as _1035 from "./core/client/v1/genesis";
import * as _1036 from "./core/client/v1/query";
import * as _1037 from "./core/client/v1/query";
import * as _1038 from "./core/client/v1/tx";
import * as _1039 from "./core/client/v1/tx.messages";
import * as _1040 from "./core/client/v1/tx.json";
import * as _1041 from "./core/client/v1/tx.toJSON";
import * as _1042 from "./core/client/v1/tx.fromJSON";
import * as _1043 from "./core/client/v1/tx.encoded";
import * as _1044 from "./core/client/v1/tx.aminos";
import * as _1045 from "./core/client/v1/tx";
import * as _1046 from "./core/commitment/v1/commitment";
import * as _1047 from "./core/commitment/v1/commitment";
import * as _1048 from "./core/connection/v1/connection";
import * as _1049 from "./core/connection/v1/connection";
import * as _1050 from "./core/connection/v1/genesis";
import * as _1051 from "./core/connection/v1/genesis";
import * as _1052 from "./core/connection/v1/query";
import * as _1053 from "./core/connection/v1/query";
import * as _1054 from "./core/connection/v1/tx";
import * as _1055 from "./core/connection/v1/tx.messages";
import * as _1056 from "./core/connection/v1/tx.json";
import * as _1057 from "./core/connection/v1/tx.toJSON";
import * as _1058 from "./core/connection/v1/tx.fromJSON";
import * as _1059 from "./core/connection/v1/tx.encoded";
import * as _1060 from "./core/connection/v1/tx.aminos";
import * as _1061 from "./core/connection/v1/tx";
import * as _1062 from "./core/port/v1/query";
import * as _1063 from "./core/port/v1/query";
import * as _1064 from "./core/types/v1/genesis";
import * as _1065 from "./core/types/v1/genesis";
import * as _1066 from "./lightclients/localhost/v1/localhost";
import * as _1067 from "./lightclients/localhost/v1/localhost";
import * as _1068 from "./lightclients/solomachine/v1/solomachine";
import * as _1069 from "./lightclients/solomachine/v1/solomachine";
import * as _1070 from "./lightclients/solomachine/v2/solomachine";
import * as _1071 from "./lightclients/solomachine/v2/solomachine";
import * as _1072 from "./lightclients/tendermint/v1/tendermint";
import * as _1073 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._1002,
        ..._1003,
        ..._1004,
        ..._1005,
        ..._1006,
        ..._1007,
        ..._1008,
        ..._1009,
        ..._1010,
        ..._1011,
        ..._1012,
        ..._1013,
        ..._1014,
        ..._1015
      };
      export const v2 = { ..._1016,
        ..._1017
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._1018,
        ..._1019,
        ..._1020,
        ..._1021,
        ..._1022,
        ..._1023,
        ..._1024,
        ..._1025,
        ..._1026,
        ..._1027,
        ..._1028,
        ..._1029,
        ..._1030,
        ..._1031
      };
    }
    export namespace client {
      export const v1 = { ..._1032,
        ..._1033,
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
    }
    export namespace commitment {
      export const v1 = { ..._1046,
        ..._1047
      };
    }
    export namespace connection {
      export const v1 = { ..._1048,
        ..._1049,
        ..._1050,
        ..._1051,
        ..._1052,
        ..._1053,
        ..._1054,
        ..._1055,
        ..._1056,
        ..._1057,
        ..._1058,
        ..._1059,
        ..._1060,
        ..._1061
      };
    }
    export namespace port {
      export const v1 = { ..._1062,
        ..._1063
      };
    }
    export namespace types {
      export const v1 = { ..._1064,
        ..._1065
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._1066,
        ..._1067
      };
    }
    export namespace solomachine {
      export const v1 = { ..._1068,
        ..._1069
      };
      export const v2 = { ..._1070,
        ..._1071
      };
    }
    export namespace tendermint {
      export const v1 = { ..._1072,
        ..._1073
      };
    }
  }
}