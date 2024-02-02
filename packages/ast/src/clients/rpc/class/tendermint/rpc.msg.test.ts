import { traverse } from "@subql/x-cosmology-proto-parser";
import { getNestedProto } from "@subql/x-cosmology-utils";
import { defaultTelescopeOptions, ProtoService } from "@subql/x-cosmology-types";
import {
  expectCode,
  getTestProtoStore,
  printCode,
} from "../../../../../test-utils";
import { GenericParseContext } from "../../../../encoding";
import {
  createRpcInterface,
  createRpcClientClass,
  createRpcClientInterface,
} from "./rpc";
const store = getTestProtoStore();
store.traverseAll();

it("RPC Msg Client but Query implement", () => {
  const ref = store.findProto("cosmos/bank/v1beta1/tx.proto");
  const res = traverse(store, ref);
  const service: ProtoService = getNestedProto(res).Msg;
  const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
  expectCode(createRpcClientInterface(context, service));
  expectCode(createRpcClientClass(context, service));
  expectCode(createRpcInterface(context, service));
});

it("RPC Msg implement Client", () => {
  const ref = store.findProto("cosmos/bank/v1beta1/tx.proto");
  const res = traverse(store, ref);
  const service: ProtoService = getNestedProto(res).Msg;
  const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
  context.options.rpcClients!.serviceImplement = {
    Msg: {
      type: "Tx",
    },
  };
  expectCode(createRpcClientInterface(context, service));
  expectCode(createRpcClientClass(context, service));
});

it("RPC Msg Query mixed implement Client", () => {
  const ref = store.findProto("cosmos/bank/v1beta1/tx.proto");
  const res = traverse(store, ref);
  const service: ProtoService = getNestedProto(res).Msg;
  const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
  context.options.rpcClients!.serviceImplement = {
    Msg: {
      include: {
        patterns: ["**.multiSend"],
      },
      type: "Tx",
    },
  };
  expectCode(createRpcClientInterface(context, service));
  expectCode(createRpcClientClass(context, service));
});
