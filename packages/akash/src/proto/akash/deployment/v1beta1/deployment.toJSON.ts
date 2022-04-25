import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment, DeploymentID, Deployment, DeploymentFilters, MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, Msg, Rpc } from "./deployment";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec, MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
export const toJSON = {
  createDeployment(value: MsgCreateDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value: MsgCreateDeployment.toJSON(value)
    };
  },

  depositDeployment(value: MsgDepositDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
      value: MsgDepositDeployment.toJSON(value)
    };
  },

  updateDeployment(value: MsgUpdateDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
      value: MsgUpdateDeployment.toJSON(value)
    };
  },

  closeDeployment(value: MsgCloseDeployment) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
      value: MsgCloseDeployment.toJSON(value)
    };
  },

  closeGroup(value: MsgCloseGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
      value: MsgCloseGroup.toJSON(value)
    };
  },

  pauseGroup(value: MsgPauseGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
      value: MsgPauseGroup.toJSON(value)
    };
  },

  startGroup(value: MsgStartGroup) {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
      value: MsgStartGroup.toJSON(value)
    };
  }

};