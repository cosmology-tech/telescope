import { buildTx, ISigningClient } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { SigningClientResolver } from "../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
export const createUnjail = (getSigningClient: SigningClientResolver) => buildTx<Unjail>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgUnjail.typeUrl,
  encoders: toEncoders(Unjail),
  converters: toConverters(Unjail)
});
export const useUnjail = buildUseMutation<Unjail, Error>({
  builderMutationFn: createUnjail
});