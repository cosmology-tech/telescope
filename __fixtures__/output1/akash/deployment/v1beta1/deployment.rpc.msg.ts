import { GroupSpec, GroupSpecSDKType, GroupID, GroupIDSDKType, MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./group";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deployment";

/** Msg defines the RPC service */
export interface Msg {
  createDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponseSDKType>;
  /*CreateDeployment defines a method to create new deployment given proper inputs.*/

  depositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponseSDKType>;
  /*DepositDeployment deposits more funds into the deployment account*/

  updateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponseSDKType>;
  /*UpdateDeployment defines a method to update a deployment given proper inputs.*/

  closeDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponseSDKType>;
  /*CloseDeployment defines a method to close a deployment given proper inputs.*/

  closeGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponseSDKType>;
  /*CloseGroup defines a method to close a group of a deployment given proper inputs.*/

  pauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponseSDKType>;
  /*PauseGroup defines a method to close a group of a deployment given proper inputs.*/

  startGroup(request: MsgStartGroup): Promise<MsgStartGroupResponseSDKType>;
  /*StartGroup defines a method to close a group of a deployment given proper inputs.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  createDeployment = async (request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponseSDKType> => {
    const data = MsgCreateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CreateDeployment", data);
    return promise.then(data => MsgCreateDeploymentResponse.decode(new _m0.Reader(data)));
  };
  depositDeployment = async (request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponseSDKType> => {
    const data = MsgDepositDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "DepositDeployment", data);
    return promise.then(data => MsgDepositDeploymentResponse.decode(new _m0.Reader(data)));
  };
  updateDeployment = async (request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponseSDKType> => {
    const data = MsgUpdateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "UpdateDeployment", data);
    return promise.then(data => MsgUpdateDeploymentResponse.decode(new _m0.Reader(data)));
  };
  closeDeployment = async (request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponseSDKType> => {
    const data = MsgCloseDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseDeployment", data);
    return promise.then(data => MsgCloseDeploymentResponse.decode(new _m0.Reader(data)));
  };
  closeGroup = async (request: MsgCloseGroup): Promise<MsgCloseGroupResponseSDKType> => {
    const data = MsgCloseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseGroup", data);
    return promise.then(data => MsgCloseGroupResponse.decode(new _m0.Reader(data)));
  };
  pauseGroup = async (request: MsgPauseGroup): Promise<MsgPauseGroupResponseSDKType> => {
    const data = MsgPauseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "PauseGroup", data);
    return promise.then(data => MsgPauseGroupResponse.decode(new _m0.Reader(data)));
  };
  startGroup = async (request: MsgStartGroup): Promise<MsgStartGroupResponseSDKType> => {
    const data = MsgStartGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "StartGroup", data);
    return promise.then(data => MsgStartGroupResponse.decode(new _m0.Reader(data)));
  };
}