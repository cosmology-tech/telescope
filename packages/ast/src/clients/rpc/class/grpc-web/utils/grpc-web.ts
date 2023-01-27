import { identifier } from '../../../../../utils';
import * as t from '@babel/types'

// initRequest is used in constructing GRPC-Gateway methods
// It is a second parameter in method signature.
// ex: static Send(req: MsgSend, initReq?: fm.InitReq)
// always the same, hence, declared outside of grpcGatewayMethodDefinition
export const metadata = identifier(
    'metadata',
    t.tSTypeAnnotation(
        t.tsTypeReference(
            t.tsQualifiedName(
                t.identifier('grpc'),
                t.identifier('Metadata')
            ),
        )
    ),
    true,
)