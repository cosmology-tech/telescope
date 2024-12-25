import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cosmosAuthzV1beta1TxRegistry from "./authz/v1beta1/tx.registry";
import * as cosmosBankV1beta1TxRegistry from "./bank/v1beta1/tx.registry";
import * as cosmosCrisisV1beta1TxRegistry from "./crisis/v1beta1/tx.registry";
import * as cosmosDistributionV1beta1TxRegistry from "./distribution/v1beta1/tx.registry";
import * as cosmosEvidenceV1beta1TxRegistry from "./evidence/v1beta1/tx.registry";
import * as cosmosFeegrantV1beta1TxRegistry from "./feegrant/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "./gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./gov/v1beta1/tx.registry";
import * as cosmosGroupV1TxRegistry from "./group/v1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "./nft/v1beta1/tx.registry";
import * as cosmosSlashingV1beta1TxRegistry from "./slashing/v1beta1/tx.registry";
import * as cosmosStakingV1beta1TxRegistry from "./staking/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "./upgrade/v1beta1/tx.registry";
import * as cosmosVestingV1beta1TxRegistry from "./vesting/v1beta1/tx.registry";
export const cosmosAminoConverters = {};
export const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...cosmosAuthzV1beta1TxRegistry.registry, ...cosmosBankV1beta1TxRegistry.registry, ...cosmosCrisisV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosEvidenceV1beta1TxRegistry.registry, ...cosmosFeegrantV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry, ...cosmosSlashingV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry, ...cosmosVestingV1beta1TxRegistry.registry];
export const getSigningCosmosClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...cosmosProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cosmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmosClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};