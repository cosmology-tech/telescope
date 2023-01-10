import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@osmonauts/types';
import { SymbolNames } from '../../types';
import { getTypeUrl } from '../../amino';

export const toProtoMsgMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const varName = 'message';

    const ReturnType = SymbolNames.ProtoMsg(name);
    const TypeName = SymbolNames.Msg(name);

    const typeUrl = getTypeUrl(context.ref.proto, proto);
    if (!typeUrl) return;

    const body: t.Statement[] = [];

    // body

    body.push(
        t.returnStatement(
            t.objectExpression([
                t.objectProperty(
                    t.identifier('typeUrl'),
                    t.stringLiteral(typeUrl)
                ),
                t.objectProperty(
                    t.identifier('value'),
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier(TypeName),
                                    t.identifier('encode')
                                ),
                                [
                                    t.identifier(varName)
                                ]
                            ),
                            t.identifier('finish')
                        ),
                        []
                    )
                )
            ])
        )
    );

    return objectMethod('method',
        t.identifier('toProtoMsg'),
        [
            identifier(
                varName,
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(TypeName)
                    )
                )
            )
        ],
        t.blockStatement(body),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(ReturnType)
            )
        )
    );
};

export const toProtoMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const varName = 'message';

    const ReturnType = 'Uint8Array';
    const TypeName = SymbolNames.Msg(name);

    const body: t.Statement[] = [];

    // body

    body.push(
        t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(TypeName),
                            t.identifier('encode')
                        ),
                        [
                            t.identifier('message')
                        ]
                    ),
                    t.identifier('finish')
                ),
                []
            )
        )
    )

    return objectMethod('method',
        t.identifier('toProto'),
        [
            identifier(
                varName,
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(TypeName)
                    )
                )
            )
        ],
        t.blockStatement(body),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(ReturnType)
            )
        )
    );
};
