import * as _836 from "./authz/v1beta1/tx.aminos";
import * as _837 from "./authz/v1beta1/tx.registry";
import * as _838 from "./bank/v1beta1/tx.aminos";
import * as _839 from "./bank/v1beta1/tx.registry";
import * as _840 from "./crisis/v1beta1/tx.aminos";
import * as _841 from "./crisis/v1beta1/tx.registry";
import * as _842 from "./distribution/v1beta1/tx.aminos";
import * as _843 from "./distribution/v1beta1/tx.registry";
import * as _844 from "./evidence/v1beta1/tx.aminos";
import * as _845 from "./evidence/v1beta1/tx.registry";
import * as _846 from "./feegrant/v1beta1/tx.aminos";
import * as _847 from "./feegrant/v1beta1/tx.registry";
import * as _848 from "./gov/v1/tx.aminos";
import * as _849 from "./gov/v1/tx.registry";
import * as _850 from "./gov/v1beta1/tx.aminos";
import * as _851 from "./gov/v1beta1/tx.registry";
import * as _852 from "./group/v1/tx.aminos";
import * as _853 from "./group/v1/tx.registry";
import * as _854 from "./nft/v1beta1/tx.aminos";
import * as _855 from "./nft/v1beta1/tx.registry";
import * as _856 from "./slashing/v1beta1/tx.aminos";
import * as _857 from "./slashing/v1beta1/tx.registry";
import * as _858 from "./staking/v1beta1/tx.aminos";
import * as _859 from "./staking/v1beta1/tx.registry";
import * as _860 from "./upgrade/v1beta1/tx.aminos";
import * as _861 from "./upgrade/v1beta1/tx.registry";
import * as _862 from "./vesting/v1beta1/tx.aminos";
import * as _863 from "./vesting/v1beta1/tx.registry";
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export const getCosmosSigningClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ..._837.registry, ..._839.registry, ..._841.registry, ..._843.registry, ..._845.registry, ..._847.registry, ..._849.registry, ..._851.registry, ..._853.registry, ..._855.registry, ..._857.registry, ..._859.registry, ..._861.registry, ..._863.registry]);
  const aminoTypes = new AminoTypes({ ..._836.AminoConverter,
    ..._838.AminoConverter,
    ..._840.AminoConverter,
    ..._842.AminoConverter,
    ..._844.AminoConverter,
    ..._846.AminoConverter,
    ..._848.AminoConverter,
    ..._850.AminoConverter,
    ..._852.AminoConverter,
    ..._854.AminoConverter,
    ..._856.AminoConverter,
    ..._858.AminoConverter,
    ..._860.AminoConverter,
    ..._862.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};