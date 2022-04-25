import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
export const fromJSON = {
  createDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
      value: MsgCreateDeployment.fromJSON(value)
    };
  },

  depositDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
      value: MsgDepositDeployment.fromJSON(value)
    };
  },

  updateDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
      value: MsgUpdateDeployment.fromJSON(value)
    };
  },

  closeDeployment(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
      value: MsgCloseDeployment.fromJSON(value)
    };
  },

  closeGroup(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
      value: MsgCloseGroup.fromJSON(value)
    };
  },

  pauseGroup(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
      value: MsgPauseGroup.fromJSON(value)
    };
  },

  startGroup(value: any) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
      value: MsgStartGroup.fromJSON(value)
    };
  }

};