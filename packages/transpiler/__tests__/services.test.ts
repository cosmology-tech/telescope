import {
    ProtoParseContext,
    AminoParseContext
} from '@osmonauts/ast';
import generate from '@babel/generator';
import { ProtoRef, ProtoStore, traverse, getNestedProtoGeneric, parseProto } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { parse, TelescopeParseContext } from '../src/parse';

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
    filename: 'cosmology/example/a.proto',
    content: `
syntax = "proto3";

package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

message MsgTypePackageA {
    string address = 1;
}

`});
addRef({
    filename: 'cosmology/example/b.proto',
    content: `
syntax = "proto3";

package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

import "cosmology/example/a.proto";

message MsgTypePackageB {
    string name = 2;
}

message MsgTypePackageBResponse {}

service Msg {
    rpc ActionFromPackageBInner(MsgTypePackageB) returns (MsgTypePackageBResponse);
}

`});
addRef({
    filename: 'cosmology/example/c.proto',
    content: `
syntax = "proto3";
package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

import "cosmology/example/b.proto";

message MsgTypePackageC {
    string                              address        = 1;
    cosmology.finance.MsgTypePackageB     awesome    = 2;
}

service Msg {
    rpc ActionFromPackageC(MsgTypePackageC) returns (MsgTypePackageCResponse);
    rpc ActionFromPackageB(MsgTypePackageB) returns (MsgTypePackageBResponse);
}
message MsgTypePackageCResponse {}

service Query {
    // Config returns the current app config.
    rpc Config(QueryConfigRequest) returns (QueryConfigResponse) {}
}

// QueryConfigRequest is the Query/Config request type.
message QueryConfigRequest {}

// QueryConfigRequest is the Query/Config response type.
message QueryConfigResponse {

// config is the current app config.
Config config = 1;
}
  

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

describe('cosmology/example/c', () => {
    store.traverseAll();

    const ref = store.findProto('cosmology/example/c.proto');
    const context: TelescopeParseContext = {
        proto: new ProtoParseContext(),
        amino: new AminoParseContext(
            ref, store
        ),
        ref,
        store: store,
        parsedImports: {},
        body: [],
        mutations: [],
        queries: [],
        types: []
    };

    // aggregate service information
    // - [ ] get dependent objects of service and their paths
    // aggregate amino information
    // - [ ] get all aminos into one bundle per package!

    it('works', () => {
        parse(context);
        expect(context.mutations).toMatchSnapshot();
        expect(context.queries).toMatchSnapshot();
    });

});
