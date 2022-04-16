import { encoded } from './messages';
import { recursiveNamespace } from './utils';
import generate from '@babel/generator';
import { mutations } from './__fixtures__';

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

it('recursiveNamespace', async () => {
    expectCode(
        recursiveNamespace(['osmosis', 'gamm', 'v1beta', 'pools'].reverse(), [encoded(mutations)])[0]
    );
});
