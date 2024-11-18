import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { createRpcClient } from "../outputinstantrpc/extern";
import { DeliverTxResponse, EncodeObject, StdFee, TxRpc, SigningClientParams } from "./types";
import * as ibcCoreChannelV1TxAmino from "./ibc/core/channel/v1/tx.amino";
import * as ibcCoreChannelV1TxRegistry from "./ibc/core/channel/v1/tx.registry";
import * as cosmosGovV1TxAmino from "./cosmos/gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "./cosmos/gov/v1beta1/tx.amino";
import * as cosmosGovV1TxRegistry from "./cosmos/gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./cosmos/gov/v1beta1/tx.registry";

export const combinedAminoConverters = {
    ...ibcCoreChannelV1TxAmino.AminoConverter,
    ...cosmosGovV1TxAmino.AminoConverter,
    ...cosmosGovV1beta1TxAmino.AminoConverter,
};

export const combinedProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...ibcCoreChannelV1TxRegistry.registry,
    ...cosmosGovV1TxRegistry.registry,
    ...cosmosGovV1beta1TxRegistry.registry,
];

export const getCosmosIbcSigningClientOptions = ({
    defaultTypes = defaultRegistryTypes
}: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
    registry: Registry;
    aminoTypes: AminoTypes;
} => {
    const registry = new Registry([
        ...defaultTypes,
        ...combinedProtoRegistry,
    ]);
    const aminoTypes = new AminoTypes({
        ...combinedAminoConverters,
    });
    return {
        registry,
        aminoTypes
    }
}

export const getSigningCosmosIbcClient = async ({
    rpcEndpoint,
    signer,
    defaultTypes = defaultRegistryTypes
}: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    const {
        registry,
        aminoTypes
    } = getCosmosIbcSigningClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: (registry as any),
        aminoTypes
    });
    return client;
};

export const getSigningCosmosIbcTxRpc = async ({
    rpcEndpoint,
    signer
}: SigningClientParams) => {
    let txRpc = (await createRpcClient(rpcEndpoint) as TxRpc);
    const signingClient = await getSigningCosmosIbcClient({
        rpcEndpoint,
        signer
    });
    txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
        return (signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>);
    };
    return txRpc;
};