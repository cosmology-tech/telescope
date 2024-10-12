import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  misc: new (await import("./tx.rpc.msg")).MsgClientImpl(rpc)
});