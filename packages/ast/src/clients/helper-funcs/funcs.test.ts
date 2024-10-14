import { GenericParseContext } from "../../encoding";
import { getNestedProto } from "@cosmology/utils";
import { traverse } from "@cosmology/proto-parser";
import { expectCode, getTestProtoStore, printCode } from "../../../test-utils";
import { defaultTelescopeOptions, ProtoService } from "@cosmology/types";
import { createMsgHelperCreator, createMsgHooks } from "./msg-funcs";
import { createQueryHelperCreator, createQueryHooks } from "./query-funcs";

const store = getTestProtoStore();
store.traverseAll();

it("query funcs works", async () => {
    const ref = store.findProto("cosmos/bank/v1beta1/query.proto");

    const res = traverse(store, ref);
    console.log(
        `🍀 \n | 🍄 file: funcs.test.ts:17 \n | 🍄 it \n | 🍄 res:`,
        res
    );

    const { Query } = getNestedProto(res);
    console.log(
        `🍀 \n | 🍄 file: funcs.test.ts:22 \n | 🍄 it \n | 🍄 Query:`,
        Query
    );

    const mockService: ProtoService = Query;

    const mockContext = new GenericParseContext(
        ref,
        store,
        defaultTelescopeOptions
    );

    expectCode(createQueryHelperCreator(mockContext, mockService));

    expectCode(createQueryHooks(mockContext, mockService));
});

it("msg funcs works", async () => {
    const ref = store.findProto("cosmos/bank/v1beta1/tx.proto");

    const res = traverse(store, ref);

    const { Msg } = getNestedProto(res);

    const mockService: ProtoService = Msg;

    const mockContext = new GenericParseContext(
        ref,
        store,
        defaultTelescopeOptions
    );

    expectCode(createMsgHelperCreator(mockContext, mockService));

    expectCode(createMsgHooks(mockContext, mockService));
});
