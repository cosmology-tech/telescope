import * as t from '@babel/types';
import { getEnumFromJsonName, getEnumToJsonName } from './types';
import { identifier, tsEnumMember, functionDeclaration } from '../../utils';

import { ProtoEnum } from './types';

const getEnumValues = (proto: ProtoEnum) => {
    const enums = Object.keys(proto.values).map(key => {
        const e = {
            name: key,
            comment: null,
            value: null
        };
        e.value = proto.values[key];
        if (proto.comments[key]) {
            e.comment = proto.comments[key];
        }
        return e;
    });
    return enums;
}

export const createProtoEnum = (name: string, proto: ProtoEnum) => {
    const enums = getEnumValues(proto);
    const values = enums.map(e => {
        return tsEnumMember(
            t.identifier(e.name),
            t.numericLiteral(e.value),
            e.comment ? [{
                type: 'CommentBlock',
                value: e.comment
            }] : []
        );
    })
    return t.exportNamedDeclaration(
        t.tsEnumDeclaration(
            t.identifier(name),
            [
                ...values,
                // default
                tsEnumMember(
                    t.identifier('UNRECOGNIZED'),
                    t.unaryExpression('-', t.numericLiteral(1)),
                    null
                ),
            ]
        )
    )
};

export const createProtoEnumFromJSON = (name: string, proto: ProtoEnum) => {

    const enums = getEnumValues(proto);
    const switches = enums.map(e => {
        return t.switchCase(t.numericLiteral(e.value), []),
            t.switchCase(t.stringLiteral(e.name), [
                t.returnStatement(t.memberExpression(
                    t.identifier(name),
                    t.identifier(e.name)
                ))
            ]);
    });

    return t.exportNamedDeclaration(
        functionDeclaration(
            t.identifier(getEnumFromJsonName(name)),
            [
                identifier('object', t.tsTypeAnnotation(t.tsAnyKeyword()))
            ],
            t.blockStatement([
                t.switchStatement(
                    t.identifier('object'),
                    [
                        ...switches,
                        // default
                        t.switchCase(t.unaryExpression('-', t.numericLiteral(1)), []),
                        t.switchCase(t.stringLiteral('UNRECOGNIZED'), []),
                        t.switchCase(
                            null, [
                            t.returnStatement(t.memberExpression(
                                t.identifier(name),
                                t.identifier('UNRECOGNIZED')
                            ))
                        ])
                    ]
                )
            ]),
            false,
            false,
            t.tsTypeAnnotation(t.tsTypeReference(
                t.identifier(name)
            ))
        )
    )
};

export const createProtoEnumToJSON = (name: string, proto: ProtoEnum) => {

    const enums = getEnumValues(proto);
    const switches = enums.map(e => {
        return t.switchCase(
            t.memberExpression(
                t.identifier(name),
                t.identifier(e.name)
            ),
            [
                t.returnStatement(
                    t.stringLiteral(e.name)
                )
            ]
        )
    });

    return t.exportNamedDeclaration(
        functionDeclaration(
            t.identifier(getEnumToJsonName(name)),
            [
                identifier('object', t.tsTypeAnnotation(
                    t.tsTypeReference(t.identifier(name))
                ))
            ],
            t.blockStatement([
                t.switchStatement(
                    t.identifier('object'),
                    [
                        ...switches,
                        // default
                        t.switchCase(
                            null,
                            [
                                t.returnStatement(
                                    t.stringLiteral('UNKNOWN')
                                )
                            ]
                        )
                    ]
                )
            ]),
            false,
            false,
            t.tsTypeAnnotation(
                t.tsStringKeyword()
            )
        )
    )
};
