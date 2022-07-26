export const createRPCQueryClient = async ({
  rpcEndpoint
}) => ({
  cosmos: {
    app: {
      v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    }
  },
  evmos: {
    claims: {
      v1: new (await import("./claims/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    epochs: {
      v1: new (await import("./epochs/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    erc20: {
      v1: new (await import("./erc20/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    fees: {
      v1: new (await import("./fees/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    incentives: {
      v1: new (await import("./incentives/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    inflation: {
      v1: new (await import("./inflation/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    recovery: {
      v1: new (await import("./recovery/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    },
    vesting: {
      v1: new (await import("./vesting/v1/query.rpc.query")).QueryClientImpl({
        rpcEndpoint
      })
    }
  }
});