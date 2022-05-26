import * as _55 from "./app/v1alpha1/config";
import * as _56 from "./app/v1alpha1/module";
import * as _57 from "./app/v1alpha1/query";
import * as _58 from "./auth/v1beta1/auth";
import * as _59 from "./auth/v1beta1/genesis";
import * as _60 from "./auth/v1beta1/query";
import * as _61 from "./authz/v1beta1/authz";
import * as _62 from "./authz/v1beta1/event";
import * as _63 from "./authz/v1beta1/genesis";
import * as _64 from "./authz/v1beta1/query";
import * as _65 from "./authz/v1beta1/tx";
import * as _66 from "./bank/v1beta1/authz";
import * as _67 from "./bank/v1beta1/bank";
import * as _68 from "./bank/v1beta1/genesis";
import * as _69 from "./bank/v1beta1/query";
import * as _70 from "./bank/v1beta1/tx";
import * as _71 from "./base/abci/v1beta1/abci";
import * as _72 from "./base/kv/v1beta1/kv";
import * as _73 from "./base/query/v1beta1/pagination";
import * as _74 from "./base/reflection/v1beta1/reflection";
import * as _75 from "./base/reflection/v2alpha1/reflection";
import * as _76 from "./base/snapshots/v1beta1/snapshot";
import * as _77 from "./base/store/v1beta1/commit_info";
import * as _78 from "./base/store/v1beta1/listening";
import * as _79 from "./base/tendermint/v1beta1/query";
import * as _80 from "./base/v1beta1/coin";
import * as _81 from "./capability/v1beta1/capability";
import * as _82 from "./capability/v1beta1/genesis";
import * as _83 from "./crisis/v1beta1/genesis";
import * as _84 from "./crisis/v1beta1/tx";
import * as _85 from "./crypto/ed25519/keys";
import * as _86 from "./crypto/hd/v1/hd";
import * as _87 from "./crypto/keyring/v1/record";
import * as _88 from "./crypto/multisig/keys";
import * as _89 from "./crypto/secp256k1/keys";
import * as _90 from "./crypto/secp256r1/keys";
import * as _91 from "./distribution/v1beta1/distribution";
import * as _92 from "./distribution/v1beta1/genesis";
import * as _93 from "./distribution/v1beta1/query";
import * as _94 from "./distribution/v1beta1/tx";
import * as _95 from "./evidence/v1beta1/evidence";
import * as _96 from "./evidence/v1beta1/genesis";
import * as _97 from "./evidence/v1beta1/query";
import * as _98 from "./evidence/v1beta1/tx";
import * as _99 from "./feegrant/v1beta1/feegrant";
import * as _100 from "./feegrant/v1beta1/genesis";
import * as _101 from "./feegrant/v1beta1/query";
import * as _102 from "./feegrant/v1beta1/tx";
import * as _103 from "./genutil/v1beta1/genesis";
import * as _104 from "./gov/v1/genesis";
import * as _105 from "./gov/v1/gov";
import * as _106 from "./gov/v1/query";
import * as _107 from "./gov/v1/tx";
import * as _108 from "./gov/v1beta1/genesis";
import * as _109 from "./gov/v1beta1/gov";
import * as _110 from "./gov/v1beta1/query";
import * as _111 from "./gov/v1beta1/tx";
import * as _112 from "./group/v1/events";
import * as _113 from "./group/v1/genesis";
import * as _114 from "./group/v1/query";
import * as _115 from "./group/v1/tx";
import * as _116 from "./group/v1/types";
import * as _117 from "./mint/v1beta1/genesis";
import * as _118 from "./mint/v1beta1/mint";
import * as _119 from "./mint/v1beta1/query";
import * as _120 from "./msg/v1/msg";
import * as _121 from "./nft/v1beta1/event";
import * as _122 from "./nft/v1beta1/genesis";
import * as _123 from "./nft/v1beta1/nft";
import * as _124 from "./nft/v1beta1/query";
import * as _125 from "./nft/v1beta1/tx";
import * as _126 from "./orm/module/v1alpha1/module";
import * as _127 from "./orm/v1/orm";
import * as _128 from "./orm/v1alpha1/schema";
import * as _129 from "./params/v1beta1/params";
import * as _130 from "./params/v1beta1/query";
import * as _131 from "./slashing/v1beta1/genesis";
import * as _132 from "./slashing/v1beta1/query";
import * as _133 from "./slashing/v1beta1/slashing";
import * as _134 from "./slashing/v1beta1/tx";
import * as _135 from "./staking/v1beta1/authz";
import * as _136 from "./staking/v1beta1/genesis";
import * as _137 from "./staking/v1beta1/query";
import * as _138 from "./staking/v1beta1/staking";
import * as _139 from "./staking/v1beta1/tx";
import * as _140 from "./tx/signing/v1beta1/signing";
import * as _141 from "./tx/v1beta1/service";
import * as _142 from "./tx/v1beta1/tx";
import * as _143 from "./upgrade/v1beta1/query";
import * as _144 from "./upgrade/v1beta1/tx";
import * as _145 from "./upgrade/v1beta1/upgrade";
import * as _146 from "./vesting/v1beta1/tx";
import * as _147 from "./vesting/v1beta1/vesting";
import * as _312 from "./authz/v1beta1/tx.amino";
import * as _313 from "./bank/v1beta1/tx.amino";
import * as _314 from "./crisis/v1beta1/tx.amino";
import * as _315 from "./distribution/v1beta1/tx.amino";
import * as _316 from "./evidence/v1beta1/tx.amino";
import * as _317 from "./feegrant/v1beta1/tx.amino";
import * as _318 from "./gov/v1/tx.amino";
import * as _319 from "./gov/v1beta1/tx.amino";
import * as _320 from "./group/v1/tx.amino";
import * as _321 from "./nft/v1beta1/tx.amino";
import * as _322 from "./slashing/v1beta1/tx.amino";
import * as _323 from "./staking/v1beta1/tx.amino";
import * as _324 from "./upgrade/v1beta1/tx.amino";
import * as _325 from "./vesting/v1beta1/tx.amino";
import * as _326 from "./authz/v1beta1/tx.registry";
import * as _327 from "./bank/v1beta1/tx.registry";
import * as _328 from "./crisis/v1beta1/tx.registry";
import * as _329 from "./distribution/v1beta1/tx.registry";
import * as _330 from "./evidence/v1beta1/tx.registry";
import * as _331 from "./feegrant/v1beta1/tx.registry";
import * as _332 from "./gov/v1/tx.registry";
import * as _333 from "./gov/v1beta1/tx.registry";
import * as _334 from "./group/v1/tx.registry";
import * as _335 from "./nft/v1beta1/tx.registry";
import * as _336 from "./slashing/v1beta1/tx.registry";
import * as _337 from "./staking/v1beta1/tx.registry";
import * as _338 from "./upgrade/v1beta1/tx.registry";
import * as _339 from "./vesting/v1beta1/tx.registry";
import * as _340 from "./auth/v1beta1/query.lcd";
import * as _341 from "./authz/v1beta1/query.lcd";
import * as _342 from "./bank/v1beta1/query.lcd";
import * as _343 from "./distribution/v1beta1/query.lcd";
import * as _344 from "./evidence/v1beta1/query.lcd";
import * as _345 from "./feegrant/v1beta1/query.lcd";
import * as _346 from "./gov/v1/query.lcd";
import * as _347 from "./gov/v1beta1/query.lcd";
import * as _348 from "./group/v1/query.lcd";
import * as _349 from "./mint/v1beta1/query.lcd";
import * as _350 from "./nft/v1beta1/query.lcd";
import * as _351 from "./params/v1beta1/query.lcd";
import * as _352 from "./slashing/v1beta1/query.lcd";
import * as _353 from "./staking/v1beta1/query.lcd";
import * as _354 from "./upgrade/v1beta1/query.lcd";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._55,
      ..._56,
      ..._57
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._58,
      ..._59,
      ..._60,
      ..._340
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._312,
      ..._326,
      ..._341
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._313,
      ..._327,
      ..._342
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._71
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._72
      };
    }
    export namespace query {
      export const v1beta1 = { ..._73
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._74
      };
      export const v2alpha1 = { ..._75
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._76
      };
    }
    export namespace store {
      export const v1beta1 = { ..._77,
        ..._78
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._79
      };
    }
    export const v1beta1 = { ..._80
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._81,
      ..._82
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._83,
      ..._84,
      ..._314,
      ..._328
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._85
    };
    export namespace hd {
      export const v1 = { ..._86
      };
    }
    export namespace keyring {
      export const v1 = { ..._87
      };
    }
    export const multisig = { ..._88
    };
    export const secp256k1 = { ..._89
    };
    export const secp256r1 = { ..._90
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._315,
      ..._329,
      ..._343
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._316,
      ..._330,
      ..._344
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._317,
      ..._331,
      ..._345
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._103
    };
  }
  export namespace gov {
    export const v1 = { ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._318,
      ..._332,
      ..._346
    };
    export const v1beta1 = { ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._319,
      ..._333,
      ..._347
    };
  }
  export namespace group {
    export const v1 = { ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._320,
      ..._334,
      ..._348
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._117,
      ..._118,
      ..._119,
      ..._349
    };
  }
  export namespace msg {
    export const v1 = { ..._120
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._321,
      ..._335,
      ..._350
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = { ..._126
      };
    }
    export const v1 = { ..._127
    };
    export const v1alpha1 = { ..._128
    };
  }
  export namespace params {
    export const v1beta1 = { ..._129,
      ..._130,
      ..._351
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._322,
      ..._336,
      ..._352
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._323,
      ..._337,
      ..._353
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._140
      };
    }
    export const v1beta1 = { ..._141,
      ..._142
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._143,
      ..._144,
      ..._145,
      ..._324,
      ..._338,
      ..._354
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._146,
      ..._147,
      ..._325,
      ..._339
    };
  }
}