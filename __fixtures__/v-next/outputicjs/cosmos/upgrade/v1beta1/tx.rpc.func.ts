import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export const createSoftwareUpgrade = (clientResolver?: SigningClientResolver) => buildTx<MsgSoftwareUpgrade>({
  clientResolver,
  typeUrl: MsgSoftwareUpgrade.typeUrl,
  encoders: toEncoders(MsgSoftwareUpgrade),
  converters: toConverters(MsgSoftwareUpgrade)
});
export const createCancelUpgrade = (clientResolver?: SigningClientResolver) => buildTx<MsgCancelUpgrade>({
  clientResolver,
  typeUrl: MsgCancelUpgrade.typeUrl,
  encoders: toEncoders(MsgCancelUpgrade),
  converters: toConverters(MsgCancelUpgrade)
});