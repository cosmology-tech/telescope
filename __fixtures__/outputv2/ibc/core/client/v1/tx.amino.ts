import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { MsgCreateClient, MsgCreateClientAmino, MsgCreateClientSDKType, MsgUpdateClient, MsgUpdateClientAmino, MsgUpdateClientSDKType, MsgUpgradeClient, MsgUpgradeClientAmino, MsgUpgradeClientSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourAmino, MsgSubmitMisbehaviourSDKType } from "./tx";
export const AminoConverter = {
  "/ibc.core.client.v1.MsgCreateClient": {
    aminoType: "cosmos-sdk/MsgCreateClient",
    toAmino: MsgCreateClient.toAmino,
    fromAmino: MsgCreateClient.fromAmino
  },
  "/ibc.core.client.v1.MsgUpdateClient": {
    aminoType: "cosmos-sdk/MsgUpdateClient",
    toAmino: MsgUpdateClient.toAmino,
    fromAmino: MsgUpdateClient.fromAmino
  },
  "/ibc.core.client.v1.MsgUpgradeClient": {
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    toAmino: MsgUpgradeClient.toAmino,
    fromAmino: MsgUpgradeClient.fromAmino
  },
  "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
    toAmino: MsgSubmitMisbehaviour.toAmino,
    fromAmino: MsgSubmitMisbehaviour.fromAmino
  }
};