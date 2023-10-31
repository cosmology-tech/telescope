import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "akash.deployment.v1beta1";
/**
 * DepositDeploymentAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 */
export interface DepositDeploymentAuthorization {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spendLimit: Coin;
}
export interface DepositDeploymentAuthorizationProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization";
  value: Uint8Array;
}
function createBaseDepositDeploymentAuthorization(): DepositDeploymentAuthorization {
  return {
    spendLimit: Coin.fromPartial({}),
  };
}

export const DepositDeploymentAuthorization = {
  typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
  is(o: unknown): o is DepositDeploymentAuthorization {
    const obj = o as DepositDeploymentAuthorization;
    return obj && Coin.is(obj.spendLimit);
  },
  encode(
    message: DepositDeploymentAuthorization,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): DepositDeploymentAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseDepositDeploymentAuthorization();
    if (isSet(object.spendLimit))
      obj.spendLimit = Coin.fromJSON(object.spendLimit);
    return obj;
  },
  toJSON(message: DepositDeploymentAuthorization): unknown {
    const obj: any = {};
    message.spendLimit !== undefined &&
      (obj.spendLimit = message.spendLimit
        ? Coin.toJSON(message.spendLimit)
        : undefined);
    return obj;
  },
  fromPartial(
    object: DeepPartial<DepositDeploymentAuthorization>
  ): DepositDeploymentAuthorization {
    const message = createBaseDepositDeploymentAuthorization();
    if (object.spendLimit !== undefined && object.spendLimit !== null) {
      message.spendLimit = Coin.fromPartial(object.spendLimit);
    }
    return message;
  },
  fromProtoMsg(
    message: DepositDeploymentAuthorizationProtoMsg
  ): DepositDeploymentAuthorization {
    return DepositDeploymentAuthorization.decode(message.value);
  },
  toProto(message: DepositDeploymentAuthorization): Uint8Array {
    return DepositDeploymentAuthorization.encode(message).finish();
  },
  toProtoMsg(
    message: DepositDeploymentAuthorization
  ): DepositDeploymentAuthorizationProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.DepositDeploymentAuthorization",
      value: DepositDeploymentAuthorization.encode(message).finish(),
    };
  },
};

GlobalDecoderRegistry.register(
  DepositDeploymentAuthorization.typeUrl,
  DepositDeploymentAuthorization
);
