export const externalComet = `import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from '@cosmjs/stargate'
import { connectComet, Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";

const _rpcClients: Record<string, ProtobufRpcClient> = {};

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
    const cometClient = await connectComet(rpcEndpoint);
    //@ts-ignore
    const client = new QueryClient(cometClient);
    const rpc = createProtobufRpcClient(client);
    _rpcClients[key] = rpc;
    return rpc;
}

export const createRpcClient = async (rpcEndpoint: string | HttpEndpoint) => {
  const cometClient = await connectComet(rpcEndpoint);
  //@ts-ignore
  const client = new QueryClient(cometClient);
  const rpc = createProtobufRpcClient(client);

  return rpc;
}

export const createTm34QueryClient = async (rpcEndpoint: string | HttpEndpoint) => {
    const tmClient = await Tendermint34Client.connect(rpcEndpoint);
    //@ts-ignore
    return new QueryClient(tmClient);
}

export const createConnectCometQueryClient = async (rpcEndpoint: string | HttpEndpoint) => {
    const cometClient = await connectComet(rpcEndpoint);
    //@ts-ignore
    return new QueryClient(cometClient);
}
`;