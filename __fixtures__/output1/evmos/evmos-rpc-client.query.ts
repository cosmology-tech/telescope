import { Rpc } from "@osmonauts/helpers";
export const createEvmosRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    }
  },
  evmos: {
    erc20: {
      v1: new (await import("./erc20/v1/query.rpc.query")).QueryClientImpl(rpc)
    }
  }
});