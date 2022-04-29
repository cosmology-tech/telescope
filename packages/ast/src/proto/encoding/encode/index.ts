import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { decodeTypes, scalarTypeArray, arrayTypes, protoTypeArray } from './utils';

export const protoEncodeMethodFields = (name: string, proto: ProtoType) => {
    const fields = [

        decodeTypes.string(
            10,
            'sender'
        ),

        decodeTypes.Long(
            16,
            'poolId'
        ),

        decodeTypes.bytes(
            18,
            'queryData'
        ),

        ...scalarTypeArray(10, 'codeIds', arrayTypes.Long()),

        decodeTypes.Type(
            18,
            'signDoc',
            'SignDocDirectAux'
        ),

        decodeTypes.Enum(
            24,
            'mode'
        ),

        ...protoTypeArray(
            34,
            'tokenInMaxs',
            'Coin'
        )

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
