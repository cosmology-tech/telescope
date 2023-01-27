import { GenericParseContext } from '../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../utils';
import { camel } from '@osmonauts/utils';
import { optionalBool, returnReponseType } from '../utils/rpc';
import * as t from '@babel/types'


const grpcWebMethodDefinition = (
    name: string,
    svc: ProtoServiceMethod,
    packageImport: string
) => {
}

// export const createGRPCWebMsgClass = (
//     context: GenericParseContext,
//     service: ProtoService
// ) => {
    
//     // adds import for grpc-web
//     context.addUtil('grpc');

//     const camelRpcMethods = context.pluginValue('rpcClient.camelCase');
//     const keys = Object.keys(service.methods ?? {});
//     const methods = keys
//         .map((key) => {
//             const method = service.methods[key];
//             const name = camelRpcMethods ? camel(key) : key;
//             return grpcWebMethodDefinition(
//                 name,
//                 method,
//                 context.ref.proto.package,
//             )
//         })
//     return t.exportNamedDeclaration(
//         t.classDeclaration(
//             t.identifier(service.name),
//             null,
//             t.classBody(
//                 [
//                     ...methods,
//                 ]
//             ),
//             []
//         ),
//     )
// }