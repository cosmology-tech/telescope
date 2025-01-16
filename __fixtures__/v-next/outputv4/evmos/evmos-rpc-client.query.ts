import { Rpc } from "../helpers.js";
import { connectComet, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
import { createConnectCometQueryClient } from "../extern.js";
export const createEvmosRPCQueryClient = async ({
  rpcEndpoint,
  queryClientResolver
}: {
  rpcEndpoint: string | HttpEndpoint;
  queryClientResolver: (rpcEndpoint: string | HttpEndpoint) => QueryClient;
}) => {
  let client = queryClientResolver ? queryClientResolver(rpcEndpoint) : await createConnectCometQueryClient(rpcEndpoint);
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