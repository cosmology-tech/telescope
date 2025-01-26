import { buildUseVueQuery } from "../../../../vue-query";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection";
import { createGetGetAuthnDescriptor, createGetGetChainDescriptor, createGetGetCodecDescriptor, createGetGetConfigurationDescriptor, createGetGetQueryServicesDescriptor, createGetGetTxDescriptor } from "./reflection.rpc.func.ts";
export const useGetGetAuthnDescriptor = buildUseVueQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  builderQueryFn: createGetGetAuthnDescriptor,
  queryKeyPrefix: "GetAuthnDescriptorQuery"
});
export const useGetGetChainDescriptor = buildUseVueQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  builderQueryFn: createGetGetChainDescriptor,
  queryKeyPrefix: "GetChainDescriptorQuery"
});
export const useGetGetCodecDescriptor = buildUseVueQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  builderQueryFn: createGetGetCodecDescriptor,
  queryKeyPrefix: "GetCodecDescriptorQuery"
});
export const useGetGetConfigurationDescriptor = buildUseVueQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  builderQueryFn: createGetGetConfigurationDescriptor,
  queryKeyPrefix: "GetConfigurationDescriptorQuery"
});
export const useGetGetQueryServicesDescriptor = buildUseVueQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  builderQueryFn: createGetGetQueryServicesDescriptor,
  queryKeyPrefix: "GetQueryServicesDescriptorQuery"
});
export const useGetGetTxDescriptor = buildUseVueQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  builderQueryFn: createGetGetTxDescriptor,
  queryKeyPrefix: "GetTxDescriptorQuery"
});