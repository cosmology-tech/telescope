import generate from '@babel/generator';
import {
  createTypeRegistry,
  createRegistryLoader,
  ServiceMethod
} from './registry';
import { AminoParseContext } from '../encoding';

export const mutations: ServiceMethod[] = [
  {
    methodName: 'joinPool',
    typeUrl: '/cosmos.pools.transfer.v1.MsgJoinPool',
    TypeName: 'MsgJoinPool'
  },
  {
    methodName: 'exitPool',
    typeUrl: '/cosmos.pools.transfer.v1.MsgExitPool',
    TypeName: 'MsgExitPool'
  }
];


const context: unknown = {
  addUtil: () => { }
}

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

it('createTypeRegistry', async () => {
  expectCode(createTypeRegistry(context as AminoParseContext, mutations));
});

it('createRegistryLoader', async () => {
  expectCode(createRegistryLoader(context as AminoParseContext));
});