import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  setWithdrawAddress(request: BroadcastTxRequest<MsgSetWithdrawAddress>): Promise<BroadcastTxResponse<MsgSetWithdrawAddressResponse>>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  withdrawDelegatorReward(request: BroadcastTxRequest<MsgWithdrawDelegatorReward>): Promise<BroadcastTxResponse<MsgWithdrawDelegatorRewardResponse>>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  withdrawValidatorCommission(request: BroadcastTxRequest<MsgWithdrawValidatorCommission>): Promise<BroadcastTxResponse<MsgWithdrawValidatorCommissionResponse>>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  fundCommunityPool(request: BroadcastTxRequest<MsgFundCommunityPool>): Promise<BroadcastTxResponse<MsgFundCommunityPoolResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SetWithdrawAddress defines a method to change the withdraw address
   for a delegator (or validator self-delegation). */
  setWithdrawAddress = async (request: BroadcastTxRequest<MsgSetWithdrawAddress>): Promise<BroadcastTxResponse<MsgSetWithdrawAddressResponse>> => {
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
  withdrawDelegatorReward = async (request: BroadcastTxRequest<MsgWithdrawDelegatorReward>): Promise<BroadcastTxResponse<MsgWithdrawDelegatorRewardResponse>> => {
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
  withdrawValidatorCommission = async (request: BroadcastTxRequest<MsgWithdrawValidatorCommission>): Promise<BroadcastTxResponse<MsgWithdrawValidatorCommissionResponse>> => {
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
  fundCommunityPool = async (request: BroadcastTxRequest<MsgFundCommunityPool>): Promise<BroadcastTxResponse<MsgFundCommunityPoolResponse>> => {
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