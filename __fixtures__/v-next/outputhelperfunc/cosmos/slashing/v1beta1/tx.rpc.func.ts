import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
export const createUnjail = (getSigningClient: SigningClientResolver) => buildTx<MsgUnjail>({
  getSigningClient: getSigningClient,
  typeUrl: MsgUnjail.typeUrl,
  encoders: toEncoders(MsgUnjail),
  converters: toConverters(MsgUnjail)
});
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: createUnjail
});