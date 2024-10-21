import { Plan, PlanSDKType } from "./upgrade";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export const createSoftwareUpgrade = (getSigningClient: SigningClientResolver) => buildTx<MsgSoftwareUpgrade>({
  getSigningClient: getSigningClient,
  typeUrl: MsgSoftwareUpgrade.typeUrl,
  encoders: toEncoders(MsgSoftwareUpgrade),
  converters: toConverters(MsgSoftwareUpgrade)
});
export const useSoftwareUpgrade = buildUseMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: createSoftwareUpgrade
});
export const createCancelUpgrade = (getSigningClient: SigningClientResolver) => buildTx<MsgCancelUpgrade>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCancelUpgrade.typeUrl,
  encoders: toEncoders(MsgCancelUpgrade),
  converters: toConverters(MsgCancelUpgrade)
});
export const useCancelUpgrade = buildUseMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: createCancelUpgrade
});