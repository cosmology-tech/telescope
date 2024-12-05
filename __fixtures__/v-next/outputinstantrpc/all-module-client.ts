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
import * as cosmosAuthzV1beta1TxRegistry from "./cosmos/authz/v1beta1/tx.registry";
import * as cosmosBankV1beta1TxRegistry from "./cosmos/bank/v1beta1/tx.registry";
import * as cosmosCrisisV1beta1TxRegistry from "./cosmos/crisis/v1beta1/tx.registry";
import * as cosmosDistributionV1beta1TxRegistry from "./cosmos/distribution/v1beta1/tx.registry";
import * as cosmosEvidenceV1beta1TxRegistry from "./cosmos/evidence/v1beta1/tx.registry";
import * as cosmosFeegrantV1beta1TxRegistry from "./cosmos/feegrant/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "./cosmos/gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./cosmos/gov/v1beta1/tx.registry";
import * as cosmosGroupV1TxRegistry from "./cosmos/group/v1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "./cosmos/nft/v1beta1/tx.registry";
import * as cosmosSlashingV1beta1TxRegistry from "./cosmos/slashing/v1beta1/tx.registry";
import * as cosmosStakingV1beta1TxRegistry from "./cosmos/staking/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "./cosmos/upgrade/v1beta1/tx.registry";
import * as cosmosVestingV1beta1TxRegistry from "./cosmos/vesting/v1beta1/tx.registry";
import * as cosmwasmWasmV1TxRegistry from "./cosmwasm/wasm/v1/tx.registry";
import * as evmosErc20V1TxRegistry from "./evmos/erc20/v1/tx.registry";
import * as evmosFeesV1TxRegistry from "./evmos/fees/v1/tx.registry";
import * as evmosVestingV1TxRegistry from "./evmos/vesting/v1/tx.registry";
import * as ibcApplicationsTransferV1TxRegistry from "./ibc/applications/transfer/v1/tx.registry";
import * as ibcCoreChannelV1TxRegistry from "./ibc/core/channel/v1/tx.registry";
import * as ibcCoreClientV1TxRegistry from "./ibc/core/client/v1/tx.registry";
import * as ibcCoreConnectionV1TxRegistry from "./ibc/core/connection/v1/tx.registry";
import * as osmosisGammPoolmodelsBalancerTxTxRegistry from "./osmosis/gamm/pool-models/balancer/tx/tx.registry";
import * as osmosisGammPoolmodelsStableswapTxRegistry from "./osmosis/gamm/pool-models/stableswap/tx.registry";
import * as osmosisGammV1beta1TxRegistry from "./osmosis/gamm/v1beta1/tx.registry";
import * as osmosisIncentivesTxRegistry from "./osmosis/incentives/tx.registry";
import * as osmosisLockupTxRegistry from "./osmosis/lockup/tx.registry";
import * as osmosisSuperfluidTxRegistry from "./osmosis/superfluid/tx.registry";
import * as osmosisTokenfactoryV1beta1TxRegistry from "./osmosis/tokenfactory/v1beta1/tx.registry";
import * as akashAuditV1beta1AuditAmino from "./akash/audit/v1beta1/audit.amino";
import * as akashAuditV1beta2AuditAmino from "./akash/audit/v1beta2/audit.amino";
import * as akashCertV1beta2CertAmino from "./akash/cert/v1beta2/cert.amino";
import * as akashDeploymentV1beta2ServiceAmino from "./akash/deployment/v1beta2/service.amino";
import * as akashMarketV1beta2ServiceAmino from "./akash/market/v1beta2/service.amino";
import * as akashProviderV1beta1ProviderAmino from "./akash/provider/v1beta1/provider.amino";
import * as akashProviderV1beta2ProviderAmino from "./akash/provider/v1beta2/provider.amino";
import * as cosmosAuthzV1beta1TxAmino from "./cosmos/authz/v1beta1/tx.amino";
import * as cosmosBankV1beta1TxAmino from "./cosmos/bank/v1beta1/tx.amino";
import * as cosmosCrisisV1beta1TxAmino from "./cosmos/crisis/v1beta1/tx.amino";
import * as cosmosDistributionV1beta1TxAmino from "./cosmos/distribution/v1beta1/tx.amino";
import * as cosmosEvidenceV1beta1TxAmino from "./cosmos/evidence/v1beta1/tx.amino";
import * as cosmosFeegrantV1beta1TxAmino from "./cosmos/feegrant/v1beta1/tx.amino";
import * as cosmosGovV1TxAmino from "./cosmos/gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "./cosmos/gov/v1beta1/tx.amino";
import * as cosmosGroupV1TxAmino from "./cosmos/group/v1/tx.amino";
import * as cosmosNftV1beta1TxAmino from "./cosmos/nft/v1beta1/tx.amino";
import * as cosmosSlashingV1beta1TxAmino from "./cosmos/slashing/v1beta1/tx.amino";
import * as cosmosStakingV1beta1TxAmino from "./cosmos/staking/v1beta1/tx.amino";
import * as cosmosUpgradeV1beta1TxAmino from "./cosmos/upgrade/v1beta1/tx.amino";
import * as cosmosVestingV1beta1TxAmino from "./cosmos/vesting/v1beta1/tx.amino";
import * as cosmwasmWasmV1TxAmino from "./cosmwasm/wasm/v1/tx.amino";
import * as evmosErc20V1TxAmino from "./evmos/erc20/v1/tx.amino";
import * as evmosFeesV1TxAmino from "./evmos/fees/v1/tx.amino";
import * as evmosVestingV1TxAmino from "./evmos/vesting/v1/tx.amino";
import * as ibcApplicationsTransferV1TxAmino from "./ibc/applications/transfer/v1/tx.amino";
import * as ibcCoreChannelV1TxAmino from "./ibc/core/channel/v1/tx.amino";
import * as ibcCoreClientV1TxAmino from "./ibc/core/client/v1/tx.amino";
import * as ibcCoreConnectionV1TxAmino from "./ibc/core/connection/v1/tx.amino";
import * as osmosisGammPoolmodelsBalancerTxTxAmino from "./osmosis/gamm/pool-models/balancer/tx/tx.amino";
import * as osmosisGammPoolmodelsStableswapTxAmino from "./osmosis/gamm/pool-models/stableswap/tx.amino";
import * as osmosisGammV1beta1TxAmino from "./osmosis/gamm/v1beta1/tx.amino";
import * as osmosisIncentivesTxAmino from "./osmosis/incentives/tx.amino";
import * as osmosisLockupTxAmino from "./osmosis/lockup/tx.amino";
import * as osmosisSuperfluidTxAmino from "./osmosis/superfluid/tx.amino";
import * as osmosisTokenfactoryV1beta1TxAmino from "./osmosis/tokenfactory/v1beta1/tx.amino";
export const allAminoConverters = {
  ...akashAuditV1beta1AuditAmino.AminoConverter,
  ...akashAuditV1beta2AuditAmino.AminoConverter,
  ...akashCertV1beta2CertAmino.AminoConverter,
  ...akashDeploymentV1beta2ServiceAmino.AminoConverter,
  ...akashMarketV1beta2ServiceAmino.AminoConverter,
  ...akashProviderV1beta1ProviderAmino.AminoConverter,
  ...akashProviderV1beta2ProviderAmino.AminoConverter,
  ...cosmosAuthzV1beta1TxAmino.AminoConverter,
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
  ...cosmosVestingV1beta1TxAmino.AminoConverter,
  ...cosmwasmWasmV1TxAmino.AminoConverter,
  ...evmosErc20V1TxAmino.AminoConverter,
  ...evmosFeesV1TxAmino.AminoConverter,
  ...evmosVestingV1TxAmino.AminoConverter,
  ...ibcApplicationsTransferV1TxAmino.AminoConverter,
  ...ibcCoreChannelV1TxAmino.AminoConverter,
  ...ibcCoreClientV1TxAmino.AminoConverter,
  ...ibcCoreConnectionV1TxAmino.AminoConverter,
  ...osmosisGammPoolmodelsBalancerTxTxAmino.AminoConverter,
  ...osmosisGammPoolmodelsStableswapTxAmino.AminoConverter,
  ...osmosisGammV1beta1TxAmino.AminoConverter,
  ...osmosisIncentivesTxAmino.AminoConverter,
  ...osmosisLockupTxAmino.AminoConverter,
  ...osmosisSuperfluidTxAmino.AminoConverter,
  ...osmosisTokenfactoryV1beta1TxAmino.AminoConverter
};
export const allProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...akashAuditV1beta1AuditRegistry.registry, ...akashAuditV1beta2AuditRegistry.registry, ...akashCertV1beta2CertRegistry.registry, ...akashDeploymentV1beta2ServiceRegistry.registry, ...akashMarketV1beta2ServiceRegistry.registry, ...akashProviderV1beta1ProviderRegistry.registry, ...akashProviderV1beta2ProviderRegistry.registry, ...cosmosAuthzV1beta1TxRegistry.registry, ...cosmosBankV1beta1TxRegistry.registry, ...cosmosCrisisV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosEvidenceV1beta1TxRegistry.registry, ...cosmosFeegrantV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry, ...cosmosSlashingV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry, ...cosmosVestingV1beta1TxRegistry.registry, ...cosmwasmWasmV1TxRegistry.registry, ...evmosErc20V1TxRegistry.registry, ...evmosFeesV1TxRegistry.registry, ...evmosVestingV1TxRegistry.registry, ...ibcApplicationsTransferV1TxRegistry.registry, ...ibcCoreChannelV1TxRegistry.registry, ...ibcCoreClientV1TxRegistry.registry, ...ibcCoreConnectionV1TxRegistry.registry, ...osmosisGammPoolmodelsBalancerTxTxRegistry.registry, ...osmosisGammPoolmodelsStableswapTxRegistry.registry, ...osmosisGammV1beta1TxRegistry.registry, ...osmosisIncentivesTxRegistry.registry, ...osmosisLockupTxRegistry.registry, ...osmosisSuperfluidTxRegistry.registry, ...osmosisTokenfactoryV1beta1TxRegistry.registry];
export const getAllSigningClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...allProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...allAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getAllSigningClient = async ({
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
  } = getAllSigningClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};
export const getAllSigningTxRpc = async ({
  rpcEndpoint,
  signer
}: SigningClientParams) => {
  let txRpc = (await createRpcClient(rpcEndpoint) as TxRpc);
  const signingClient = await getAllSigningClient({
    rpcEndpoint,
    signer
  });
  txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
    return (signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>);
  };
  return txRpc;
};