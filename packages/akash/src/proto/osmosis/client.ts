import * as _1124 from "./gamm/v1beta1/tx.aminos";
import * as _1125 from "./gamm/v1beta1/tx.registry";
import * as _1126 from "./incentives/tx.aminos";
import * as _1127 from "./incentives/tx.registry";
import * as _1128 from "./lockup/tx.aminos";
import * as _1129 from "./lockup/tx.registry";
import * as _1130 from "./superfluid/tx.aminos";
import * as _1131 from "./superfluid/tx.registry";
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export const getSigningOsmosisClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1125.registry, ..._1127.registry, ..._1129.registry, ..._1131.registry]);
  const aminoTypes = new AminoTypes({ ..._1124.AminoConverter,
    ..._1126.AminoConverter,
    ..._1128.AminoConverter,
    ..._1130.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};