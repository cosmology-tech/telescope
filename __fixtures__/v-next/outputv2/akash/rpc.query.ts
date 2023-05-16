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
    akash: {
      audit: {
        v1beta2: new (await import("./audit/v1beta2/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      cert: {
        v1beta2: new (await import("./cert/v1beta2/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      deployment: {
        v1beta1: new (await import("./deployment/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb),
        v1beta2: new (await import("./deployment/v1beta2/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      escrow: {
        v1beta1: new (await import("./escrow/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb),
        v1beta2: new (await import("./escrow/v1beta2/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      market: {
        v1beta2: new (await import("./market/v1beta2/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      provider: {
        v1beta2: new (await import("./provider/v1beta2/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      }
    },
    cosmos: {
      app: {
        v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(grpcWeb)
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).GrpcWebImpl(grpcWeb),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).ServiceClientImpl(grpcWeb)
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      }
    }
  };
};