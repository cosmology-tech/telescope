import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgSend } from "./tx";
export const createSend = (clientResolver?: SigningClientResolver) => buildTx<MsgSend>({
  clientResolver,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend)
});