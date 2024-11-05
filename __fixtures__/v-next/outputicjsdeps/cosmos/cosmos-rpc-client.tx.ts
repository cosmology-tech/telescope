import { Rpc } from "../helpers.js";
export const createCosmicRPCTxClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("./bank/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("./gov/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    }
  }
});