import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  createVestingAccount(request: BroadcastTxReq<MsgCreateVestingAccount>): Promise<DeliverTxResponse>;
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   */
  createPermanentLockedAccount(request: BroadcastTxReq<MsgCreatePermanentLockedAccount>): Promise<DeliverTxResponse>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  createPeriodicVestingAccount(request: BroadcastTxReq<MsgCreatePeriodicVestingAccount>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateVestingAccount defines a method that enables creating a vesting
   account. */
  createVestingAccount = async (request: BroadcastTxReq<MsgCreateVestingAccount>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateVestingAccount.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CreatePermanentLockedAccount defines a method that enables creating a permanent
   locked account. */
  createPermanentLockedAccount = async (request: BroadcastTxReq<MsgCreatePermanentLockedAccount>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreatePermanentLockedAccount.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CreatePeriodicVestingAccount defines a method that enables creating a
   periodic vesting account. */
  createPeriodicVestingAccount = async (request: BroadcastTxReq<MsgCreatePeriodicVestingAccount>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreatePeriodicVestingAccount.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};