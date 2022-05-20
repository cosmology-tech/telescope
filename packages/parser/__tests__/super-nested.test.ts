import generate from '@babel/generator';
import { ProtoRef } from '@osmonauts/types'
import { ProtoStore, getNestedProtoGeneric, parseProto } from '../src/'

/*

WIP

this is a test to build a recursive lookup method that navigates through the fields
and their imports, taking into account the possibility of duplicate nested names in
certain proto files. It's unfinished because it was solved by passing a context 
around. Leaving this here in case it needs to be picked back up.

*/

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

    
    enum EnumDuplicateName {
      A = 0;
      B = 1;
      C = 2;
    }
    
    string address = 1;
    EnumPackageA someCoolField    = 2;
    EnumDuplicateName otherField  = 3;

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

    enum EnumDuplicateName {
      D = 0;
      E = 1;
      F = 2;
    }

    EnumDuplicateName otherField  = 5;

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
const recursiveLookup = (
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
    const found = recursiveLookup(context, ref, findFieldName);
    if (found) {
      return {
        ...found,
        lookupPath: ref.filename,
        lookupScope: context.scope
      };
    }
  }
}

const lookupRecur = (
  context: Context,
  ref: any,
  findFieldName: string,
  objectScope: string[]
) => {

  if (!objectScope.length) {
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
      const found = lookupRecur(context, ref, findFieldName, objectScope);
      if (found) {
        return {
          name: findFieldName,
          import: null,
          // importType: 'local',
          importedName: findFieldName,
          package: context.rootRef.proto.package,
          obj: found,
          lookupPath: ref.filename,
          lookupScope: context.scope
        };
      }
    }
  }

  /// WITH SCOPE
  context.visited.push(ref.filename);
  console.log(ref.traversed);
  const res = getNestedProtoGeneric(ref.traversed, objectScope);
  // should we loop through objectScope instead of passing it all in?
  // and then lookup?
  if (res[findFieldName]) {
    return {
      name: findFieldName,
      import: null,
      // importType: 'local',
      importedName: findFieldName,
      package: context.rootRef.proto.package,
      obj: res[findFieldName],
      lookupPath: ref.filename,
      lookupScope: context.scope
    }
  }

  const topLevel = objectScope[0];
  let parent = store.get(ref, topLevel);
  if (parent) {
    // console.log(objectScope);
    // console.log(parent);
    return parent;
  }



}




const fieldLookupRecur = (
  context: Context,
  findFieldName: string,
  forField: any | null // ProtoField
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

    const found = recursiveLookup(context, ref, findFieldName);
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
    const result = fieldLookupRecur(ctx, 'MsgTypePackageC', null);
    expect(result.lookupType).toEqual('local');
    expect(result.lookupPath).toEqual('cosmology/example/c.proto');
    expect(result.name).toEqual('MsgTypePackageC');
    expect(result.import).toEqual('cosmology/example/c.proto');
    expect(result.importType).toEqual('local');
    expect(result.importedName).toEqual('MsgTypePackageC');
  });

  it('ask for a field in package A, w/o field', () => {
    const ref = store.findProto('cosmology/example/c.proto');
    const ctx = new Context(ref, store);

    const result = fieldLookupRecur(ctx, 'MsgTypePackageA', null);
    expect(result).toBeUndefined()
  });

  it('ask for a field in package A, w field', () => {
    const ref = store.findProto('cosmology/example/c.proto');
    const ctx = new Context(ref, store);
    const field = store.get(ref, 'MsgTypePackageC').obj.fields.awesome;
    const result = fieldLookupRecur(ctx, 'MsgTypePackageA', field);
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
    const result = fieldLookupRecur(ctx, 'EnumPackageA', field);
    expect(field.import).toEqual('cosmology/example/b.proto')
    expect(result).toEqual({
      name: 'EnumPackageA',
      import: 'cosmology/example/a.proto',
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
    const EnumPackageA = fieldLookupRecur(ctx, 'EnumPackageA', null);
    delete EnumPackageA.obj;
    expect(EnumPackageA).toEqual({
      lookupType: 'local',
      lookupPath: 'cosmology/example/a.proto',
      lookupFrom: 'cosmology/example/a.proto',
      lookupScope: [],
      name: 'EnumPackageA',
      import: 'cosmology/example/a.proto',
      importType: 'local',
      importedName: 'EnumPackageA',
      package: 'cosmology.finance',
    })
    const EnumDuplicateName = fieldLookupRecur(ctx, 'EnumDuplicateName', null);
    delete EnumDuplicateName.obj;
    expect(EnumDuplicateName).toEqual({
      lookupType: 'local',
      lookupPath: 'cosmology/example/a.proto',
      lookupFrom: 'cosmology/example/a.proto',
      lookupScope: [],
      name: 'EnumDuplicateName',
      import: 'cosmology/example/a.proto',
      importType: 'local',
      importedName: 'EnumDuplicateName',
      package: 'cosmology.finance',
    })
  });

  describe('MsgTypePackageB', () => {
    describe('EnumDuplicateName', () => {
      it('fieldLookupRecur', () => {
        const ref = store.findProto('cosmology/example/b.proto');
        const ctx = new Context(ref, store);
        const EnumDuplicateName = fieldLookupRecur(ctx, 'EnumDuplicateName', null);
        delete EnumDuplicateName.obj;
        expect(EnumDuplicateName).toEqual({
          lookupType: 'local',
          lookupPath: 'cosmology/example/b.proto',
          lookupFrom: 'cosmology/example/b.proto',
          lookupScope: [],
          name: 'EnumDuplicateName',
          import: 'cosmology/example/b.proto',
          importType: 'local',
          importedName: 'EnumDuplicateName',
          package: 'cosmology.finance',
        })
      });
      xit('lookupRecur', () => {
        const ref = store.findProto('cosmology/example/b.proto');
        const ctx = new Context(ref, store);
        const EnumDuplicateName = lookupRecur(ctx, ref, 'EnumDuplicateName', ['MsgTypePackageB']);
        delete EnumDuplicateName.obj;
        expect(EnumDuplicateName).toEqual({
          // lookupType: 'local',
          lookupPath: 'cosmology/example/b.proto',
          // lookupFrom: 'cosmology/example/b.proto',
          lookupScope: [],
          name: 'EnumDuplicateName',
          import: 'cosmology/example/b.proto',
          importType: 'local',
          importedName: 'EnumDuplicateName',
          package: 'cosmology.finance',
        })
      });
    });
  });

  xit('MsgTypePackageC', () => {
    const ref = store.findProto('cosmology/example/c.proto');
    // TOP REF::

    const MsgTypePackageC = store.get(ref, 'MsgTypePackageC');
    expect(MsgTypePackageC.name).toEqual('MsgTypePackageC');
    expect(MsgTypePackageC.import).toEqual('cosmology/example/c.proto');
    expect(MsgTypePackageC.importType).toEqual('local');
    expect(MsgTypePackageC.importedName).toEqual('MsgTypePackageC');
    expect(MsgTypePackageC.package).toEqual('cosmology.finance');

    const awesomeRef = store.findProto(MsgTypePackageC.obj.fields.awesome.import);
    // NEW REF::

    const MsgTypePackageB = store.get(awesomeRef, 'MsgTypePackageB');
    expect(MsgTypePackageB.name).toEqual('MsgTypePackageB');
    expect(MsgTypePackageB.import).toEqual('cosmology/example/c.proto');
    expect(MsgTypePackageB.importType).toEqual('local');
    expect(MsgTypePackageB.importedName).toEqual('MsgTypePackageB');
    expect(MsgTypePackageB.package).toEqual('cosmology.finance');
    // WE KNOW IT'S NOT LOCAL!! It's NOT 'local', so we need to abstract this nested lookup.
    // importScope = MsgTypePackageC.obj.fields.awesome.import

    // console.log(MsgTypePackageB.obj)
    const EnumTypePackageB = store.get(awesomeRef, 'EnumTypePackageB');
    expect(EnumTypePackageB.name).toEqual('EnumTypePackageB');
    expect(EnumTypePackageB.import).toEqual('cosmology/example/c.proto');
    expect(EnumTypePackageB.importType).toEqual('local');
    expect(EnumTypePackageB.importedName).toEqual('EnumTypePackageB');
    expect(EnumTypePackageB.package).toEqual('cosmology.finance');
  });




});
