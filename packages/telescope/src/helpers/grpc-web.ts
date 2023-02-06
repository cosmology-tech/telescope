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
`