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
import * as _103 from "./gov/v1beta1/genesis";
import * as _104 from "./gov/v1beta1/gov";
import * as _105 from "./gov/v1beta1/query";
import * as _106 from "./gov/v1beta1/tx";
import * as _107 from "./mint/v1beta1/genesis";
import * as _108 from "./mint/v1beta1/mint";
import * as _109 from "./mint/v1beta1/query";
import * as _110 from "./msg/v1/msg";
import * as _111 from "./nft/v1beta1/event";
import * as _112 from "./nft/v1beta1/genesis";
import * as _113 from "./nft/v1beta1/nft";
import * as _114 from "./nft/v1beta1/query";
import * as _115 from "./nft/v1beta1/tx";
import * as _116 from "./orm/module/v1alpha1/module";
import * as _117 from "./orm/v1/orm";
import * as _118 from "./orm/v1alpha1/schema";
import * as _119 from "./params/v1beta1/params";
import * as _120 from "./params/v1beta1/query";
import * as _121 from "./slashing/v1beta1/genesis";
import * as _122 from "./slashing/v1beta1/query";
import * as _123 from "./slashing/v1beta1/slashing";
import * as _124 from "./slashing/v1beta1/tx";
import * as _125 from "./staking/v1beta1/authz";
import * as _126 from "./staking/v1beta1/genesis";
import * as _127 from "./staking/v1beta1/query";
import * as _128 from "./staking/v1beta1/staking";
import * as _129 from "./staking/v1beta1/tx";
import * as _130 from "./tx/signing/v1beta1/signing";
import * as _131 from "./tx/v1beta1/service";
import * as _132 from "./tx/v1beta1/tx";
import * as _133 from "./upgrade/v1beta1/query";
import * as _134 from "./upgrade/v1beta1/tx";
import * as _135 from "./upgrade/v1beta1/upgrade";
import * as _136 from "./vesting/v1beta1/tx";
import * as _137 from "./vesting/v1beta1/vesting";
import * as _338 from "./authz/v1beta1/tx.amino";
import * as _339 from "./bank/v1beta1/tx.amino";
import * as _340 from "./crisis/v1beta1/tx.amino";
import * as _341 from "./distribution/v1beta1/tx.amino";
import * as _342 from "./evidence/v1beta1/tx.amino";
import * as _343 from "./feegrant/v1beta1/tx.amino";
import * as _344 from "./gov/v1beta1/tx.amino";
import * as _345 from "./nft/v1beta1/tx.amino";
import * as _346 from "./slashing/v1beta1/tx.amino";
import * as _347 from "./staking/v1beta1/tx.amino";
import * as _348 from "./upgrade/v1beta1/tx.amino";
import * as _349 from "./vesting/v1beta1/tx.amino";
import * as _350 from "./authz/v1beta1/tx.registry";
import * as _351 from "./bank/v1beta1/tx.registry";
import * as _352 from "./crisis/v1beta1/tx.registry";
import * as _353 from "./distribution/v1beta1/tx.registry";
import * as _354 from "./evidence/v1beta1/tx.registry";
import * as _355 from "./feegrant/v1beta1/tx.registry";
import * as _356 from "./gov/v1beta1/tx.registry";
import * as _357 from "./nft/v1beta1/tx.registry";
import * as _358 from "./slashing/v1beta1/tx.registry";
import * as _359 from "./staking/v1beta1/tx.registry";
import * as _360 from "./upgrade/v1beta1/tx.registry";
import * as _361 from "./vesting/v1beta1/tx.registry";
import * as _362 from "./auth/v1beta1/query.lcd";
import * as _363 from "./authz/v1beta1/query.lcd";
import * as _364 from "./bank/v1beta1/query.lcd";
import * as _365 from "./distribution/v1beta1/query.lcd";
import * as _366 from "./evidence/v1beta1/query.lcd";
import * as _367 from "./feegrant/v1beta1/query.lcd";
import * as _368 from "./gov/v1beta1/query.lcd";
import * as _369 from "./mint/v1beta1/query.lcd";
import * as _370 from "./nft/v1beta1/query.lcd";
import * as _371 from "./params/v1beta1/query.lcd";
import * as _372 from "./slashing/v1beta1/query.lcd";
import * as _373 from "./staking/v1beta1/query.lcd";
import * as _374 from "./upgrade/v1beta1/query.lcd";
import * as _375 from "./app/v1alpha1/query.rpc.query";
import * as _376 from "./auth/v1beta1/query.rpc.query";
import * as _377 from "./authz/v1beta1/query.rpc.query";
import * as _378 from "./bank/v1beta1/query.rpc.query";
import * as _379 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _380 from "./distribution/v1beta1/query.rpc.query";
import * as _381 from "./evidence/v1beta1/query.rpc.query";
import * as _382 from "./feegrant/v1beta1/query.rpc.query";
import * as _383 from "./gov/v1beta1/query.rpc.query";
import * as _384 from "./mint/v1beta1/query.rpc.query";
import * as _385 from "./nft/v1beta1/query.rpc.query";
import * as _386 from "./params/v1beta1/query.rpc.query";
import * as _387 from "./slashing/v1beta1/query.rpc.query";
import * as _388 from "./staking/v1beta1/query.rpc.query";
import * as _389 from "./tx/v1beta1/service.rpc.svc";
import * as _390 from "./upgrade/v1beta1/query.rpc.query";
import * as _391 from "./authz/v1beta1/tx.rpc.msg";
import * as _392 from "./bank/v1beta1/tx.rpc.msg";
import * as _393 from "./crisis/v1beta1/tx.rpc.msg";
import * as _394 from "./distribution/v1beta1/tx.rpc.msg";
import * as _395 from "./evidence/v1beta1/tx.rpc.msg";
import * as _396 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _397 from "./gov/v1beta1/tx.rpc.msg";
import * as _398 from "./nft/v1beta1/tx.rpc.msg";
import * as _399 from "./slashing/v1beta1/tx.rpc.msg";
import * as _400 from "./staking/v1beta1/tx.rpc.msg";
import * as _401 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _402 from "./vesting/v1beta1/tx.rpc.msg";
import * as _498 from "./lcd";
import * as _499 from "./rpc.query";
import * as _500 from "./cosmos-rpc-client.query";
import * as _501 from "./rpc.tx";
import * as _502 from "./cosmos-rpc-client.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._55,
      ..._56,
      ..._57,
      ..._375
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._58,
      ..._59,
      ..._60,
      ..._362,
      ..._376
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._338,
      ..._350,
      ..._363,
      ..._377,
      ..._391
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._339,
      ..._351,
      ..._364,
      ..._378,
      ..._392
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._70
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._71
      };
    }
    export namespace query {
      export const v1beta1 = { ..._72
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._73
      };
      export const v2alpha1 = { ..._74
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._75
      };
    }
    export namespace store {
      export const v1beta1 = { ..._76,
        ..._77
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._78,
        ..._379
      };
    }
    export const v1beta1 = { ..._79
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._80,
      ..._81
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._82,
      ..._83,
      ..._340,
      ..._352,
      ..._393
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._84
    };
    export namespace hd {
      export const v1 = { ..._85
      };
    }
    export namespace keyring {
      export const v1 = { ..._86
      };
    }
    export const multisig = { ..._87
    };
    export const secp256k1 = { ..._88
    };
    export const secp256r1 = { ..._89
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._341,
      ..._353,
      ..._365,
      ..._380,
      ..._394
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._342,
      ..._354,
      ..._366,
      ..._381,
      ..._395
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._343,
      ..._355,
      ..._367,
      ..._382,
      ..._396
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._102
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._344,
      ..._356,
      ..._368,
      ..._383,
      ..._397
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._107,
      ..._108,
      ..._109,
      ..._369,
      ..._384
    };
  }
  export namespace msg {
    export const v1 = { ..._110
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._345,
      ..._357,
      ..._370,
      ..._385,
      ..._398
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = { ..._116
      };
    }
    export const v1 = { ..._117
    };
    export const v1alpha1 = { ..._118
    };
  }
  export namespace params {
    export const v1beta1 = { ..._119,
      ..._120,
      ..._371,
      ..._386
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._346,
      ..._358,
      ..._372,
      ..._387,
      ..._399
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._347,
      ..._359,
      ..._373,
      ..._388,
      ..._400
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._130
      };
    }
    export const v1beta1 = { ..._131,
      ..._132,
      ..._389
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._133,
      ..._134,
      ..._135,
      ..._348,
      ..._360,
      ..._374,
      ..._390,
      ..._401
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._136,
      ..._137,
      ..._349,
      ..._361,
      ..._402
    };
  }
  export const ClientFactory = { ..._498,
    ..._499,
    ..._500,
    ..._501,
    ..._502
  };
}