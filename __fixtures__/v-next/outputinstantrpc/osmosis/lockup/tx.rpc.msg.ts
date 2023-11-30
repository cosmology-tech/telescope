import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  lockTokens(request: BroadcastTxRequest<MsgLockTokens>): Promise<BroadcastTxResponse<MsgLockTokensResponse>>;
  /** BeginUnlockingAll begin unlocking all tokens */
  beginUnlockingAll(request: BroadcastTxRequest<MsgBeginUnlockingAll>): Promise<BroadcastTxResponse<MsgBeginUnlockingAllResponse>>;
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  beginUnlocking(request: BroadcastTxRequest<MsgBeginUnlocking>): Promise<BroadcastTxResponse<MsgBeginUnlockingResponse>>;
  /** MsgEditLockup edits the existing lockups by lock ID */
  extendLockup(request: BroadcastTxRequest<MsgExtendLockup>): Promise<BroadcastTxResponse<MsgExtendLockupResponse>>;
  forceUnlock(request: BroadcastTxRequest<MsgForceUnlock>): Promise<BroadcastTxResponse<MsgForceUnlockResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* LockTokens lock tokens */
  lockTokens = async (request: BroadcastTxRequest<MsgLockTokens>): Promise<BroadcastTxResponse<MsgLockTokensResponse>> => {
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
  beginUnlockingAll = async (request: BroadcastTxRequest<MsgBeginUnlockingAll>): Promise<BroadcastTxResponse<MsgBeginUnlockingAllResponse>> => {
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
  beginUnlocking = async (request: BroadcastTxRequest<MsgBeginUnlocking>): Promise<BroadcastTxResponse<MsgBeginUnlockingResponse>> => {
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
  extendLockup = async (request: BroadcastTxRequest<MsgExtendLockup>): Promise<BroadcastTxResponse<MsgExtendLockupResponse>> => {
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
  forceUnlock = async (request: BroadcastTxRequest<MsgForceUnlock>): Promise<BroadcastTxResponse<MsgForceUnlockResponse>> => {
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