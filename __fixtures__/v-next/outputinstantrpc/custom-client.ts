import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { createRpcClient } from "./extern";
import { DeliverTxResponse, EncodeObject, StdFee, TxRpc, SigningClientParams } from "./types";
import * as cosmosGovV1TxRegistry from "./cosmos/gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./cosmos/gov/v1beta1/tx.registry";
import * as ibcCoreChannelV1TxRegistry from "./ibc/core/channel/v1/tx.registry";
import * as cosmosGovV1TxAmino from "./cosmos/gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "./cosmos/gov/v1beta1/tx.amino";
import * as ibcCoreChannelV1TxAmino from "./ibc/core/channel/v1/tx.amino";
export const customAminoConverters = {
  ...cosmosGovV1TxAmino.AminoConverter,
  ...cosmosGovV1beta1TxAmino.AminoConverter,
  ...ibcCoreChannelV1TxAmino.AminoConverter
};
export const customProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...ibcCoreChannelV1TxRegistry.registry];
export const getCustomSigningClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...customProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...customAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getCustomSigningClient = async ({
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
  } = getCustomSigningClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};
export const getCustomSigningTxRpc = async ({
  rpcEndpoint,
  signer
}: SigningClientParams) => {
  let txRpc = (await createRpcClient(rpcEndpoint) as TxRpc);
  const signingClient = await getCustomSigningClient({
    rpcEndpoint,
    signer
  });
  txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
    return (signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>);
  };
  return txRpc;
};