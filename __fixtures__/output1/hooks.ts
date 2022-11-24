import { ProtobufRpcClient } from "@cosmjs/stargate";
export const createRpcFactorizzle = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      audit: {
        v1beta2: require("./akash/audit/v1beta2/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      cert: {
        v1beta2: require("./akash/cert/v1beta2/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      deployment: {
        v1beta2: require("./akash/deployment/v1beta2/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      escrow: {
        v1beta1: require("./akash/escrow/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc),
        v1beta2: require("./akash/escrow/v1beta2/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      market: {
        v1beta2: require("./akash/market/v1beta2/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      provider: {
        v1beta2: require("./akash/provider/v1beta2/query.rpc.Query").createRpcQueryHooks(rpc)
      }
    },
    cosmos: {
      app: {
        v1alpha1: require("./cosmos/app/v1alpha1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      auth: {
        v1beta1: require("./cosmos/auth/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      authz: {
        v1beta1: require("./cosmos/authz/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: require("./cosmos/bank/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      base: {
        reflection: {
          v1beta1: require("./cosmos/base/reflection/v1beta1/reflection.rpc.ReflectionService").createRpcQueryHooks(rpc),
          v2alpha1: require("./cosmos/base/reflection/v2alpha1/reflection.rpc.ReflectionService").createRpcQueryHooks(rpc)
        },
        tendermint: {
          v1beta1: require("./cosmos/base/tendermint/v1beta1/query.rpc.Service").createRpcQueryHooks(rpc)
        }
      },
      distribution: {
        v1beta1: require("./cosmos/distribution/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      evidence: {
        v1beta1: require("./cosmos/evidence/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      feegrant: {
        v1beta1: require("./cosmos/feegrant/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      gov: {
        v1: require("./cosmos/gov/v1/query.rpc.Query").createRpcQueryHooks(rpc),
        v1beta1: require("./cosmos/gov/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      group: {
        v1: require("./cosmos/group/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      mint: {
        v1beta1: require("./cosmos/mint/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      nft: {
        v1beta1: require("./cosmos/nft/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      params: {
        v1beta1: require("./cosmos/params/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      slashing: {
        v1beta1: require("./cosmos/slashing/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      staking: {
        v1beta1: require("./cosmos/staking/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      tx: {
        v1beta1: require("./cosmos/tx/v1beta1/service.rpc.Service").createRpcQueryHooks(rpc)
      },
      upgrade: {
        v1beta1: require("./cosmos/upgrade/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: require("./cosmwasm/wasm/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      }
    },
    evmos: {
      claims: {
        v1: require("./evmos/claims/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      epochs: {
        v1: require("./evmos/epochs/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      erc20: {
        v1: require("./evmos/erc20/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      fees: {
        v1: require("./evmos/fees/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      incentives: {
        v1: require("./evmos/incentives/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      inflation: {
        v1: require("./evmos/inflation/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      recovery: {
        v1: require("./evmos/recovery/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      vesting: {
        v1: require("./evmos/vesting/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: require("./ibc/applications/transfer/v1/query.rpc.Query").createRpcQueryHooks(rpc)
        }
      },
      core: {
        channel: {
          v1: require("./ibc/core/channel/v1/query.rpc.Query").createRpcQueryHooks(rpc)
        },
        client: {
          v1: require("./ibc/core/client/v1/query.rpc.Query").createRpcQueryHooks(rpc)
        },
        connection: {
          v1: require("./ibc/core/connection/v1/query.rpc.Query").createRpcQueryHooks(rpc)
        },
        port: {
          v1: require("./ibc/core/port/v1/query.rpc.Query").createRpcQueryHooks(rpc)
        }
      }
    },
    osmosis: {
      claim: {
        v1beta1: require("./osmosis/claim/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      epochs: {
        v1beta1: require("./osmosis/epochs/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      gamm: {
        v1beta1: require("./osmosis/gamm/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      incentives: require("./osmosis/incentives/query.rpc.Query").createRpcQueryHooks(rpc),
      lockup: require("./osmosis/lockup/query.rpc.Query").createRpcQueryHooks(rpc),
      mint: {
        v1beta1: require("./osmosis/mint/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      poolincentives: {
        v1beta1: require("./osmosis/pool-incentives/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      streamswap: {
        v1: require("./osmosis/streamswap/v1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      superfluid: require("./osmosis/superfluid/query.rpc.Query").createRpcQueryHooks(rpc),
      tokenfactory: {
        v1beta1: require("./osmosis/tokenfactory/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      twap: {
        v1beta1: require("./osmosis/twap/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      },
      txfees: {
        v1beta1: require("./osmosis/txfees/v1beta1/query.rpc.Query").createRpcQueryHooks(rpc)
      }
    },
    tendermint: {
      abci: require("./tendermint/abci/types.rpc.ABCIApplication").createRpcQueryHooks(rpc)
    }
  };
};