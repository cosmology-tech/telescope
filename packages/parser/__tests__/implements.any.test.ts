import { ProtoStore } from '../src/index'
import { traverse } from '../src/';
const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1']);

it('cosmos/authz/v1beta1/authz', () => {
  const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
  const res = traverse(store, ref);

  const imports = res.imports;

  console.log(JSON.stringify(res, null, 2));

  // for (let i = 0; i < imports.length; i++) {
  //   const found = store.findProto(imports[i]);
  //   console.log(found);
  // }

  // expect(res).toMatchSnapshot();
});
