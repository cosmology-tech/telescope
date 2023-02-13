import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";

/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  createDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse>;
  mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse>;
  burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse>;
  changeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse>;
  setDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
    this.setDenomMetadata = this.setDenomMetadata.bind(this);
  }

  createDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse> {
    return this.rpc.unary(MsgCreateDenomDesc, MsgCreateDenom.fromPartial(request), metadata);
  }

  mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse> {
    return this.rpc.unary(MsgMintDesc, MsgMint.fromPartial(request), metadata);
  }

  burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse> {
    return this.rpc.unary(MsgBurnDesc, MsgBurn.fromPartial(request), metadata);
  }

  changeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse> {
    return this.rpc.unary(MsgChangeAdminDesc, MsgChangeAdmin.fromPartial(request), metadata);
  }

  setDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse> {
    return this.rpc.unary(MsgSetDenomMetadataDesc, MsgSetDenomMetadata.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "osmosis.tokenfactory.v1beta1.Msg"
};
export const MsgCreateDenomDesc: UnaryMethodDefinitionish = {
  methodName: "CreateDenom",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateDenom.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateDenomResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgMintDesc: UnaryMethodDefinitionish = {
  methodName: "Mint",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgMint.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgMintResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgBurnDesc: UnaryMethodDefinitionish = {
  methodName: "Burn",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgBurn.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgBurnResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgChangeAdminDesc: UnaryMethodDefinitionish = {
  methodName: "ChangeAdmin",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgChangeAdmin.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgChangeAdminResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgSetDenomMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "SetDenomMetadata",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSetDenomMetadata.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSetDenomMetadataResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined);
}