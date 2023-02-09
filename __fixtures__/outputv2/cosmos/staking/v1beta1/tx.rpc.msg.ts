import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";

/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  CreateValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse>;

  /** EditValidator defines a method for editing an existing validator. */
  EditValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse>;

  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  Delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;

  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  BeginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse>;

  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  Undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
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
    return this.rpc.unary(MsgCreateValidator, MsgCreateValidator.fromPartial(request), metadata);
  }

  editValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse> {
    return this.rpc.unary(MsgEditValidator, MsgEditValidator.fromPartial(request), metadata);
  }

  delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse> {
    return this.rpc.unary(MsgDelegate, MsgDelegate.fromPartial(request), metadata);
  }

  beginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse> {
    return this.rpc.unary(MsgBeginRedelegate, MsgBeginRedelegate.fromPartial(request), metadata);
  }

  undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse> {
    return this.rpc.unary(MsgUndelegate, MsgUndelegate.fromPartial(request), metadata);
  }

}