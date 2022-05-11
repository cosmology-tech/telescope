import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as osmosisGammV1beta1TxRegistry from "../../osmosis/gamm/v1beta1/tx.registry";
import * as osmosisIncentivesTxRegistry from "../../osmosis/incentives/tx.registry";
import * as osmosisLockupTxRegistry from "../../osmosis/lockup/tx.registry";
import * as osmosisSuperfluidTxRegistry from "../../osmosis/superfluid/tx.registry";
import * as osmosisGammV1beta1TxAmino from "../../osmosis/gamm/v1beta1/tx.amino";
import * as osmosisIncentivesTxAmino from "../../osmosis/incentives/tx.amino";
import * as osmosisLockupTxAmino from "../../osmosis/lockup/tx.amino";
import * as osmosisSuperfluidTxAmino from "../../osmosis/superfluid/tx.amino";
export const getSigningOsmosisClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...osmosisGammV1beta1TxRegistry.registry, ...osmosisIncentivesTxRegistry.registry, ...osmosisLockupTxRegistry.registry, ...osmosisSuperfluidTxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...osmosisGammV1beta1TxAmino.AminoConverter,
    ...osmosisIncentivesTxAmino.AminoConverter,
    ...osmosisLockupTxAmino.AminoConverter,
    ...osmosisSuperfluidTxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};