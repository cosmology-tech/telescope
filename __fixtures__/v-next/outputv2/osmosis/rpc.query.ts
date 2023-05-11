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
    osmosis: {
      claim: {
        v1beta1: new (await import("./claim/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      epochs: {
        v1beta1: new (await import("./epochs/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      gamm: {
        v1beta1: new (await import("./gamm/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc),
        v2: new (await import("./gamm/v2/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      ibcratelimit: {
        v1beta1: new (await import("./ibc-rate-limit/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      incentives: new (await import("./incentives/query.rpc.Query")).GrpcWebImpl(rpc),
      lockup: new (await import("./lockup/query.rpc.Query")).GrpcWebImpl(rpc),
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      poolincentives: {
        v1beta1: new (await import("./pool-incentives/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      superfluid: new (await import("./superfluid/query.rpc.Query")).GrpcWebImpl(rpc),
      tokenfactory: {
        v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      twap: {
        v1beta1: new (await import("./twap/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      txfees: {
        v1beta1: new (await import("./txfees/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      }
    }
  };
};