import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as cosmwasmWasmV1TxRegistry from "./wasm/v1/tx.registry";
import * as cosmwasmWasmV1TxAmino from "./wasm/v1/tx.amino";
export const getSigningCosmwasmClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...cosmwasmWasmV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...cosmwasmWasmV1TxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};