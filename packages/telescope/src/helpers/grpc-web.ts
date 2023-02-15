export const grpcWeb = `import { grpc } from "@improbable-eng/grpc-web";

export interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

export type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

`