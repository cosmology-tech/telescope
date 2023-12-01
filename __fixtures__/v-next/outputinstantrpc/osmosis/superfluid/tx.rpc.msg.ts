import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  superfluidDelegate(request: BroadcastTxReq<MsgSuperfluidDelegate>): Promise<BroadcastTxRes<MsgSuperfluidDelegateResponse>>;
  /** Execute superfluid undelegation for a lockup */
  superfluidUndelegate(request: BroadcastTxReq<MsgSuperfluidUndelegate>): Promise<BroadcastTxRes<MsgSuperfluidUndelegateResponse>>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  superfluidUnbondLock(request: BroadcastTxReq<MsgSuperfluidUnbondLock>): Promise<BroadcastTxRes<MsgSuperfluidUnbondLockResponse>>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate(request: BroadcastTxReq<MsgLockAndSuperfluidDelegate>): Promise<BroadcastTxRes<MsgLockAndSuperfluidDelegateResponse>>;
  unPoolWhitelistedPool(request: BroadcastTxReq<MsgUnPoolWhitelistedPool>): Promise<BroadcastTxRes<MsgUnPoolWhitelistedPoolResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Execute superfluid delegation for a lockup */
  superfluidDelegate = async (request: BroadcastTxReq<MsgSuperfluidDelegate>): Promise<BroadcastTxRes<MsgSuperfluidDelegateResponse>> => {
    const data = [{
      typeUrl: MsgSuperfluidDelegate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSuperfluidDelegateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Execute superfluid undelegation for a lockup */
  superfluidUndelegate = async (request: BroadcastTxReq<MsgSuperfluidUndelegate>): Promise<BroadcastTxRes<MsgSuperfluidUndelegateResponse>> => {
    const data = [{
      typeUrl: MsgSuperfluidUndelegate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSuperfluidUndelegateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* For a given lock that is being superfluidly undelegated,
   also unbond the underlying lock. */
  superfluidUnbondLock = async (request: BroadcastTxReq<MsgSuperfluidUnbondLock>): Promise<BroadcastTxRes<MsgSuperfluidUnbondLockResponse>> => {
    const data = [{
      typeUrl: MsgSuperfluidUnbondLock.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSuperfluidUnbondLockResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate = async (request: BroadcastTxReq<MsgLockAndSuperfluidDelegate>): Promise<BroadcastTxRes<MsgLockAndSuperfluidDelegateResponse>> => {
    const data = [{
      typeUrl: MsgLockAndSuperfluidDelegate.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgLockAndSuperfluidDelegateResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UnPoolWhitelistedPool */
  unPoolWhitelistedPool = async (request: BroadcastTxReq<MsgUnPoolWhitelistedPool>): Promise<BroadcastTxRes<MsgUnPoolWhitelistedPoolResponse>> => {
    const data = [{
      typeUrl: MsgUnPoolWhitelistedPool.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUnPoolWhitelistedPoolResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};