import { ProtoStore } from '../src/index'
import { getEnums } from '../src/utils';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

it('find', () => {
    const services = store.findProto('cosmos/gov/v1beta1/gov.proto');
    const enums = getEnums(services.proto);
    expect(enums).toMatchSnapshot();
});
