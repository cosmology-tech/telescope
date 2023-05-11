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
        v1alpha1: new (await import("./app/v1alpha1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      auth: {
        v1beta1: new (await import("./auth/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      authz: {
        v1beta1: new (await import("./authz/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      bank: {
        v1beta1: new (await import("./bank/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("./base/tendermint/v1beta1/query.rpc.Service")).GrpcWebImpl(rpc)
        }
      },
      distribution: {
        v1beta1: new (await import("./distribution/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      evidence: {
        v1beta1: new (await import("./evidence/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      feegrant: {
        v1beta1: new (await import("./feegrant/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      gov: {
        v1: new (await import("./gov/v1/query.rpc.Query")).GrpcWebImpl(rpc),
        v1beta1: new (await import("./gov/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      group: {
        v1: new (await import("./group/v1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      nft: {
        v1beta1: new (await import("./nft/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      params: {
        v1beta1: new (await import("./params/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      slashing: {
        v1beta1: new (await import("./slashing/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      staking: {
        v1beta1: new (await import("./staking/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      },
      tx: {
        v1beta1: new (await import("./tx/v1beta1/service.rpc.Service")).GrpcWebImpl(rpc)
      },
      upgrade: {
        v1beta1: new (await import("./upgrade/v1beta1/query.rpc.Query")).GrpcWebImpl(rpc)
      }
    }
  };
};