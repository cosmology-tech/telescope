import {
  addEncodedMethod,
  addFromPartialMethod,
  addJsonMethod,
  addFromJSONMethod,
  addToJSONMethod,
  toObjectWithEncodedMethods,
  toObjectWithPartialMethods,
} from './mutations';
import generate from '@babel/generator';

import {
  Mutation
} from './mutations';


export const mutations: Mutation[] = [
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
