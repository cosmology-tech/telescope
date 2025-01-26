import { buildUseMutation } from "../../../react-query";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
import { createCreateDenom, createMint, createBurn, createChangeAdmin, createSetDenomMetadata } from "./tx.rpc.func";
export const useCreateDenom = buildUseMutation<MsgCreateDenom, Error>({
  builderMutationFn: createCreateDenom
});
export const useMint = buildUseMutation<MsgMint, Error>({
  builderMutationFn: createMint
});
export const useBurn = buildUseMutation<MsgBurn, Error>({
  builderMutationFn: createBurn
});
export const useChangeAdmin = buildUseMutation<MsgChangeAdmin, Error>({
  builderMutationFn: createChangeAdmin
});
export const useSetDenomMetadata = buildUseMutation<MsgSetDenomMetadata, Error>({
  builderMutationFn: createSetDenomMetadata
});