import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";

/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spendLimit?: Coin;
}

/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorizationSDKType {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spend_limit?: CoinSDKType;
}

function createBaseDepositDeploymentAuthorization(): DepositDeploymentAuthorization {
  return {
    spendLimit: undefined
  };
}

export const DepositDeploymentAuthorization = {
  encode(message: DepositDeploymentAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositDeploymentAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositDeploymentAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositDeploymentAuthorization {
    return {
      spendLimit: isSet(object.spendLimit) ? Coin.fromJSON(object.spendLimit) : undefined
    };
  },

  toJSON(message: DepositDeploymentAuthorization): unknown {
    const obj: any = {};
    message.spendLimit !== undefined && (obj.spendLimit = message.spendLimit ? Coin.toJSON(message.spendLimit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositDeploymentAuthorization>, I>>(object: I): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    return message;
  },

  fromSDK(object: DepositDeploymentAuthorizationSDKType): DepositDeploymentAuthorization {
    return {
      spendLimit: isSet(object.spend_limit) ? Coin.fromSDK(object.spend_limit) : undefined
    };
  },

  toSDK(message: DepositDeploymentAuthorization): DepositDeploymentAuthorizationSDKType {
    const obj: any = {};
    message.spendLimit !== undefined && (obj.spend_limit = message.spendLimit ? Coin.toSDK(message.spendLimit) : undefined);
    return obj;
  }

};