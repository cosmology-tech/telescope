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
  osmosis: {
    claim: {
      v1beta1: new (await import("./claim/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    epochs: {
      v1beta1: new (await import("./epochs/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    gamm: {
      v1beta1: new (await import("./gamm/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    incentives: new (await import("./incentives/query.rpc.query")).QueryClientImpl({
      rpc
    }),
    lockup: new (await import("./lockup/query.rpc.query")).QueryClientImpl({
      rpc
    }),
    mint: {
      v1beta1: new (await import("./mint/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    poolincentives: {
      v1beta1: new (await import("./pool-incentives/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    superfluid: new (await import("./superfluid/query.rpc.query")).QueryClientImpl({
      rpc
    }),
    tokenfactory: {
      v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    },
    txfees: {
      v1beta1: new (await import("./txfees/v1beta1/query.rpc.query")).QueryClientImpl({
        rpc
      })
    }
  }
});