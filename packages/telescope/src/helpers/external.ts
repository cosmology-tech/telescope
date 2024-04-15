export const external = `import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from '@cosmjs/stargate'
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { sha256 } from "@cosmjs/crypto";

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
    const tmClient = await Tendermint34Client.connect(rpcEndpoint);
    //@ts-ignore
    const client = new QueryClient(tmClient);
    const rpc = createProtobufRpcClient(client);
    _rpcClients[key] = rpc;
    return rpc;
}

export function toHex(data: Uint8Array): string {
  let out = "";
  for (let i = 0; i < data.length; i++) {
      out += ("0" + data[i].toString(16)).slice(-2);

      if ((i + 1) % 2 === 0 && i !== data.length - 1) {
          out += " ";
      }
  }
  return out;
}

export function toByteTextual(data: Uint8Array): string {
  if (data.length <= 35) {
    return toHex(data);
  } else {
    return \`SHA-256=\${toHex(sha256(data))}\`;
  }
}
`;