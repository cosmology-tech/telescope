import * as _691 from "./applications/transfer/v1/genesis";
import * as _692 from "./applications/transfer/v1/query";
import * as _693 from "./applications/transfer/v1/transfer";
import * as _694 from "./applications/transfer/v1/tx";
import * as _695 from "./applications/transfer/v1/tx.messages";
import * as _696 from "./applications/transfer/v1/tx.json";
import * as _697 from "./applications/transfer/v1/tx.toJSON";
import * as _698 from "./applications/transfer/v1/tx.fromJSON";
import * as _699 from "./applications/transfer/v1/tx.encoded";
import * as _700 from "./applications/transfer/v1/tx.aminos";
import * as _701 from "./applications/transfer/v1/tx.registry";
import * as _702 from "./applications/transfer/v1/tx";
import * as _703 from "./applications/transfer/v2/packet";
import * as _704 from "./core/channel/v1/channel";
import * as _705 from "./core/channel/v1/genesis";
import * as _706 from "./core/channel/v1/query";
import * as _707 from "./core/channel/v1/tx";
import * as _708 from "./core/channel/v1/tx.messages";
import * as _709 from "./core/channel/v1/tx.json";
import * as _710 from "./core/channel/v1/tx.toJSON";
import * as _711 from "./core/channel/v1/tx.fromJSON";
import * as _712 from "./core/channel/v1/tx.encoded";
import * as _713 from "./core/channel/v1/tx.aminos";
import * as _714 from "./core/channel/v1/tx.registry";
import * as _715 from "./core/channel/v1/tx";
import * as _716 from "./core/client/v1/client";
import * as _717 from "./core/client/v1/genesis";
import * as _718 from "./core/client/v1/query";
import * as _719 from "./core/client/v1/tx";
import * as _720 from "./core/client/v1/tx.messages";
import * as _721 from "./core/client/v1/tx.json";
import * as _722 from "./core/client/v1/tx.toJSON";
import * as _723 from "./core/client/v1/tx.fromJSON";
import * as _724 from "./core/client/v1/tx.encoded";
import * as _725 from "./core/client/v1/tx.aminos";
import * as _726 from "./core/client/v1/tx.registry";
import * as _727 from "./core/client/v1/tx";
import * as _728 from "./core/commitment/v1/commitment";
import * as _729 from "./core/connection/v1/connection";
import * as _730 from "./core/connection/v1/genesis";
import * as _731 from "./core/connection/v1/query";
import * as _732 from "./core/connection/v1/tx";
import * as _733 from "./core/connection/v1/tx.messages";
import * as _734 from "./core/connection/v1/tx.json";
import * as _735 from "./core/connection/v1/tx.toJSON";
import * as _736 from "./core/connection/v1/tx.fromJSON";
import * as _737 from "./core/connection/v1/tx.encoded";
import * as _738 from "./core/connection/v1/tx.aminos";
import * as _739 from "./core/connection/v1/tx.registry";
import * as _740 from "./core/connection/v1/tx";
import * as _741 from "./core/port/v1/query";
import * as _742 from "./core/types/v1/genesis";
import * as _743 from "./lightclients/localhost/v1/localhost";
import * as _744 from "./lightclients/solomachine/v1/solomachine";
import * as _745 from "./lightclients/solomachine/v2/solomachine";
import * as _746 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._691,
        ..._692,
        ..._693,
        ..._694,
        ..._695,
        ..._696,
        ..._697,
        ..._698,
        ..._699,
        ..._700,
        ..._701,
        ..._702
      };
      export const v2 = { ..._703
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._704,
        ..._705,
        ..._706,
        ..._707,
        ..._708,
        ..._709,
        ..._710,
        ..._711,
        ..._712,
        ..._713,
        ..._714,
        ..._715
      };
    }
    export namespace client {
      export const v1 = { ..._716,
        ..._717,
        ..._718,
        ..._719,
        ..._720,
        ..._721,
        ..._722,
        ..._723,
        ..._724,
        ..._725,
        ..._726,
        ..._727
      };
    }
    export namespace commitment {
      export const v1 = { ..._728
      };
    }
    export namespace connection {
      export const v1 = { ..._729,
        ..._730,
        ..._731,
        ..._732,
        ..._733,
        ..._734,
        ..._735,
        ..._736,
        ..._737,
        ..._738,
        ..._739,
        ..._740
      };
    }
    export namespace port {
      export const v1 = { ..._741
      };
    }
    export namespace types {
      export const v1 = { ..._742
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._743
      };
    }
    export namespace solomachine {
      export const v1 = { ..._744
      };
      export const v2 = { ..._745
      };
    }
    export namespace tendermint {
      export const v1 = { ..._746
      };
    }
  }
}