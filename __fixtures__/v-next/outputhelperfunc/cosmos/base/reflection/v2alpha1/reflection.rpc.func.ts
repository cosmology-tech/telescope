import { SigningClientResolver } from "../../../../helpers";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorRequestSDKType, GetAuthnDescriptorResponse, GetAuthnDescriptorResponseSDKType, GetChainDescriptorRequest, GetChainDescriptorRequestSDKType, GetChainDescriptorResponse, GetChainDescriptorResponseSDKType, GetCodecDescriptorRequest, GetCodecDescriptorRequestSDKType, GetCodecDescriptorResponse, GetCodecDescriptorResponseSDKType, GetConfigurationDescriptorRequest, GetConfigurationDescriptorRequestSDKType, GetConfigurationDescriptorResponse, GetConfigurationDescriptorResponseSDKType, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorRequestSDKType, GetQueryServicesDescriptorResponse, GetQueryServicesDescriptorResponseSDKType, GetTxDescriptorRequest, GetTxDescriptorRequestSDKType, GetTxDescriptorResponse, GetTxDescriptorResponseSDKType } from "./reflection";
export const createGetGetAuthnDescriptor = (getRpcInstance: SigningClientResolver) => buildQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  encoder: GetAuthnDescriptorRequest.encode,
  decoder: GetAuthnDescriptorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetAuthnDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetAuthnDescriptor = buildUseQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  builderQueryFn: createGetGetAuthnDescriptor,
  queryKeyPrefix: "GetAuthnDescriptorQuery"
});
export const createGetGetChainDescriptor = (getRpcInstance: SigningClientResolver) => buildQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  encoder: GetChainDescriptorRequest.encode,
  decoder: GetChainDescriptorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetChainDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetChainDescriptor = buildUseQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  builderQueryFn: createGetGetChainDescriptor,
  queryKeyPrefix: "GetChainDescriptorQuery"
});
export const createGetGetCodecDescriptor = (getRpcInstance: SigningClientResolver) => buildQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  encoder: GetCodecDescriptorRequest.encode,
  decoder: GetCodecDescriptorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetCodecDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetCodecDescriptor = buildUseQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  builderQueryFn: createGetGetCodecDescriptor,
  queryKeyPrefix: "GetCodecDescriptorQuery"
});
export const createGetGetConfigurationDescriptor = (getRpcInstance: SigningClientResolver) => buildQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  encoder: GetConfigurationDescriptorRequest.encode,
  decoder: GetConfigurationDescriptorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetConfigurationDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetConfigurationDescriptor = buildUseQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  builderQueryFn: createGetGetConfigurationDescriptor,
  queryKeyPrefix: "GetConfigurationDescriptorQuery"
});
export const createGetGetQueryServicesDescriptor = (getRpcInstance: SigningClientResolver) => buildQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  encoder: GetQueryServicesDescriptorRequest.encode,
  decoder: GetQueryServicesDescriptorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetQueryServicesDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetQueryServicesDescriptor = buildUseQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  builderQueryFn: createGetGetQueryServicesDescriptor,
  queryKeyPrefix: "GetQueryServicesDescriptorQuery"
});
export const createGetGetTxDescriptor = (getRpcInstance: SigningClientResolver) => buildQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  encoder: GetTxDescriptorRequest.encode,
  decoder: GetTxDescriptorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetTxDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetTxDescriptor = buildUseQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  builderQueryFn: createGetGetTxDescriptor,
  queryKeyPrefix: "GetTxDescriptorQuery"
});