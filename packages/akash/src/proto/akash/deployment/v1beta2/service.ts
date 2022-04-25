/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDeploymentResponse, MsgDepositDeploymentResponse, MsgUpdateDeploymentResponse, MsgCloseDeploymentResponse, MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "../../../akash/deployment/v1beta2/deploymentmsg";
import { MsgCloseGroupResponse, MsgPauseGroupResponse, MsgStartGroupResponse, MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "../../../akash/deployment/v1beta2/groupmsg";

/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
  /** DepositDeployment deposits more funds into the deployment account */

  DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */

  UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */

  CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */

  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */

  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */

  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDeployment = this.CreateDeployment.bind(this);
    this.DepositDeployment = this.DepositDeployment.bind(this);
    this.UpdateDeployment = this.UpdateDeployment.bind(this);
    this.CloseDeployment = this.CloseDeployment.bind(this);
    this.CloseGroup = this.CloseGroup.bind(this);
    this.PauseGroup = this.PauseGroup.bind(this);
    this.StartGroup = this.StartGroup.bind(this);
  }

  CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse> {
    const data = MsgCreateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CreateDeployment", data);
    return promise.then(data => MsgCreateDeploymentResponse.decode(new _m0.Reader(data)));
  }

  DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse> {
    const data = MsgDepositDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "DepositDeployment", data);
    return promise.then(data => MsgDepositDeploymentResponse.decode(new _m0.Reader(data)));
  }

  UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse> {
    const data = MsgUpdateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "UpdateDeployment", data);
    return promise.then(data => MsgUpdateDeploymentResponse.decode(new _m0.Reader(data)));
  }

  CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse> {
    const data = MsgCloseDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseDeployment", data);
    return promise.then(data => MsgCloseDeploymentResponse.decode(new _m0.Reader(data)));
  }

  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse> {
    const data = MsgCloseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "CloseGroup", data);
    return promise.then(data => MsgCloseGroupResponse.decode(new _m0.Reader(data)));
  }

  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse> {
    const data = MsgPauseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "PauseGroup", data);
    return promise.then(data => MsgPauseGroupResponse.decode(new _m0.Reader(data)));
  }

  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse> {
    const data = MsgStartGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Msg", "StartGroup", data);
    return promise.then(data => MsgStartGroupResponse.decode(new _m0.Reader(data)));
  }

}
interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}