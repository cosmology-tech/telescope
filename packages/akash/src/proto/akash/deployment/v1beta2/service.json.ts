import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
export const json = {
  createDeployment(value: MsgCreateDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment",
      value
    };
  },

  depositDeployment(value: MsgDepositDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment",
      value
    };
  },

  updateDeployment(value: MsgUpdateDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment",
      value
    };
  },

  closeDeployment(value: MsgCloseDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment",
      value
    };
  },

  closeGroup(value: MsgCloseGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
      value
    };
  },

  pauseGroup(value: MsgPauseGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
      value
    };
  },

  startGroup(value: MsgStartGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
      value
    };
  }

};