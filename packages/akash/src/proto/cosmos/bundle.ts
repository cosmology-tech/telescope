import * as _654 from "./app/v1alpha1/config";
import * as _655 from "./app/v1alpha1/module";
import * as _656 from "./app/v1alpha1/query";
import * as _657 from "./auth/v1beta1/auth";
import * as _658 from "./auth/v1beta1/genesis";
import * as _659 from "./auth/v1beta1/query";
import * as _660 from "./authz/v1beta1/authz";
import * as _661 from "./authz/v1beta1/event";
import * as _662 from "./authz/v1beta1/genesis";
import * as _663 from "./authz/v1beta1/query";
import * as _664 from "./authz/v1beta1/tx";
import * as _665 from "./authz/v1beta1/tx.messages";
import * as _666 from "./authz/v1beta1/tx.json";
import * as _667 from "./authz/v1beta1/tx.toJSON";
import * as _668 from "./authz/v1beta1/tx.fromJSON";
import * as _669 from "./authz/v1beta1/tx.encoded";
import * as _670 from "./authz/v1beta1/tx.aminos";
import * as _671 from "./authz/v1beta1/tx.registry";
import * as _672 from "./authz/v1beta1/tx";
import * as _673 from "./bank/v1beta1/authz";
import * as _674 from "./bank/v1beta1/bank";
import * as _675 from "./bank/v1beta1/genesis";
import * as _676 from "./bank/v1beta1/query";
import * as _677 from "./bank/v1beta1/tx";
import * as _678 from "./bank/v1beta1/tx.messages";
import * as _679 from "./bank/v1beta1/tx.json";
import * as _680 from "./bank/v1beta1/tx.toJSON";
import * as _681 from "./bank/v1beta1/tx.fromJSON";
import * as _682 from "./bank/v1beta1/tx.encoded";
import * as _683 from "./bank/v1beta1/tx.aminos";
import * as _684 from "./bank/v1beta1/tx.registry";
import * as _685 from "./bank/v1beta1/tx";
import * as _686 from "./base/abci/v1beta1/abci";
import * as _687 from "./base/kv/v1beta1/kv";
import * as _688 from "./base/query/v1beta1/pagination";
import * as _689 from "./base/reflection/v1beta1/reflection";
import * as _690 from "./base/reflection/v2alpha1/reflection";
import * as _691 from "./base/snapshots/v1beta1/snapshot";
import * as _692 from "./base/store/v1beta1/commit_info";
import * as _693 from "./base/store/v1beta1/listening";
import * as _694 from "./base/tendermint/v1beta1/query";
import * as _695 from "./base/v1beta1/coin";
import * as _696 from "./capability/v1beta1/capability";
import * as _697 from "./capability/v1beta1/genesis";
import * as _698 from "./crisis/v1beta1/genesis";
import * as _699 from "./crisis/v1beta1/tx";
import * as _700 from "./crisis/v1beta1/tx.messages";
import * as _701 from "./crisis/v1beta1/tx.json";
import * as _702 from "./crisis/v1beta1/tx.toJSON";
import * as _703 from "./crisis/v1beta1/tx.fromJSON";
import * as _704 from "./crisis/v1beta1/tx.encoded";
import * as _705 from "./crisis/v1beta1/tx.aminos";
import * as _706 from "./crisis/v1beta1/tx.registry";
import * as _707 from "./crisis/v1beta1/tx";
import * as _708 from "./crypto/ed25519/keys";
import * as _709 from "./crypto/hd/v1/hd";
import * as _710 from "./crypto/keyring/v1/record";
import * as _711 from "./crypto/multisig/keys";
import * as _712 from "./crypto/secp256k1/keys";
import * as _713 from "./crypto/secp256r1/keys";
import * as _714 from "./distribution/v1beta1/distribution";
import * as _715 from "./distribution/v1beta1/genesis";
import * as _716 from "./distribution/v1beta1/query";
import * as _717 from "./distribution/v1beta1/tx";
import * as _718 from "./distribution/v1beta1/tx.messages";
import * as _719 from "./distribution/v1beta1/tx.json";
import * as _720 from "./distribution/v1beta1/tx.toJSON";
import * as _721 from "./distribution/v1beta1/tx.fromJSON";
import * as _722 from "./distribution/v1beta1/tx.encoded";
import * as _723 from "./distribution/v1beta1/tx.aminos";
import * as _724 from "./distribution/v1beta1/tx.registry";
import * as _725 from "./distribution/v1beta1/tx";
import * as _726 from "./evidence/v1beta1/evidence";
import * as _727 from "./evidence/v1beta1/genesis";
import * as _728 from "./evidence/v1beta1/query";
import * as _729 from "./evidence/v1beta1/tx";
import * as _730 from "./evidence/v1beta1/tx.messages";
import * as _731 from "./evidence/v1beta1/tx.json";
import * as _732 from "./evidence/v1beta1/tx.toJSON";
import * as _733 from "./evidence/v1beta1/tx.fromJSON";
import * as _734 from "./evidence/v1beta1/tx.encoded";
import * as _735 from "./evidence/v1beta1/tx.aminos";
import * as _736 from "./evidence/v1beta1/tx.registry";
import * as _737 from "./evidence/v1beta1/tx";
import * as _738 from "./feegrant/v1beta1/feegrant";
import * as _739 from "./feegrant/v1beta1/genesis";
import * as _740 from "./feegrant/v1beta1/query";
import * as _741 from "./feegrant/v1beta1/tx";
import * as _742 from "./feegrant/v1beta1/tx.messages";
import * as _743 from "./feegrant/v1beta1/tx.json";
import * as _744 from "./feegrant/v1beta1/tx.toJSON";
import * as _745 from "./feegrant/v1beta1/tx.fromJSON";
import * as _746 from "./feegrant/v1beta1/tx.encoded";
import * as _747 from "./feegrant/v1beta1/tx.aminos";
import * as _748 from "./feegrant/v1beta1/tx.registry";
import * as _749 from "./feegrant/v1beta1/tx";
import * as _750 from "./genutil/v1beta1/genesis";
import * as _751 from "./gov/v1/genesis";
import * as _752 from "./gov/v1/gov";
import * as _753 from "./gov/v1/query";
import * as _754 from "./gov/v1/tx";
import * as _755 from "./gov/v1/tx.messages";
import * as _756 from "./gov/v1/tx.json";
import * as _757 from "./gov/v1/tx.toJSON";
import * as _758 from "./gov/v1/tx.fromJSON";
import * as _759 from "./gov/v1/tx.encoded";
import * as _760 from "./gov/v1/tx.aminos";
import * as _761 from "./gov/v1/tx.registry";
import * as _762 from "./gov/v1/tx";
import * as _763 from "./gov/v1beta1/genesis";
import * as _764 from "./gov/v1beta1/gov";
import * as _765 from "./gov/v1beta1/query";
import * as _766 from "./gov/v1beta1/tx";
import * as _767 from "./gov/v1beta1/tx.messages";
import * as _768 from "./gov/v1beta1/tx.json";
import * as _769 from "./gov/v1beta1/tx.toJSON";
import * as _770 from "./gov/v1beta1/tx.fromJSON";
import * as _771 from "./gov/v1beta1/tx.encoded";
import * as _772 from "./gov/v1beta1/tx.aminos";
import * as _773 from "./gov/v1beta1/tx.registry";
import * as _774 from "./gov/v1beta1/tx";
import * as _775 from "./group/v1/events";
import * as _776 from "./group/v1/genesis";
import * as _777 from "./group/v1/query";
import * as _778 from "./group/v1/tx";
import * as _779 from "./group/v1/tx.messages";
import * as _780 from "./group/v1/tx.json";
import * as _781 from "./group/v1/tx.toJSON";
import * as _782 from "./group/v1/tx.fromJSON";
import * as _783 from "./group/v1/tx.encoded";
import * as _784 from "./group/v1/tx.aminos";
import * as _785 from "./group/v1/tx.registry";
import * as _786 from "./group/v1/tx";
import * as _787 from "./group/v1/types";
import * as _788 from "./mint/v1beta1/genesis";
import * as _789 from "./mint/v1beta1/mint";
import * as _790 from "./mint/v1beta1/query";
import * as _791 from "./msg/v1/msg";
import * as _792 from "./nft/v1beta1/event";
import * as _793 from "./nft/v1beta1/genesis";
import * as _794 from "./nft/v1beta1/nft";
import * as _795 from "./nft/v1beta1/query";
import * as _796 from "./nft/v1beta1/tx";
import * as _797 from "./nft/v1beta1/tx.messages";
import * as _798 from "./nft/v1beta1/tx.json";
import * as _799 from "./nft/v1beta1/tx.toJSON";
import * as _800 from "./nft/v1beta1/tx.fromJSON";
import * as _801 from "./nft/v1beta1/tx.encoded";
import * as _802 from "./nft/v1beta1/tx.aminos";
import * as _803 from "./nft/v1beta1/tx.registry";
import * as _804 from "./nft/v1beta1/tx";
import * as _805 from "./orm/v1/orm";
import * as _806 from "./orm/v1alpha1/schema";
import * as _807 from "./params/v1beta1/params";
import * as _808 from "./params/v1beta1/query";
import * as _809 from "./slashing/v1beta1/genesis";
import * as _810 from "./slashing/v1beta1/query";
import * as _811 from "./slashing/v1beta1/slashing";
import * as _812 from "./slashing/v1beta1/tx";
import * as _813 from "./slashing/v1beta1/tx.messages";
import * as _814 from "./slashing/v1beta1/tx.json";
import * as _815 from "./slashing/v1beta1/tx.toJSON";
import * as _816 from "./slashing/v1beta1/tx.fromJSON";
import * as _817 from "./slashing/v1beta1/tx.encoded";
import * as _818 from "./slashing/v1beta1/tx.aminos";
import * as _819 from "./slashing/v1beta1/tx.registry";
import * as _820 from "./slashing/v1beta1/tx";
import * as _821 from "./staking/v1beta1/authz";
import * as _822 from "./staking/v1beta1/genesis";
import * as _823 from "./staking/v1beta1/query";
import * as _824 from "./staking/v1beta1/staking";
import * as _825 from "./staking/v1beta1/tx";
import * as _826 from "./staking/v1beta1/tx.messages";
import * as _827 from "./staking/v1beta1/tx.json";
import * as _828 from "./staking/v1beta1/tx.toJSON";
import * as _829 from "./staking/v1beta1/tx.fromJSON";
import * as _830 from "./staking/v1beta1/tx.encoded";
import * as _831 from "./staking/v1beta1/tx.aminos";
import * as _832 from "./staking/v1beta1/tx.registry";
import * as _833 from "./staking/v1beta1/tx";
import * as _834 from "./tx/signing/v1beta1/signing";
import * as _835 from "./tx/v1beta1/service";
import * as _836 from "./tx/v1beta1/tx";
import * as _837 from "./upgrade/v1beta1/query";
import * as _838 from "./upgrade/v1beta1/tx";
import * as _839 from "./upgrade/v1beta1/tx.messages";
import * as _840 from "./upgrade/v1beta1/tx.json";
import * as _841 from "./upgrade/v1beta1/tx.toJSON";
import * as _842 from "./upgrade/v1beta1/tx.fromJSON";
import * as _843 from "./upgrade/v1beta1/tx.encoded";
import * as _844 from "./upgrade/v1beta1/tx.aminos";
import * as _845 from "./upgrade/v1beta1/tx.registry";
import * as _846 from "./upgrade/v1beta1/tx";
import * as _847 from "./upgrade/v1beta1/upgrade";
import * as _848 from "./vesting/v1beta1/tx";
import * as _849 from "./vesting/v1beta1/tx.messages";
import * as _850 from "./vesting/v1beta1/tx.json";
import * as _851 from "./vesting/v1beta1/tx.toJSON";
import * as _852 from "./vesting/v1beta1/tx.fromJSON";
import * as _853 from "./vesting/v1beta1/tx.encoded";
import * as _854 from "./vesting/v1beta1/tx.aminos";
import * as _855 from "./vesting/v1beta1/tx.registry";
import * as _856 from "./vesting/v1beta1/tx";
import * as _857 from "./vesting/v1beta1/vesting";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._654,
      ..._655,
      ..._656
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._657,
      ..._658,
      ..._659
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._660,
      ..._661,
      ..._662,
      ..._663,
      ..._664,
      ..._665,
      ..._666,
      ..._667,
      ..._668,
      ..._669,
      ..._670,
      ..._671,
      ..._672
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._673,
      ..._674,
      ..._675,
      ..._676,
      ..._677,
      ..._678,
      ..._679,
      ..._680,
      ..._681,
      ..._682,
      ..._683,
      ..._684,
      ..._685
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._686
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._687
      };
    }
    export namespace query {
      export const v1beta1 = { ..._688
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._689
      };
      export const v2alpha1 = { ..._690
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._691
      };
    }
    export namespace store {
      export const v1beta1 = { ..._692,
        ..._693
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._694
      };
    }
    export const v1beta1 = { ..._695
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._696,
      ..._697
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._698,
      ..._699,
      ..._700,
      ..._701,
      ..._702,
      ..._703,
      ..._704,
      ..._705,
      ..._706,
      ..._707
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._708
    };
    export namespace hd {
      export const v1 = { ..._709
      };
    }
    export namespace keyring {
      export const v1 = { ..._710
      };
    }
    export const multisig = { ..._711
    };
    export const secp256k1 = { ..._712
    };
    export const secp256r1 = { ..._713
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._714,
      ..._715,
      ..._716,
      ..._717,
      ..._718,
      ..._719,
      ..._720,
      ..._721,
      ..._722,
      ..._723,
      ..._724,
      ..._725
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._726,
      ..._727,
      ..._728,
      ..._729,
      ..._730,
      ..._731,
      ..._732,
      ..._733,
      ..._734,
      ..._735,
      ..._736,
      ..._737
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._738,
      ..._739,
      ..._740,
      ..._741,
      ..._742,
      ..._743,
      ..._744,
      ..._745,
      ..._746,
      ..._747,
      ..._748,
      ..._749
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._750
    };
  }
  export namespace gov {
    export const v1 = { ..._751,
      ..._752,
      ..._753,
      ..._754,
      ..._755,
      ..._756,
      ..._757,
      ..._758,
      ..._759,
      ..._760,
      ..._761,
      ..._762
    };
    export const v1beta1 = { ..._763,
      ..._764,
      ..._765,
      ..._766,
      ..._767,
      ..._768,
      ..._769,
      ..._770,
      ..._771,
      ..._772,
      ..._773,
      ..._774
    };
  }
  export namespace group {
    export const v1 = { ..._775,
      ..._776,
      ..._777,
      ..._778,
      ..._779,
      ..._780,
      ..._781,
      ..._782,
      ..._783,
      ..._784,
      ..._785,
      ..._786,
      ..._787
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._788,
      ..._789,
      ..._790
    };
  }
  export namespace msg {
    export const v1 = { ..._791
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._792,
      ..._793,
      ..._794,
      ..._795,
      ..._796,
      ..._797,
      ..._798,
      ..._799,
      ..._800,
      ..._801,
      ..._802,
      ..._803,
      ..._804
    };
  }
  export namespace orm {
    export const v1 = { ..._805
    };
    export const v1alpha1 = { ..._806
    };
  }
  export namespace params {
    export const v1beta1 = { ..._807,
      ..._808
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._809,
      ..._810,
      ..._811,
      ..._812,
      ..._813,
      ..._814,
      ..._815,
      ..._816,
      ..._817,
      ..._818,
      ..._819,
      ..._820
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._821,
      ..._822,
      ..._823,
      ..._824,
      ..._825,
      ..._826,
      ..._827,
      ..._828,
      ..._829,
      ..._830,
      ..._831,
      ..._832,
      ..._833
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._834
      };
    }
    export const v1beta1 = { ..._835,
      ..._836
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._837,
      ..._838,
      ..._839,
      ..._840,
      ..._841,
      ..._842,
      ..._843,
      ..._844,
      ..._845,
      ..._846,
      ..._847
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._848,
      ..._849,
      ..._850,
      ..._851,
      ..._852,
      ..._853,
      ..._854,
      ..._855,
      ..._856,
      ..._857
    };
  }
}