import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      base: {
        reflection: {
          v1beta1: (await import("../cosmos/base/reflection/v1beta1/reflection.rpc.ReflectionService")).QueryClientImpl(rpc),
          v2alpha1: (await import("../cosmos/base/reflection/v2alpha1/reflection.rpc.ReflectionService")).QueryClientImpl(rpc)
        },
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).QueryClientImpl(rpc)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).QueryClientImpl(rpc),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).QueryClientImpl(rpc)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      }
    },
    tendermint: {
      abci: (await import("./abci/types.rpc.ABCIApplication")).QueryClientImpl(rpc)
    }
  };
};