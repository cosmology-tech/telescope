import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { fromJsonTypes, arrayTypes } from './utils';

export const protoFromJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        fromJsonTypes.type('signDoc', 'SignDocDirectAux'),
        fromJsonTypes.enum('mode', 'signModeFromJSON'),
        fromJsonTypes.string('sender'),
        fromJsonTypes.long('poolId'),
        fromJsonTypes.bytes('queryData'),
        fromJsonTypes.array('codeIds', arrayTypes.long()),
        fromJsonTypes.array('tokenInMaxs', arrayTypes.type('Coin'))
    ];
    return fields;
};

export const protoFromJSONMethod = (name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('fromJSON'),
        [
            identifier('object',
                t.tsTypeAnnotation(
                    t.tsAnyKeyword()
                ),
                false
            )

        ],
        t.blockStatement(
            [
                t.returnStatement(
                    t.objectExpression(protoFromJSONMethodFields(name, proto))
                )
            ]
        ),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(name)
            )
        )
    )
};
