import generate from '@babel/generator';
import { ProtoRef, ProtoStore, traverse, getNestedProto, parseProto } from '../src/'
import { camel, snake } from 'case';

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
    enum EnumPackageA {
        NO_HASH = 0;
        SHA256 = 1;
        SHA512 = 2;
        KECCAK = 3;
        RIPEMD160 = 4;
        BITCOIN = 5;
    }

    string address = 1;
    EnumPackageA someCoolField = 2;
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
    enum EnumTypePackageB {
        NO_HASH = 0;
        SHA256 = 1;
        SHA512 = 2;
        KECCAK = 3;
        RIPEMD160 = 4;
        BITCOIN = 5;
    }

    string address = 1;
    EnumTypePackageB myYolo0 = 2;

    message AnotherType {
        MsgTypePackageA myType = 3;
    }

    AnotherType anotherField = 4;
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
    rpc JoinPool(MsgTypePackageC) returns (MsgTypePackageCResponse);
}
message MsgTypePackageCResponse {}

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

interface Context {
  rootRef: ProtoRef;
  store: ProtoStore;
  scope: string[]
  imports: string[]
  utils: string[]
  visited: string[]
}
class Context implements Context {
  constructor(
    rootRef: ProtoRef,
    store: ProtoStore
  ) {
    this.rootRef = rootRef;
    this.store = store;
    this.scope = [];
    this.imports = [];
    this.utils = [];
    this.visited = [];
  }
}


// // MOVE THIS TO proto-parser ProtoStore
// export const getAllImportsOfField = (field, context) => {
//   const imports = context.ref.proto.imports ?? [];

//   // look if field is nested, and find the files of those imports, and get their paths...

//   if (field.import) {
//     const ref = context.store.findProto(field.import);
//     // technicall NOT all of them, technically only of the relevant field...
//     // [].push.apply(imports, ref.proto.imports);


//   }

// };



const fieldLookupRecurse = (
  context: Context,
  ref: any,
  findFieldName: string,
) => {

  context.visited.push(ref.filename);
  let field = store.get(ref, findFieldName);
  if (field) {
    return {
      ...field,
      lookupPath: ref.filename,
      lookupScope: context.scope
    };
  }

  const imports = ref.proto.imports;
  for (let i = 0; i < imports.length; i++) {
    const imp = imports[i];
    if (context.visited.includes(imp)) continue;
    ref = store.findProto(imp);
    context.scope.push(imp); // scope = visited - 1 ?
    const found = fieldLookupRecurse(context, ref, findFieldName);
    if (found) {
      return {
        ...found,
        lookupPath: ref.filename,
        lookupScope: context.scope
      };
    }
  }
}




const fieldLookupRecur = (
  context: Context,
  findFieldName: string,
  forField: any | null, // ProtoField
  currentRef: ProtoRef | null
) => {

  let ref = context.rootRef;
  context.visited.push(ref.filename);
  let field = store.get(ref, findFieldName);
  if (field) return {
    ...field,
    lookupFrom: context.rootRef.filename,
    lookupType: 'local',
    lookupPath: ref.filename,
    lookupScope: context.scope
  };

  // 1.  if field is blank, just look in this file
  if (!forField) {
    return;
  }

  // 2. forField
  // - [ ] what file does the field come from? let's look there.
  // - [ ] call fieldLookupRecur (pass in lookup chain)

  if (forField.import) {
    // get the fields file
    ref = store.findProto(forField.import);
    context.visited.push(ref.filename);
    // add to scope — we don't need the top-level scope
    // bc it's implicit in the root ref pkg
    context.scope.push(forField.import);

    // field in there?
    field = store.get(ref, findFieldName);
    if (field) {
      return {
        ...field,
        lookupFrom: context.rootRef.filename,
        lookupType: 'import',
        lookupPath: ref.filename,
        lookupScope: context.scope
      }
    }

    // now recur
    // if you knew the parent object of forField's type, then you could do a proto lookup, but that may get complex, so for simplicity, we simply look through all imports of the ref proto

    const found = fieldLookupRecurse(context, ref, findFieldName);
    if (found) {
      return {
        ...found,
        lookupFrom: context.rootRef.filename,
        lookupType: 'import',
        lookupPath: ref.filename,
        lookupScope: context.scope
      }
    }
  }







};

describe('cosmology/example/c', () => {
  store.traverseAll();

  it('no field, just ask if enum/type exists in package', () => {
    const ref = store.findProto('cosmology/example/c.proto');
    const ctx = new Context(ref, store);
    const result = fieldLookupRecur(ctx, 'MsgTypePackageC', null, null);
    expect(result.lookupType).toEqual('local');
    expect(result.lookupPath).toEqual('cosmology/example/c.proto');
    expect(result.name).toEqual('MsgTypePackageC');
    expect(result.import).toEqual(null);
    expect(result.importType).toEqual('local');
    expect(result.importedName).toEqual('MsgTypePackageC');
  });

  it('ask for a field in package A, w/o field', () => {
    const ref = store.findProto('cosmology/example/c.proto');
    const ctx = new Context(ref, store);

    const result = fieldLookupRecur(ctx, 'MsgTypePackageA', null, null);
    expect(result).toBeUndefined()
  });

  it('ask for a field in package A, w field', () => {
    const ref = store.findProto('cosmology/example/c.proto');
    const ctx = new Context(ref, store);
    const field = store.get(ref, 'MsgTypePackageC').obj.fields.awesome;
    const result = fieldLookupRecur(ctx, 'MsgTypePackageA', field, null);
    delete result.obj;
    expect(result).toEqual({
      lookupType: 'import',
      lookupPath: 'cosmology/example/b.proto',
      lookupFrom: 'cosmology/example/c.proto',
      name: 'MsgTypePackageA',
      importType: 'import',
      import: 'cosmology/example/a.proto',
      importedName: 'MsgTypePackageA',
      lookupScope: ['cosmology/example/b.proto']
    })
  });

  it('ask for a nested field in package A, w field', () => {
    // C -> B -> A (via Object in B that references enum in A)
    const ref = store.findProto('cosmology/example/c.proto');
    const ctx = new Context(ref, store);
    const field = store.get(ref, 'MsgTypePackageC').obj.fields.awesome;
    const result = fieldLookupRecur(ctx, 'EnumPackageA', field, null);
    expect(field.import).toEqual('cosmology/example/b.proto')
    expect(result).toEqual({
      name: 'EnumPackageA',
      import: null,
      importType: 'local',
      importedName: 'EnumPackageA',
      package: 'cosmology.finance',
      obj: {
        name: 'EnumPackageA',
        scope: ['cosmology.finance', 'MsgTypePackageA'],
        type: 'Enum',
        values: {
          NO_HASH: 0,
          SHA256: 1,
          SHA512: 2,
          KECCAK: 3,
          RIPEMD160: 4,
          BITCOIN: 5
        },
        comment: null,
        comments: {
          NO_HASH: null,
          SHA256: null,
          SHA512: null,
          KECCAK: null,
          RIPEMD160: null,
          BITCOIN: null
        }
      },
      lookupPath: 'cosmology/example/b.proto',
      lookupScope: ['cosmology/example/b.proto', 'cosmology/example/a.proto'],
      lookupFrom: 'cosmology/example/c.proto',
      lookupType: 'import'
    });

  });

  it('MsgTypePackageA', () => {
    const ref = store.findProto('cosmology/example/a.proto');
    const ctx = new Context(ref, store);
    const result = fieldLookupRecur(ctx, 'EnumPackageA', null, null);
    delete result.obj;
    expect(result).toEqual({
      lookupType: 'local',
      lookupPath: 'cosmology/example/a.proto',
      lookupFrom: 'cosmology/example/a.proto',
      lookupScope: [],
      name: 'EnumPackageA',
      import: null,
      importType: 'local',
      importedName: 'EnumPackageA',
      package: 'cosmology.finance',
    })
  });

  xit('MsgTypePackageC', () => {
    const ref = store.findProto('cosmology/example/c.proto');
    // TOP REF::

    const MsgTypePackageC = store.get(ref, 'MsgTypePackageC');
    expect(MsgTypePackageC.name).toEqual('MsgTypePackageC');
    expect(MsgTypePackageC.import).toEqual(null);
    expect(MsgTypePackageC.importType).toEqual('local');
    expect(MsgTypePackageC.importedName).toEqual('MsgTypePackageC');
    expect(MsgTypePackageC.package).toEqual('cosmology.finance');

    const awesomeRef = store.findProto(MsgTypePackageC.obj.fields.awesome.import);
    // NEW REF::

    const MsgTypePackageB = store.get(awesomeRef, 'MsgTypePackageB');
    expect(MsgTypePackageB.name).toEqual('MsgTypePackageB');
    expect(MsgTypePackageB.import).toEqual(null);
    expect(MsgTypePackageB.importType).toEqual('local');
    expect(MsgTypePackageB.importedName).toEqual('MsgTypePackageB');
    expect(MsgTypePackageB.package).toEqual('cosmology.finance');
    // WE KNOW IT'S NOT LOCAL!! It's NOT 'local', so we need to abstract this nested lookup.
    // importScope = MsgTypePackageC.obj.fields.awesome.import

    // console.log(MsgTypePackageB.obj)
    const EnumTypePackageB = store.get(awesomeRef, 'EnumTypePackageB');
    expect(EnumTypePackageB.name).toEqual('EnumTypePackageB');
    expect(EnumTypePackageB.import).toEqual(null);
    expect(EnumTypePackageB.importType).toEqual('local');
    expect(EnumTypePackageB.importedName).toEqual('EnumTypePackageB');
    expect(EnumTypePackageB.package).toEqual('cosmology.finance');
  });




});
