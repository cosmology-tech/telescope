import * as _1132 from "./akash/audit/v1beta1/audit.aminos";
import * as _1133 from "./akash/audit/v1beta1/audit.registry";
import * as _1134 from "./akash/audit/v1beta2/audit.aminos";
import * as _1135 from "./akash/audit/v1beta2/audit.registry";
import * as _1136 from "./akash/cert/v1beta2/cert.aminos";
import * as _1137 from "./akash/cert/v1beta2/cert.registry";
import * as _1138 from "./akash/deployment/v1beta1/deployment.aminos";
import * as _1139 from "./akash/deployment/v1beta1/deployment.registry";
import * as _1140 from "./akash/deployment/v1beta2/service.aminos";
import * as _1141 from "./akash/deployment/v1beta2/service.registry";
import * as _1142 from "./akash/market/v1beta2/service.aminos";
import * as _1143 from "./akash/market/v1beta2/service.registry";
import * as _1144 from "./akash/provider/v1beta1/provider.aminos";
import * as _1145 from "./akash/provider/v1beta1/provider.registry";
import * as _1146 from "./akash/provider/v1beta2/provider.aminos";
import * as _1147 from "./akash/provider/v1beta2/provider.registry";
import * as _1148 from "./cosmos/authz/v1beta1/tx.aminos";
import * as _1149 from "./cosmos/authz/v1beta1/tx.registry";
import * as _1150 from "./cosmos/bank/v1beta1/tx.aminos";
import * as _1151 from "./cosmos/bank/v1beta1/tx.registry";
import * as _1152 from "./cosmos/crisis/v1beta1/tx.aminos";
import * as _1153 from "./cosmos/crisis/v1beta1/tx.registry";
import * as _1154 from "./cosmos/distribution/v1beta1/tx.aminos";
import * as _1155 from "./cosmos/distribution/v1beta1/tx.registry";
import * as _1156 from "./cosmos/evidence/v1beta1/tx.aminos";
import * as _1157 from "./cosmos/evidence/v1beta1/tx.registry";
import * as _1158 from "./cosmos/feegrant/v1beta1/tx.aminos";
import * as _1159 from "./cosmos/feegrant/v1beta1/tx.registry";
import * as _1160 from "./cosmos/gov/v1/tx.aminos";
import * as _1161 from "./cosmos/gov/v1/tx.registry";
import * as _1162 from "./cosmos/gov/v1beta1/tx.aminos";
import * as _1163 from "./cosmos/gov/v1beta1/tx.registry";
import * as _1164 from "./cosmos/group/v1/tx.aminos";
import * as _1165 from "./cosmos/group/v1/tx.registry";
import * as _1166 from "./cosmos/nft/v1beta1/tx.aminos";
import * as _1167 from "./cosmos/nft/v1beta1/tx.registry";
import * as _1168 from "./cosmos/slashing/v1beta1/tx.aminos";
import * as _1169 from "./cosmos/slashing/v1beta1/tx.registry";
import * as _1170 from "./cosmos/staking/v1beta1/tx.aminos";
import * as _1171 from "./cosmos/staking/v1beta1/tx.registry";
import * as _1172 from "./cosmos/upgrade/v1beta1/tx.aminos";
import * as _1173 from "./cosmos/upgrade/v1beta1/tx.registry";
import * as _1174 from "./cosmos/vesting/v1beta1/tx.aminos";
import * as _1175 from "./cosmos/vesting/v1beta1/tx.registry";
import * as _1176 from "./cosmwasm/wasm/v1/tx.aminos";
import * as _1177 from "./cosmwasm/wasm/v1/tx.registry";
import * as _1178 from "./ibc/applications/transfer/v1/tx.aminos";
import * as _1179 from "./ibc/applications/transfer/v1/tx.registry";
import * as _1180 from "./ibc/core/channel/v1/tx.aminos";
import * as _1181 from "./ibc/core/channel/v1/tx.registry";
import * as _1182 from "./ibc/core/client/v1/tx.aminos";
import * as _1183 from "./ibc/core/client/v1/tx.registry";
import * as _1184 from "./ibc/core/connection/v1/tx.aminos";
import * as _1185 from "./ibc/core/connection/v1/tx.registry";
import * as _1186 from "./osmosis/gamm/v1beta1/tx.aminos";
import * as _1187 from "./osmosis/gamm/v1beta1/tx.registry";
import * as _1188 from "./osmosis/incentives/tx.aminos";
import * as _1189 from "./osmosis/incentives/tx.registry";
import * as _1190 from "./osmosis/lockup/tx.aminos";
import * as _1191 from "./osmosis/lockup/tx.registry";
import * as _1192 from "./osmosis/superfluid/tx.aminos";
import * as _1193 from "./osmosis/superfluid/tx.registry";
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
  const registry = new Registry([...defaultTypes, ..._1133.registry, ..._1135.registry, ..._1137.registry, ..._1139.registry, ..._1141.registry, ..._1143.registry, ..._1145.registry, ..._1147.registry]);
  const aminoTypes = new AminoTypes({ ..._1132.AminoConverter,
    ..._1134.AminoConverter,
    ..._1136.AminoConverter,
    ..._1138.AminoConverter,
    ..._1140.AminoConverter,
    ..._1142.AminoConverter,
    ..._1144.AminoConverter,
    ..._1146.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1149.registry, ..._1151.registry, ..._1153.registry, ..._1155.registry, ..._1157.registry, ..._1159.registry, ..._1161.registry, ..._1163.registry, ..._1165.registry, ..._1167.registry, ..._1169.registry, ..._1171.registry, ..._1173.registry, ..._1175.registry]);
  const aminoTypes = new AminoTypes({ ..._1148.AminoConverter,
    ..._1150.AminoConverter,
    ..._1152.AminoConverter,
    ..._1154.AminoConverter,
    ..._1156.AminoConverter,
    ..._1158.AminoConverter,
    ..._1160.AminoConverter,
    ..._1162.AminoConverter,
    ..._1164.AminoConverter,
    ..._1166.AminoConverter,
    ..._1168.AminoConverter,
    ..._1170.AminoConverter,
    ..._1172.AminoConverter,
    ..._1174.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
export const getSigningCosmwasmClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1177.registry]);
  const aminoTypes = new AminoTypes({ ..._1176.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
export const getSigningIbcClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1179.registry, ..._1181.registry, ..._1183.registry, ..._1185.registry]);
  const aminoTypes = new AminoTypes({ ..._1178.AminoConverter,
    ..._1180.AminoConverter,
    ..._1182.AminoConverter,
    ..._1184.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
export const getSigningOsmosisClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._1187.registry, ..._1189.registry, ..._1191.registry, ..._1193.registry]);
  const aminoTypes = new AminoTypes({ ..._1186.AminoConverter,
    ..._1188.AminoConverter,
    ..._1190.AminoConverter,
    ..._1192.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};