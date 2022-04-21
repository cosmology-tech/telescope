import {
    addEncodedMethod,
    addFromPartialMethod,
    addJsonMethod,
    addFromJSONMethod,
    addToJSONMethod,
    toObjectWithEncodedMethods,
    toObjectWithPartialMethods,
    createTypeRegistry,
    createRegistryLoader
} from './messages';
import generate from '@babel/generator';
import { mutations } from './__fixtures__';
const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
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

it('toObjectWithEncodedMethods', async () => {
    expectCode(toObjectWithEncodedMethods(mutations));
});

it('toObjectWithPartialMethods', async () => {
    expectCode(toObjectWithPartialMethods(mutations));
});

it('createTypeRegistry', async () => {
    expectCode(createTypeRegistry(mutations));
});

it('createRegistryLoader', async () => {
    expectCode(createRegistryLoader());
});