import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment, DeploymentID, Deployment, DeploymentFilters, MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, Msg, Rpc } from "./deployment";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec, MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
export const encoded = {
  createDeployment(value: MsgCreateDeployment) {
    return {
      type_url: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value: MsgCreateDeployment.encode(value).finish()
    };
  },

  depositDeployment(value: MsgDepositDeployment) {
    return {
      type_url: "/akash.deployment.v1beta1.MsgDepositDeployment",
      value: MsgDepositDeployment.encode(value).finish()
    };
  },

  updateDeployment(value: MsgUpdateDeployment) {
    return {
      type_url: "/akash.deployment.v1beta1.MsgUpdateDeployment",
      value: MsgUpdateDeployment.encode(value).finish()
    };
  },

  closeDeployment(value: MsgCloseDeployment) {
    return {
      type_url: "/akash.deployment.v1beta1.MsgCloseDeployment",
      value: MsgCloseDeployment.encode(value).finish()
    };
  },

  closeGroup(value: MsgCloseGroup) {
    return {
      type_url: "/akash.deployment.v1beta1.MsgCloseGroup",
      value: MsgCloseGroup.encode(value).finish()
    };
  },

  pauseGroup(value: MsgPauseGroup) {
    return {
      type_url: "/akash.deployment.v1beta1.MsgPauseGroup",
      value: MsgPauseGroup.encode(value).finish()
    };
  },

  startGroup(value: MsgStartGroup) {
    return {
      type_url: "/akash.deployment.v1beta1.MsgStartGroup",
      value: MsgStartGroup.encode(value).finish()
    };
  }

};