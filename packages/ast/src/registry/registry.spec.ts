import {
  createTypeRegistry,
  createRegistryLoader
} from './registry';
import generate from '@babel/generator';

import {
  ServiceMethod
} from './registry';

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
  expectCode(createTypeRegistry(mutations));
});

it('createRegistryLoader', async () => {
  expectCode(createRegistryLoader());
});