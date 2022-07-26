export const createRPCMsgClient = async ({
  rpcEndpoint
}) => ({
  akash: {
    audit: {
      v1beta1: new (await import("./audit/v1beta1/audit.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      }),
      v1beta2: new (await import("./audit/v1beta2/audit.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    cert: {
      v1beta2: new (await import("./cert/v1beta2/cert.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    deployment: {
      v1beta1: new (await import("./deployment/v1beta1/deployment.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      }),
      v1beta2: new (await import("./deployment/v1beta2/service.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    market: {
      v1beta2: new (await import("./market/v1beta2/service.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    provider: {
      v1beta1: new (await import("./provider/v1beta1/provider.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      }),
      v1beta2: new (await import("./provider/v1beta2/provider.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    }
  },
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    }
  }
});