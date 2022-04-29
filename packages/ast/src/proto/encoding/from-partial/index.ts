import * as t from '@babel/types';
import { pascal } from 'case';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { arrayTypes, fromPartial } from './utils';

export const protoFromPartialMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        fromPartial.string('sender'),
        fromPartial.bytes('queryData'),
        fromPartial.type('signDoc', 'SignDocDirectAux'),
        fromPartial.enum('mode'),
        fromPartial.array('codeIds', arrayTypes.long()),
        fromPartial.long('poolId'),
        fromPartial.array('tokenInMaxs', arrayTypes.type('Coin')),
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

