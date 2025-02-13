export const externalIcJs = `
import { HttpEndpoint } from "@interchainjs/types";
import {
  createQueryRpc,
} from '@interchainjs/utils';
import { Rpc } from "./helpers";

const _rpcClients: Record<string, Rpc> = {};

export const getRpcEndpointKey = (rpcEndpoint: string | HttpEndpoint) => {
    if (typeof rpcEndpoint === 'string') {
        return rpcEndpoint;
    } else if (!!rpcEndpoint) {
        //@ts-ignore
        return rpcEndpoint.url;
    }
}

export const getRpcClient = async (rpcEndpoint: string | HttpEndpoint) => {
    const key = getRpcEndpointKey(rpcEndpoint);
    if (!key) return;
    if (_rpcClients.hasOwnProperty(key)) {
        return _rpcClients[key];
    }
    const rpc = await createRpcClient(rpcEndpoint);
    _rpcClients[key] = rpc;
    return rpc;
}

export const createRpcClient = async (rpcEndpoint: string | HttpEndpoint) => {
  return createQueryRpc(rpcEndpoint)
}
`;