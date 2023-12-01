import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  lockTokens(request: BroadcastTxReq<MsgLockTokens>): Promise<BroadcastTxRes<MsgLockTokensResponse>>;
  /** BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll(request: BroadcastTxReq<MsgBeginUnlockingAll>): Promise<BroadcastTxRes<MsgBeginUnlockingAllResponse>>;
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking(request: BroadcastTxReq<MsgBeginUnlocking>): Promise<BroadcastTxRes<MsgBeginUnlockingResponse>>;
  /** MsgEditLockup edits the existing lockups by lock ID */
  extendLockup(request: BroadcastTxReq<MsgExtendLockup>): Promise<BroadcastTxRes<MsgExtendLockupResponse>>;
  forceUnlock(request: BroadcastTxReq<MsgForceUnlock>): Promise<BroadcastTxRes<MsgForceUnlockResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* LockTokens lock tokens */
  lockTokens = async (request: BroadcastTxReq<MsgLockTokens>): Promise<BroadcastTxRes<MsgLockTokensResponse>> => {
    const data = [{
      typeUrl: MsgLockTokens.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgLockTokensResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll = async (request: BroadcastTxReq<MsgBeginUnlockingAll>): Promise<BroadcastTxRes<MsgBeginUnlockingAllResponse>> => {
    const data = [{
      typeUrl: MsgBeginUnlockingAll.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgBeginUnlockingAllResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking = async (request: BroadcastTxReq<MsgBeginUnlocking>): Promise<BroadcastTxRes<MsgBeginUnlockingResponse>> => {
    const data = [{
      typeUrl: MsgBeginUnlocking.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgBeginUnlockingResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* MsgEditLockup edits the existing lockups by lock ID */
  extendLockup = async (request: BroadcastTxReq<MsgExtendLockup>): Promise<BroadcastTxRes<MsgExtendLockupResponse>> => {
    const data = [{
      typeUrl: MsgExtendLockup.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgExtendLockupResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ForceUnlock */
  forceUnlock = async (request: BroadcastTxReq<MsgForceUnlock>): Promise<BroadcastTxRes<MsgForceUnlockResponse>> => {
    const data = [{
      typeUrl: MsgForceUnlock.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgForceUnlockResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}