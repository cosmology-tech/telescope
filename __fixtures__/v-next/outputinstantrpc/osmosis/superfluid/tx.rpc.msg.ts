import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  superfluidDelegate(request: BroadcastTxReq<MsgSuperfluidDelegate>): Promise<DeliverTxResponse>;
  /** Execute superfluid undelegation for a lockup */
  superfluidUndelegate(request: BroadcastTxReq<MsgSuperfluidUndelegate>): Promise<DeliverTxResponse>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  superfluidUnbondLock(request: BroadcastTxReq<MsgSuperfluidUnbondLock>): Promise<DeliverTxResponse>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate(request: BroadcastTxReq<MsgLockAndSuperfluidDelegate>): Promise<DeliverTxResponse>;
  unPoolWhitelistedPool(request: BroadcastTxReq<MsgUnPoolWhitelistedPool>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Execute superfluid delegation for a lockup */
  superfluidDelegate = async (request: BroadcastTxReq<MsgSuperfluidDelegate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSuperfluidDelegate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Execute superfluid undelegation for a lockup */
  superfluidUndelegate = async (request: BroadcastTxReq<MsgSuperfluidUndelegate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSuperfluidUndelegate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* For a given lock that is being superfluidly undelegated,
   also unbond the underlying lock. */
  superfluidUnbondLock = async (request: BroadcastTxReq<MsgSuperfluidUnbondLock>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSuperfluidUnbondLock.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Execute lockup lock and superfluid delegation in a single msg */
  lockAndSuperfluidDelegate = async (request: BroadcastTxReq<MsgLockAndSuperfluidDelegate>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgLockAndSuperfluidDelegate.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UnPoolWhitelistedPool */
  unPoolWhitelistedPool = async (request: BroadcastTxReq<MsgUnPoolWhitelistedPool>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUnPoolWhitelistedPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};