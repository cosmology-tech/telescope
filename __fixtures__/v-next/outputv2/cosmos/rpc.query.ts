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
        v1alpha1: new (await import("./app/v1alpha1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      auth: {
        v1beta1: new (await import("./auth/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      authz: {
        v1beta1: new (await import("./authz/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      bank: {
        v1beta1: new (await import("./bank/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("./base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(grpcWeb)
        }
      },
      distribution: {
        v1beta1: new (await import("./distribution/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      evidence: {
        v1beta1: new (await import("./evidence/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      feegrant: {
        v1beta1: new (await import("./feegrant/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      gov: {
        v1: new (await import("./gov/v1/query.rpc.Query")).GrpcWebImpl(grpcWeb),
        v1beta1: new (await import("./gov/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      group: {
        v1: new (await import("./group/v1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      nft: {
        v1beta1: new (await import("./nft/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      params: {
        v1beta1: new (await import("./params/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      slashing: {
        v1beta1: new (await import("./slashing/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      staking: {
        v1beta1: new (await import("./staking/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      },
      tx: {
        v1beta1: new (await import("./tx/v1beta1/service.rpc.Service")).ServiceClientImpl(grpcWeb)
      },
      upgrade: {
        v1beta1: new (await import("./upgrade/v1beta1/query.rpc.Query")).GrpcWebImpl(grpcWeb)
      }
    }
  };
};