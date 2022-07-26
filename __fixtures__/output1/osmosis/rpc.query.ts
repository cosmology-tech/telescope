export const createRPCQueryClient = async ({
  rpcEndpoint
}) => ({
  cosmos: {
    app: {
      v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    }
  },
  osmosis: {
    claim: {
      v1beta1: new (await import("./claim/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    epochs: {
      v1beta1: new (await import("./epochs/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    gamm: {
      v1beta1: new (await import("./gamm/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    incentives: new (await import("./incentives/query.rpc.query")).RPCQueryClient({
      rpcEndpoint
    }),
    lockup: new (await import("./lockup/query.rpc.query")).RPCQueryClient({
      rpcEndpoint
    }),
    mint: {
      v1beta1: new (await import("./mint/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    poolincentives: {
      v1beta1: new (await import("./pool-incentives/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    superfluid: new (await import("./superfluid/query.rpc.query")).RPCQueryClient({
      rpcEndpoint
    }),
    tokenfactory: {
      v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    txfees: {
      v1beta1: new (await import("./txfees/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    }
  }
});