import { Plan, PlanSDKType } from "./upgrade";
import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgSoftwareUpgradeResponse, MsgSoftwareUpgradeResponseSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType, MsgCancelUpgradeResponse, MsgCancelUpgradeResponseSDKType } from "./tx";
export const createSoftwareUpgrade = (getSigningClient: SigningClientResolver) => buildTx<SoftwareUpgrade>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgSoftwareUpgrade.typeUrl,
  encoders: toEncoders(SoftwareUpgrade),
  converters: toConverters(SoftwareUpgrade)
});
export const useSoftwareUpgrade = buildUseMutation<SoftwareUpgrade, Error>({
  builderMutationFn: createSoftwareUpgrade
});
export const createCancelUpgrade = (getSigningClient: SigningClientResolver) => buildTx<CancelUpgrade>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgCancelUpgrade.typeUrl,
  encoders: toEncoders(CancelUpgrade),
  converters: toConverters(CancelUpgrade)
});
export const useCancelUpgrade = buildUseMutation<CancelUpgrade, Error>({
  builderMutationFn: createCancelUpgrade
});