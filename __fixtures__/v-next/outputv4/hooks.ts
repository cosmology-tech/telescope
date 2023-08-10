import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _AkashCertV1beta2Queryrpc from "./akash/cert/v1beta2/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query";
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      cert: {
        v1beta2: _AkashCertV1beta2Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    cosmos: {
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    osmosis: {
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    useCertificates: _AkashCertV1beta2Queryrpc.createRpcQueryHooks(rpc).useCertificates,
    useAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    useAccount: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccount,
    useParams: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    useAuthModuleAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccounts,
    useBech32Prefix: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useBech32Prefix,
    useAddressBytesToString: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressBytesToString,
    useAddressStringToBytes: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressStringToBytes,
    useBankBalance: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    useNftBalance: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    usePools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePools,
    useNumPools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useNumPools,
    useTotalLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalLiquidity,
    usePoolsWithFilter: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolsWithFilter,
    usePool: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePool,
    usePoolType: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolType,
    useCalcJoinPoolNoSwapShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolNoSwapShares,
    useCalcJoinPoolShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolShares,
    useCalcExitPoolCoinsFromShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcExitPoolCoinsFromShares,
    usePoolParams: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolParams,
    useTotalPoolLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalPoolLiquidity,
    useTotalShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalShares,
    useSpotPrice: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotPrice,
    useEstimateSwapExactAmountIn: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountIn,
    useEstimateSwapExactAmountOut: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountOut,
    useOsmosisGammV2Spotprice: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc).useSpotPrice
  };
};