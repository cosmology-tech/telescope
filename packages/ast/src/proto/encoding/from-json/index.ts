import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType } from '../../types';
import { fromJSON, arrayTypes } from './utils';

export const protoFromJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = [
        fromJSON.type('signDoc', 'SignDocDirectAux'),
        fromJSON.enum('mode', 'signModeFromJSON'),
        fromJSON.string('sender'),
        fromJSON.long('poolId'),
        fromJSON.bytes('queryData'),
        fromJSON.array('codeIds', arrayTypes.long()),
        fromJSON.array('tokenInMaxs', arrayTypes.type('Coin'))
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
