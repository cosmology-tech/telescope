import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(request: BroadcastTxReq<MsgSetWithdrawAddress>): Promise<DeliverTxResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(request: BroadcastTxReq<MsgWithdrawDelegatorReward>): Promise<DeliverTxResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(request: BroadcastTxReq<MsgWithdrawValidatorCommission>): Promise<DeliverTxResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(request: BroadcastTxReq<MsgFundCommunityPool>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SetWithdrawAddress defines a method to change the withdraw address
   for a delegator (or validator self-delegation). */
  setWithdrawAddress = async (request: BroadcastTxReq<MsgSetWithdrawAddress>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSetWithdrawAddress.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   from a single validator. */
  withdrawDelegatorReward = async (request: BroadcastTxReq<MsgWithdrawDelegatorReward>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawDelegatorReward.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* WithdrawValidatorCommission defines a method to withdraw the
   full commission to the validator address. */
  withdrawValidatorCommission = async (request: BroadcastTxReq<MsgWithdrawValidatorCommission>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawValidatorCommission.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* FundCommunityPool defines a method to allow an account to directly
   fund the community pool. */
  fundCommunityPool = async (request: BroadcastTxReq<MsgFundCommunityPool>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgFundCommunityPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};