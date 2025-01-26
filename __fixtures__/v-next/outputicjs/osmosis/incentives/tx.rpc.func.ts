import { buildTx, SigningClientResolver } from "../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export const createCreateGauge = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateGauge>({
  clientResolver,
  typeUrl: MsgCreateGauge.typeUrl,
  encoders: toEncoders(MsgCreateGauge),
  converters: toConverters(MsgCreateGauge)
});
export const createAddToGauge = (clientResolver?: SigningClientResolver) => buildTx<MsgAddToGauge>({
  clientResolver,
  typeUrl: MsgAddToGauge.typeUrl,
  encoders: toEncoders(MsgAddToGauge),
  converters: toConverters(MsgAddToGauge)
});