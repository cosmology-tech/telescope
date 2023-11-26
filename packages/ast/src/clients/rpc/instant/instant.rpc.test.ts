import { traverse } from "@cosmology/proto-parser";
import { getNestedProto } from "@cosmology/utils";
import { defaultTelescopeOptions, ProtoService } from "@cosmology/types";
import { expectCode, getTestProtoStore } from "../../../../test-utils";
import { GenericParseContext } from "../../../encoding";
import { createInstantRpcClass, createInstantRpcInterface } from "./instant";
const store = getTestProtoStore();
store.traverseAll();

it("createInstantRpcInterface", () => {
  expectCode(
    createInstantRpcInterface("CosmosAuth", [
      {
        importedVarName: "_CosmosAuthV1beta1Queryrpc",
        interfaceName: "CosmosAuthAccountQuery",
      },
      {
        importedVarName: "_CosmosAuthV2beta1Queryrpc",
        interfaceName: "CosmosAuthAccountMsg",
      },
    ])
  );
});

it("createInstantRpcClass", () => {
  const ref = store.findProto("cosmos/auth/v1beta1/query.proto");
  const res = traverse(store, ref);
  const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
  expectCode(
    createInstantRpcClass(context, "CosmosAuth", {
      authAccount: {
        importedVarName: "_CosmosAuthV1beta1Queryrpc",
        methodName: "account",
      },
      bankAccount: {
        importedVarName: "_CosmosBankV1beta1Queryrpc",
        methodName: "account",
      },
    })
  );
});
