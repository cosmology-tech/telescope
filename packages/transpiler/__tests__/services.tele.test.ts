import {
    ProtoParseContext,
    AminoParseContext
} from '@osmonauts/ast';
import { dirname, join } from 'path';
import * as t from '@babel/types';
import generate from '@babel/generator';
import { ProtoRef, ProtoStore, traverse, getNestedProtoGeneric, parseProto } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { buildAllImports, getAminoRelativeDeps, parse, TelescopeParseContext } from '../src/parse';
import { TelescopeBuilder } from '../src';

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


store.traverseAll();

const tele = new TelescopeBuilder({
    protoDir: '',
    outPath: '',
    store
})

// aggregate service information
// - [ ] get dependent objects of service and their paths
// aggregate amino information
// - [ ] get all aminos into one bundle per package!

const res = tele.buildProto('cosmology/example/c.proto');
res.context.buildBase();

it('mutations', () => {
    expect(res.context.mutations).toMatchSnapshot();
});

it('queries', () => {
    expect(res.context.queries).toMatchSnapshot();
});

it('aminos', () => {
    res.context.body = [];
    res.context.buildAminoInterfaces();
    res.context.buildAminoConverter();
});
// console.log(generate(t.program(res.context.body)).code)

it('basic imports', () => {
    const allImports = buildAllImports(res.context);
    console.log(generate(t.program(allImports)).code)
    expectCode(t.program(allImports))
});

it('from package c deps', () => {
    const imports1 = getAminoRelativeDeps(
        res.context.mutations,
        res.context.ref.filename
    );
    expect(imports1).toMatchSnapshot();

    const moreImports = buildAllImports(res.context, imports1);
    console.log(generate(t.program(moreImports)).code)
    expectCode(t.program(moreImports))
});

it('bundle deps', () => {
    const imports2 = getAminoRelativeDeps(
        res.context.mutations,
        join(dirname(res.context.ref.filename), 'bundle.ts')
    );
    expect(imports2).toMatchSnapshot();


    const evenMoreImports = buildAllImports(res.context, imports2);
    console.log(generate(t.program(evenMoreImports)).code)
    expectCode(t.program(evenMoreImports))
});
