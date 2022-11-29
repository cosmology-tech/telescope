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


interface Rec {
    filename: string;
    anyJoinName: string;
    msgName: string;
}
interface LocalSymbol {
    type: 'import' | 'export' | 'importFromImplements'
    symbolName: string;
    readAs: string;
    path: string;
    // msgName: string;
}
it('traverses', () => {
    const protos = store.getProtos();

    const records: Rec[] = [];

    // AGGREGATE ALL implements
    protos.forEach(ref => {
        const implementsInterface = ref.traversed?.implementsInterface ?? {};
        Object.keys(implementsInterface).forEach(key => {
            Object.keys(implementsInterface[key]).forEach(anyJoinName => {
                implementsInterface[key][anyJoinName].forEach(msgName => {
                    records.push({
                        filename: ref.filename,
                        anyJoinName,
                        msgName
                    })
                });
            })
        });
    });

    // class SymbolStore {
    //     symbols: LocalSymbol[] = [];
    //     addSymbol (type: string, name: string) {

    //     }
    // }

    protos.forEach(ref => {
        const localSymbols: LocalSymbol[] = [];
        const findAvailableName = (
            symbolName: string
        ) => {
            let counter = 0;
            while (true) {
                let testName = !counter ? symbolName : symbolName + counter;
                const found = localSymbols.find(a => a.readAs === testName);
                if (found) {
                    counter++;
                } else {
                    return testName;
                }

            }
        };
        Object.keys(ref.traversed?.parsedExports ?? {}).forEach(e => {
            localSymbols.push({
                type: 'export',
                path: ref.filename,
                symbolName: e,
                readAs: e
            })
        })
        Object.keys(ref.traversed?.parsedImports ?? {}).forEach(path => {
            const imps = ref.traversed?.parsedImports?.[path] ?? [];
            imps.forEach(im => {
                localSymbols.push({
                    type: 'import',
                    path,
                    symbolName: im,
                    readAs: findAvailableName(im)
                })
            });
        });

        Object.keys(ref.traversed?.acceptsInterface ?? {}).forEach(anyJoinName => {
            const recordsThatMatter = records.filter(rec => rec.anyJoinName === anyJoinName);
            const notYetInImports = recordsThatMatter.filter(r => {
                return !localSymbols.find(l => l.path === r.filename && l.symbolName === r.msgName);
            });
            notYetInImports.forEach(imp => {
                localSymbols.push({
                    type: 'importFromImplements',
                    path: imp.filename,
                    readAs: findAvailableName(imp.msgName),
                    symbolName: imp.msgName
                })
            })
        });

        console.log(localSymbols);

    });

});