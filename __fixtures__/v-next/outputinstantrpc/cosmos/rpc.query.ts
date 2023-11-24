import { Rpc } from "../helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("./app/v1alpha1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      auth: {
        v1beta1: (await import("./auth/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      authz: {
        v1beta1: (await import("./authz/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      base: {
        reflection: {
          v1beta1: (await import("./base/reflection/v1beta1/reflection.rpc.ReflectionService")).QueryClientImpl(rpc),
          v2alpha1: (await import("./base/reflection/v2alpha1/reflection.rpc.ReflectionService")).QueryClientImpl(rpc)
        },
        tendermint: {
          v1beta1: (await import("./base/tendermint/v1beta1/query.rpc.Service")).QueryClientImpl(rpc)
        }
      },
      distribution: {
        v1beta1: (await import("./distribution/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      evidence: {
        v1beta1: (await import("./evidence/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      feegrant: {
        v1beta1: (await import("./feegrant/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      gov: {
        v1: (await import("./gov/v1/query.rpc.Query")).QueryClientImpl(rpc),
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      group: {
        v1: (await import("./group/v1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      nft: {
        v1beta1: (await import("./nft/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      params: {
        v1beta1: (await import("./params/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      slashing: {
        v1beta1: (await import("./slashing/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      staking: {
        v1beta1: (await import("./staking/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      tx: {
        v1beta1: (await import("./tx/v1beta1/service.rpc.Service")).QueryClientImpl(rpc)
      },
      upgrade: {
        v1beta1: (await import("./upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      }
    }
  };
};