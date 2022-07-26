export const createRPCMsgClient = async ({
  rpcEndpoint
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("./authz/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("./bank/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("./distribution/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("./evidence/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("./feegrant/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("./gov/v1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      }),
      v1beta1: new (await import("./gov/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("./group/v1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("./nft/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("./slashing/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("./staking/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("./upgrade/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    }
  }
});