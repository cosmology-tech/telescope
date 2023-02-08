import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(request: DeepPartial<MsgCreateVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateVestingAccountResponse>;

  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   */
  CreatePermanentLockedAccount(request: DeepPartial<MsgCreatePermanentLockedAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePermanentLockedAccountResponse>;

  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  CreatePeriodicVestingAccount(request: DeepPartial<MsgCreatePeriodicVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePeriodicVestingAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
    this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
  }

  createVestingAccount(request: DeepPartial<MsgCreateVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreateVestingAccountResponse> {
    return this.rpc.unary(MsgCreateVestingAccount, MsgCreateVestingAccount.fromPartial(request), metadata);
  }

  createPermanentLockedAccount(request: DeepPartial<MsgCreatePermanentLockedAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePermanentLockedAccountResponse> {
    return this.rpc.unary(MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccount.fromPartial(request), metadata);
  }

  createPeriodicVestingAccount(request: DeepPartial<MsgCreatePeriodicVestingAccount>, metadata?: grpc.Metadata): Promise<MsgCreatePeriodicVestingAccountResponse> {
    return this.rpc.unary(MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccount.fromPartial(request), metadata);
  }

}