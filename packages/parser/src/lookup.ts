import { ProtoStore } from "./store";
import { ProtoRef } from "@cosmology/types";
import { getNested, getNestedProto } from "./";
import { Lookup } from "@cosmology/types";

export type { Lookup } from "@cosmology/types";

export const getNestedMsgType = (
  name: string,
  pkg: string,
  scope: string[]
) => {
  const joinedScope = scope.join(".");
  const fullPath = `${joinedScope}.${name}`;
  const nestedMsgName = fullPath.replace(`${pkg}.`, "");

  return nestedMsgName.replace(/\./g, "_");
};

export const recursiveLookup = (
  proto: any,
  name: string,
  scope: string[] = [],
  allowNested = true
) => {
  if (!proto) return;

  if (proto.hasOwnProperty(name))
    return {
      name,
      scope,
      ...proto[name],
    };

  if (allowNested && proto) {
    const keys = Object.keys(proto);
    for (let k = 0; k < keys.length; k++) {
      const nestedMsgType = getNestedMsgType(
        proto[keys[k]].name,
        proto[keys[k]].package,
        scope
      );

      if (nestedMsgType === name)
        return {
          nestedMsgTypeName: nestedMsgType,
          scope,
          ...proto[keys[k]],
        };

      const found = recursiveLookup(
        proto[keys[k]].nested,
        name,
        [...scope, keys[k]],
        allowNested
      );
      if (found) {
        return {
          name,
          ...found,
        };
      }
    }
  }
};

const getRoot = (ref: ProtoRef) => {
  if (ref.traversed) return ref.traversed;
  return ref.proto;
};

/*

  "imports": [
    "google/api/expr/v1alpha1/syntax.proto",
    "google/protobuf/empty.proto",
    "google/protobuf/struct.proto"
  ],

  ...

  "type": "Empty"

  finds Empty inside of the import

*/
export const importLookup = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string
) => {
  const root = getRoot(ref);
  const objectsFromImports =
    root?.imports
      ?.map((imp) => {
        const ref = store.findProto(imp);
        if (!ref) {
          throw new Error(`missing proto import ${imp}`);
        }
        return {
          name,
          importType: "import",
          import: imp,
          importedName: name,
          obj: lookup(store, ref, name, false),
        };
      })
      .filter((a) => !!a.obj) ?? [];
  if (objectsFromImports.length) return objectsFromImports[0];
};

/*

  "imports": [
    "google/api/expr/v1alpha1/syntax.proto",
    "google/protobuf/empty.proto",
    "google/protobuf/struct.proto"
  ],

  ...

  "type": "google.protobuf.NullValue"

  finds NullValue directly from package name

*/

export const protoImportLookup = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string
): Lookup => {
  const root = getRoot(ref);
  if (name.startsWith(".")) name = name.replace(/^\./, "");
  const nameAsArray = name.split(".");
  const objectName = nameAsArray.pop();
  const packageName = nameAsArray.join(".");
  const objs = store
    .getProtos()
    // 1 ask all package files of package, e.g "google.protobuf"
    .filter((proto) => proto.proto.package === packageName)
    // 2 cross-checking w the imports by filter()
    .filter(
      (proto) =>
        proto.filename === ref.filename ||
        root.imports?.includes(proto.filename)
    )
    .map((ref: ProtoRef) => {
      return {
        import: ref.filename,
        obj: lookup(store, ref, objectName, false),
      };
    })
    .filter((a) => !!a.obj);
  if (objs.length) {
    return {
      import: objs[0].import,
      importType: "protoImport",
      obj: objs[0].obj,
      importedName: name,
      name: objectName,
      package: packageName,
    };
  }
};

export const protoScopeImportLookup = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string
): Lookup => {
  const root = getRoot(ref);

  // TODO pass in the imports and this ref
  // e.g. only include packages of those files !!!!!
  // this is currently looking at ALL protos
  const parsed = store.parseScope(name);
  if (!parsed) {
    return;
  }

  const packageName = parsed.package;
  const nameAsArray = parsed.nested.split(".");

  let lookupFn;
  if (nameAsArray.length > 1) {
    // nested!
    const traversal = [...packageName.split("."), ...nameAsArray];
    const nameToLookFor = traversal.pop();
    lookupFn = (ref: ProtoRef) => {
      return {
        import: ref.filename,
        obj: lookupNested(ref, traversal, nameToLookFor, true),
      };
    };
  } else {
    // single lookup
    lookupFn = (ref: ProtoRef) => {
      return {
        import: ref.filename,
        obj: lookup(store, ref, parsed.nested, false),
      };
    };
  }

  const refs = store
    .getProtos()
    // 1 ask all package files of package, e.g "google.protobuf"
    .filter((proto) => proto.proto.package === packageName)
    // 2 cross-checking w the imports by filter()
    .filter(
      (proto) =>
        proto.filename === ref.filename ||
        root.imports?.includes(proto.filename)
    );

  for (let ref of refs) {
    const found = lookupFn(ref);
    if (found && found.obj) {
      if (nameAsArray.length > 1) {
        return {
          import: found.import,
          importType: "protoImport",
          obj: found.obj,
          // not sure why scope doesn't handle this
          // so we're wrapping with underscores here
          // EXAMPLE: google/logging/v2/logging_metrics
          // EXAMPLE: google/api/servicecontrol/v1/distribution
          importedName: nameAsArray.join("_"),
          name: nameAsArray.join("_"),
          package: packageName,
          isNestedMsg: true,
        };
      } else {
        return {
          import: found.import,
          importType: "protoImport",
          obj: found.obj,
          importedName: name,
          name: parsed.nested,
          package: packageName,
        };
      }
    }
  }
};

export const lookup = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string,
  allowNested = true
) => {
  const root = getRoot(ref);

  if (!root.package) {
    console.warn(`There's no package definition in ${ref.filename}`);
    return;
  }

  const nested = getNestedProto(root);
  return recursiveLookup(nested, name, [root.package], allowNested);
};

export const lookupNested = (
  ref: ProtoRef,
  traversal: string[],
  name: string,
  allowNested = true
) => {
  const root = getRoot(ref);
  const nested = getNested(root, traversal);
  const scoped = [...traversal].splice(root.package.split(".").length);
  return recursiveLookup(nested, name, [root.package, ...scoped], allowNested);
};

export const lookupAny = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string
): Lookup => {
  let refObject = lookupLocal(store, ref, name);

  if (refObject) {
    return refObject;
  }

  refObject = externalLookup(store, ref, name);
  if (refObject) {
    return refObject;
  }
};

// recursively look at all imports and find what you're looking for...
export const lookupAnyFromImports = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string
): Lookup => {
  let refObject = lookupAny(store, ref, name);
  if (refObject) return refObject;
  const imports = Object.keys(ref.traversed?.parsedImports ?? {});
  for (let i = 0; i < imports.length; i++) {
    const ref = store.findProto(imports[i]);
    refObject = lookupAnyFromImports(store, ref, name);
    if (refObject) return refObject;
  }

  return refObject;
};

export const lookupLocal = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string
): Lookup => {
  const root = getRoot(ref);
  let refObject = lookup(store, ref, name);

  if (refObject) {
    return {
      name,
      import: ref.filename,
      importType: "local",
      importedName: name,
      package: root.package,
      obj: refObject,
    };
  }
};

export const externalLookup = (
  store: ProtoStore,
  ref: ProtoRef,
  name: string
): Lookup => {
  let refObject;

  refObject = protoImportLookup(store, ref, name);
  if (refObject) {
    return refObject;
  }

  refObject = importLookup(store, ref, name);
  if (refObject) {
    return refObject;
  }
};
