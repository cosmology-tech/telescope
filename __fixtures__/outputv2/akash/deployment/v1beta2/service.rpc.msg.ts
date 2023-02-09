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
export const MsgDesc = {
  serviceName: "akash.deployment.v1beta2.Msg"
};
export const MsgCreateDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "CreateDeployment",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateDeployment.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateDeploymentResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgDepositDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "DepositDeployment",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDepositDeployment.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgDepositDeploymentResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgUpdateDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateDeployment",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateDeployment.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgUpdateDeploymentResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgCloseDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "CloseDeployment",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCloseDeployment.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCloseDeploymentResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgCloseGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CloseGroup",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCloseGroup.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCloseGroupResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgPauseGroupDesc: UnaryMethodDefinitionish = {
  methodName: "PauseGroup",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgPauseGroup.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgPauseGroupResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgStartGroupDesc: UnaryMethodDefinitionish = {
  methodName: "StartGroup",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgStartGroup.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgStartGroupResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};