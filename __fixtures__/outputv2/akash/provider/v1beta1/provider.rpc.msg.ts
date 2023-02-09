import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";

/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  CreateProvider(request: DeepPartial<MsgCreateProvider>, metadata?: grpc.Metadata): Promise<MsgCreateProviderResponse>;

  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  UpdateProvider(request: DeepPartial<MsgUpdateProvider>, metadata?: grpc.Metadata): Promise<MsgUpdateProviderResponse>;

  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  DeleteProvider(request: DeepPartial<MsgDeleteProvider>, metadata?: grpc.Metadata): Promise<MsgDeleteProviderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createProvider = this.createProvider.bind(this);
    this.updateProvider = this.updateProvider.bind(this);
    this.deleteProvider = this.deleteProvider.bind(this);
  }

  createProvider(request: DeepPartial<MsgCreateProvider>, metadata?: grpc.Metadata): Promise<MsgCreateProviderResponse> {
    return this.rpc.unary(MsgCreateProvider, MsgCreateProvider.fromPartial(request), metadata);
  }

  updateProvider(request: DeepPartial<MsgUpdateProvider>, metadata?: grpc.Metadata): Promise<MsgUpdateProviderResponse> {
    return this.rpc.unary(MsgUpdateProvider, MsgUpdateProvider.fromPartial(request), metadata);
  }

  deleteProvider(request: DeepPartial<MsgDeleteProvider>, metadata?: grpc.Metadata): Promise<MsgDeleteProviderResponse> {
    return this.rpc.unary(MsgDeleteProvider, MsgDeleteProvider.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "akash.provider.v1beta1.Msg"
};
export const MsgCreateProviderDesc: UnaryMethodDefinitionish = {
  methodName: "CreateProvider",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateProvider.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateProviderResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgUpdateProviderDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateProvider",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateProvider.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgUpdateProviderResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgDeleteProviderDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteProvider",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDeleteProvider.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgDeleteProviderResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};