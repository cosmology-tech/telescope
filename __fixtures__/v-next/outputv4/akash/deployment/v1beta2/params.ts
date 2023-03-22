import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";

/** Params defines the parameters for the x/deployment package */
export interface Params {
  deploymentMinDeposit?: Coin;
}

/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  deployment_min_deposit?: CoinSDKType;
}

function createBaseParams(): Params {
  return {
    deploymentMinDeposit: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deploymentMinDeposit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      deploymentMinDeposit: isSet(object.deploymentMinDeposit) ? Coin.fromJSON(object.deploymentMinDeposit) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deploymentMinDeposit = message.deploymentMinDeposit ? Coin.toJSON(message.deploymentMinDeposit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.deploymentMinDeposit = object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null ? Coin.fromPartial(object.deploymentMinDeposit) : undefined;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      deploymentMinDeposit: object.deployment_min_deposit ? Coin.fromSDK(object.deployment_min_deposit) : undefined
    };
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      deployment_min_deposit: isSet(object.deployment_min_deposit) ? Coin.fromSDKJSON(object.deployment_min_deposit) : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined && (obj.deployment_min_deposit = message.deploymentMinDeposit ? Coin.toSDK(message.deploymentMinDeposit) : undefined);
    return obj;
  }

};