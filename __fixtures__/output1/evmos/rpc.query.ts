export const createRPCQueryClient = async ({
  rpc
}) => ({
  cosmos: {
    app: {
      v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.rpc.query")).QueryClientImpl({
        rpc
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    }
  },
  evmos: {
    claims: {
      v1: new (await import("./claims/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    epochs: {
      v1: new (await import("./epochs/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    erc20: {
      v1: new (await import("./erc20/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    fees: {
      v1: new (await import("./fees/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    incentives: {
      v1: new (await import("./incentives/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    inflation: {
      v1: new (await import("./inflation/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    recovery: {
      v1: new (await import("./recovery/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    vesting: {
      v1: new (await import("./vesting/v1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    }
  }
});