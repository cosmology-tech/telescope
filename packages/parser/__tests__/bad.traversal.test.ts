import { ProtoRef } from '@osmonauts/types';
import { ProtoStore, parseProto } from '../src/index'

const store = new ProtoStore();

// TESTING ONLY
const createProtoRef = ({ filename, content }): ProtoRef => {
    return {
        absolute: filename,
        filename,
        proto: parseProto(content)
    }
}

it('pure proto', () => {

    const content = `
syntax = "proto3";

package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

import "gogoproto/gogo.proto";

message MyMessage {
    bytes key = 1;
    ThingThatCouldBeInGoGo field = 2;
}
`;

    const proto = createProtoRef({ filename: 'cosmology/finance/tx.proto', content });
    store.protos = [proto];

    let failed = false;
    try {
        store.traverseAll();
    } catch (e) {
        failed = true;
        expect(e.message).toEqual('missing proto import gogoproto/gogo.proto')
    }
    expect(failed).toBe(true);
});

