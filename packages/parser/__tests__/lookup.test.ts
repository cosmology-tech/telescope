import { ProtoResolver, ProtoStore } from '../src/index'
import { getObjectName, getObjectNameWithoutCollisions, lookup } from '../src/';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

// you may need to fix TRAVERSE

describe('double import bug', () => {
    store.traverseAll();
    const ref = store.findProto('ibc/core/types/v1/genesis.proto');
    it('imports/exports', () => {
        // console.log(ref.traversed.parsedExports);
        // console.log(ref.traversed.parsedImports);
        // console.log(ref.traversed.importNames);
        expect(ref.traversed.parsedExports).toMatchSnapshot();
        expect(ref.traversed.parsedImports).toMatchSnapshot();
        expect(ref.traversed.importNames).toMatchSnapshot();
        // - [ ] if exports includes the name of any imports, update names
        // - [ ] imports have any duplicates, update names
        // - [ ] these SHOULD NOT affect field.scope, field.name, etc. BECAUSE it should likely just be passed into context
    })
    it('GenesisState', () => {
        const GenesisState = lookup(store, ref, 'GenesisState');
        expect(GenesisState).toMatchSnapshot();
        expect(GenesisState.scope).toMatchSnapshot();
        const result1 = getObjectName('GenesisState', GenesisState.scope);
        expect(result1).toEqual('GenesisState')
    });
});