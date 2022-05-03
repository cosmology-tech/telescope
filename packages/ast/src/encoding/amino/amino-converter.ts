import * as t from '@babel/types';
import { ProtoType } from '../types';
import { ProtoRoot, ProtoAny, AminoException, AminoExceptions, DEFAULT_AMINO_EXCEPTIONS } from '../../types';
import { toAminoJsonMethod } from './to-amino-json';
import { fromAminoJsonMethod } from './from-amino-json';
import { kebab } from 'case';
import { getTypeUrl, typeUrlToAmino } from './utils';

export interface AminoOptions {
    aminoCasingFn: Function,
    exceptions?: AminoExceptions
}


// MARKED AS NOT DRY
interface Context {
    enums: any[];
    types: any[];
}

export interface AminoConverterItemParams {
    root: ProtoRoot,
    context: Context,
    proto: ProtoType,
    options: AminoOptions,
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
                    toAminoJsonMethod(
                        context,
                        proto,
                        options
                    )
                ),
                t.objectProperty(
                    t.identifier('fromAmino'),
                    fromAminoJsonMethod(
                        proto,
                        options
                    )
                )
            ]
        )
    );
};


interface AminoConverterParams {
    name: string,
    root: ProtoRoot,
    context: Context,
    protos: ProtoAny[],
    options: AminoOptions,
    exceptions?: AminoExceptions
}
export const aminoConverter = (
    {
        name,
        root,
        context,
        protos,
        options,
        exceptions
    }: AminoConverterParams) => {

    const items = protos.map(proto => {
        return makeAminoConverterItem({
            context,
            root,
            proto,
            options,
            exceptions
        })
    })

    return t.exportNamedDeclaration(t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier(name),
            t.objectExpression(
                items
            ))
    ]));
};

