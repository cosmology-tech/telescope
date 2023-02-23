import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";

/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(request: DeepPartial<MsgSetWithdrawAddress>, metadata?: grpc.Metadata): Promise<MsgSetWithdrawAddressResponse>;

  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  WithdrawDelegatorReward(request: DeepPartial<MsgWithdrawDelegatorReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegatorRewardResponse>;

  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  WithdrawValidatorCommission(request: DeepPartial<MsgWithdrawValidatorCommission>, metadata?: grpc.Metadata): Promise<MsgWithdrawValidatorCommissionResponse>;

  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }

  setWithdrawAddress(request: DeepPartial<MsgSetWithdrawAddress>, metadata?: grpc.Metadata): Promise<MsgSetWithdrawAddressResponse> {
    return this.rpc.unary(MsgSetWithdrawAddress, MsgSetWithdrawAddress.fromPartial(request), metadata);
  }

  withdrawDelegatorReward(request: DeepPartial<MsgWithdrawDelegatorReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegatorRewardResponse> {
    return this.rpc.unary(MsgWithdrawDelegatorReward, MsgWithdrawDelegatorReward.fromPartial(request), metadata);
  }

  withdrawValidatorCommission(request: DeepPartial<MsgWithdrawValidatorCommission>, metadata?: grpc.Metadata): Promise<MsgWithdrawValidatorCommissionResponse> {
    return this.rpc.unary(MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommission.fromPartial(request), metadata);
  }

  fundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse> {
    return this.rpc.unary(MsgFundCommunityPool, MsgFundCommunityPool.fromPartial(request), metadata);
  }

}