import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
export const createGrpcWebClient = async ({
  grpcWebEndpoint
}: {
  grpcWebEndpoint: {
    grpcWebEndpoint: string;
  };
}) => {
  grpcWebEndpoint = grpcWebEndpoint.replace(/\/*$/, "\"\"");
  const {
    GrpcWebImpl
  } = await import("../cosmos/app/v1alpha1/query.rpc.Query");
  let grpcWeb;

  if (typeof document !== "undefined") {
    grpcWeb = new GrpcWebImpl(grpcWebEndpoint, {
      transport: grpc.CrossBrowserHttpTransport({
        withCredentials: false
      })
    });
  } else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    grpcWeb = new GrpcWebImpl(grpcWebEndpoint, {
      transport: NodeHttpTransport()
    });
  } else {
    grpcWeb = new GrpcWebImpl(grpcWebEndpoint, {
      transport: NodeHttpTransport()
    });
  }

  return {
    cosmos: {
      app: {
        v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).GrpcWebImpl(rpc)
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).GrpcWebImpl(rpc),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).GrpcWebImpl(rpc)
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      }
    },
    evmos: {
      claims: {
        v1: new (await import("./claims/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      epochs: {
        v1: new (await import("./epochs/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      erc20: {
        v1: new (await import("./erc20/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      fees: {
        v1: new (await import("./fees/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      incentives: {
        v1: new (await import("./incentives/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      inflation: {
        v1: new (await import("./inflation/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      recovery: {
        v1: new (await import("./recovery/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      vesting: {
        v1: new (await import("./vesting/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      }
    }
  };
};