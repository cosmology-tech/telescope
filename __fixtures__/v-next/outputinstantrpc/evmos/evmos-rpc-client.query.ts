import { Rpc } from "../helpers";
export const createEvmosRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      gov: {
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      }
    },
    evmos: {
      erc20: {
        v1: (await import("./erc20/v1/query.rpc.Query")).QueryClientImpl(rpc)
      }
    }
  };
};