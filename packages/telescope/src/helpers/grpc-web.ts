export const grpcWeb = `

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      request: any,
      metadata: grpc.Metadata | undefined,
    ): Promise<any>;
  }

//same for every file so put it here for now
export class GrpcWebImpl {
    private host: string;
    private options: {
      transport?: grpc.TransportFactory;
  
      debug?: boolean;
      metadata?: grpc.Metadata;
    };
  
    constructor(
      host: string,
      options: {
        transport?: grpc.TransportFactory;
  
        debug?: boolean;
        metadata?: grpc.Metadata;
      },
    ) {
      this.host = host;
      this.options = options;
    }
  
    unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      _request: any,
      metadata: grpc.Metadata | undefined,
    ): Promise<any> {
      const request = { ..._request, ...methodDesc.requestType };
      const maybeCombinedMetadata =
        metadata && this.options.metadata
          ? new BrowserHeaders({
              ...this.options?.metadata.headersMap,
              ...metadata?.headersMap,
            })
          : metadata || this.options.metadata;
      return new Promise((resolve, reject) => {
        grpc.unary(methodDesc, {
          request,
          host: this.host,
          metadata: maybeCombinedMetadata,
          transport: this.options.transport,
          debug: this.options.debug,
          onEnd: function (response) {
            if (response.status === grpc.Code.OK) {
              resolve(response.message);
            } else {
              const err = new Error(response.statusMessage) as any;
              err.code = response.status;
              err.metadata = response.trailers;
              reject(err);
            }
          },
        });
      });
    }
}
`