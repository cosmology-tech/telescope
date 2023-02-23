import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgCreateDeploymentResponse, MsgCreateDeploymentResponseSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgDepositDeploymentResponse, MsgDepositDeploymentResponseSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgUpdateDeploymentResponse, MsgUpdateDeploymentResponseSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType, MsgCloseDeploymentResponse, MsgCloseDeploymentResponseSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgCloseGroupResponse, MsgCloseGroupResponseSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgPauseGroupResponse, MsgPauseGroupResponseSDKType, MsgStartGroup, MsgStartGroupSDKType, MsgStartGroupResponse, MsgStartGroupResponseSDKType } from "./groupmsg";

/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  CreateDeployment(request: DeepPartial<MsgCreateDeployment>, metadata?: grpc.Metadata): Promise<MsgCreateDeploymentResponse>;

  /** DepositDeployment deposits more funds into the deployment account */
  DepositDeployment(request: DeepPartial<MsgDepositDeployment>, metadata?: grpc.Metadata): Promise<MsgDepositDeploymentResponse>;

  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  UpdateDeployment(request: DeepPartial<MsgUpdateDeployment>, metadata?: grpc.Metadata): Promise<MsgUpdateDeploymentResponse>;

  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  CloseDeployment(request: DeepPartial<MsgCloseDeployment>, metadata?: grpc.Metadata): Promise<MsgCloseDeploymentResponse>;

  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  CloseGroup(request: DeepPartial<MsgCloseGroup>, metadata?: grpc.Metadata): Promise<MsgCloseGroupResponse>;

  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  PauseGroup(request: DeepPartial<MsgPauseGroup>, metadata?: grpc.Metadata): Promise<MsgPauseGroupResponse>;

  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  StartGroup(request: DeepPartial<MsgStartGroup>, metadata?: grpc.Metadata): Promise<MsgStartGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDeployment = this.createDeployment.bind(this);
    this.depositDeployment = this.depositDeployment.bind(this);
    this.updateDeployment = this.updateDeployment.bind(this);
    this.closeDeployment = this.closeDeployment.bind(this);
    this.closeGroup = this.closeGroup.bind(this);
    this.pauseGroup = this.pauseGroup.bind(this);
    this.startGroup = this.startGroup.bind(this);
  }

  createDeployment(request: DeepPartial<MsgCreateDeployment>, metadata?: grpc.Metadata): Promise<MsgCreateDeploymentResponse> {
    return this.rpc.unary(MsgCreateDeployment, MsgCreateDeployment.fromPartial(request), metadata);
  }

  depositDeployment(request: DeepPartial<MsgDepositDeployment>, metadata?: grpc.Metadata): Promise<MsgDepositDeploymentResponse> {
    return this.rpc.unary(MsgDepositDeployment, MsgDepositDeployment.fromPartial(request), metadata);
  }

  updateDeployment(request: DeepPartial<MsgUpdateDeployment>, metadata?: grpc.Metadata): Promise<MsgUpdateDeploymentResponse> {
    return this.rpc.unary(MsgUpdateDeployment, MsgUpdateDeployment.fromPartial(request), metadata);
  }

  closeDeployment(request: DeepPartial<MsgCloseDeployment>, metadata?: grpc.Metadata): Promise<MsgCloseDeploymentResponse> {
    return this.rpc.unary(MsgCloseDeployment, MsgCloseDeployment.fromPartial(request), metadata);
  }

  closeGroup(request: DeepPartial<MsgCloseGroup>, metadata?: grpc.Metadata): Promise<MsgCloseGroupResponse> {
    return this.rpc.unary(MsgCloseGroup, MsgCloseGroup.fromPartial(request), metadata);
  }

  pauseGroup(request: DeepPartial<MsgPauseGroup>, metadata?: grpc.Metadata): Promise<MsgPauseGroupResponse> {
    return this.rpc.unary(MsgPauseGroup, MsgPauseGroup.fromPartial(request), metadata);
  }

  startGroup(request: DeepPartial<MsgStartGroup>, metadata?: grpc.Metadata): Promise<MsgStartGroupResponse> {
    return this.rpc.unary(MsgStartGroup, MsgStartGroup.fromPartial(request), metadata);
  }

}