import { Rpc } from "../helpers";
export const createCosmicRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => {
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      },
      gov: {
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query")).QueryClientImpl(rpc)
      }
    }
  };
};