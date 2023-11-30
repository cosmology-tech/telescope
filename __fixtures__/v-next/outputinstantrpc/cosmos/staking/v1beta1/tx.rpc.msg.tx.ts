import {
  Description,
  DescriptionSDKType,
  CommissionRates,
  CommissionRatesSDKType,
} from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import {
  Timestamp,
  TimestampSDKType,
} from "../../../google/protobuf/timestamp";
import { Rpc, BroadcastTxRequest, BroadcastTxResponse } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import {
  MsgCreateValidator,
  MsgCreateValidatorSDKType,
  MsgCreateValidatorResponse,
  MsgCreateValidatorResponseSDKType,
  MsgEditValidator,
  MsgEditValidatorSDKType,
  MsgEditValidatorResponse,
  MsgEditValidatorResponseSDKType,
  MsgDelegate,
  MsgDelegateSDKType,
  MsgDelegateResponse,
  MsgDelegateResponseSDKType,
  MsgBeginRedelegate,
  MsgBeginRedelegateSDKType,
  MsgBeginRedelegateResponse,
  MsgBeginRedelegateResponseSDKType,
  MsgUndelegate,
  MsgUndelegateSDKType,
  MsgUndelegateResponse,
  MsgUndelegateResponseSDKType,
} from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(
    request: BroadcastTxRequest<MsgCreateValidator>
  ): Promise<BroadcastTxResponse<MsgCreateValidatorResponse>>;
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
  beginRedelegate(
    request: MsgBeginRedelegate
  ): Promise<MsgBeginRedelegateResponse>;
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
  }
  /* CreateValidator defines a method for creating a new validator. */
  createValidator = async (
    request: BroadcastTxRequest<MsgCreateValidator>
  ): Promise<BroadcastTxResponse<MsgCreateValidatorResponse>> => {
    const data = [
      {
        typeUrl: MsgCreateValidator.typeUrl,
        value: request.message,
      },
    ];
    const promise = this.rpc.signAndBroadcast!(
      request.signerAddress,
      data,
      request.fee,
      request.memo
    );

    return promise.then((data) => ({
      txResponse: data,
      response:
        data && data.msgResponses?.length
          ? MsgCreateValidatorResponse.decode(data.msgResponses[0].value)
          : undefined,
    }));
  };
  /* EditValidator defines a method for editing an existing validator. */
  editValidator = async (
    request: MsgEditValidator
  ): Promise<MsgEditValidatorResponse> => {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Msg",
      "EditValidator",
      data
    );
    return promise.then((data) =>
      MsgEditValidatorResponse.decode(new BinaryReader(data))
    );
  };
  /* Delegate defines a method for performing a delegation of coins
   from a delegator to a validator. */
  delegate = async (request: MsgDelegate): Promise<MsgDelegateResponse> => {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Msg",
      "Delegate",
      data
    );
    return promise.then((data) =>
      MsgDelegateResponse.decode(new BinaryReader(data))
    );
  };
  /* BeginRedelegate defines a method for performing a redelegation
   of coins from a delegator and source validator to a destination validator. */
  beginRedelegate = async (
    request: MsgBeginRedelegate
  ): Promise<MsgBeginRedelegateResponse> => {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Msg",
      "BeginRedelegate",
      data
    );
    return promise.then((data) =>
      MsgBeginRedelegateResponse.decode(new BinaryReader(data))
    );
  };
  /* Undelegate defines a method for performing an undelegation from a
   delegate and a validator. */
  undelegate = async (
    request: MsgUndelegate
  ): Promise<MsgUndelegateResponse> => {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.staking.v1beta1.Msg",
      "Undelegate",
      data
    );
    return promise.then((data) =>
      MsgUndelegateResponse.decode(new BinaryReader(data))
    );
  };
}
