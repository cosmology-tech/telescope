import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: BroadcastTxReq<MsgCreateValidator>): Promise<DeliverTxResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: BroadcastTxReq<MsgEditValidator>): Promise<DeliverTxResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: BroadcastTxReq<MsgDelegate>): Promise<DeliverTxResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: BroadcastTxReq<MsgBeginRedelegate>): Promise<DeliverTxResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: BroadcastTxReq<MsgUndelegate>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateValidator defines a method for creating a new validator. */
  createValidator = async (request: BroadcastTxReq<MsgCreateValidator>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateValidator.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* EditValidator defines a method for editing an existing validator. */
  editValidator = async (request: BroadcastTxReq<MsgEditValidator>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgEditValidator.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Delegate defines a method for performing a delegation of coins
   from a delegator to a validator. */
  delegate = async (request: BroadcastTxReq<MsgDelegate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDelegate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* BeginRedelegate defines a method for performing a redelegation
   of coins from a delegator and source validator to a destination validator. */
  beginRedelegate = async (request: BroadcastTxReq<MsgBeginRedelegate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBeginRedelegate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Undelegate defines a method for performing an undelegation from a
   delegate and a validator. */
  undelegate = async (request: BroadcastTxReq<MsgUndelegate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUndelegate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};