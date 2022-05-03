import * as t from '@babel/types';
import { pascal } from 'case';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getBaseCreateTypeFuncName } from '../../types';
import { arrayTypes, fromAmino } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toAmino (${field.type} rules[${field.rule}] name[${name}])`);
}

export const fromAminoJsonMethod = (name: string, proto: ProtoType) => {
    return t.objectMethod(
        'method',
        t.identifier('fromAmino'),
        [

        ],
        t.blockStatement([

            // body

        ]),
        false,
        false,
        false
    )
};

