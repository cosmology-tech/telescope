import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  createVestingAccount(request: BroadcastTxRequest<MsgCreateVestingAccount>): Promise<BroadcastTxResponse<MsgCreateVestingAccountResponse>>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   */
  createPermanentLockedAccount(request: BroadcastTxRequest<MsgCreatePermanentLockedAccount>): Promise<BroadcastTxResponse<MsgCreatePermanentLockedAccountResponse>>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  createPeriodicVestingAccount(request: BroadcastTxRequest<MsgCreatePeriodicVestingAccount>): Promise<BroadcastTxResponse<MsgCreatePeriodicVestingAccountResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateVestingAccount defines a method that enables creating a vesting
   account. */
  createVestingAccount = async (request: BroadcastTxRequest<MsgCreateVestingAccount>): Promise<BroadcastTxResponse<MsgCreateVestingAccountResponse>> => {
    const data = [{
      typeUrl: MsgCreateVestingAccount.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateVestingAccountResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CreatePermanentLockedAccount defines a method that enables creating a permanent
   locked account. */
  createPermanentLockedAccount = async (request: BroadcastTxRequest<MsgCreatePermanentLockedAccount>): Promise<BroadcastTxResponse<MsgCreatePermanentLockedAccountResponse>> => {
    const data = [{
      typeUrl: MsgCreatePermanentLockedAccount.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreatePermanentLockedAccountResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CreatePeriodicVestingAccount defines a method that enables creating a
   periodic vesting account. */
  createPeriodicVestingAccount = async (request: BroadcastTxRequest<MsgCreatePeriodicVestingAccount>): Promise<BroadcastTxResponse<MsgCreatePeriodicVestingAccountResponse>> => {
    const data = [{
      typeUrl: MsgCreatePeriodicVestingAccount.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreatePeriodicVestingAccountResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}