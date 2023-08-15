import { getPluginValue } from ".";
import {
  DEFAULT_AMINO_EXCEPTIONS,
  ProtoAny,
  ProtoRoot,
  ProtoType,
  ProtoRef,
  TelescopeOptions,
  IParseContext,
} from "@cosmology/types";
import { kebab } from "case";

export const getTypeUrlWithPkgAndName = (pkg: string, name: string) => {
  return `/${pkg}.${name}`;
};
export const getTypeUrl = (root: ProtoRoot, proto: ProtoAny | ProtoType) => {
  if (!proto.name) return;
  return getTypeUrlWithPkgAndName(root.package, proto.name);
};

export const getAminoTypeName = (
  context: IParseContext,
  root: ProtoRoot,
  proto: ProtoType
) => {
  return getAminoTypeNameByRef(context.ref, context.options, root, proto);
};

export const getAminoTypeNameByRef = (
  ref: ProtoRef,
  options: TelescopeOptions,
  root: ProtoRoot,
  proto: ProtoType
) => {
  if (!proto.name) {
    // seems to only happen for
    //  SourceInfo_PositionsEntry  (in hash map inside google.api.expr.v1beta1)
    return;
  }

  // 1. first check exceptions
  const typeUrl: string = getTypeUrl(root, proto);

  const exceptionsToCheck = {
    ...(options.aminoEncoding.exceptions ?? {}),
    ...DEFAULT_AMINO_EXCEPTIONS,
  };
  const exceptionAminoName = exceptionsToCheck?.[typeUrl]?.aminoType;
  if (exceptionAminoName) return exceptionAminoName;

  // 2. if animo name defined, use this
  if (proto.options?.["(amino.name)"]) {
    return proto.options["(amino.name)"];
  }

  // 3. if a function was defined, use this
  const modTypeUrlToAmino = getPluginValue(
    "aminoEncoding.typeUrlToAmino",
    ref.proto.package,
    options
  );
  if (typeof modTypeUrlToAmino === "function") {
    const result = modTypeUrlToAmino(typeUrl);
    if (result) return result;
  }

  const name = typeUrl.replace(/^\//, "");
  const elements = name.split(".");
  const pkg = elements[0];
  const TypeName = elements[elements.length - 1];
  switch (pkg) {
    case "cosmos":
      switch (ref.proto.package) {
        case "cosmos.gov.v1":
          if (TypeName == "MsgUpdateParams")
            return `cosmos-sdk/x/gov/v1/${TypeName}`;
          return `cosmos-sdk/v1/${TypeName}`;
      }
    case "ibc":
      return `cosmos-sdk/${TypeName}`;
    case "cosmwasm":
      return `wasm/${TypeName}`;
    case "osmosis": {
      if (/poolmodels/.test(typeUrl) && /stableswap/.test(typeUrl)) {
        const n = elements
          .filter((a) => a !== "v1beta1")
          .filter((a) => a !== "poolmodels")
          .filter((a) => a !== "stableswap");
        n[n.length - 1] = kebab(n[n.length - 1]);
        n[n.length - 1] = n[n.length - 1].replace(/^msg-/, "");
        return n.join("/");
      }

      if (/superfluid/.test(typeUrl)) {
        switch (typeUrl) {
          case "/osmosis.superfluid.MsgUnPoolWhitelistedPool":
            return "osmosis/unpool-whitelisted-pool";
        }

        const n = elements.filter((a) => a !== "superfluid");
        n[n.length - 1] = kebab(n[n.length - 1]);
        n[n.length - 1] = n[n.length - 1].replace(/^msg-/, "");
        return n.join("/");
      }

      if (/lockup/.test(typeUrl)) {
        switch (typeUrl) {
          case "/osmosis.lockup.MsgLockTokens":
            return "osmosis/lockup/lock-tokens";
          case "/osmosis.lockup.MsgBeginUnlockingAll":
            return "osmosis/lockup/begin-unlock-tokens";
          case "/osmosis.lockup.MsgBeginUnlocking":
            return "osmosis/lockup/begin-unlock-period-lock";
        }
      }

      const n = elements.filter((a) => !a.match(/v1beta1/));
      n[n.length - 1] = kebab(n[n.length - 1]);
      n[n.length - 1] = n[n.length - 1].replace(/^msg-/, "");
      return n.join("/");
    }
    default: {
      return typeUrl;
    }
  }
};
