import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment, DeploymentID, Deployment, DeploymentFilters, MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, Msg, Rpc } from "./deployment";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec, MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
export const fromJSON = {
  createDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value: MsgCreateDeployment.fromJSON(value)
    };
  },

  depositDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
      value: MsgDepositDeployment.fromJSON(value)
    };
  },

  updateDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
      value: MsgUpdateDeployment.fromJSON(value)
    };
  },

  closeDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
      value: MsgCloseDeployment.fromJSON(value)
    };
  },

  closeGroup(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
      value: MsgCloseGroup.fromJSON(value)
    };
  },

  pauseGroup(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
      value: MsgPauseGroup.fromJSON(value)
    };
  },

  startGroup(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
      value: MsgStartGroup.fromJSON(value)
    };
  }

};