export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => ({
  akash: {
    audit: {
      v1beta2: new (await import("./audit/v1beta2/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    cert: {
      v1beta2: new (await import("./cert/v1beta2/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    deployment: {
      v1beta1: new (await import("./deployment/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      }),
      v1beta2: new (await import("./deployment/v1beta2/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    escrow: {
      v1beta1: new (await import("./escrow/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      }),
      v1beta2: new (await import("./escrow/v1beta2/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    market: {
      v1beta2: new (await import("./market/v1beta2/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    provider: {
      v1beta2: new (await import("./provider/v1beta2/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  },
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
  }
});