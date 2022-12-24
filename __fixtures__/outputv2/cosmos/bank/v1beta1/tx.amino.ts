import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputAmino, InputAminoType, InputSDKType, Output, OutputAmino, OutputAminoType, OutputSDKType } from "./bank";
import { MsgSend, MsgSendAmino, MsgSendAminoType, MsgSendSDKType, MsgMultiSend, MsgMultiSendAmino, MsgMultiSendAminoType, MsgMultiSendSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.bank.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: MsgSend.toAmino,
    fromAmino: MsgSend.fromAmino
  },
  "/cosmos.bank.v1beta1.MsgMultiSend": {
    aminoType: "cosmos-sdk/MsgMultiSend",
    toAmino: MsgMultiSend.toAmino,
    fromAmino: MsgMultiSend.fromAmino
  }
};