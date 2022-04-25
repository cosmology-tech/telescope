import * as _1070 from "./audit/v1beta1/audit.aminos";
import * as _1071 from "./audit/v1beta1/audit.registry";
import * as _1072 from "./audit/v1beta2/audit.aminos";
import * as _1073 from "./audit/v1beta2/audit.registry";
import * as _1074 from "./cert/v1beta2/cert.aminos";
import * as _1075 from "./cert/v1beta2/cert.registry";
import * as _1076 from "./deployment/v1beta1/deployment.aminos";
import * as _1077 from "./deployment/v1beta1/deployment.registry";
import * as _1078 from "./deployment/v1beta2/service.aminos";
import * as _1079 from "./deployment/v1beta2/service.registry";
import * as _1080 from "./market/v1beta2/service.aminos";
import * as _1081 from "./market/v1beta2/service.registry";
import * as _1082 from "./provider/v1beta1/provider.aminos";
import * as _1083 from "./provider/v1beta1/provider.registry";
import * as _1084 from "./provider/v1beta2/provider.aminos";
import * as _1085 from "./provider/v1beta2/provider.registry";
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export const getSigningAkashClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1071.registry, ..._1073.registry, ..._1075.registry, ..._1077.registry, ..._1079.registry, ..._1081.registry, ..._1083.registry, ..._1085.registry]);
  const aminoTypes = new AminoTypes({ ..._1070.AminoConverter,
    ..._1072.AminoConverter,
    ..._1074.AminoConverter,
    ..._1076.AminoConverter,
    ..._1078.AminoConverter,
    ..._1080.AminoConverter,
    ..._1082.AminoConverter,
    ..._1084.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};