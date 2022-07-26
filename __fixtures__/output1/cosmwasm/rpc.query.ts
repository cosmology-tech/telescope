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
  cosmwasm: {
    wasm: {
      v1: new (await import("./wasm/v1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    }
  }
});