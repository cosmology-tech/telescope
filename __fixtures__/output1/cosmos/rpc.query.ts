export const createRPCQueryClient = async ({
  rpcEndpoint
}) => ({
  cosmos: {
    app: {
      v1alpha1: new (await import("./app/v1alpha1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    auth: {
      v1beta1: new (await import("./auth/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    authz: {
      v1beta1: new (await import("./authz/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("./bank/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("./distribution/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("./evidence/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("./feegrant/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("./gov/v1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      }),
      v1beta1: new (await import("./gov/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("./group/v1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    mint: {
      v1beta1: new (await import("./mint/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("./nft/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    params: {
      v1beta1: new (await import("./params/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("./slashing/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("./staking/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("./upgrade/v1beta1/query.rpc.query")).RPCQueryClient({
        rpcEndpoint
      })
    }
  }
});