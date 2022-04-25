import * as _925 from "./applications/transfer/v1/genesis";
import * as _926 from "./applications/transfer/v1/query";
import * as _927 from "./applications/transfer/v1/transfer";
import * as _928 from "./applications/transfer/v1/tx";
import * as _929 from "./applications/transfer/v1/tx.messages";
import * as _930 from "./applications/transfer/v1/tx.json";
import * as _931 from "./applications/transfer/v1/tx.toJSON";
import * as _932 from "./applications/transfer/v1/tx.fromJSON";
import * as _933 from "./applications/transfer/v1/tx.encoded";
import * as _934 from "./applications/transfer/v1/tx.aminos";
import * as _935 from "./applications/transfer/v1/tx.registry";
import * as _936 from "./applications/transfer/v1/tx";
import * as _937 from "./applications/transfer/v2/packet";
import * as _938 from "./core/channel/v1/channel";
import * as _939 from "./core/channel/v1/genesis";
import * as _940 from "./core/channel/v1/query";
import * as _941 from "./core/channel/v1/tx";
import * as _942 from "./core/channel/v1/tx.messages";
import * as _943 from "./core/channel/v1/tx.json";
import * as _944 from "./core/channel/v1/tx.toJSON";
import * as _945 from "./core/channel/v1/tx.fromJSON";
import * as _946 from "./core/channel/v1/tx.encoded";
import * as _947 from "./core/channel/v1/tx.aminos";
import * as _948 from "./core/channel/v1/tx.registry";
import * as _949 from "./core/channel/v1/tx";
import * as _950 from "./core/client/v1/client";
import * as _951 from "./core/client/v1/genesis";
import * as _952 from "./core/client/v1/query";
import * as _953 from "./core/client/v1/tx";
import * as _954 from "./core/client/v1/tx.messages";
import * as _955 from "./core/client/v1/tx.json";
import * as _956 from "./core/client/v1/tx.toJSON";
import * as _957 from "./core/client/v1/tx.fromJSON";
import * as _958 from "./core/client/v1/tx.encoded";
import * as _959 from "./core/client/v1/tx.aminos";
import * as _960 from "./core/client/v1/tx.registry";
import * as _961 from "./core/client/v1/tx";
import * as _962 from "./core/commitment/v1/commitment";
import * as _963 from "./core/connection/v1/connection";
import * as _964 from "./core/connection/v1/genesis";
import * as _965 from "./core/connection/v1/query";
import * as _966 from "./core/connection/v1/tx";
import * as _967 from "./core/connection/v1/tx.messages";
import * as _968 from "./core/connection/v1/tx.json";
import * as _969 from "./core/connection/v1/tx.toJSON";
import * as _970 from "./core/connection/v1/tx.fromJSON";
import * as _971 from "./core/connection/v1/tx.encoded";
import * as _972 from "./core/connection/v1/tx.aminos";
import * as _973 from "./core/connection/v1/tx.registry";
import * as _974 from "./core/connection/v1/tx";
import * as _975 from "./core/port/v1/query";
import * as _976 from "./core/types/v1/genesis";
import * as _977 from "./lightclients/localhost/v1/localhost";
import * as _978 from "./lightclients/solomachine/v1/solomachine";
import * as _979 from "./lightclients/solomachine/v2/solomachine";
import * as _980 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._925,
        ..._926,
        ..._927,
        ..._928,
        ..._929,
        ..._930,
        ..._931,
        ..._932,
        ..._933,
        ..._934,
        ..._935,
        ..._936
      };
      export const v2 = { ..._937
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._938,
        ..._939,
        ..._940,
        ..._941,
        ..._942,
        ..._943,
        ..._944,
        ..._945,
        ..._946,
        ..._947,
        ..._948,
        ..._949
      };
    }
    export namespace client {
      export const v1 = { ..._950,
        ..._951,
        ..._952,
        ..._953,
        ..._954,
        ..._955,
        ..._956,
        ..._957,
        ..._958,
        ..._959,
        ..._960,
        ..._961
      };
    }
    export namespace commitment {
      export const v1 = { ..._962
      };
    }
    export namespace connection {
      export const v1 = { ..._963,
        ..._964,
        ..._965,
        ..._966,
        ..._967,
        ..._968,
        ..._969,
        ..._970,
        ..._971,
        ..._972,
        ..._973,
        ..._974
      };
    }
    export namespace port {
      export const v1 = { ..._975
      };
    }
    export namespace types {
      export const v1 = { ..._976
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._977
      };
    }
    export namespace solomachine {
      export const v1 = { ..._978
      };
      export const v2 = { ..._979
      };
    }
    export namespace tendermint {
      export const v1 = { ..._980
      };
    }
  }
}