import * as t from '@babel/types';
import { ProtoType } from '../../proto/types';
import { ProtoRoot } from '@osmonauts/proto-parser';
import { AminoOptions } from '../types';
import { toAminoJsonMethod } from '../to-amino-json';
import { fromAminoJsonMethod } from '../from-amino-json';
import { getTypeUrl, typeUrlToAmino } from '../utils';
import { ParseContext } from '../../context';

interface AminoConverterItemParams {
    root: ProtoRoot,
    context: ParseContext,
    proto: ProtoType,
    options: AminoOptions
}
export const makeAminoConverterItem = (
    {
        root,
        context,
        proto,
        options
    }: AminoConverterItemParams
) => {

    const typeUrl = getTypeUrl(root, proto);

    return t.objectProperty(
        t.stringLiteral(typeUrl),
        t.objectExpression(
            [
                t.objectProperty(t.identifier('aminoType'), t.stringLiteral(typeUrlToAmino(typeUrl, options.exceptions))),
                t.objectProperty(
                    t.identifier('toAmino'),
                    toAminoJsonMethod({
                        context,
                        proto,
                        options
                    })
                ),
                t.objectProperty(
                    t.identifier('fromAmino'),
                    fromAminoJsonMethod({
                        context,
                        proto,
                        options
                    })
                )
            ]
        )
    );
};




interface AminoConverterParams {
    name: string,
    root: ProtoRoot,
    context: ParseContext,
    protos: ProtoType[],
    options: AminoOptions
}
export const aminoConverter = (
    {
        name,
        root,
        context,
        protos,
        options
    }: AminoConverterParams) => {

    const items = protos.map(proto => {
        return makeAminoConverterItem({
            context,
            root,
            proto,
            options
        })
    })

    return t.exportNamedDeclaration(t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier(name),
            t.objectExpression(
                items
            ))
    ]));
};

