import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createClientImpl(rpc)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      base: {
        reflection: {
          v1beta1: (await import("../cosmos/base/reflection/v1beta1/reflection.rpc.ReflectionService")).createClientImpl(rpc),
          v2alpha1: (await import("../cosmos/base/reflection/v2alpha1/reflection.rpc.ReflectionService")).createClientImpl(rpc)
        },
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createClientImpl(rpc)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createClientImpl(rpc),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createClientImpl(rpc)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createClientImpl(rpc)
      }
    },
    evmos: {
      claims: {
        v1: (await import("./claims/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      epochs: {
        v1: (await import("./epochs/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      erc20: {
        v1: (await import("./erc20/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      fees: {
        v1: (await import("./fees/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      incentives: {
        v1: (await import("./incentives/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      inflation: {
        v1: (await import("./inflation/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      recovery: {
        v1: (await import("./recovery/v1/query.rpc.Query")).createClientImpl(rpc)
      },
      vesting: {
        v1: (await import("./vesting/v1/query.rpc.Query")).createClientImpl(rpc)
      }
    }
  };
};