export const createGrpcGateWayClient = async ({
  endpoint
}: {
  endpoint: string;
}) => {
  endpoint = endpoint.replace(/\/*$/g, "");
  return {
    cosmos: {
      app: {
        v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(endpoint)
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).QueryClientImpl(endpoint),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).ServiceClientImpl(endpoint)
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      }
    },
    osmosis: {
      claim: {
        v1beta1: new (await import("./claim/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      epochs: {
        v1beta1: new (await import("./epochs/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      gamm: {
        v1beta1: new (await import("./gamm/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint),
        v2: new (await import("./gamm/v2/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      ibcratelimit: {
        v1beta1: new (await import("./ibc-rate-limit/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      incentives: new (await import("./incentives/query.rpc.Query")).QueryClientImpl(endpoint),
      lockup: new (await import("./lockup/query.rpc.Query")).QueryClientImpl(endpoint),
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      poolincentives: {
        v1beta1: new (await import("./pool-incentives/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      superfluid: new (await import("./superfluid/query.rpc.Query")).QueryClientImpl(endpoint),
      tokenfactory: {
        v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      twap: {
        v1beta1: new (await import("./twap/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      },
      txfees: {
        v1beta1: new (await import("./txfees/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
      }
    }
  };
};