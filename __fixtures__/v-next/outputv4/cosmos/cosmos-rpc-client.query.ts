import { Rpc } from "../helpers.js";
import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createCosmicRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await connectComet(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      }
    }
  };
};