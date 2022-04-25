import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment, DeploymentID, Deployment, DeploymentFilters, MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, Msg, Rpc } from "./deployment";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GroupSpec, MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta1/group";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.deployment.v1beta1.MsgCreateDeployment", MsgCreateDeployment], ["/akash.deployment.v1beta1.MsgDepositDeployment", MsgDepositDeployment], ["/akash.deployment.v1beta1.MsgUpdateDeployment", MsgUpdateDeployment], ["/akash.deployment.v1beta1.MsgCloseDeployment", MsgCloseDeployment], ["/akash.deployment.v1beta1.MsgCloseGroup", MsgCloseGroup], ["/akash.deployment.v1beta1.MsgPauseGroup", MsgPauseGroup], ["/akash.deployment.v1beta1.MsgStartGroup", MsgStartGroup]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};