import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("./authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});