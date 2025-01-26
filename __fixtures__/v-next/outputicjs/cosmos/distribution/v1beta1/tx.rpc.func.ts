import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export const createSetWithdrawAddress = (clientResolver?: SigningClientResolver) => buildTx<MsgSetWithdrawAddress>({
  clientResolver,
  typeUrl: MsgSetWithdrawAddress.typeUrl,
  encoders: toEncoders(MsgSetWithdrawAddress),
  converters: toConverters(MsgSetWithdrawAddress)
});
export const createWithdrawDelegatorReward = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawDelegatorReward>({
  clientResolver,
  typeUrl: MsgWithdrawDelegatorReward.typeUrl,
  encoders: toEncoders(MsgWithdrawDelegatorReward),
  converters: toConverters(MsgWithdrawDelegatorReward)
});
export const createWithdrawValidatorCommission = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawValidatorCommission>({
  clientResolver,
  typeUrl: MsgWithdrawValidatorCommission.typeUrl,
  encoders: toEncoders(MsgWithdrawValidatorCommission),
  converters: toConverters(MsgWithdrawValidatorCommission)
});
export const createFundCommunityPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundCommunityPool>({
  clientResolver,
  typeUrl: MsgFundCommunityPool.typeUrl,
  encoders: toEncoders(MsgFundCommunityPool),
  converters: toConverters(MsgFundCommunityPool)
});