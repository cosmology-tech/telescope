import { ProtoRef } from '@subql/x-cosmology-types';
import { ProtoStore, parseProto } from '../../src/index'
import { traverse } from '../../src';

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

enum FancyEnumType {
    NO_HASH = 0;
    SHA256 = 1;
    SHA512 = 2;
    KECCAK = 3;
    RIPEMD160 = 4;
    BITCOIN = 5;
}

message LeafOp {
    FancyEnumType hash = 1;
    FancyEnumType prehash_key = 2;
    FancyEnumType prehash_value = 3;
    bytes prefix = 5;
}

message ExistenceProof {
    bytes key = 1;
    bytes value = 2;
    LeafOp leaf = 3;
    repeated LeafOp path = 4;    
}

message NonExistenceProof {
    bytes key = 1; 
    ExistenceProof left = 2;
    ExistenceProof right = 3;
}
`;

    const proto = createProtoRef({ filename: 'cosmology/finance/tx.proto', content });
    store.protos = [proto];
    store.traverseAll();

    const ref = store.findProto('cosmology/finance/tx.proto');
    const res = traverse(store, ref);
    expect(res).toMatchSnapshot();
});

