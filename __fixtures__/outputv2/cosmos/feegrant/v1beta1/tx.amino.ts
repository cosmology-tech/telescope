import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceAmino, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceAmino, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceAmino, AllowedMsgAllowanceSDKType } from "./feegrant";
import { MsgGrantAllowance, MsgGrantAllowanceAmino, MsgGrantAllowanceSDKType, MsgRevokeAllowance, MsgRevokeAllowanceAmino, MsgRevokeAllowanceSDKType } from "./tx";
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