import { ProtoRef, ProtoRoot } from '@osmonauts/types';
import { parseProto, ProtoStore, TraverseContext } from '../src';
import google_any from '../src/native/any';

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
const DogTxt = `
syntax = "proto3";

package cosmology.tech;
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
    content: DogTxt
});
addRef({
    filename: 'cosmology/example/dog2.proto',
    content: DogTxt
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

option go_package = "github.com/cosmology-tech/go";

message QueryAnimalsRequest {
    google.protobuf.Any animal = 1 [ (cosmos_proto.accepts_interface) = "AnimalI" ];
}
message QueryDog1Request {
    Dog doggy = 1;
}
`});

store.traverseAll();

// describe('implements', () => {
//     it('works', () => {
//         // console.log(store.implementsInterface);
//         // console.log(store.acceptsInterface);
//         // console.log(store._traversed)
//     })
// });

// describe('ctx', () => {
//     it('traverse', () => {
//         const ref = store.getProtos().find(p => p.filename === 'cosmology/example/animal.proto');
//         // @ts-ignore
//         const traversal = new TraverseContext(store, ref);
//         // this needs more info!
//         // needs to know what AnimalI has implementations...
//         traversal.addAccepts('cosmology/example/animal.proto', 'AnimalI');
//         traversal.addImport('cosmology/example/dog1.proto', 'Dog');

//         console.log(traversal.getImportNames());
//     })
// });


/**
 * 
 * importNames has to be parsed AFTER allllll traversals....
 * currently it doesn't have enough information!!
 * 
 * 1. traverseAll()
 * 2. recurse all store.protos()
 * 3. make a new Hash Table on store, one per each ProtoRef
 * 4. do the magic, but now account for all types, INCLUDING the implements/accepts
 */

type RefImportHash = Record<string, string[]>;

it('traverses', () => {
    const protos = store.getProtos();
    protos.forEach(ref => {
        const exports = ref.traversed?.parsedExports;
        const imports = ref.traversed?.parsedImports;
        const acceptsInterface = ref.traversed?.acceptsInterface;
        const implementsInterface = ref.traversed?.implementsInterface;
        console.log(ref.filename);
        console.log(JSON.stringify({
            exports,
            imports,
            acceptsInterface,
            implementsInterface
        }, null, 2));
    });
});