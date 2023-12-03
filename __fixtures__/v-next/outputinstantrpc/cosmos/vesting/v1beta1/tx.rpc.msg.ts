import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  createVestingAccount(request: BroadcastTxReq<MsgCreateVestingAccount>): Promise<BroadcastTxRes<MsgCreateVestingAccountResponse>>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   */
  createPermanentLockedAccount(request: BroadcastTxReq<MsgCreatePermanentLockedAccount>): Promise<BroadcastTxRes<MsgCreatePermanentLockedAccountResponse>>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  createPeriodicVestingAccount(request: BroadcastTxReq<MsgCreatePeriodicVestingAccount>): Promise<BroadcastTxRes<MsgCreatePeriodicVestingAccountResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateVestingAccount defines a method that enables creating a vesting
   account. */
  createVestingAccount = async (request: BroadcastTxReq<MsgCreateVestingAccount>): Promise<BroadcastTxRes<MsgCreateVestingAccountResponse>> => {
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
  createPermanentLockedAccount = async (request: BroadcastTxReq<MsgCreatePermanentLockedAccount>): Promise<BroadcastTxRes<MsgCreatePermanentLockedAccountResponse>> => {
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
  createPeriodicVestingAccount = async (request: BroadcastTxReq<MsgCreatePeriodicVestingAccount>): Promise<BroadcastTxRes<MsgCreatePeriodicVestingAccountResponse>> => {
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
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};