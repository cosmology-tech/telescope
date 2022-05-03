import * as t from '@babel/types';
import { pascal } from 'case';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getBaseCreateTypeFuncName } from '../../types';
import { arrayTypes, toAmino } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toAmino (${field.type} rules[${field.rule}] name[${name}])`);
}

export const toAminoJsonMethod = (name: string, proto: ProtoType) => {
    return t.objectMethod(
        'method',
        t.identifier('toAmino'),
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

