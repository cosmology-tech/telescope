import { GenericParseContext } from '../../../../../encoding';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { arrowFunctionExpression, classDeclaration, classMethod, classProperty, commentBlock, identifier, tsMethodSignature } from '../../../../../utils';
import { camel } from '@osmonauts/utils';
import { returnReponseType } from '../../utils/rpc';

import * as t from '@babel/types'

// initRequest is used in constructing GRPC-Gateway methods
// It is a second parameter in method signature.
// ex: static Send(req: MsgSend, initReq?: fm.InitReq)
// always the same, hence, declared outside of grpcGatewayMethodDefinition
export const initRequest = identifier(
    'initRequest',
    t.tSTypeAnnotation(
        t.tsTypeReference(
            t.tsQualifiedName(
                t.identifier('fm'),
                t.identifier('InitReq')
            ),
        )
    ),
    true,
)

// initReqProperties contains information for initReq parameter in fetchReq arguments
export const getInitReqProperties = () => {
    const initReqProperties = [];

    // <...initReq>
    const argSpreadInit: t.SpreadElement = t.spreadElement(
        t.identifier('initRequest')
    )

    // <method: 'POST'>
    const argPOST: t.ObjectProperty = t.objectProperty(
        t.identifier('method'),
        t.stringLiteral('POST'),
        false,
        false,
    )

    // <JSON.stringify(req, fm.replacer)>
    const argBody: t.ObjectProperty = t.objectProperty(
        t.identifier('body'),
        t.callExpression(
            t.memberExpression(
                t.identifier('JSON'),
                t.identifier('stringify'),
                false,
            ),
            [
                t.identifier('request'),
                t.memberExpression(
                    t.identifier('fm'),
                    t.identifier('replacer'),
                    false
                )
            ]
        )
    )

    initReqProperties.push(argSpreadInit, argPOST, argBody)
    return initReqProperties
}
