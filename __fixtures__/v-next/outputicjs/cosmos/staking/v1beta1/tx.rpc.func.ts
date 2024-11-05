import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export const createCreateValidator = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateValidator>({
  clientResolver,
  typeUrl: MsgCreateValidator.typeUrl,
  encoders: toEncoders(MsgCreateValidator),
  converters: toConverters(MsgCreateValidator)
});
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createCreateValidator
});
export const createEditValidator = (clientResolver?: SigningClientResolver) => buildTx<MsgEditValidator>({
  clientResolver,
  typeUrl: MsgEditValidator.typeUrl,
  encoders: toEncoders(MsgEditValidator),
  converters: toConverters(MsgEditValidator)
});
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: createEditValidator
});
export const createDelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgDelegate>({
  clientResolver,
  typeUrl: MsgDelegate.typeUrl,
  encoders: toEncoders(MsgDelegate),
  converters: toConverters(MsgDelegate)
});
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: createDelegate
});
export const createBeginRedelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgBeginRedelegate>({
  clientResolver,
  typeUrl: MsgBeginRedelegate.typeUrl,
  encoders: toEncoders(MsgBeginRedelegate),
  converters: toConverters(MsgBeginRedelegate)
});
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: createBeginRedelegate
});
export const createUndelegate = (clientResolver?: SigningClientResolver) => buildTx<MsgUndelegate>({
  clientResolver,
  typeUrl: MsgUndelegate.typeUrl,
  encoders: toEncoders(MsgUndelegate),
  converters: toConverters(MsgUndelegate)
});
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: createUndelegate
});