import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  superfluidDelegate(request: BroadcastTxRequest<MsgSuperfluidDelegate>): Promise<BroadcastTxResponse<MsgSuperfluidDelegateResponse>>;
  /** Execute superfluid undelegation for a lockup */
  superfluidUndelegate(request: BroadcastTxRequest<MsgSuperfluidUndelegate>): Promise<BroadcastTxResponse<MsgSuperfluidUndelegateResponse>>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  superfluidUnbondLock(request: BroadcastTxRequest<MsgSuperfluidUnbondLock>): Promise<BroadcastTxResponse<MsgSuperfluidUnbondLockResponse>>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate(request: BroadcastTxRequest<MsgLockAndSuperfluidDelegate>): Promise<BroadcastTxResponse<MsgLockAndSuperfluidDelegateResponse>>;
  unPoolWhitelistedPool(request: BroadcastTxRequest<MsgUnPoolWhitelistedPool>): Promise<BroadcastTxResponse<MsgUnPoolWhitelistedPoolResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Execute superfluid delegation for a lockup */
  superfluidDelegate = async (request: BroadcastTxRequest<MsgSuperfluidDelegate>): Promise<BroadcastTxResponse<MsgSuperfluidDelegateResponse>> => {
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
  superfluidUndelegate = async (request: BroadcastTxRequest<MsgSuperfluidUndelegate>): Promise<BroadcastTxResponse<MsgSuperfluidUndelegateResponse>> => {
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
  superfluidUnbondLock = async (request: BroadcastTxRequest<MsgSuperfluidUnbondLock>): Promise<BroadcastTxResponse<MsgSuperfluidUnbondLockResponse>> => {
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
  lockAndSuperfluidDelegate = async (request: BroadcastTxRequest<MsgLockAndSuperfluidDelegate>): Promise<BroadcastTxResponse<MsgLockAndSuperfluidDelegateResponse>> => {
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
  unPoolWhitelistedPool = async (request: BroadcastTxRequest<MsgUnPoolWhitelistedPool>): Promise<BroadcastTxResponse<MsgUnPoolWhitelistedPoolResponse>> => {
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