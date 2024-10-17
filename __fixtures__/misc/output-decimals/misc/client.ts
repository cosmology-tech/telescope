import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as miscTxRegistry from "./tx.registry";
import * as miscTxAmino from "./tx.amino";
export const miscAminoConverters = {
  ...miscTxAmino.AminoConverter
};
export const miscProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...miscTxRegistry.registry];
export const getSigningMiscClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...miscProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...miscAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningMiscClient = async ({
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
  } = getSigningMiscClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};