import * as _882 from "./cosmos/authz/v1beta1/tx.aminos";
import * as _883 from "./cosmos/authz/v1beta1/tx.registry";
import * as _884 from "./cosmos/bank/v1beta1/tx.aminos";
import * as _885 from "./cosmos/bank/v1beta1/tx.registry";
import * as _886 from "./cosmos/crisis/v1beta1/tx.aminos";
import * as _887 from "./cosmos/crisis/v1beta1/tx.registry";
import * as _888 from "./cosmos/distribution/v1beta1/tx.aminos";
import * as _889 from "./cosmos/distribution/v1beta1/tx.registry";
import * as _890 from "./cosmos/evidence/v1beta1/tx.aminos";
import * as _891 from "./cosmos/evidence/v1beta1/tx.registry";
import * as _892 from "./cosmos/feegrant/v1beta1/tx.aminos";
import * as _893 from "./cosmos/feegrant/v1beta1/tx.registry";
import * as _894 from "./cosmos/gov/v1/tx.aminos";
import * as _895 from "./cosmos/gov/v1/tx.registry";
import * as _896 from "./cosmos/gov/v1beta1/tx.aminos";
import * as _897 from "./cosmos/gov/v1beta1/tx.registry";
import * as _898 from "./cosmos/group/v1/tx.aminos";
import * as _899 from "./cosmos/group/v1/tx.registry";
import * as _900 from "./cosmos/nft/v1beta1/tx.aminos";
import * as _901 from "./cosmos/nft/v1beta1/tx.registry";
import * as _902 from "./cosmos/slashing/v1beta1/tx.aminos";
import * as _903 from "./cosmos/slashing/v1beta1/tx.registry";
import * as _904 from "./cosmos/staking/v1beta1/tx.aminos";
import * as _905 from "./cosmos/staking/v1beta1/tx.registry";
import * as _906 from "./cosmos/upgrade/v1beta1/tx.aminos";
import * as _907 from "./cosmos/upgrade/v1beta1/tx.registry";
import * as _908 from "./cosmos/vesting/v1beta1/tx.aminos";
import * as _909 from "./cosmos/vesting/v1beta1/tx.registry";
import * as _910 from "./cosmwasm/wasm/v1/tx.aminos";
import * as _911 from "./cosmwasm/wasm/v1/tx.registry";
import * as _912 from "./ibc/applications/transfer/v1/tx.aminos";
import * as _913 from "./ibc/applications/transfer/v1/tx.registry";
import * as _914 from "./ibc/core/channel/v1/tx.aminos";
import * as _915 from "./ibc/core/channel/v1/tx.registry";
import * as _916 from "./ibc/core/client/v1/tx.aminos";
import * as _917 from "./ibc/core/client/v1/tx.registry";
import * as _918 from "./ibc/core/connection/v1/tx.aminos";
import * as _919 from "./ibc/core/connection/v1/tx.registry";
import * as _920 from "./osmosis/gamm/v1beta1/tx.aminos";
import * as _921 from "./osmosis/gamm/v1beta1/tx.registry";
import * as _922 from "./osmosis/incentives/tx.aminos";
import * as _923 from "./osmosis/incentives/tx.registry";
import * as _924 from "./osmosis/lockup/tx.aminos";
import * as _925 from "./osmosis/lockup/tx.registry";
import * as _926 from "./osmosis/superfluid/tx.aminos";
import * as _927 from "./osmosis/superfluid/tx.registry";
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
  const registry = new Registry([...defaultTypes, ..._883.registry, ..._885.registry, ..._887.registry, ..._889.registry, ..._891.registry, ..._893.registry, ..._895.registry, ..._897.registry, ..._899.registry, ..._901.registry, ..._903.registry, ..._905.registry, ..._907.registry, ..._909.registry]);
  const aminoTypes = new AminoTypes({ ..._882.AminoConverter,
    ..._884.AminoConverter,
    ..._886.AminoConverter,
    ..._888.AminoConverter,
    ..._890.AminoConverter,
    ..._892.AminoConverter,
    ..._894.AminoConverter,
    ..._896.AminoConverter,
    ..._898.AminoConverter,
    ..._900.AminoConverter,
    ..._902.AminoConverter,
    ..._904.AminoConverter,
    ..._906.AminoConverter,
    ..._908.AminoConverter
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
  const registry = new Registry([...defaultTypes, ..._911.registry]);
  const aminoTypes = new AminoTypes({ ..._910.AminoConverter
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
  const registry = new Registry([...defaultTypes, ..._913.registry, ..._915.registry, ..._917.registry, ..._919.registry]);
  const aminoTypes = new AminoTypes({ ..._912.AminoConverter,
    ..._914.AminoConverter,
    ..._916.AminoConverter,
    ..._918.AminoConverter
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
  const registry = new Registry([...defaultTypes, ..._921.registry, ..._923.registry, ..._925.registry, ..._927.registry]);
  const aminoTypes = new AminoTypes({ ..._920.AminoConverter,
    ..._922.AminoConverter,
    ..._924.AminoConverter,
    ..._926.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};