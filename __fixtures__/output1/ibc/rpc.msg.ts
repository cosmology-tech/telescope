export const createRPCMsgClient = async ({
  rpcEndpoint
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).RPCMsgClient({
        rpcEndpoint
      })
    }
  },
  ibc: {
    applications: {
      transfer: {
        v1: new (await import("./applications/transfer/v1/query.rpc.query")).RPCMsgClient({
          rpcEndpoint
        })
      }
    },
    core: {
      channel: {
        v1: new (await import("./core/channel/v1/query.rpc.query")).RPCMsgClient({
          rpcEndpoint
        })
      },
      client: {
        v1: new (await import("./core/client/v1/query.rpc.query")).RPCMsgClient({
          rpcEndpoint
        })
      },
      connection: {
        v1: new (await import("./core/connection/v1/query.rpc.query")).RPCMsgClient({
          rpcEndpoint
        })
      }
    }
  }
});