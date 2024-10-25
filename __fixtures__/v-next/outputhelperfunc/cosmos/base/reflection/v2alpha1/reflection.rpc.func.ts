import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorRequestSDKType, GetAuthnDescriptorResponse, GetAuthnDescriptorResponseSDKType, GetChainDescriptorRequest, GetChainDescriptorRequestSDKType, GetChainDescriptorResponse, GetChainDescriptorResponseSDKType, GetCodecDescriptorRequest, GetCodecDescriptorRequestSDKType, GetCodecDescriptorResponse, GetCodecDescriptorResponseSDKType, GetConfigurationDescriptorRequest, GetConfigurationDescriptorRequestSDKType, GetConfigurationDescriptorResponse, GetConfigurationDescriptorResponseSDKType, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorRequestSDKType, GetQueryServicesDescriptorResponse, GetQueryServicesDescriptorResponseSDKType, GetTxDescriptorRequest, GetTxDescriptorRequestSDKType, GetTxDescriptorResponse, GetTxDescriptorResponseSDKType } from "./reflection";
export const createGetGetAuthnDescriptor = (getRpcInstance: RpcResolver) => buildQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  encode: GetAuthnDescriptorRequest.encode,
  decode: GetAuthnDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetAuthnDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetAuthnDescriptor = buildUseQuery<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>({
  builderQueryFn: createGetGetAuthnDescriptor,
  queryKeyPrefix: "GetAuthnDescriptorQuery"
});
export const createGetGetChainDescriptor = (getRpcInstance: RpcResolver) => buildQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  encode: GetChainDescriptorRequest.encode,
  decode: GetChainDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetChainDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetChainDescriptor = buildUseQuery<GetChainDescriptorRequest, GetChainDescriptorResponse>({
  builderQueryFn: createGetGetChainDescriptor,
  queryKeyPrefix: "GetChainDescriptorQuery"
});
export const createGetGetCodecDescriptor = (getRpcInstance: RpcResolver) => buildQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  encode: GetCodecDescriptorRequest.encode,
  decode: GetCodecDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetCodecDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetCodecDescriptor = buildUseQuery<GetCodecDescriptorRequest, GetCodecDescriptorResponse>({
  builderQueryFn: createGetGetCodecDescriptor,
  queryKeyPrefix: "GetCodecDescriptorQuery"
});
export const createGetGetConfigurationDescriptor = (getRpcInstance: RpcResolver) => buildQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  encode: GetConfigurationDescriptorRequest.encode,
  decode: GetConfigurationDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetConfigurationDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetConfigurationDescriptor = buildUseQuery<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>({
  builderQueryFn: createGetGetConfigurationDescriptor,
  queryKeyPrefix: "GetConfigurationDescriptorQuery"
});
export const createGetGetQueryServicesDescriptor = (getRpcInstance: RpcResolver) => buildQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  encode: GetQueryServicesDescriptorRequest.encode,
  decode: GetQueryServicesDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetQueryServicesDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetQueryServicesDescriptor = buildUseQuery<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>({
  builderQueryFn: createGetGetQueryServicesDescriptor,
  queryKeyPrefix: "GetQueryServicesDescriptorQuery"
});
export const createGetGetTxDescriptor = (getRpcInstance: RpcResolver) => buildQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  encode: GetTxDescriptorRequest.encode,
  decode: GetTxDescriptorResponse.decode,
  service: "cosmos.base.reflection.v2alpha1.ReflectionService",
  method: "GetTxDescriptor",
  getRpcInstance: getRpcInstance
});
export const useGetGetTxDescriptor = buildUseQuery<GetTxDescriptorRequest, GetTxDescriptorResponse>({
  builderQueryFn: createGetGetTxDescriptor,
  queryKeyPrefix: "GetTxDescriptorQuery"
});