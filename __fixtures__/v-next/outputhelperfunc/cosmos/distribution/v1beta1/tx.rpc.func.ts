import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
export const createSetWithdrawAddress = (getSigningClient: SigningClientResolver) => buildTx<MsgSetWithdrawAddress>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSetWithdrawAddress.typeUrl,
  encoders: toEncoders(MsgSetWithdrawAddress),
  converters: toConverters(MsgSetWithdrawAddress)
});
export const useSetWithdrawAddress = buildUseMutation<MsgSetWithdrawAddress, Error>({
  builderMutationFn: createSetWithdrawAddress
});
export const createWithdrawDelegatorReward = (getSigningClient: SigningClientResolver) => buildTx<MsgWithdrawDelegatorReward>({
  getSigningClient: getSigningClient,
  typeUrl: MsgWithdrawDelegatorReward.typeUrl,
  encoders: toEncoders(MsgWithdrawDelegatorReward),
  converters: toConverters(MsgWithdrawDelegatorReward)
});
export const useWithdrawDelegatorReward = buildUseMutation<MsgWithdrawDelegatorReward, Error>({
  builderMutationFn: createWithdrawDelegatorReward
});
export const createWithdrawValidatorCommission = (getSigningClient: SigningClientResolver) => buildTx<MsgWithdrawValidatorCommission>({
  getSigningClient: getSigningClient,
  typeUrl: MsgWithdrawValidatorCommission.typeUrl,
  encoders: toEncoders(MsgWithdrawValidatorCommission),
  converters: toConverters(MsgWithdrawValidatorCommission)
});
export const useWithdrawValidatorCommission = buildUseMutation<MsgWithdrawValidatorCommission, Error>({
  builderMutationFn: createWithdrawValidatorCommission
});
export const createFundCommunityPool = (getSigningClient: SigningClientResolver) => buildTx<MsgFundCommunityPool>({
  getSigningClient: getSigningClient,
  typeUrl: MsgFundCommunityPool.typeUrl,
  encoders: toEncoders(MsgFundCommunityPool),
  converters: toConverters(MsgFundCommunityPool)
});
export const useFundCommunityPool = buildUseMutation<MsgFundCommunityPool, Error>({
  builderMutationFn: createFundCommunityPool
});