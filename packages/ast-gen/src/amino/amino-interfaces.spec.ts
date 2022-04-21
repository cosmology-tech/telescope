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
    expectCode(makeAminoConverterItem({
      schema: schemata[0],
      enums,
      interfaces,
      aminoCasingFn: snake
    }));
  });

  it('makeAminoTypeInterface', async () => {
    expectCode(makeAminoTypeInterface({
      schema: schemata[0],
      enums,
      interfaces,
      aminoCasingFn: snake
    }));
  });

  it('aminoConverter', async () => {
    expectCode(aminoConverter({ schemata, enums, interfaces, aminoCasingFn: snake }));
  });
})

describe('camel', () => {
  it('makeAminoConverterItem', async () => {
    expectCode(makeAminoConverterItem({ schema: schemata[0], enums, interfaces, aminoCasingFn: camel }));
  });

  it('makeAminoTypeInterface', async () => {
    expectCode(makeAminoTypeInterface({ schema: schemata[0], enums, interfaces, aminoCasingFn: camel }));
  });

  it('aminoConverter', async () => {
    expectCode(aminoConverter({ schemata, enums, interfaces, aminoCasingFn: camel }));
  });
})

describe('plugins', () => {
  it('makeAminoTypeInterface', async () => {
    expectCode(makeAminoTypeInterface({
      schema: schemata[0],
      enums,
      interfaces,
      aminoCasingFn: camel,
      exceptions: {
        '/cosmos.some.MsgThing': {
          aminoType: 'special-override-type',
        }
      }
    }));
  });
})


