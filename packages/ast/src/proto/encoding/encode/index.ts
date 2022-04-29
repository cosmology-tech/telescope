import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { encode, arrayTypes } from './utils';

export const protoEncodeMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        encode.string(10, 'sender'),
        encode.long(16, 'poolId'),
        encode.bytes(18, 'queryData'),
        ...encode.scalarArray(10, 'codeIds', arrayTypes.long()),
        encode.type(18, 'signDoc', 'SignDocDirectAux'),
        encode.enum(24, 'mode'),
        ...encode.typeArray(34, 'tokenInMaxs', 'Coin')
    ];
    return fields;
};

export const protoEncodeMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('encode'),
        [
            // args

            identifier('message', t.tsTypeAnnotation(
                t.tsTypeReference(
                    t.identifier(name)
                )
            ), false),

            t.assignmentPattern(
                t.identifier('writer'),
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('_m0'),
                            t.identifier('Writer')
                        ),
                        t.identifier('create')
                    ),
                    [

                    ]
                )
            )
        ],

        // body 
        t.blockStatement([

            ...protoEncodeMethodFields(name, proto),

            /* RETURN writer */

            t.returnStatement(
                t.identifier('writer')
            )

        ]),
        false,
        false,
        false,
        // return type
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.tsQualifiedName(
                    t.identifier('_m0'),
                    t.identifier('Writer')
                )
            )
        )
    )
};
