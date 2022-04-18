import { memberExpressionOrIdentifier } from '../utils';
import { fromAminoCaseToCamel } from './from-amino';
import generate from '@babel/generator';
import cases from 'jest-in-case';
import { snake } from 'case';

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
    expectCode(fromAminoCaseToCamel(opts.prop, opts.scope, snake));
}, [
    { name: '1', prop: 'a', scope: ['a'] },
    { name: '2', prop: 'a', scope: ['a', 'b', 'c'] },
]);