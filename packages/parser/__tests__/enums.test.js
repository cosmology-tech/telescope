import { ProtoStore } from '../src/index';
import { getObjectName, lookup } from '../src/';
const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1']);

it('nested lookup', () => {
  // TODO generate the enum function
  const ref = store.findProto(
    'google/api/expr/conformance/v1alpha1/conformance_service.proto'
  );
  const result = lookup(store, ref, 'Severity');
  expect(result).toMatchSnapshot();
  const name = getObjectName('Severity', result.scope);
  expect(name).toEqual('IssueDetails_Severity');
});
