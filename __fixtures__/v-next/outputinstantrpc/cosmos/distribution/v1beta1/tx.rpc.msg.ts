import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(request: BroadcastTxReq<MsgSetWithdrawAddress>): Promise<BroadcastTxRes<MsgSetWithdrawAddressResponse>>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(request: BroadcastTxReq<MsgWithdrawDelegatorReward>): Promise<BroadcastTxRes<MsgWithdrawDelegatorRewardResponse>>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(request: BroadcastTxReq<MsgWithdrawValidatorCommission>): Promise<BroadcastTxRes<MsgWithdrawValidatorCommissionResponse>>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(request: BroadcastTxReq<MsgFundCommunityPool>): Promise<BroadcastTxRes<MsgFundCommunityPoolResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SetWithdrawAddress defines a method to change the withdraw address
   for a delegator (or validator self-delegation). */
  setWithdrawAddress = async (request: BroadcastTxReq<MsgSetWithdrawAddress>): Promise<BroadcastTxRes<MsgSetWithdrawAddressResponse>> => {
    const data = [{
      typeUrl: MsgSetWithdrawAddress.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSetWithdrawAddressResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   from a single validator. */
  withdrawDelegatorReward = async (request: BroadcastTxReq<MsgWithdrawDelegatorReward>): Promise<BroadcastTxRes<MsgWithdrawDelegatorRewardResponse>> => {
    const data = [{
      typeUrl: MsgWithdrawDelegatorReward.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgWithdrawDelegatorRewardResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* WithdrawValidatorCommission defines a method to withdraw the
   full commission to the validator address. */
  withdrawValidatorCommission = async (request: BroadcastTxReq<MsgWithdrawValidatorCommission>): Promise<BroadcastTxRes<MsgWithdrawValidatorCommissionResponse>> => {
    const data = [{
      typeUrl: MsgWithdrawValidatorCommission.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgWithdrawValidatorCommissionResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* FundCommunityPool defines a method to allow an account to directly
   fund the community pool. */
  fundCommunityPool = async (request: BroadcastTxReq<MsgFundCommunityPool>): Promise<BroadcastTxRes<MsgFundCommunityPoolResponse>> => {
    const data = [{
      typeUrl: MsgFundCommunityPool.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgFundCommunityPoolResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};