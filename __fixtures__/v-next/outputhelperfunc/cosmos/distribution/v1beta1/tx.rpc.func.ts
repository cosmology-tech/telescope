import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
export const createSetWithdrawAddress = (getSigningClient: SigningClientResolver) => buildTx<SetWithdrawAddress>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSetWithdrawAddress.typeUrl,
  encoders: toEncoders(SetWithdrawAddress),
  converters: toConverters(SetWithdrawAddress)
});
export const useSetWithdrawAddress = buildUseMutation<SetWithdrawAddress, Error>({
  builderMutationFn: createSetWithdrawAddress
});
export const createWithdrawDelegatorReward = (getSigningClient: SigningClientResolver) => buildTx<WithdrawDelegatorReward>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgWithdrawDelegatorReward.typeUrl,
  encoders: toEncoders(WithdrawDelegatorReward),
  converters: toConverters(WithdrawDelegatorReward)
});
export const useWithdrawDelegatorReward = buildUseMutation<WithdrawDelegatorReward, Error>({
  builderMutationFn: createWithdrawDelegatorReward
});
export const createWithdrawValidatorCommission = (getSigningClient: SigningClientResolver) => buildTx<WithdrawValidatorCommission>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgWithdrawValidatorCommission.typeUrl,
  encoders: toEncoders(WithdrawValidatorCommission),
  converters: toConverters(WithdrawValidatorCommission)
});
export const useWithdrawValidatorCommission = buildUseMutation<WithdrawValidatorCommission, Error>({
  builderMutationFn: createWithdrawValidatorCommission
});
export const createFundCommunityPool = (getSigningClient: SigningClientResolver) => buildTx<FundCommunityPool>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgFundCommunityPool.typeUrl,
  encoders: toEncoders(FundCommunityPool),
  converters: toConverters(FundCommunityPool)
});
export const useFundCommunityPool = buildUseMutation<FundCommunityPool, Error>({
  builderMutationFn: createFundCommunityPool
});