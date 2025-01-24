import { buildUseQuery } from "../../../../react-query";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection";
import { createGetGetAuthnDescriptor, createGetGetChainDescriptor, createGetGetCodecDescriptor, createGetGetConfigurationDescriptor, createGetGetQueryServicesDescriptor, createGetGetTxDescriptor } from "./reflection.rpc.func.ts";
export const useGetGetAuthnDescriptor = buildUseQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  builderQueryFn: createGetGetAuthnDescriptor,
  queryKeyPrefix: "GetAuthnDescriptorQuery"
});
export const useGetGetChainDescriptor = buildUseQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  builderQueryFn: createGetGetChainDescriptor,
  queryKeyPrefix: "GetChainDescriptorQuery"
});
export const useGetGetCodecDescriptor = buildUseQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  builderQueryFn: createGetGetCodecDescriptor,
  queryKeyPrefix: "GetCodecDescriptorQuery"
});
export const useGetGetConfigurationDescriptor = buildUseQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  builderQueryFn: createGetGetConfigurationDescriptor,
  queryKeyPrefix: "GetConfigurationDescriptorQuery"
});
export const useGetGetQueryServicesDescriptor = buildUseQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  builderQueryFn: createGetGetQueryServicesDescriptor,
  queryKeyPrefix: "GetQueryServicesDescriptorQuery"
});
export const useGetGetTxDescriptor = buildUseQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  builderQueryFn: createGetGetTxDescriptor,
  queryKeyPrefix: "GetTxDescriptorQuery"
});