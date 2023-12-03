import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: BroadcastTxReq<MsgCreateValidator>): Promise<BroadcastTxRes<MsgCreateValidatorResponse>>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: BroadcastTxReq<MsgEditValidator>): Promise<BroadcastTxRes<MsgEditValidatorResponse>>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: BroadcastTxReq<MsgDelegate>): Promise<BroadcastTxRes<MsgDelegateResponse>>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: BroadcastTxReq<MsgBeginRedelegate>): Promise<BroadcastTxRes<MsgBeginRedelegateResponse>>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: BroadcastTxReq<MsgUndelegate>): Promise<BroadcastTxRes<MsgUndelegateResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateValidator defines a method for creating a new validator. */
  createValidator = async (request: BroadcastTxReq<MsgCreateValidator>): Promise<BroadcastTxRes<MsgCreateValidatorResponse>> => {
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
  editValidator = async (request: BroadcastTxReq<MsgEditValidator>): Promise<BroadcastTxRes<MsgEditValidatorResponse>> => {
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
  delegate = async (request: BroadcastTxReq<MsgDelegate>): Promise<BroadcastTxRes<MsgDelegateResponse>> => {
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
  beginRedelegate = async (request: BroadcastTxReq<MsgBeginRedelegate>): Promise<BroadcastTxRes<MsgBeginRedelegateResponse>> => {
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
  undelegate = async (request: BroadcastTxReq<MsgUndelegate>): Promise<BroadcastTxRes<MsgUndelegateResponse>> => {
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
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};