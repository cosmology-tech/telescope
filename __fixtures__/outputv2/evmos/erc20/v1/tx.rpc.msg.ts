import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";

/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the native Cosmos coin denom
   * that is registered on the token mapping.
   */
  ConvertCoin(request: DeepPartial<MsgConvertCoin>, metadata?: grpc.Metadata): Promise<MsgConvertCoinResponse>;

  /**
   * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
   * contract that is registered on the token mapping.
   */
  ConvertERC20(request: DeepPartial<MsgConvertERC20>, metadata?: grpc.Metadata): Promise<MsgConvertERC20Response>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.convertCoin = this.convertCoin.bind(this);
    this.convertERC20 = this.convertERC20.bind(this);
  }

  convertCoin(request: DeepPartial<MsgConvertCoin>, metadata?: grpc.Metadata): Promise<MsgConvertCoinResponse> {
    return this.rpc.unary(MsgConvertCoin, MsgConvertCoin.fromPartial(request), metadata);
  }

  convertERC20(request: DeepPartial<MsgConvertERC20>, metadata?: grpc.Metadata): Promise<MsgConvertERC20Response> {
    return this.rpc.unary(MsgConvertERC20, MsgConvertERC20.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "evmos.erc20.v1.Msg"
};
export const MsgConvertCoinDesc: UnaryMethodDefinitionish = {
  methodName: "ConvertCoin",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConvertCoin.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgConvertCoinResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgConvertERC20Desc: UnaryMethodDefinitionish = {
  methodName: "ConvertERC20",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgConvertERC20.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgConvertERC20Response.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};