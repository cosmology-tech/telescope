import { Rpc } from "../helpers.js";
export const createEvmosRPCTxClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    }
  },
  evmos: {
    erc20: {
      v1: new (await import("./erc20/v1/tx.rpc.msg.js")).MsgClientImpl(rpc)
    }
  }
});