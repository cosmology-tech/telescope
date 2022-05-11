import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as cosmosAuthzV1beta1TxRegistry from "../../cosmos/authz/v1beta1/tx.registry";
import * as cosmosBankV1beta1TxRegistry from "../../cosmos/bank/v1beta1/tx.registry";
import * as cosmosCrisisV1beta1TxRegistry from "../../cosmos/crisis/v1beta1/tx.registry";
import * as cosmosDistributionV1beta1TxRegistry from "../../cosmos/distribution/v1beta1/tx.registry";
import * as cosmosEvidenceV1beta1TxRegistry from "../../cosmos/evidence/v1beta1/tx.registry";
import * as cosmosFeegrantV1beta1TxRegistry from "../../cosmos/feegrant/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "../../cosmos/gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "../../cosmos/gov/v1beta1/tx.registry";
import * as cosmosGroupV1TxRegistry from "../../cosmos/group/v1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "../../cosmos/nft/v1beta1/tx.registry";
import * as cosmosSlashingV1beta1TxRegistry from "../../cosmos/slashing/v1beta1/tx.registry";
import * as cosmosStakingV1beta1TxRegistry from "../../cosmos/staking/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "../../cosmos/upgrade/v1beta1/tx.registry";
import * as cosmosVestingV1beta1TxRegistry from "../../cosmos/vesting/v1beta1/tx.registry";
import * as cosmosAuthzV1beta1TxAmino from "../../cosmos/authz/v1beta1/tx.amino";
import * as cosmosBankV1beta1TxAmino from "../../cosmos/bank/v1beta1/tx.amino";
import * as cosmosCrisisV1beta1TxAmino from "../../cosmos/crisis/v1beta1/tx.amino";
import * as cosmosDistributionV1beta1TxAmino from "../../cosmos/distribution/v1beta1/tx.amino";
import * as cosmosEvidenceV1beta1TxAmino from "../../cosmos/evidence/v1beta1/tx.amino";
import * as cosmosFeegrantV1beta1TxAmino from "../../cosmos/feegrant/v1beta1/tx.amino";
import * as cosmosGovV1TxAmino from "../../cosmos/gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "../../cosmos/gov/v1beta1/tx.amino";
import * as cosmosGroupV1TxAmino from "../../cosmos/group/v1/tx.amino";
import * as cosmosNftV1beta1TxAmino from "../../cosmos/nft/v1beta1/tx.amino";
import * as cosmosSlashingV1beta1TxAmino from "../../cosmos/slashing/v1beta1/tx.amino";
import * as cosmosStakingV1beta1TxAmino from "../../cosmos/staking/v1beta1/tx.amino";
import * as cosmosUpgradeV1beta1TxAmino from "../../cosmos/upgrade/v1beta1/tx.amino";
import * as cosmosVestingV1beta1TxAmino from "../../cosmos/vesting/v1beta1/tx.amino";
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...cosmosAuthzV1beta1TxRegistry.registry, ...cosmosBankV1beta1TxRegistry.registry, ...cosmosCrisisV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosEvidenceV1beta1TxRegistry.registry, ...cosmosFeegrantV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry, ...cosmosSlashingV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry, ...cosmosVestingV1beta1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...cosmosAuthzV1beta1TxAmino.AminoConverter,
    ...cosmosBankV1beta1TxAmino.AminoConverter,
    ...cosmosCrisisV1beta1TxAmino.AminoConverter,
    ...cosmosDistributionV1beta1TxAmino.AminoConverter,
    ...cosmosEvidenceV1beta1TxAmino.AminoConverter,
    ...cosmosFeegrantV1beta1TxAmino.AminoConverter,
    ...cosmosGovV1TxAmino.AminoConverter,
    ...cosmosGovV1beta1TxAmino.AminoConverter,
    ...cosmosGroupV1TxAmino.AminoConverter,
    ...cosmosNftV1beta1TxAmino.AminoConverter,
    ...cosmosSlashingV1beta1TxAmino.AminoConverter,
    ...cosmosStakingV1beta1TxAmino.AminoConverter,
    ...cosmosUpgradeV1beta1TxAmino.AminoConverter,
    ...cosmosVestingV1beta1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};