export const createRPCMsgClient = async ({
  rpcEndpoint
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("./authz/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("./bank/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    crisis: {
      v1beta1: new (await import("./crisis/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("./distribution/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("./evidence/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("./feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("./gov/v1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      }),
      v1beta1: new (await import("./gov/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("./group/v1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("./nft/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("./slashing/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("./staking/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("./upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    },
    vesting: {
      v1beta1: new (await import("./vesting/v1beta1/tx.rpc.msg")).MsgClientImpl({
        rpcEndpoint
      })
    }
  }
});