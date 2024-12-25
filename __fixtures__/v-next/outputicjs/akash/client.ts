import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as akashAuditV1beta1AuditRegistry from "./audit/v1beta1/audit.registry";
import * as akashAuditV1beta2AuditRegistry from "./audit/v1beta2/audit.registry";
import * as akashCertV1beta2CertRegistry from "./cert/v1beta2/cert.registry";
import * as akashDeploymentV1beta1DeploymentRegistry from "./deployment/v1beta1/deployment.registry";
import * as akashDeploymentV1beta2ServiceRegistry from "./deployment/v1beta2/service.registry";
import * as akashMarketV1beta2ServiceRegistry from "./market/v1beta2/service.registry";
import * as akashProviderV1beta1ProviderRegistry from "./provider/v1beta1/provider.registry";
import * as akashProviderV1beta2ProviderRegistry from "./provider/v1beta2/provider.registry";
export const akashAminoConverters = {};
export const akashProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...akashAuditV1beta1AuditRegistry.registry, ...akashAuditV1beta2AuditRegistry.registry, ...akashCertV1beta2CertRegistry.registry, ...akashDeploymentV1beta1DeploymentRegistry.registry, ...akashDeploymentV1beta2ServiceRegistry.registry, ...akashMarketV1beta2ServiceRegistry.registry, ...akashProviderV1beta1ProviderRegistry.registry, ...akashProviderV1beta2ProviderRegistry.registry];
export const getSigningAkashClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...akashProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...akashAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAkashClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningAkashClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};