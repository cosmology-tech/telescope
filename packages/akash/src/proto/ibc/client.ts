import * as _1116 from "./applications/transfer/v1/tx.aminos";
import * as _1117 from "./applications/transfer/v1/tx.registry";
import * as _1118 from "./core/channel/v1/tx.aminos";
import * as _1119 from "./core/channel/v1/tx.registry";
import * as _1120 from "./core/client/v1/tx.aminos";
import * as _1121 from "./core/client/v1/tx.registry";
import * as _1122 from "./core/connection/v1/tx.aminos";
import * as _1123 from "./core/connection/v1/tx.registry";
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export const getSigningIbcClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1117.registry, ..._1119.registry, ..._1121.registry, ..._1123.registry]);
  const aminoTypes = new AminoTypes({ ..._1116.AminoConverter,
    ..._1118.AminoConverter,
    ..._1120.AminoConverter,
    ..._1122.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};