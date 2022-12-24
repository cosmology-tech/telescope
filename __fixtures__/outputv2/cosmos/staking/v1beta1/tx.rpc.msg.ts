import { Description, DescriptionAmino, DescriptionAminoType, DescriptionSDKType, CommissionRates, CommissionRatesAmino, CommissionRatesAminoType, CommissionRatesSDKType } from "./staking";
import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampAminoType, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateValidator, MsgCreateValidatorAmino, MsgCreateValidatorAminoType, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseAmino, MsgCreateValidatorResponseAminoType, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorAmino, MsgEditValidatorAminoType, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseAmino, MsgEditValidatorResponseAminoType, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateAmino, MsgDelegateAminoType, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseAmino, MsgDelegateResponseAminoType, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateAmino, MsgBeginRedelegateAminoType, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseAmino, MsgBeginRedelegateResponseAminoType, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateAmino, MsgUndelegateAminoType, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseAmino, MsgUndelegateResponseAminoType, MsgUndelegateResponseSDKType } from "./tx";

/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;

  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;

  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;

  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;

  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
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

  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then(data => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  }

  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then(data => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  }

  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }

  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse> {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then(data => MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
  }

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }

}