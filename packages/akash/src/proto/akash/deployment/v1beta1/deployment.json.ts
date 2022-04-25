import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment, DeploymentID, Deployment, DeploymentFilters, MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, Msg, Rpc } from "./deployment";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec, MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
export const json = {
  createDeployment(value: MsgCreateDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value
    };
  },

  depositDeployment(value: MsgDepositDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
      value
    };
  },

  updateDeployment(value: MsgUpdateDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
      value
    };
  },

  closeDeployment(value: MsgCloseDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
      value
    };
  },

  closeGroup(value: MsgCloseGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
      value
    };
  },

  pauseGroup(value: MsgPauseGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
      value
    };
  },

  startGroup(value: MsgStartGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
      value
    };
  }

};