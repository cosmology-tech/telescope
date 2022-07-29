import { Rpc } from "@osmonauts/helpers";
export const createCosmicRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("./bank/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("./gov/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    }
  }
});