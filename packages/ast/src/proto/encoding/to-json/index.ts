import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { arrayToJson, arrayTypes, toJsonTypes } from './utils';

export const protoToJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        toJsonTypes.string('sender'),
        toJsonTypes.Type('signDoc', 'SignDocDirectAux'),
        toJsonTypes.Enum('mode', 'signModeToJSON'),
        toJsonTypes.Long('poolId'),
        arrayToJson('codeIds', arrayTypes.Long()),
        toJsonTypes.bytes('queryData'),
        arrayToJson('tokenInMaxs', arrayTypes.Type('Coin')),
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
