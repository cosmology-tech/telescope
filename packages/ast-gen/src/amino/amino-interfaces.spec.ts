import { aminoConverter, makeAminoConverterItem, makeAminoTypeInterface } from './amino-interfaces';
import generate from '@babel/generator';
import { snake, camel } from 'case';
import { schemata, enums, interfaces } from '../__fixtures__';
const expectCode = (ast) => {
  expect(
    generate(ast).code
  ).toMatchSnapshot();
}

describe('snake', () => {
  it('makeAminoConverterItem', async () => {
    expectCode(makeAminoConverterItem(schemata[0], enums, interfaces, snake));
  });

  it('makeAminoTypeInterface', async () => {
    expectCode(makeAminoTypeInterface(schemata[0], enums, interfaces, undefined, snake));
  });

  it('aminoConverter', async () => {
    expectCode(aminoConverter(schemata, enums, interfaces, snake));
  });
})

describe('camel', () => {
  it('makeAminoConverterItem', async () => {
    expectCode(makeAminoConverterItem(schemata[0], enums, interfaces, camel));
  });

  it('makeAminoTypeInterface', async () => {
    expectCode(makeAminoTypeInterface(schemata[0], enums, interfaces, undefined, camel));
  });

  it('aminoConverter', async () => {
    expectCode(aminoConverter(schemata, enums, interfaces, camel));
  });
})
