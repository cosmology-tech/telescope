import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoType } from '@osmonauts/types';

export const toProtoMsgMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    let varName = 'message';

    const AminoTypeName =
        [name, 'Amino']
            .filter(Boolean).join('')

    const body: t.Statement[] = [];

    // body

    return objectMethod('method',
        t.identifier('toProtoMsg'),
        [
            identifier(
                varName,
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(name)
                    )
                )
            )
        ],
        t.blockStatement(body),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(AminoTypeName)
            )
        )
    );
};
