import { aminoConverter } from '../index';
import generate from '@babel/generator';
import { ProtoRef, ProtoStore, traverse, getNestedProto, parseProto } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { ProtoType } from '../../../proto/types';

const store = new ProtoStore('');
store.protos = [];
const addRef = ({ filename, content }) => {
    const ref = {
        absolute: filename,
        filename,
        proto: parseProto(content)
    };
    store.protos.push(ref);
};
addRef({
    filename: 'cosmology/example/tx.proto',
    content: `
syntax = "proto3";

package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

message MyAwesomeType {
    enum FancyEnumType {
        NO_HASH = 0;
        SHA256 = 1;
        SHA512 = 2;
        KECCAK = 3;
        RIPEMD160 = 4;
        BITCOIN = 5;
    }

    string address = 1;
    FancyEnumType myYolo0 = 2;
}

`});
addRef({
    filename: 'cosmology/example/msg.proto',
    content: `
syntax = "proto3";
package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

import "cosmology/example/tx.proto";

message MsgDoFunThing {
    string                              address        = 1;
    cosmology.finance.MyAwesomeType     awesome    = 2;
}

service Msg {
    rpc JoinPool(MsgDoFunThing) returns (MsgDoFunThingResponse);
}
message MsgDoFunThingResponse {}

`});

store.traverseAll();

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}

const prepareContext = (protoFile: string) => {
    const ref = store.findProto(protoFile);
    const traversed = traverse(store, ref);
    const proto: Record<string, ProtoType> = getNestedProto(traversed);
    const protos: ProtoType[] = Object.values(proto).filter(
        proto => proto.name.startsWith('Msg')
            &&
            !proto.name.endsWith('Response')
            &&
            proto.name !== 'Msg'
    );

    const context = {
        store,
        ref
    }

    return {
        context,
        root: traversed,
        protos
    };
}

describe('cosmology/example/msg', () => {
    const {
        context, root, protos
    } = prepareContext('cosmology/example/msg.proto')

    it('AminoConverter', () => {
        expectCode(aminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos,
            options: {
                aminoCasingFn: camel
            }
        }))
    })
});
