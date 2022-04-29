import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { arrayTypes, toJsonTypes } from './utils';

export const protoToJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        toJsonTypes.string('sender'),
        toJsonTypes.type('signDoc', 'SignDocDirectAux'),
        toJsonTypes.enum('mode', 'signModeToJSON'),
        toJsonTypes.long('poolId'),
        toJsonTypes.array('codeIds', arrayTypes.long()),
        toJsonTypes.bytes('queryData'),
        toJsonTypes.array('tokenInMaxs', arrayTypes.type('Coin')),
    ];
    return fields;
};

export const protoToJSONMethod = (name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('toJSON'),
        [
            identifier(
                'message',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(name)
                    )
                )
            )
        ],
        t.blockStatement([
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        identifier('obj', t.tsTypeAnnotation(t.tsAnyKeyword())),
                        t.objectExpression([])
                    )
                ]
            ),

            ...protoToJSONMethodFields(name, proto),

            // RETURN 
            t.returnStatement(t.identifier('obj'))

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsUnknownKeyword()
        )
    );
};
