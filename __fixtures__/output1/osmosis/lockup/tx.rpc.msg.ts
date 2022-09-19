import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponseSDKType>;
  /*LockTokens lock tokens*/

  beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponseSDKType>;
  /*BeginUnlockingAll begin unlocking all tokens*/

  beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponseSDKType>;
  /*MsgBeginUnlocking begins unlocking tokens by lock ID*/

  extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponseSDKType>;
  /*MsgEditLockup edits the existing lockups by lock ID*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.lockTokens = this.lockTokens.bind(this);
    this.beginUnlockingAll = this.beginUnlockingAll.bind(this);
    this.beginUnlocking = this.beginUnlocking.bind(this);
    this.extendLockup = this.extendLockup.bind(this);
  }

  lockTokens(request: MsgLockTokens): Promise<MsgLockTokensResponseSDKType> {
    const data = MsgLockTokens.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "LockTokens", data);
    return promise.then(data => MsgLockTokensResponse.decode(new _m0.Reader(data)));
  }

  beginUnlockingAll(request: MsgBeginUnlockingAll): Promise<MsgBeginUnlockingAllResponseSDKType> {
    const data = MsgBeginUnlockingAll.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlockingAll", data);
    return promise.then(data => MsgBeginUnlockingAllResponse.decode(new _m0.Reader(data)));
  }

  beginUnlocking(request: MsgBeginUnlocking): Promise<MsgBeginUnlockingResponseSDKType> {
    const data = MsgBeginUnlocking.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlocking", data);
    return promise.then(data => MsgBeginUnlockingResponse.decode(new _m0.Reader(data)));
  }

  extendLockup(request: MsgExtendLockup): Promise<MsgExtendLockupResponseSDKType> {
    const data = MsgExtendLockup.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Msg", "ExtendLockup", data);
    return promise.then(data => MsgExtendLockupResponse.decode(new _m0.Reader(data)));
  }

}