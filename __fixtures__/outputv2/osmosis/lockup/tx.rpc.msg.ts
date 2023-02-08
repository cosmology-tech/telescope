import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../helpers";
import { MsgLockTokens, MsgLockTokensSDKType, MsgLockTokensResponse, MsgLockTokensResponseSDKType, MsgBeginUnlockingAll, MsgBeginUnlockingAllSDKType, MsgBeginUnlockingAllResponse, MsgBeginUnlockingAllResponseSDKType, MsgBeginUnlocking, MsgBeginUnlockingSDKType, MsgBeginUnlockingResponse, MsgBeginUnlockingResponseSDKType, MsgExtendLockup, MsgExtendLockupSDKType, MsgExtendLockupResponse, MsgExtendLockupResponseSDKType, MsgForceUnlock, MsgForceUnlockSDKType, MsgForceUnlockResponse, MsgForceUnlockResponseSDKType } from "./tx";

/** Msg defines the Msg service. */
export interface Msg {
  /** LockTokens lock tokens */
  LockTokens(request: DeepPartial<MsgLockTokens>, metadata?: grpc.Metadata): Promise<MsgLockTokensResponse>;

  /** BeginUnlockingAll begin unlocking all tokens */
  BeginUnlockingAll(request: DeepPartial<MsgBeginUnlockingAll>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingAllResponse>;

  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  BeginUnlocking(request: DeepPartial<MsgBeginUnlocking>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingResponse>;

  /** MsgEditLockup edits the existing lockups by lock ID */
  ExtendLockup(request: DeepPartial<MsgExtendLockup>, metadata?: grpc.Metadata): Promise<MsgExtendLockupResponse>;
  ForceUnlock(request: DeepPartial<MsgForceUnlock>, metadata?: grpc.Metadata): Promise<MsgForceUnlockResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.lockTokens = this.lockTokens.bind(this);
    this.beginUnlockingAll = this.beginUnlockingAll.bind(this);
    this.beginUnlocking = this.beginUnlocking.bind(this);
    this.extendLockup = this.extendLockup.bind(this);
    this.forceUnlock = this.forceUnlock.bind(this);
  }

  lockTokens(request: DeepPartial<MsgLockTokens>, metadata?: grpc.Metadata): Promise<MsgLockTokensResponse> {
    return this.rpc.unary(MsgLockTokens, MsgLockTokens.fromPartial(request), metadata);
  }

  beginUnlockingAll(request: DeepPartial<MsgBeginUnlockingAll>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingAllResponse> {
    return this.rpc.unary(MsgBeginUnlockingAll, MsgBeginUnlockingAll.fromPartial(request), metadata);
  }

  beginUnlocking(request: DeepPartial<MsgBeginUnlocking>, metadata?: grpc.Metadata): Promise<MsgBeginUnlockingResponse> {
    return this.rpc.unary(MsgBeginUnlocking, MsgBeginUnlocking.fromPartial(request), metadata);
  }

  extendLockup(request: DeepPartial<MsgExtendLockup>, metadata?: grpc.Metadata): Promise<MsgExtendLockupResponse> {
    return this.rpc.unary(MsgExtendLockup, MsgExtendLockup.fromPartial(request), metadata);
  }

  forceUnlock(request: DeepPartial<MsgForceUnlock>, metadata?: grpc.Metadata): Promise<MsgForceUnlockResponse> {
    return this.rpc.unary(MsgForceUnlock, MsgForceUnlock.fromPartial(request), metadata);
  }

}