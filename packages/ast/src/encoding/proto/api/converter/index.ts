import * as t from '@babel/types';
import { ProtoType, ProtoRoot } from '@osmonauts/types';
import { toApiJsonFunction } from '../to-api-json';
import { ProtoParseContext } from '../../../context';
import { getTypeUrl } from '../../../amino';
import { fromApiJsonFunction } from '../from-api-json';

interface ApiConverterItemParams {
    root: ProtoRoot,
    context: ProtoParseContext,
    proto: ProtoType
}
export const createApiConverterItem = (
    {
        root,
        context,
        proto
    }: ApiConverterItemParams
) => {

    const typeUrl = getTypeUrl(root, proto);
    const name = proto.name;
    return t.objectProperty(
        t.stringLiteral(typeUrl),
        t.objectExpression(
            [
                t.objectProperty(
                    t.identifier('toApi'),
                    toApiJsonFunction(
                        context,
                        name,
                        proto
                    )
                ),
                t.objectProperty(
                    t.identifier('fromApi'),
                    fromApiJsonFunction(
                        context,
                        name,
                        proto
                    )
                )
            ]
        )
    );
};




interface ApiConverterParams {
    name: string,
    root: ProtoRoot,
    context: ProtoParseContext,
    protos: ProtoType[]
}
export const createApiConverter = (
    {
        name,
        root,
        context,
        protos
    }: ApiConverterParams) => {

    const items = protos.map(proto => {
        return createApiConverterItem({
            context,
            root,
            proto
        })
    })

    return t.exportNamedDeclaration(t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier(name),
            t.objectExpression(
                items
            ))
    ]));
};

