import * as _866 from "./applications/transfer/v1/tx.aminos";
import * as _867 from "./applications/transfer/v1/tx.registry";
import * as _868 from "./core/channel/v1/tx.aminos";
import * as _869 from "./core/channel/v1/tx.registry";
import * as _870 from "./core/client/v1/tx.aminos";
import * as _871 from "./core/client/v1/tx.registry";
import * as _872 from "./core/connection/v1/tx.aminos";
import * as _873 from "./core/connection/v1/tx.registry";
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export const getIbcSigningClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._867.registry, ..._869.registry, ..._871.registry, ..._873.registry]);
  const aminoTypes = new AminoTypes({ ..._866.AminoConverter,
    ..._868.AminoConverter,
    ..._870.AminoConverter,
    ..._872.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};