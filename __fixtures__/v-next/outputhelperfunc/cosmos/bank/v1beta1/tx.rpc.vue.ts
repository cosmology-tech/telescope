import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
import { createSend, createMultiSend } from "./tx.rpc.func";
export const useSend = buildUseVueMutation<MsgSend, Error>({
  builderMutationFn: createSend
});
export const useMultiSend = buildUseVueMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend
});