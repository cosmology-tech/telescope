import * as t from '@babel/types';
import { camel, pascal } from 'case';
import { identifier, tsEnumMember, tsPropertySignature, functionDeclaration, objectMethod } from '../../../utils';

import { ProtoType } from '../../types';
import { fromJsonTypes, mapArray, arrayTypes } from './utils';


export const protoFromJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        fromJsonTypes.Type('signDoc', 'SignDocDirectAux'),

        fromJsonTypes.Enum('mode', 'signModeFromJSON'),

        fromJsonTypes.string('sender'),

        fromJsonTypes.Long('poolId'),

        fromJsonTypes.bytes('queryData'),

        mapArray('codeIds', arrayTypes.Long()),

        mapArray('tokenInMaxs', arrayTypes.Type('Coin'))
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
