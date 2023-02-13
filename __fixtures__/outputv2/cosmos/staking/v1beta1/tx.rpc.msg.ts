import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { UnaryMethodDefinitionishR, UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";

/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse>;

  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse>;

  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;

  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse>;

  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
  }

  createValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse> {
    return this.rpc.unary(MsgCreateValidatorDesc, MsgCreateValidator.fromPartial(request), metadata);
  }

  editValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse> {
    return this.rpc.unary(MsgEditValidatorDesc, MsgEditValidator.fromPartial(request), metadata);
  }

  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse> {
    return this.rpc.unary(MsgDelegateDesc, MsgDelegate.fromPartial(request), metadata);
  }

  beginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse> {
    return this.rpc.unary(MsgBeginRedelegateDesc, MsgBeginRedelegate.fromPartial(request), metadata);
  }

  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse> {
    return this.rpc.unary(MsgUndelegateDesc, MsgUndelegate.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "cosmos.staking.v1beta1.Msg"
};
export const MsgCreateValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "CreateValidator",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateValidator.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgCreateValidatorResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgEditValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "EditValidator",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgEditValidator.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgEditValidatorResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Delegate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDelegate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgDelegateResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgBeginRedelegateDesc: UnaryMethodDefinitionish = {
  methodName: "BeginRedelegate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgBeginRedelegate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgBeginRedelegateResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgUndelegateDesc: UnaryMethodDefinitionish = {
  methodName: "Undelegate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUndelegate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgUndelegateResponse.decode(data),

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