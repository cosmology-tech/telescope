import * as t from '@babel/types';
import { ProtoType } from '../types';
import { protoFromPartialMethod } from './from-partial';
import { protoDecodeMethod } from './decode';
import { protoEncodeMethod } from './encode';
import { protoFromJSONMethod } from './from-json';
import { protoToJSONMethod } from './to-json';

export const createProtoObjectWithMethods = (name: string, proto: ProtoType) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration('const',
            [t.variableDeclarator(
                t.identifier(name),
                t.objectExpression(
                    [
                        protoEncodeMethod(name, proto),
                        protoDecodeMethod(name, proto),
                        protoFromJSONMethod(name, proto),
                        protoToJSONMethod(name, proto),
                        protoFromPartialMethod(name, proto),
                    ]
                )
            )]
        )
    )
};