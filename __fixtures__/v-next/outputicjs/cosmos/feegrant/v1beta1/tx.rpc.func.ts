import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export const createGrantAllowance = (clientResolver?: SigningClientResolver) => buildTx<MsgGrantAllowance>({
  clientResolver,
  typeUrl: MsgGrantAllowance.typeUrl,
  encoders: toEncoders(MsgGrantAllowance),
  converters: toConverters(MsgGrantAllowance)
});
export const createRevokeAllowance = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeAllowance>({
  clientResolver,
  typeUrl: MsgRevokeAllowance.typeUrl,
  encoders: toEncoders(MsgRevokeAllowance),
  converters: toConverters(MsgRevokeAllowance)
});