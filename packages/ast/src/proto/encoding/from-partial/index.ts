import * as t from '@babel/types';
import { pascal } from 'case';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { arrayTypes, fromPartialTypes } from './utils';

export const protoFromPartialMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        fromPartialTypes.string('sender'),
        fromPartialTypes.bytes('queryData'),
        fromPartialTypes.type('signDoc', 'SignDocDirectAux'),
        fromPartialTypes.enum('mode'),
        fromPartialTypes.array('codeIds', arrayTypes.long()),
        fromPartialTypes.long('poolId'),
        fromPartialTypes.array('tokenInMaxs', arrayTypes.type('Coin')),
    ];
    return fields;
};
export const protoFromPartialMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('fromPartial'),
        [
            identifier(
                'object',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('I')
                    )
                )
            )
        ],
        t.blockStatement([

            // init 
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('message'),
                        t.callExpression(
                            t.identifier(`createBase${pascal(name)}`),
                            []
                        )
                    )
                ]
            ),

            ...protoFromPartialMethodFields(name, proto),

            // RETURN 
            t.returnStatement(
                t.identifier('message')
            )

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(name)
            )
        ),
        t.tsTypeParameterDeclaration([
            t.tsTypeParameter(
                t.tsTypeReference(
                    t.identifier('Exact'),
                    t.tsTypeParameterInstantiation([
                        t.tsTypeReference(
                            t.identifier('DeepPartial'),
                            t.tsTypeParameterInstantiation([
                                t.tsTypeReference(
                                    t.identifier(name)
                                )
                            ])
                        ),
                        t.tsTypeReference(
                            t.identifier('I')
                        )
                    ])
                ),
                null,
                'I'
            )
        ])
    )
};

