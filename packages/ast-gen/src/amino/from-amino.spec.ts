import { memberExpressionOrIdentifier } from '../utils';
import { fromAminoSnakeToCamel } from './from-amino';
import generate from '@babel/generator';
import cases from 'jest-in-case';

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

cases('snake to camel', opts => {
    expectCode(memberExpressionOrIdentifier(opts.scope));
}, [
    { name: '1', prop: 'a', scope: ['a'] },
    { name: '2', prop: 'a', scope: ['a', 'b', 'c'] },
]);

cases('snake to camel', opts => {
    expectCode(fromAminoSnakeToCamel(opts.prop, opts.scope));
}, [
    { name: '1', prop: 'a', scope: ['a'] },
    { name: '2', prop: 'a', scope: ['a', 'b', 'c'] },
]);