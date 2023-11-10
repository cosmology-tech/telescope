import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@cosmology/types';
import { SymbolNames } from '../../types';

export const fromProtoMsgMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const varName = 'message';
    const ReturnType = SymbolNames.Msg(name);
    const ProtoMsgName = SymbolNames.ProtoMsg(name);
    const TypeName = SymbolNames.Msg(name);

    const body: t.Statement[] = [];

    // body

    body.push(
        t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier(TypeName),
                    t.identifier('decode')
                ),
                [
                    t.memberExpression(
                        t.identifier(varName),
                        t.identifier('value')
                    ),
                    ...(context.options.interfaces.enabled ? [
                        t.identifier('undefined'),
                        t.identifier('useInterfaces')
                    ] : []),
                ]
            )
        )
    );

    return objectMethod('method',
        t.identifier('fromProtoMsg'),
        [
            identifier(
                varName,
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(ProtoMsgName)
                    )
                )
            ),
            ...(context.options.interfaces.enabled ? [
                t.assignmentPattern(
                    identifier(
                        'useInterfaces',
                        t.tsTypeAnnotation(t.tsBooleanKeyword())
                    ),
                    t.identifier(
                        (context.pluginValue('interfaces.useByDefault') ?? true).toString()
                    )
                )
            ] : []),
        ],
        t.blockStatement(body),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(ReturnType)
            )
        )
    );
};
