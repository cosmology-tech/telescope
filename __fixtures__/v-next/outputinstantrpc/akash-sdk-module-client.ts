import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { createRpcClient } from "./extern";
import { DeliverTxResponse, EncodeObject, StdFee, TxRpc, SigningClientParams } from "./types";
import * as akashAuditV1beta1AuditRegistry from "./akash/audit/v1beta1/audit.registry";
import * as akashAuditV1beta2AuditRegistry from "./akash/audit/v1beta2/audit.registry";
import * as akashCertV1beta2CertRegistry from "./akash/cert/v1beta2/cert.registry";
import * as akashDeploymentV1beta2ServiceRegistry from "./akash/deployment/v1beta2/service.registry";
import * as akashMarketV1beta2ServiceRegistry from "./akash/market/v1beta2/service.registry";
import * as akashProviderV1beta1ProviderRegistry from "./akash/provider/v1beta1/provider.registry";
import * as akashProviderV1beta2ProviderRegistry from "./akash/provider/v1beta2/provider.registry";
import * as akashAuditV1beta1AuditAmino from "./akash/audit/v1beta1/audit.amino";
import * as akashAuditV1beta2AuditAmino from "./akash/audit/v1beta2/audit.amino";
import * as akashCertV1beta2CertAmino from "./akash/cert/v1beta2/cert.amino";
import * as akashDeploymentV1beta2ServiceAmino from "./akash/deployment/v1beta2/service.amino";
import * as akashMarketV1beta2ServiceAmino from "./akash/market/v1beta2/service.amino";
import * as akashProviderV1beta1ProviderAmino from "./akash/provider/v1beta1/provider.amino";
import * as akashProviderV1beta2ProviderAmino from "./akash/provider/v1beta2/provider.amino";
export const akashAminoConverters = {
  ...akashAuditV1beta1AuditAmino.AminoConverter,
  ...akashAuditV1beta2AuditAmino.AminoConverter,
  ...akashCertV1beta2CertAmino.AminoConverter,
  ...akashDeploymentV1beta2ServiceAmino.AminoConverter,
  ...akashMarketV1beta2ServiceAmino.AminoConverter,
  ...akashProviderV1beta1ProviderAmino.AminoConverter,
  ...akashProviderV1beta2ProviderAmino.AminoConverter
};
export const akashProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...akashAuditV1beta1AuditRegistry.registry, ...akashAuditV1beta2AuditRegistry.registry, ...akashCertV1beta2CertRegistry.registry, ...akashDeploymentV1beta2ServiceRegistry.registry, ...akashMarketV1beta2ServiceRegistry.registry, ...akashProviderV1beta1ProviderRegistry.registry, ...akashProviderV1beta2ProviderRegistry.registry];
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
export const getSigningAkashTxRpc = async ({
  rpcEndpoint,
  signer
}: SigningClientParams) => {
  let txRpc = (await createRpcClient(rpcEndpoint) as TxRpc);
  const signingClient = await getSigningAkashClient({
    rpcEndpoint,
    signer
  });
  txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
    return (signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>);
  };
  return txRpc;
};