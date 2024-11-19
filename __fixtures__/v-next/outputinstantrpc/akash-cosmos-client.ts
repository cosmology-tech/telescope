import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { createRpcClient } from "./extern";
import { DeliverTxResponse, EncodeObject, StdFee, TxRpc, SigningClientParams } from "../outputcombinedclient/types";
import * as cosmosGroupV1TxAmino from "../outputcombinedclient/cosmos/group/v1/tx.amino";
import * as cosmosNftV1beta1TxAmino from "../outputcombinedclient/cosmos/nft/v1beta1/tx.amino";
import * as akashAuditV1beta1AuditAmino from "../outputcombinedclient/akash/audit/v1beta1/audit.amino";
import * as akashAuditV1beta2AuditAmino from "../outputcombinedclient/akash/audit/v1beta2/audit.amino";
import * as cosmosGroupV1TxRegistry from "../outputcombinedclient/cosmos/group/v1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "../outputcombinedclient/cosmos/nft/v1beta1/tx.registry";
import * as akashAuditV1beta1AuditRegistry from "../outputcombinedclient/akash/audit/v1beta1/audit.registry";
import * as akashAuditV1beta2AuditRegistry from "../outputcombinedclient/akash/audit/v1beta2/audit.registry";


export const akashCosmosConverters = {
    ...cosmosGroupV1TxAmino.AminoConverter,
    ...cosmosNftV1beta1TxAmino.AminoConverter,
    ...akashAuditV1beta1AuditAmino.AminoConverter,
    ...akashAuditV1beta2AuditAmino.AminoConverter,
};

export const akashCosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosGroupV1TxRegistry.registry,
    ...cosmosNftV1beta1TxRegistry.registry,
    ...akashAuditV1beta1AuditRegistry.registry,
    ...akashAuditV1beta2AuditRegistry.registry,
];

export const getAkashCosmosSigningClientOptions = ({
    defaultTypes = defaultRegistryTypes
}: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
    registry: Registry;
    aminoTypes: AminoTypes;
} => {
    const registry = new Registry([
        ...defaultTypes,
        ...akashCosmosProtoRegistry,
    ]);
    const aminoTypes = new AminoTypes({
        ...akashCosmosConverters,
    });
    return {
        registry,
        aminoTypes
    }
}

export const getAkashCosmosSigningClient = async ({
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
    } = getAkashCosmosSigningClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: (registry as any),
        aminoTypes
    });
    return client;
};

export const getAkashCosmosSigningTxRpc = async ({
    rpcEndpoint,
    signer
}: SigningClientParams) => {
    let txRpc = (await createRpcClient(rpcEndpoint) as TxRpc);
    const signingClient = await getAkashCosmosSigningClient({
        rpcEndpoint,
        signer
    });
    txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
        return (signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>);
    };
    return txRpc;
};