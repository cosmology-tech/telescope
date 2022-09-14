export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => ({
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    base: {
      tendermint: {
        v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      }
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      }),
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    group: {
      v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    tx: {
      v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  },
  osmosis: {
    claim: {
      v1beta1: new (await import("./claim/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    epochs: {
      v1beta1: new (await import("./epochs/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    gamm: {
      v1beta1: new (await import("./gamm/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    incentives: new (await import("./incentives/query.lcd")).LCDQueryClient({
      restEndpoint
    }),
    lockup: new (await import("./lockup/query.lcd")).LCDQueryClient({
      restEndpoint
    }),
    mint: {
      v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    poolincentives: {
      v1beta1: new (await import("./pool-incentives/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    superfluid: new (await import("./superfluid/query.lcd")).LCDQueryClient({
      restEndpoint
    }),
    tokenfactory: {
      v1beta1: new (await import("./tokenfactory/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    txfees: {
      v1beta1: new (await import("./txfees/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  }
});