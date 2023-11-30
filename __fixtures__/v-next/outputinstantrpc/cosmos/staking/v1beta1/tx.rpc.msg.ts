import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: BroadcastTxRequest<MsgCreateValidator>): Promise<BroadcastTxResponse<MsgCreateValidatorResponse>>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: BroadcastTxRequest<MsgEditValidator>): Promise<BroadcastTxResponse<MsgEditValidatorResponse>>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: BroadcastTxRequest<MsgDelegate>): Promise<BroadcastTxResponse<MsgDelegateResponse>>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: BroadcastTxRequest<MsgBeginRedelegate>): Promise<BroadcastTxResponse<MsgBeginRedelegateResponse>>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: BroadcastTxRequest<MsgUndelegate>): Promise<BroadcastTxResponse<MsgUndelegateResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateValidator defines a method for creating a new validator. */
  createValidator = async (request: BroadcastTxRequest<MsgCreateValidator>): Promise<BroadcastTxResponse<MsgCreateValidatorResponse>> => {
    const data = [{
      typeUrl: MsgCreateValidator.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateValidatorResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* EditValidator defines a method for editing an existing validator. */
  editValidator = async (request: BroadcastTxRequest<MsgEditValidator>): Promise<BroadcastTxResponse<MsgEditValidatorResponse>> => {
    const data = [{
      typeUrl: MsgEditValidator.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgEditValidatorResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Delegate defines a method for performing a delegation of coins
   from a delegator to a validator. */
  delegate = async (request: BroadcastTxRequest<MsgDelegate>): Promise<BroadcastTxResponse<MsgDelegateResponse>> => {
    const data = [{
      typeUrl: MsgDelegate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgDelegateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* BeginRedelegate defines a method for performing a redelegation
   of coins from a delegator and source validator to a destination validator. */
  beginRedelegate = async (request: BroadcastTxRequest<MsgBeginRedelegate>): Promise<BroadcastTxResponse<MsgBeginRedelegateResponse>> => {
    const data = [{
      typeUrl: MsgBeginRedelegate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgBeginRedelegateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Undelegate defines a method for performing an undelegation from a
   delegate and a validator. */
  undelegate = async (request: BroadcastTxRequest<MsgUndelegate>): Promise<BroadcastTxResponse<MsgUndelegateResponse>> => {
    const data = [{
      typeUrl: MsgUndelegate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUndelegateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}