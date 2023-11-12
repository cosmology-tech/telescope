import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta1";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  deploymentMinDeposit: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsAmino {
  deployment_min_deposit?: CoinAmino;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  deployment_min_deposit: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    deploymentMinDeposit: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/akash.deployment.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentMinDeposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.deploymentMinDeposit)) obj.deploymentMinDeposit = Coin.fromJSON(object.deploymentMinDeposit);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deploymentMinDeposit = message.deploymentMinDeposit ? Coin.toJSON(message.deploymentMinDeposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    if (object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null) {
      message.deploymentMinDeposit = Coin.fromPartial(object.deploymentMinDeposit);
    }
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      deploymentMinDeposit: object.deployment_min_deposit ? Coin.fromSDK(object.deployment_min_deposit) : undefined
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toSDK(message.deploymentMinDeposit) : undefined);
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      deploymentMinDeposit: object?.deployment_min_deposit ? Coin.fromAmino(object.deployment_min_deposit) : undefined
    };
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toAmino(message.deploymentMinDeposit, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};