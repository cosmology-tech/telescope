import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  lockTokens(request: BroadcastTxReq<MsgLockTokens>): Promise<DeliverTxResponse>;
  /** BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll(request: BroadcastTxReq<MsgBeginUnlockingAll>): Promise<DeliverTxResponse>;
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking(request: BroadcastTxReq<MsgBeginUnlocking>): Promise<DeliverTxResponse>;
  /** MsgEditLockup edits the existing lockups by lock ID */
  extendLockup(request: BroadcastTxReq<MsgExtendLockup>): Promise<DeliverTxResponse>;
  forceUnlock(request: BroadcastTxReq<MsgForceUnlock>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* LockTokens lock tokens */
  lockTokens = async (request: BroadcastTxReq<MsgLockTokens>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgLockTokens.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll = async (request: BroadcastTxReq<MsgBeginUnlockingAll>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBeginUnlockingAll.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking = async (request: BroadcastTxReq<MsgBeginUnlocking>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBeginUnlocking.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* MsgEditLockup edits the existing lockups by lock ID */
  extendLockup = async (request: BroadcastTxReq<MsgExtendLockup>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExtendLockup.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ForceUnlock */
  forceUnlock = async (request: BroadcastTxReq<MsgForceUnlock>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgForceUnlock.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};