import { addEncodedMethod, addFromPartialMethod, addJsonMethod, addFromJSONMethod, addToJSONMethod, encoded, messages } from './messages';
import generate from '@babel/generator';
import { mutations } from './__fixtures__';
const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

it('addEncodedMethod', async () => {
    expectCode(addEncodedMethod(mutations[0]));
});

it('addFromPartialMethod', async () => {
    expectCode(addFromPartialMethod(mutations[0]));
});

it('addToJSONMethod', async () => {
    expectCode(addToJSONMethod(mutations[0]));
});

it('addFromJSONMethod', async () => {
    expectCode(addFromJSONMethod(mutations[0]));
});

it('addJsonMethod', async () => {
    expectCode(addJsonMethod(mutations[0]));
});

it('encoded', async () => {
    expectCode(encoded(mutations));
});

it('messages', async () => {
    expectCode(messages(mutations));
});