import { ProtoRef, ProtoRoot } from '@osmonauts/types';
import { parseFullyTraversedProtoImports, parseProto, ProtoStore } from '../../src';
import google_any from '../../src/native/any';
const getStore = () => {

    const store = new ProtoStore();
    store.protos = [];
    const addRef = ({ filename, content }) => {
        const ref: ProtoRef = {
            absolute: filename,
            filename,
            proto: parseProto(content) as ProtoRoot
        };
        store.protos.push(ref);
    };
    const DogTxt = (pkg) => `
syntax = "proto3";

package ${pkg};
option go_package = "github.com/cosmology-tech/go";

message Dog {
    option (cosmos_proto.implements_interface) = "AnimalI";

    string name = 1;
    string address = 2;
    uint64 id = 3;
}
`;
    addRef({
        filename: 'google/protobuf/any.proto',
        content: google_any
    });
    addRef({
        filename: 'cosmology/example/dog1.proto',
        content: DogTxt('cosmology.pkg.one')
    });
    addRef({
        filename: 'cosmology/example/dog2.proto',
        content: DogTxt('cosmology.pkg.two')
    });
    addRef({
        filename: 'cosmology/example/dog3.proto',
        content: DogTxt('cosmology.pkg.three')
    });
    addRef({
        filename: 'cosmology/example/cat.proto',
        content: `
syntax = "proto3";
package cosmology.tech;
option go_package = "github.com/cosmology-tech/go";

message Cat {
    option (cosmos_proto.implements_interface) = "AnimalI";

    string name = 1;
    string address = 2;
    uint64 id = 3;
}
`});

    addRef({
        filename: 'cosmology/example/animal.proto',
        content: `
syntax = "proto3";
package cosmology.tech;
import "google/protobuf/any.proto";
import "cosmology/example/dog1.proto";
import "cosmology/example/dog2.proto";

option go_package = "github.com/cosmology-tech/go";

message QueryAnimalsRequest {
    google.protobuf.Any animal = 1 [ (cosmos_proto.accepts_interface) = "AnimalI" ];
}
message QueryDog1Request {
    cosmology.pkg.one.Dog doggy = 1;
}
message QueryDog2Request {
    cosmology.pkg.two.Dog doggy = 1;
}
message Dog {
    cosmology.pkg.two.Dog doggy1 = 1;
    cosmology.pkg.one.Dog doggy2 = 2;
}
`});

    return store;
};


it('implementsAcceptsAny', () => {
    const store = getStore();
    store.options.prototypes!.implementsAcceptsAny = true;
    store.traverseAll();
    const symbols = parseFullyTraversedProtoImports(store);
    expect(symbols).toMatchSnapshot();
});

it('implementsAcceptsAny=false', () => {
    const store = getStore();
    store.options.prototypes!.implementsAcceptsAny = false;
    store.traverseAll();
    const symbols = parseFullyTraversedProtoImports(store);
    expect(symbols).toMatchSnapshot();
});
