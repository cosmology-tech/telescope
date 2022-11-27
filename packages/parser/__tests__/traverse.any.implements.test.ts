import { traverse } from '../src/';
import { getNested } from '../src/utils'
import { getTestProtoStore } from '../test-utils';

const store = getTestProtoStore();
store.traverseAll();

/*
Cases to cover


- [x] ARRAYS

[(cosmos_proto.accepts_interface) = "sdk.Msg, authz.Authorization"];

- [ ] URLS

(cosmos_proto.implements_interface) = "*github.com/cosmos/cosmos-sdk/x/bank/migrations/v040.SupplyI";

*/

describe('PoolI', () => {
    it('acceptsInterface', () => {
        expect(store.acceptsInterface['PoolI']).toMatchSnapshot();
    });
    it('implementsInterface', () => {
        expect(store.implementsInterface['PoolI']).toMatchSnapshot();
    });
});

describe('FeeAllowanceI', () => {
    it('acceptsInterface', () => {
        expect(store.acceptsInterface['FeeAllowanceI']).toMatchSnapshot();
    });
    it('implementsInterface', () => {
        expect(store.implementsInterface['FeeAllowanceI']).toMatchSnapshot();
    });
});

describe('Content', () => {
    it('acceptsInterface', () => {
        expect(store.acceptsInterface['Content']).toMatchSnapshot();
    });
    it('implementsInterface', () => {
        expect(store.implementsInterface['Content']).toMatchSnapshot();
    });
});
