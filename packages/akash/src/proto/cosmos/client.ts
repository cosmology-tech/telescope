import * as _1086 from "./authz/v1beta1/tx.aminos";
import * as _1087 from "./authz/v1beta1/tx.registry";
import * as _1088 from "./bank/v1beta1/tx.aminos";
import * as _1089 from "./bank/v1beta1/tx.registry";
import * as _1090 from "./crisis/v1beta1/tx.aminos";
import * as _1091 from "./crisis/v1beta1/tx.registry";
import * as _1092 from "./distribution/v1beta1/tx.aminos";
import * as _1093 from "./distribution/v1beta1/tx.registry";
import * as _1094 from "./evidence/v1beta1/tx.aminos";
import * as _1095 from "./evidence/v1beta1/tx.registry";
import * as _1096 from "./feegrant/v1beta1/tx.aminos";
import * as _1097 from "./feegrant/v1beta1/tx.registry";
import * as _1098 from "./gov/v1/tx.aminos";
import * as _1099 from "./gov/v1/tx.registry";
import * as _1100 from "./gov/v1beta1/tx.aminos";
import * as _1101 from "./gov/v1beta1/tx.registry";
import * as _1102 from "./group/v1/tx.aminos";
import * as _1103 from "./group/v1/tx.registry";
import * as _1104 from "./nft/v1beta1/tx.aminos";
import * as _1105 from "./nft/v1beta1/tx.registry";
import * as _1106 from "./slashing/v1beta1/tx.aminos";
import * as _1107 from "./slashing/v1beta1/tx.registry";
import * as _1108 from "./staking/v1beta1/tx.aminos";
import * as _1109 from "./staking/v1beta1/tx.registry";
import * as _1110 from "./upgrade/v1beta1/tx.aminos";
import * as _1111 from "./upgrade/v1beta1/tx.registry";
import * as _1112 from "./vesting/v1beta1/tx.aminos";
import * as _1113 from "./vesting/v1beta1/tx.registry";
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1087.registry, ..._1089.registry, ..._1091.registry, ..._1093.registry, ..._1095.registry, ..._1097.registry, ..._1099.registry, ..._1101.registry, ..._1103.registry, ..._1105.registry, ..._1107.registry, ..._1109.registry, ..._1111.registry, ..._1113.registry]);
  const aminoTypes = new AminoTypes({ ..._1086.AminoConverter,
    ..._1088.AminoConverter,
    ..._1090.AminoConverter,
    ..._1092.AminoConverter,
    ..._1094.AminoConverter,
    ..._1096.AminoConverter,
    ..._1098.AminoConverter,
    ..._1100.AminoConverter,
    ..._1102.AminoConverter,
    ..._1104.AminoConverter,
    ..._1106.AminoConverter,
    ..._1108.AminoConverter,
    ..._1110.AminoConverter,
    ..._1112.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};