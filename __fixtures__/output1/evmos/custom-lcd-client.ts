export const createEvmosLCDClient = async ({
  restEndpoint
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  },
  evmos: {
    erc20: {
      v1: new (await import("./erc20/v1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  }
});