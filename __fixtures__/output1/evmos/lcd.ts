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
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
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
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  },
  evmos: {
    claims: {
      v1: new (await import("./claims/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    epochs: {
      v1: new (await import("./epochs/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    erc20: {
      v1: new (await import("./erc20/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    fees: {
      v1: new (await import("./fees/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    incentives: {
      v1: new (await import("./incentives/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    inflation: {
      v1: new (await import("./inflation/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    recovery: {
      v1: new (await import("./recovery/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    vesting: {
      v1: new (await import("./vesting/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  }
});