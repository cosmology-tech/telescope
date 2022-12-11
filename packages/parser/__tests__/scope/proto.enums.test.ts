import { getEnums } from '../../src/utils';
import { getTestProtoStore } from '../../test-utils';
const store = getTestProtoStore();

it('find', () => {
    const services = store.findProto('cosmos/gov/v1beta1/gov.proto');
    const enums = getEnums(services.proto);
    expect(enums).toMatchSnapshot();
});
