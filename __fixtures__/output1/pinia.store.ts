import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _AkashAuditV1beta2Querypinia from "./akash/audit/v1beta2/query.pinia.store";
import * as _AkashCertV1beta2Querypinia from "./akash/cert/v1beta2/query.pinia.store";
import * as _AkashDeploymentV1beta2Querypinia from "./akash/deployment/v1beta2/query.pinia.store";
import * as _AkashEscrowV1beta1Querypinia from "./akash/escrow/v1beta1/query.pinia.store";
import * as _AkashEscrowV1beta2Querypinia from "./akash/escrow/v1beta2/query.pinia.store";
import * as _AkashMarketV1beta2Querypinia from "./akash/market/v1beta2/query.pinia.store";
import * as _AkashProviderV1beta2Querypinia from "./akash/provider/v1beta2/query.pinia.store";
import * as _CosmosAppV1alpha1Querypinia from "./cosmos/app/v1alpha1/query.pinia.store";
import * as _CosmosAuthV1beta1Querypinia from "./cosmos/auth/v1beta1/query.pinia.store";
import * as _CosmosAuthzV1beta1Querypinia from "./cosmos/authz/v1beta1/query.pinia.store";
import * as _CosmosBankV1beta1Querypinia from "./cosmos/bank/v1beta1/query.pinia.store";
import * as _CosmosBaseReflectionV1beta1Reflectionrpcreflectionservice from "./cosmos/base/reflection/v1beta1/reflection.rpc.ReflectionService.ts";
import * as _CosmosBaseReflectionV2alpha1Reflectionrpcreflectionservice from "./cosmos/base/reflection/v2alpha1/reflection.rpc.ReflectionService.ts";
import * as _CosmosBaseTendermintV1beta1Querypinia from "./cosmos/base/tendermint/v1beta1/query.pinia.store";
import * as _CosmosDistributionV1beta1Querypinia from "./cosmos/distribution/v1beta1/query.pinia.store";
import * as _CosmosEvidenceV1beta1Querypinia from "./cosmos/evidence/v1beta1/query.pinia.store";
import * as _CosmosFeegrantV1beta1Querypinia from "./cosmos/feegrant/v1beta1/query.pinia.store";
import * as _CosmosGovV1Querypinia from "./cosmos/gov/v1/query.pinia.store";
import * as _CosmosGovV1beta1Querypinia from "./cosmos/gov/v1beta1/query.pinia.store";
import * as _CosmosGroupV1Querypinia from "./cosmos/group/v1/query.pinia.store";
import * as _CosmosMintV1beta1Querypinia from "./cosmos/mint/v1beta1/query.pinia.store";
import * as _CosmosNftV1beta1Querypinia from "./cosmos/nft/v1beta1/query.pinia.store";
import * as _CosmosParamsV1beta1Querypinia from "./cosmos/params/v1beta1/query.pinia.store";
import * as _CosmosSlashingV1beta1Querypinia from "./cosmos/slashing/v1beta1/query.pinia.store";
import * as _CosmosStakingV1beta1Querypinia from "./cosmos/staking/v1beta1/query.pinia.store";
import * as _CosmosTxV1beta1Servicepinia from "./cosmos/tx/v1beta1/service.pinia.store";
import * as _CosmosUpgradeV1beta1Querypinia from "./cosmos/upgrade/v1beta1/query.pinia.store";
import * as _CosmwasmWasmV1Querypinia from "./cosmwasm/wasm/v1/query.pinia.store";
import * as _EvmosClaimsV1Querypinia from "./evmos/claims/v1/query.pinia.store";
import * as _EvmosEpochsV1Querypinia from "./evmos/epochs/v1/query.pinia.store";
import * as _EvmosErc20V1Querypinia from "./evmos/erc20/v1/query.pinia.store";
import * as _EvmosFeesV1Querypinia from "./evmos/fees/v1/query.pinia.store";
import * as _EvmosIncentivesV1Querypinia from "./evmos/incentives/v1/query.pinia.store";
import * as _EvmosInflationV1Querypinia from "./evmos/inflation/v1/query.pinia.store";
import * as _EvmosRecoveryV1Querypinia from "./evmos/recovery/v1/query.pinia.store";
import * as _EvmosVestingV1Querypinia from "./evmos/vesting/v1/query.pinia.store";
import * as _IbcApplicationsTransferV1Querypinia from "./ibc/applications/transfer/v1/query.pinia.store";
import * as _IbcCoreChannelV1Querypinia from "./ibc/core/channel/v1/query.pinia.store";
import * as _IbcCoreClientV1Querypinia from "./ibc/core/client/v1/query.pinia.store";
import * as _IbcCoreConnectionV1Querypinia from "./ibc/core/connection/v1/query.pinia.store";
import * as _IbcCorePortV1Querypinia from "./ibc/core/port/v1/query.pinia.store";
import * as _OsmosisClaimV1beta1Querypinia from "./osmosis/claim/v1beta1/query.pinia.store";
import * as _OsmosisEpochsQuerypinia from "./osmosis/epochs/query.pinia.store";
import * as _OsmosisGammV1beta1Querypinia from "./osmosis/gamm/v1beta1/query.pinia.store";
import * as _OsmosisGammV2Querypinia from "./osmosis/gamm/v2/query.pinia.store";
import * as _OsmosisIbcratelimitV1beta1Querypinia from "./osmosis/ibc-rate-limit/v1beta1/query.pinia.store";
import * as _OsmosisIncentivesQuerypinia from "./osmosis/incentives/query.pinia.store";
import * as _OsmosisLockupQuerypinia from "./osmosis/lockup/query.pinia.store";
import * as _OsmosisMintV1beta1Querypinia from "./osmosis/mint/v1beta1/query.pinia.store";
import * as _OsmosisPoolincentivesV1beta1Querypinia from "./osmosis/pool-incentives/v1beta1/query.pinia.store";
import * as _OsmosisSuperfluidQuerypinia from "./osmosis/superfluid/query.pinia.store";
import * as _OsmosisTokenfactoryV1beta1Querypinia from "./osmosis/tokenfactory/v1beta1/query.pinia.store";
import * as _OsmosisTwapV1beta1Querypinia from "./osmosis/twap/v1beta1/query.pinia.store";
import * as _OsmosisTxfeesV1beta1Querypinia from "./osmosis/txfees/v1beta1/query.pinia.store";
import * as _TendermintAbciTypesrpcabciapplication from "./tendermint/abci/types.rpc.ABCIApplication.ts";
export const createPiniaStores = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      audit: {
        v1beta2: _AkashAuditV1beta2Querypinia.usePiniaStore(rpc)
      },
      cert: {
        v1beta2: _AkashCertV1beta2Querypinia.usePiniaStore(rpc)
      },
      deployment: {
        v1beta2: _AkashDeploymentV1beta2Querypinia.usePiniaStore(rpc)
      },
      escrow: {
        v1beta1: _AkashEscrowV1beta1Querypinia.usePiniaStore(rpc),
        v1beta2: _AkashEscrowV1beta2Querypinia.usePiniaStore(rpc)
      },
      market: {
        v1beta2: _AkashMarketV1beta2Querypinia.usePiniaStore(rpc)
      },
      provider: {
        v1beta2: _AkashProviderV1beta2Querypinia.usePiniaStore(rpc)
      }
    },
    cosmos: {
      app: {
        v1alpha1: _CosmosAppV1alpha1Querypinia.usePiniaStore(rpc)
      },
      auth: {
        v1beta1: _CosmosAuthV1beta1Querypinia.usePiniaStore(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Querypinia.usePiniaStore(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Querypinia.usePiniaStore(rpc)
      },
      base: {
        reflection: {
          v1beta1: _CosmosBaseReflectionV1beta1Reflectionrpcreflectionservice.usePiniaStore(rpc),
          v2alpha1: _CosmosBaseReflectionV2alpha1Reflectionrpcreflectionservice.usePiniaStore(rpc)
        },
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Querypinia.usePiniaStore(rpc)
        }
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Querypinia.usePiniaStore(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Querypinia.usePiniaStore(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Querypinia.usePiniaStore(rpc)
      },
      gov: {
        v1: _CosmosGovV1Querypinia.usePiniaStore(rpc),
        v1beta1: _CosmosGovV1beta1Querypinia.usePiniaStore(rpc)
      },
      group: {
        v1: _CosmosGroupV1Querypinia.usePiniaStore(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Querypinia.usePiniaStore(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Querypinia.usePiniaStore(rpc)
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Querypinia.usePiniaStore(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Querypinia.usePiniaStore(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Querypinia.usePiniaStore(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicepinia.usePiniaStore(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Querypinia.usePiniaStore(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Querypinia.usePiniaStore(rpc)
      }
    },
    evmos: {
      claims: {
        v1: _EvmosClaimsV1Querypinia.usePiniaStore(rpc)
      },
      epochs: {
        v1: _EvmosEpochsV1Querypinia.usePiniaStore(rpc)
      },
      erc20: {
        v1: _EvmosErc20V1Querypinia.usePiniaStore(rpc)
      },
      fees: {
        v1: _EvmosFeesV1Querypinia.usePiniaStore(rpc)
      },
      incentives: {
        v1: _EvmosIncentivesV1Querypinia.usePiniaStore(rpc)
      },
      inflation: {
        v1: _EvmosInflationV1Querypinia.usePiniaStore(rpc)
      },
      recovery: {
        v1: _EvmosRecoveryV1Querypinia.usePiniaStore(rpc)
      },
      vesting: {
        v1: _EvmosVestingV1Querypinia.usePiniaStore(rpc)
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: _IbcApplicationsTransferV1Querypinia.usePiniaStore(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Querypinia.usePiniaStore(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Querypinia.usePiniaStore(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Querypinia.usePiniaStore(rpc)
        },
        port: {
          v1: _IbcCorePortV1Querypinia.usePiniaStore(rpc)
        }
      }
    },
    osmosis: {
      claim: {
        v1beta1: _OsmosisClaimV1beta1Querypinia.usePiniaStore(rpc)
      },
      epochs: {
        v1beta1: _OsmosisEpochsQuerypinia.usePiniaStore(rpc)
      },
      gamm: {
        v1beta1: _OsmosisGammV1beta1Querypinia.usePiniaStore(rpc),
        v2: _OsmosisGammV2Querypinia.usePiniaStore(rpc)
      },
      ibcratelimit: {
        v1beta1: _OsmosisIbcratelimitV1beta1Querypinia.usePiniaStore(rpc)
      },
      incentives: _OsmosisIncentivesQuerypinia.usePiniaStore(rpc),
      lockup: _OsmosisLockupQuerypinia.usePiniaStore(rpc),
      mint: {
        v1beta1: _OsmosisMintV1beta1Querypinia.usePiniaStore(rpc)
      },
      poolincentives: {
        v1beta1: _OsmosisPoolincentivesV1beta1Querypinia.usePiniaStore(rpc)
      },
      superfluid: _OsmosisSuperfluidQuerypinia.usePiniaStore(rpc),
      tokenfactory: {
        v1beta1: _OsmosisTokenfactoryV1beta1Querypinia.usePiniaStore(rpc)
      },
      twap: {
        v1beta1: _OsmosisTwapV1beta1Querypinia.usePiniaStore(rpc)
      },
      txfees: {
        v1beta1: _OsmosisTxfeesV1beta1Querypinia.usePiniaStore(rpc)
      }
    },
    tendermint: {
      abci: _TendermintAbciTypesrpcabciapplication.usePiniaStore(rpc)
    }
  };
};