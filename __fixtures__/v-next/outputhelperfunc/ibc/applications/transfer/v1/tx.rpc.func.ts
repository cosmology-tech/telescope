import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";
export const createTransfer = (getSigningClient: SigningClientResolver) => buildTx<MsgTransfer>({
  getSigningClient: getSigningClient,
  typeUrl: MsgTransfer.typeUrl,
  encoders: toEncoders(MsgTransfer),
  converters: toConverters(MsgTransfer)
});
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: createTransfer
});