import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.deployment.v1beta2.MsgCreateDeployment", MsgCreateDeployment], ["/akash.deployment.v1beta2.MsgDepositDeployment", MsgDepositDeployment], ["/akash.deployment.v1beta2.MsgUpdateDeployment", MsgUpdateDeployment], ["/akash.deployment.v1beta2.MsgCloseDeployment", MsgCloseDeployment], ["/akash.deployment.v1beta2.MsgCloseGroup", MsgCloseGroup], ["/akash.deployment.v1beta2.MsgPauseGroup", MsgPauseGroup], ["/akash.deployment.v1beta2.MsgStartGroup", MsgStartGroup]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};