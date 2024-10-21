import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { buildTx, ISigningClient } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { SigningClientResolver } from "../../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";
export const createTransfer = (getSigningClient: SigningClientResolver) => buildTx<Transfer>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgTransfer.typeUrl,
  encoders: toEncoders(Transfer),
  converters: toConverters(Transfer)
});
export const useTransfer = buildUseMutation<Transfer, Error>({
  builderMutationFn: createTransfer
});