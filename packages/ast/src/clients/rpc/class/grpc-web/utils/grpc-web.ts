import { identifier } from '../../../../../utils';
import * as t from '@babel/types'
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../../../../encoding';

// second params for grpc-web method
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

// this.Accounts = this.Accounts.bind(this);
// MARKED AS NOT DRY (used in rpc/lcd)
export const bindThis = (name: string) => {
    return t.expressionStatement(
        t.assignmentExpression(
            '=',
            t.memberExpression(
                t.thisExpression(),
                t.identifier(name)
            ),
            t.callExpression(
                t.memberExpression(
                    t.memberExpression(
                        t.thisExpression(),
                        t.identifier(name)
                    ),
                    t.identifier('bind')
                ),
                [
                    t.thisExpression()
                ]
            )
        )
    );
};

export const makeComment = (comment: string) => {
    return [{ type: 'CommentBlock', value: ` ${comment} ` }]
}

export const getRpcClassName = (service: ProtoService) => {
    return `${service.name}ClientImpl`;
}

export const GetDesc = (context: GenericParseContext, service: ProtoService) => {
    const descName = service.name + 'Desc'
    const serviceName = context.ref.proto.package + '.' + service.name

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                t.identifier(descName),
                t.objectExpression(
                    [ 
                        t.objectProperty(
                            t.identifier('serviceName'),
                            t.stringLiteral(serviceName)
                        )
                    ]                 
                    )
                )
            ]
        )
    )
}

export const getMethodDesc = (
    context: GenericParseContext, service: ProtoService, methodName: string
) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier(service.name + methodName + 'Desc: UnaryMethodDefinitionish'),
                    t.objectExpression(
                        [
                            t.objectProperty(
                                t.identifier('methodName'),
                                t.stringLiteral(methodName)
                            ),
                            t.objectProperty(
                                t.identifier('service'),
                                t.identifier(service.name + 'Desc')
                            ),
                            t.objectProperty(
                                t.identifier('requestStream'),
                                t.booleanLiteral(false)
                            ),
                            t.objectProperty(
                                t.identifier('reponseStream'),
                                t.booleanLiteral(false)
                            ),
                            t.objectProperty(
                                t.identifier('requestType'),
                                t.tsAsExpression(
                                    t.objectExpression(
                                        [
                                            t.objectMethod(
                                                'method',
                                                t.identifier('serializeBinary'),
                                                [],
                                                t.blockStatement(
                                                    [
                                                    t.returnStatement(
                                                        t.callExpression(
                                                            t.memberExpression(
                                                                t.callExpression(
                                                                    t.memberExpression(
                                                                        t.identifier('QueryGrantsRequest'),
                                                                        t.identifier('encode')
                                                                    ),
                                                                    [
                                                                        t.thisExpression()
                                                                    ]
                                                                ),
                                                                t.identifier('finish')
                                                            ),
                                                            []
                                                        )
                                                    )
                                                    ]
                                                )
                                            )
                                        ]
                                    ),        
                                    t.tsAnyKeyword()                                  
                                )
                            ),
                            t.objectProperty(
                                t.identifier('responseType'),
                                t.tsAsExpression(
                                    t.objectExpression(
                                        [
                                            t.objectMethod(
                                                'method',
                                                t.identifier('deserializeBinary'),
                                                [
                                                    identifier('data', t.tsTypeAnnotation(
                                                        t.tsTypeReference(
                                                            t.identifier('Uint8Array')
                                                        )
                                                    ))
                                                ],
                                                t.blockStatement(
                                                    [
                                                    t.returnStatement(
                                                        t.objectExpression(
                                                            [
                                                            t.spreadElement(
                                                                t.callExpression(
                                                                    t.memberExpression(
                                                                        t.identifier('QueryGrantsResponse'),
                                                                        t.identifier('decode')
                                                                    ),
                                                                    [t.identifier('data')]
                                                                )
                                                            ),
                                                            t.objectMethod(
                                                                'method',
                                                                t.identifier('toObject'),
                                                                [],
                                                                t.blockStatement(
                                                                    [
                                                                        t.returnStatement(
                                                                            t.thisExpression()
                                                                        )
                                                                    ]
                                                                )
                                                            )
                                                            ]
                                                        )
                                                    )
                                                    ]
                                                )
                                            )
                                        ]
                                    ),        
                                    t.tsAnyKeyword()                                  
                                )
                            ),
                        ]
                    )
                )
            ]
        )
    ) 
}


/*
export const QueryGrantsDesc: UnaryMethodDefinitionish = {
  methodName: "Grants",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGrantsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGrantsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};
*/
