import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceAmino, BasicAllowanceAminoType, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceAmino, PeriodicAllowanceAminoType, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceAmino, AllowedMsgAllowanceAminoType, AllowedMsgAllowanceSDKType } from "./feegrant";
import { MsgGrantAllowance, MsgGrantAllowanceAmino, MsgGrantAllowanceAminoType, MsgGrantAllowanceSDKType, MsgRevokeAllowance, MsgRevokeAllowanceAmino, MsgRevokeAllowanceAminoType, MsgRevokeAllowanceSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    toAmino: MsgGrantAllowance.toAmino,
    fromAmino: MsgGrantAllowance.fromAmino
  },
  "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    toAmino: MsgRevokeAllowance.toAmino,
    fromAmino: MsgRevokeAllowance.fromAmino
  }
};