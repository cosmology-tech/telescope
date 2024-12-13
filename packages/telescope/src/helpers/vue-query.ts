import { TelescopeOptions } from "@cosmology/types";

export const getVueQueryHelper = (options: TelescopeOptions) => {
  return `import { getRpcClient } from './extern${options.restoreImportExtension ?? ""}'
import {
    useQuery,
    UseQueryOptions,
} from '@tanstack/vue-query';
import { Ref, isRef } from 'vue'

import { HttpEndpoint, ProtobufRpcClient } from '@cosmjs/stargate';
${
  options.rpcClients.useConnectComet
    ? "import { CometClient, connectComet, Tendermint34Client, Tendermint37Client } from '@cosmjs/tendermint-rpc';"
    : "import { Tendermint34Client } from '@cosmjs/tendermint-rpc';"
}

export interface VueQueryParams<TResponse, TData = TResponse> {
    options?: Omit<UseQueryOptions<TData, Error, TData>, 'queryKey'>;
}

export interface UseRpcClientQuery<TData> extends VueQueryParams<ProtobufRpcClient, TData> {
    rpcEndpoint: Ref<string | HttpEndpoint>;
}

export interface UseRpcEndpointQuery<TData> extends VueQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
}

export const useRpcEndpoint = <TData = string | HttpEndpoint>({
    getter,
    options,
}: UseRpcEndpointQuery<TData>) => {
    return useQuery<string | HttpEndpoint, Error, TData>({
        queryKey: ['rpcEndpoint', getter],
        queryFn: async () => {
            return await getter();
        },
        ...options
    })
};

export const useRpcClient = <TData = ProtobufRpcClient>({
    rpcEndpoint,
    options,
}: UseRpcClientQuery<TData>) => {
    let params = {
		queryKey: ['rpcClient', rpcEndpoint],
			queryFn: async () => {
			return await getRpcClient(rpcEndpoint.value);
		},
	};
	if (options && !isRef(options)) {
		params = {
			...options,
			...params,
		};
	}
	return useQuery<ProtobufRpcClient | undefined, Error, TData>(params);
};

${
  options.rpcClients.useConnectComet
    ? "interface UseTendermintClient extends VueQueryParams<Tendermint34Client | Tendermint37Client | CometClient> {"
    : "interface UseTendermintClient extends VueQueryParams<Tendermint34Client> {"
}
    rpcEndpoint: Ref<string | HttpEndpoint>;
}

/**
 * Hook that uses vue-query to cache a connected tendermint client.
 */
export const useTendermintClient = ({
    rpcEndpoint,
    options,
}: UseTendermintClient) => {
${
  options.rpcClients.useConnectComet
    ? "    const { data: client } = useQuery<Tendermint34Client | Tendermint37Client | CometClient, Error, Tendermint34Client | Tendermint37Client | CometClient>("
    : "    const { data: client } = useQuery<Tendermint34Client, Error, Tendermint34Client>({"
}
        queryKey: ['client', 'tendermint', rpcEndpoint],
        queryFn: () => ${
          options.rpcClients.useConnectComet
            ? "connectComet(rpcEndpoint.value),"
            : "Tendermint34Client.connect(rpcEndpoint.value),"
        }
		// allow overriding
		throwOnError: (e) => {
			throw new Error(\`Failed to connect to \${rpcEndpoint}\` + '\\n' + e)
		},
		...options,
    })
    return { client }
};
`;
};
