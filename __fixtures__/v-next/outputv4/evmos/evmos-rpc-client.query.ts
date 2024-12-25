import { Rpc } from "../helpers.js";
import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createEvmosRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await connectComet(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client)
      }
    },
    evmos: {
      erc20: {
        v1: (await import("./erc20/v1/query.rpc.Query.js")).createRpcQueryExtension(client)
      }
    }
  };
};