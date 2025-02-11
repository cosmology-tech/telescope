import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as osmosisGammPoolmodelsBalancerTxTxRegistry from "./gamm/pool-models/balancer/tx/tx.registry.js";
import * as osmosisGammPoolmodelsStableswapTxRegistry from "./gamm/pool-models/stableswap/tx.registry.js";
import * as osmosisGammV1beta1TxRegistry from "./gamm/v1beta1/tx.registry.js";
import * as osmosisIncentivesTxRegistry from "./incentives/tx.registry.js";
import * as osmosisLockupTxRegistry from "./lockup/tx.registry.js";
import * as osmosisSuperfluidTxRegistry from "./superfluid/tx.registry.js";
import * as osmosisTokenfactoryV1beta1TxRegistry from "./tokenfactory/v1beta1/tx.registry.js";
import * as osmosisGammPoolmodelsBalancerTxTxAmino from "./gamm/pool-models/balancer/tx/tx.amino.js";
import * as osmosisGammPoolmodelsStableswapTxAmino from "./gamm/pool-models/stableswap/tx.amino.js";
import * as osmosisGammV1beta1TxAmino from "./gamm/v1beta1/tx.amino.js";
import * as osmosisIncentivesTxAmino from "./incentives/tx.amino.js";
import * as osmosisLockupTxAmino from "./lockup/tx.amino.js";
import * as osmosisSuperfluidTxAmino from "./superfluid/tx.amino.js";
import * as osmosisTokenfactoryV1beta1TxAmino from "./tokenfactory/v1beta1/tx.amino.js";
export const osmosisAminoConverters = {
  ...osmosisGammPoolmodelsBalancerTxTxAmino.AminoConverter,
  ...osmosisGammPoolmodelsStableswapTxAmino.AminoConverter,
  ...osmosisGammV1beta1TxAmino.AminoConverter,
  ...osmosisIncentivesTxAmino.AminoConverter,
  ...osmosisLockupTxAmino.AminoConverter,
  ...osmosisSuperfluidTxAmino.AminoConverter,
  ...osmosisTokenfactoryV1beta1TxAmino.AminoConverter
};
export const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...osmosisGammPoolmodelsBalancerTxTxRegistry.registry, ...osmosisGammPoolmodelsStableswapTxRegistry.registry, ...osmosisGammV1beta1TxRegistry.registry, ...osmosisIncentivesTxRegistry.registry, ...osmosisLockupTxRegistry.registry, ...osmosisSuperfluidTxRegistry.registry, ...osmosisTokenfactoryV1beta1TxRegistry.registry];
export const getSigningOsmosisClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...osmosisProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...osmosisAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningOsmosisClient = async ({
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
  } = getSigningOsmosisClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};