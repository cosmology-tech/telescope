import { getNestedProto } from "@cosmology/utils";
import {
  defaultTelescopeOptions,
  expectCode,
  getMiscTestProtoStore,
} from "../../../test-utils/";
import { AminoParseContext, ProtoParseContext } from "../context";
import { createProtoType } from "..";
import { createObjectWithMethods } from "../object";
import { createAminoConverter, makeAminoTypeInterface } from "../amino/index";
import cases from "jest-in-case";
const store = getMiscTestProtoStore({
  prototypes: {
    excluded: {
      // hard exclude faulty proto files
      hardProtos: ["google/api/expr/v1alpha1/eval1.proto"],
    },
  },
});
store.traverseAll();

cases(
  "misc/eval_request",
  (opts) => {
    const ref = store.findProto("misc/eval_request.proto");
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    context.options.env = "v-next";
    context.options.prototypes!.typingsFormat!.timestamp = opts.name;
    context.options.interfaces!.enabled = true;
    context.options.interfaces!.useGlobalDecoderRegistry = true;

    expectCode(
      createObjectWithMethods(
        context,
        "EvalRequest",
        getNestedProto(ref.traversed).EvalRequest
      )
    );
  },
  [{ name: "date" }, { name: "timestamp" }]
);
