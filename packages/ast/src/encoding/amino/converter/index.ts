import * as t from '@babel/types';
import { ProtoType, ProtoRoot } from '@osmonauts/types';
import { toAminoJsonMethod } from '../to-amino-json';
import { fromAminoJsonMethod } from '../from-amino-json';
import { getTypeUrl, getAminoTypeName } from '../utils';
import { AminoParseContext } from '../../context';

interface AminoConverterItemParams {
    root: ProtoRoot,
    context: AminoParseContext,
    proto: ProtoType
}
export const createAminoConverterItem = (
    {
        root,
        context,
        proto
    }: AminoConverterItemParams
) => {

    const typeUrl = getTypeUrl(root, proto);
    const aminoType = getAminoTypeName(context, root, proto);

    const toAmino = context.options.aminoEncoding.useRecursiveV2encoding ?
        t.memberExpression(
            t.identifier(proto.name),
            t.identifier('toAmino')
        ) : toAminoJsonMethod({
            context,
            proto
        });

    const fromAmino = context.options.aminoEncoding.useRecursiveV2encoding ?
        t.memberExpression(
            t.identifier(proto.name),
            t.identifier('fromAmino')
        ) : fromAminoJsonMethod({
            context,
            proto
        })


    return t.objectProperty(
        t.stringLiteral(typeUrl),
        t.objectExpression(
            [
                t.objectProperty(
                    t.identifier('aminoType'),
                    t.stringLiteral(
                        aminoType
                    )
                ),
                t.objectProperty(
                    t.identifier('toAmino'),
                    toAmino
                ),
                t.objectProperty(
                    t.identifier('fromAmino'),
                    fromAmino
                )
            ]
        )
    );
};




interface AminoConverterParams {
    name: string,
    root: ProtoRoot,
    context: AminoParseContext,
    protos: ProtoType[]
}
export const createAminoConverter = (
    {
        name,
        root,
        context,
        protos
    }: AminoConverterParams) => {

    const items = protos.map(proto => {
        return createAminoConverterItem({
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

