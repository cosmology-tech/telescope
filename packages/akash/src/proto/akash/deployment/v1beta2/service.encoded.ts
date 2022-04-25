import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
export const encoded = {
  createDeployment(value: MsgCreateDeployment) {
    return {
      type_url: "/akash.deployment.v1beta2.MsgCreateDeployment",
      value: MsgCreateDeployment.encode(value).finish()
    };
  },

  depositDeployment(value: MsgDepositDeployment) {
    return {
      type_url: "/akash.deployment.v1beta2.MsgDepositDeployment",
      value: MsgDepositDeployment.encode(value).finish()
    };
  },

  updateDeployment(value: MsgUpdateDeployment) {
    return {
      type_url: "/akash.deployment.v1beta2.MsgUpdateDeployment",
      value: MsgUpdateDeployment.encode(value).finish()
    };
  },

  closeDeployment(value: MsgCloseDeployment) {
    return {
      type_url: "/akash.deployment.v1beta2.MsgCloseDeployment",
      value: MsgCloseDeployment.encode(value).finish()
    };
  },

  closeGroup(value: MsgCloseGroup) {
    return {
      type_url: "/akash.deployment.v1beta2.MsgCloseGroup",
      value: MsgCloseGroup.encode(value).finish()
    };
  },

  pauseGroup(value: MsgPauseGroup) {
    return {
      type_url: "/akash.deployment.v1beta2.MsgPauseGroup",
      value: MsgPauseGroup.encode(value).finish()
    };
  },

  startGroup(value: MsgStartGroup) {
    return {
      type_url: "/akash.deployment.v1beta2.MsgStartGroup",
      value: MsgStartGroup.encode(value).finish()
    };
  }

};