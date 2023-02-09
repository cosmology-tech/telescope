import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";

/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  CreateClient(request: DeepPartial<MsgCreateClient>, metadata?: grpc.Metadata): Promise<MsgCreateClientResponse>;

  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  UpdateClient(request: DeepPartial<MsgUpdateClient>, metadata?: grpc.Metadata): Promise<MsgUpdateClientResponse>;

  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  UpgradeClient(request: DeepPartial<MsgUpgradeClient>, metadata?: grpc.Metadata): Promise<MsgUpgradeClientResponse>;

  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  SubmitMisbehaviour(request: DeepPartial<MsgSubmitMisbehaviour>, metadata?: grpc.Metadata): Promise<MsgSubmitMisbehaviourResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClient = this.createClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.upgradeClient = this.upgradeClient.bind(this);
    this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
  }

  createClient(request: DeepPartial<MsgCreateClient>, metadata?: grpc.Metadata): Promise<MsgCreateClientResponse> {
    return this.rpc.unary(MsgCreateClient, MsgCreateClient.fromPartial(request), metadata);
  }

  updateClient(request: DeepPartial<MsgUpdateClient>, metadata?: grpc.Metadata): Promise<MsgUpdateClientResponse> {
    return this.rpc.unary(MsgUpdateClient, MsgUpdateClient.fromPartial(request), metadata);
  }

  upgradeClient(request: DeepPartial<MsgUpgradeClient>, metadata?: grpc.Metadata): Promise<MsgUpgradeClientResponse> {
    return this.rpc.unary(MsgUpgradeClient, MsgUpgradeClient.fromPartial(request), metadata);
  }

  submitMisbehaviour(request: DeepPartial<MsgSubmitMisbehaviour>, metadata?: grpc.Metadata): Promise<MsgSubmitMisbehaviourResponse> {
    return this.rpc.unary(MsgSubmitMisbehaviour, MsgSubmitMisbehaviour.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "ibc.core.client.v1.Msg"
};
export const MsgCreateClientDesc: UnaryMethodDefinitionish = {
  methodName: "CreateClient",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateClient.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateClientResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgUpdateClientDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateClient",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateClient.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgUpdateClientResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgUpgradeClientDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradeClient",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpgradeClient.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgUpgradeClientResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgSubmitMisbehaviourDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitMisbehaviour",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSubmitMisbehaviour.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSubmitMisbehaviourResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};