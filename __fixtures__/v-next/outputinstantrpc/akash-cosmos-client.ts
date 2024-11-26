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
import * as akashProviderV1beta2ProviderRegistry from "./akash/provider/v1beta2/provider.registry";
import * as cosmosGroupV1TxRegistry from "./cosmos/group/v1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "./cosmos/nft/v1beta1/tx.registry";
import * as akashAuditV1beta1AuditAmino from "./akash/audit/v1beta1/audit.amino";
import * as akashAuditV1beta2AuditAmino from "./akash/audit/v1beta2/audit.amino";
import * as akashCertV1beta2CertAmino from "./akash/cert/v1beta2/cert.amino";
import * as akashDeploymentV1beta2ServiceAmino from "./akash/deployment/v1beta2/service.amino";
import * as akashMarketV1beta2ServiceAmino from "./akash/market/v1beta2/service.amino";
import * as akashProviderV1beta2ProviderAmino from "./akash/provider/v1beta2/provider.amino";
import * as cosmosGroupV1TxAmino from "./cosmos/group/v1/tx.amino";
import * as cosmosNftV1beta1TxAmino from "./cosmos/nft/v1beta1/tx.amino";
export const akashCosmosAminoConverters = {
  ...akashAuditV1beta1AuditAmino.AminoConverter,
  ...akashAuditV1beta2AuditAmino.AminoConverter,
  ...akashCertV1beta2CertAmino.AminoConverter,
  ...akashDeploymentV1beta2ServiceAmino.AminoConverter,
  ...akashMarketV1beta2ServiceAmino.AminoConverter,
  ...akashProviderV1beta2ProviderAmino.AminoConverter,
  ...cosmosGroupV1TxAmino.AminoConverter,
  ...cosmosNftV1beta1TxAmino.AminoConverter
};
export const akashCosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...akashAuditV1beta1AuditRegistry.registry, ...akashAuditV1beta2AuditRegistry.registry, ...akashCertV1beta2CertRegistry.registry, ...akashDeploymentV1beta2ServiceRegistry.registry, ...akashMarketV1beta2ServiceRegistry.registry, ...akashProviderV1beta2ProviderRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry];
export const getAkashCosmosSigningClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...akashCosmosProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...akashCosmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getAkashCosmosSigningClient = async ({
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
  } = getAkashCosmosSigningClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};
export const getAkashCosmosSigningTxRpc = async ({
  rpcEndpoint,
  signer
}: SigningClientParams) => {
  let txRpc = (await createRpcClient(rpcEndpoint) as TxRpc);
  const signingClient = await getAkashCosmosSigningClient({
    rpcEndpoint,
    signer
  });
  txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
    return (signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>);
  };
  return txRpc;
};