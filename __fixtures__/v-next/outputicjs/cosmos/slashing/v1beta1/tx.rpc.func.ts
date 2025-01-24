import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUnjail } from "./tx";
export const createUnjail = (clientResolver?: SigningClientResolver) => buildTx<MsgUnjail>({
  clientResolver,
  typeUrl: MsgUnjail.typeUrl,
  encoders: toEncoders(MsgUnjail),
  converters: toConverters(MsgUnjail)
});