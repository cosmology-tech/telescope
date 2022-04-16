import { aminoConverter, makeAminoConverterItem, makeAminoTypeInterface } from './amino-interfaces';
import generate from '@babel/generator';
import { schemata, enums, interfaces } from '../__fixtures__';
const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

it('makeAminoConverterItem', async () => {
    expectCode(makeAminoConverterItem(schemata[0], enums, interfaces));
});


it('makeAminoTypeInterface', async () => {
    expectCode(makeAminoTypeInterface(schemata[0], enums, interfaces));
});

it('aminoConverter', async () => {
    expectCode(aminoConverter(schemata, enums, interfaces));
});