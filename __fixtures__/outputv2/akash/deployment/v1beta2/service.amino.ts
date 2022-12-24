/* eslint-disable */
import { DeploymentID, DeploymentIDAmino, DeploymentIDAminoType, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecAmino, GroupSpecAminoType, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDAmino, GroupIDAminoType, GroupIDSDKType } from "./groupid";
import { MsgCreateDeployment, MsgCreateDeploymentAmino, MsgCreateDeploymentAminoType, MsgCreateDeploymentSDKType, MsgDepositDeployment, MsgDepositDeploymentAmino, MsgDepositDeploymentAminoType, MsgDepositDeploymentSDKType, MsgUpdateDeployment, MsgUpdateDeploymentAmino, MsgUpdateDeploymentAminoType, MsgUpdateDeploymentSDKType, MsgCloseDeployment, MsgCloseDeploymentAmino, MsgCloseDeploymentAminoType, MsgCloseDeploymentSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupAmino, MsgCloseGroupAminoType, MsgCloseGroupSDKType, MsgPauseGroup, MsgPauseGroupAmino, MsgPauseGroupAminoType, MsgPauseGroupSDKType, MsgStartGroup, MsgStartGroupAmino, MsgStartGroupAminoType, MsgStartGroupSDKType } from "./groupmsg";
export const AminoConverter = {
  "/akash.deployment.v1beta2.MsgCreateDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgCreateDeployment",
    toAmino: MsgCreateDeployment.toAmino,
    fromAmino: MsgCreateDeployment.fromAmino
  },
  "/akash.deployment.v1beta2.MsgDepositDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgDepositDeployment",
    toAmino: MsgDepositDeployment.toAmino,
    fromAmino: MsgDepositDeployment.fromAmino
  },
  "/akash.deployment.v1beta2.MsgUpdateDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgUpdateDeployment",
    toAmino: MsgUpdateDeployment.toAmino,
    fromAmino: MsgUpdateDeployment.fromAmino
  },
  "/akash.deployment.v1beta2.MsgCloseDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgCloseDeployment",
    toAmino: MsgCloseDeployment.toAmino,
    fromAmino: MsgCloseDeployment.fromAmino
  },
  "/akash.deployment.v1beta2.MsgCloseGroup": {
    aminoType: "/akash.deployment.v1beta2.MsgCloseGroup",
    toAmino: MsgCloseGroup.toAmino,
    fromAmino: MsgCloseGroup.fromAmino
  },
  "/akash.deployment.v1beta2.MsgPauseGroup": {
    aminoType: "/akash.deployment.v1beta2.MsgPauseGroup",
    toAmino: MsgPauseGroup.toAmino,
    fromAmino: MsgPauseGroup.fromAmino
  },
  "/akash.deployment.v1beta2.MsgStartGroup": {
    aminoType: "/akash.deployment.v1beta2.MsgStartGroup",
    toAmino: MsgStartGroup.toAmino,
    fromAmino: MsgStartGroup.fromAmino
  }
};