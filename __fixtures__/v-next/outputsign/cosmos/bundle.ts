import * as _55 from "./app/v1alpha1/config";
import * as _56 from "./app/v1alpha1/module";
import * as _57 from "./app/v1alpha1/query";
import * as _58 from "./auth/v1beta1/auth";
import * as _59 from "./auth/v1beta1/genesis";
import * as _60 from "./auth/v1beta1/query";
import * as _61 from "./authz/v1beta1/authz";
import * as _62 from "./authz/v1beta1/genesis";
import * as _63 from "./authz/v1beta1/query";
import * as _64 from "./authz/v1beta1/tx";
import * as _65 from "./bank/v1beta1/authz";
import * as _66 from "./bank/v1beta1/bank";
import * as _67 from "./bank/v1beta1/genesis";
import * as _68 from "./bank/v1beta1/query";
import * as _69 from "./bank/v1beta1/tx";
import * as _70 from "./base/abci/v1beta1/abci";
import * as _71 from "./base/kv/v1beta1/kv";
import * as _72 from "./base/query/v1beta1/pagination";
import * as _73 from "./base/reflection/v1beta1/reflection";
import * as _74 from "./base/reflection/v2alpha1/reflection";
import * as _75 from "./base/snapshots/v1beta1/snapshot";
import * as _76 from "./base/store/v1beta1/commit_info";
import * as _77 from "./base/store/v1beta1/listening";
import * as _78 from "./base/tendermint/v1beta1/query";
import * as _79 from "./base/v1beta1/coin";
import * as _80 from "./capability/v1beta1/capability";
import * as _81 from "./capability/v1beta1/genesis";
import * as _82 from "./crisis/v1beta1/genesis";
import * as _83 from "./crisis/v1beta1/tx";
import * as _84 from "./crypto/ed25519/keys";
import * as _85 from "./crypto/hd/v1/hd";
import * as _86 from "./crypto/keyring/v1/record";
import * as _87 from "./crypto/multisig/keys";
import * as _88 from "./crypto/secp256k1/keys";
import * as _89 from "./crypto/secp256r1/keys";
import * as _90 from "./distribution/v1beta1/distribution";
import * as _91 from "./distribution/v1beta1/genesis";
import * as _92 from "./distribution/v1beta1/query";
import * as _93 from "./distribution/v1beta1/tx";
import * as _94 from "./evidence/v1beta1/evidence";
import * as _95 from "./evidence/v1beta1/genesis";
import * as _96 from "./evidence/v1beta1/query";
import * as _97 from "./evidence/v1beta1/tx";
import * as _98 from "./feegrant/v1beta1/feegrant";
import * as _99 from "./feegrant/v1beta1/genesis";
import * as _100 from "./feegrant/v1beta1/query";
import * as _101 from "./feegrant/v1beta1/tx";
import * as _102 from "./genutil/v1beta1/genesis";
import * as _103 from "./gov/v1/genesis";
import * as _104 from "./gov/v1/gov";
import * as _105 from "./gov/v1/query";
import * as _106 from "./gov/v1/tx";
import * as _107 from "./gov/v1beta1/genesis";
import * as _108 from "./gov/v1beta1/gov";
import * as _109 from "./gov/v1beta1/query";
import * as _110 from "./gov/v1beta1/tx";
import * as _111 from "./group/v1/events";
import * as _112 from "./group/v1/genesis";
import * as _113 from "./group/v1/query";
import * as _114 from "./group/v1/tx";
import * as _115 from "./group/v1/types";
import * as _116 from "./mint/v1beta1/genesis";
import * as _117 from "./mint/v1beta1/mint";
import * as _118 from "./mint/v1beta1/query";
import * as _119 from "./msg/v1/msg";
import * as _120 from "./nft/v1beta1/event";
import * as _121 from "./nft/v1beta1/genesis";
import * as _122 from "./nft/v1beta1/nft";
import * as _123 from "./nft/v1beta1/query";
import * as _124 from "./nft/v1beta1/tx";
import * as _125 from "./orm/module/v1alpha1/module";
import * as _126 from "./orm/v1/orm";
import * as _127 from "./orm/v1alpha1/schema";
import * as _128 from "./params/v1beta1/params";
import * as _129 from "./params/v1beta1/query";
import * as _130 from "./slashing/v1beta1/genesis";
import * as _131 from "./slashing/v1beta1/query";
import * as _132 from "./slashing/v1beta1/slashing";
import * as _133 from "./slashing/v1beta1/tx";
import * as _134 from "./staking/v1beta1/authz";
import * as _135 from "./staking/v1beta1/genesis";
import * as _136 from "./staking/v1beta1/query";
import * as _137 from "./staking/v1beta1/staking";
import * as _138 from "./staking/v1beta1/tx";
import * as _139 from "./tx/signing/v1beta1/signing";
import * as _140 from "./tx/v1beta1/service";
import * as _141 from "./tx/v1beta1/tx";
import * as _142 from "./upgrade/v1beta1/query";
import * as _143 from "./upgrade/v1beta1/tx";
import * as _144 from "./upgrade/v1beta1/upgrade";
import * as _145 from "./vesting/v1beta1/tx";
import * as _146 from "./vesting/v1beta1/vesting";
import * as _339 from "./auth/v1beta1/query.lcd";
import * as _340 from "./authz/v1beta1/query.lcd";
import * as _341 from "./bank/v1beta1/query.lcd";
import * as _342 from "./base/reflection/v1beta1/reflection.lcd";
import * as _343 from "./base/reflection/v2alpha1/reflection.lcd";
import * as _344 from "./base/tendermint/v1beta1/query.lcd";
import * as _345 from "./distribution/v1beta1/query.lcd";
import * as _346 from "./evidence/v1beta1/query.lcd";
import * as _347 from "./feegrant/v1beta1/query.lcd";
import * as _348 from "./gov/v1/query.lcd";
import * as _349 from "./gov/v1beta1/query.lcd";
import * as _350 from "./group/v1/query.lcd";
import * as _351 from "./mint/v1beta1/query.lcd";
import * as _352 from "./nft/v1beta1/query.lcd";
import * as _353 from "./params/v1beta1/query.lcd";
import * as _354 from "./slashing/v1beta1/query.lcd";
import * as _355 from "./staking/v1beta1/query.lcd";
import * as _356 from "./tx/v1beta1/service.lcd";
import * as _357 from "./upgrade/v1beta1/query.lcd";
import * as _358 from "./app/v1alpha1/query.rpc.Query";
import * as _359 from "./auth/v1beta1/query.rpc.Query";
import * as _360 from "./authz/v1beta1/query.rpc.Query";
import * as _361 from "./bank/v1beta1/query.rpc.Query";
import * as _362 from "./base/reflection/v1beta1/reflection.rpc.ReflectionService";
import * as _363 from "./base/reflection/v2alpha1/reflection.rpc.ReflectionService";
import * as _364 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _365 from "./distribution/v1beta1/query.rpc.Query";
import * as _366 from "./evidence/v1beta1/query.rpc.Query";
import * as _367 from "./feegrant/v1beta1/query.rpc.Query";
import * as _368 from "./gov/v1/query.rpc.Query";
import * as _369 from "./gov/v1beta1/query.rpc.Query";
import * as _370 from "./group/v1/query.rpc.Query";
import * as _371 from "./mint/v1beta1/query.rpc.Query";
import * as _372 from "./nft/v1beta1/query.rpc.Query";
import * as _373 from "./params/v1beta1/query.rpc.Query";
import * as _374 from "./slashing/v1beta1/query.rpc.Query";
import * as _375 from "./staking/v1beta1/query.rpc.Query";
import * as _376 from "./tx/v1beta1/service.rpc.Service";
import * as _377 from "./upgrade/v1beta1/query.rpc.Query";
import * as _378 from "./authz/v1beta1/tx.rpc.msg";
import * as _379 from "./bank/v1beta1/tx.rpc.msg";
import * as _380 from "./crisis/v1beta1/tx.rpc.msg";
import * as _381 from "./distribution/v1beta1/tx.rpc.msg";
import * as _382 from "./evidence/v1beta1/tx.rpc.msg";
import * as _383 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _384 from "./gov/v1/tx.rpc.msg";
import * as _385 from "./gov/v1beta1/tx.rpc.msg";
import * as _386 from "./group/v1/tx.rpc.msg";
import * as _387 from "./nft/v1beta1/tx.rpc.msg";
import * as _388 from "./slashing/v1beta1/tx.rpc.msg";
import * as _389 from "./staking/v1beta1/tx.rpc.msg";
import * as _390 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _391 from "./vesting/v1beta1/tx.rpc.msg";
import * as _467 from "./lcd";
import * as _468 from "./rpc.query";
import * as _469 from "./cosmos-rpc-client.query";
import * as _470 from "./rpc.tx";
import * as _471 from "./cosmos-rpc-client.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._358
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._339,
      ..._359
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._340,
      ..._360,
      ..._378
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._341,
      ..._361,
      ..._379
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._70
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._71
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._72
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._73,
        ..._342,
        ..._362
      };
      export const v2alpha1 = {
        ..._74,
        ..._343,
        ..._363
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._75
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._76,
        ..._77
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._78,
        ..._344,
        ..._364
      };
    }
    export const v1beta1 = {
      ..._79
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._80,
      ..._81
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._380
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._84
    };
    export namespace hd {
      export const v1 = {
        ..._85
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._86
      };
    }
    export const multisig = {
      ..._87
    };
    export const secp256k1 = {
      ..._88
    };
    export const secp256r1 = {
      ..._89
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._345,
      ..._365,
      ..._381
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._346,
      ..._366,
      ..._382
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._347,
      ..._367,
      ..._383
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._102
    };
  }
  export namespace gov {
    export const v1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._348,
      ..._368,
      ..._384
    };
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._349,
      ..._369,
      ..._385
    };
  }
  export namespace group {
    export const v1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._350,
      ..._370,
      ..._386
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._116,
      ..._117,
      ..._118,
      ..._351,
      ..._371
    };
  }
  export namespace msg {
    export const v1 = {
      ..._119
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._352,
      ..._372,
      ..._387
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._125
      };
    }
    export const v1 = {
      ..._126
    };
    export const v1alpha1 = {
      ..._127
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._353,
      ..._373
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._354,
      ..._374,
      ..._388
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._355,
      ..._375,
      ..._389
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._139
      };
    }
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._356,
      ..._376
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._357,
      ..._377,
      ..._390
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._145,
      ..._146,
      ..._391
    };
  }
  export const ClientFactory = {
    ..._467,
    ..._468,
    ..._469,
    ..._470,
    ..._471
  };
}