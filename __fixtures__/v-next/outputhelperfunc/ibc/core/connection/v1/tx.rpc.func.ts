import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { buildTx, ISigningClient } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { SigningClientResolver } from "../../../../helpers";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
export const createConnectionOpenInit = (getSigningClient: SigningClientResolver) => buildTx<ConnectionOpenInit>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgConnectionOpenInit.typeUrl,
  encoders: toEncoders(ConnectionOpenInit),
  converters: toConverters(ConnectionOpenInit)
});
export const useConnectionOpenInit = buildUseMutation<ConnectionOpenInit, Error>({
  builderMutationFn: createConnectionOpenInit
});
export const createConnectionOpenTry = (getSigningClient: SigningClientResolver) => buildTx<ConnectionOpenTry>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgConnectionOpenTry.typeUrl,
  encoders: toEncoders(ConnectionOpenTry),
  converters: toConverters(ConnectionOpenTry)
});
export const useConnectionOpenTry = buildUseMutation<ConnectionOpenTry, Error>({
  builderMutationFn: createConnectionOpenTry
});
export const createConnectionOpenAck = (getSigningClient: SigningClientResolver) => buildTx<ConnectionOpenAck>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgConnectionOpenAck.typeUrl,
  encoders: toEncoders(ConnectionOpenAck),
  converters: toConverters(ConnectionOpenAck)
});
export const useConnectionOpenAck = buildUseMutation<ConnectionOpenAck, Error>({
  builderMutationFn: createConnectionOpenAck
});
export const createConnectionOpenConfirm = (getSigningClient: SigningClientResolver) => buildTx<ConnectionOpenConfirm>({
  getSigningClient: getSigningClient,
  typeUrl: : MsgConnectionOpenConfirm.typeUrl,
  encoders: toEncoders(ConnectionOpenConfirm),
  converters: toConverters(ConnectionOpenConfirm)
});
export const useConnectionOpenConfirm = buildUseMutation<ConnectionOpenConfirm, Error>({
  builderMutationFn: createConnectionOpenConfirm
});