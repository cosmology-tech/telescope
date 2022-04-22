import * as _874 from "./gamm/v1beta1/tx.aminos";
import * as _875 from "./gamm/v1beta1/tx.registry";
import * as _876 from "./incentives/tx.aminos";
import * as _877 from "./incentives/tx.registry";
import * as _878 from "./lockup/tx.aminos";
import * as _879 from "./lockup/tx.registry";
import * as _880 from "./superfluid/tx.aminos";
import * as _881 from "./superfluid/tx.registry";
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export const getOsmosisSigningClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry({ ...defaultTypes,
    ..._875.registry,
    ..._877.registry,
    ..._879.registry,
    ..._881.registry
  });
  const aminoTypes = new AminoTypes({ ..._874.AminoConverter,
    ..._876.AminoConverter,
    ..._878.AminoConverter,
    ..._880.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};