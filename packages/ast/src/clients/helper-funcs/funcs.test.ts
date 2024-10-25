import * as ast from "@babel/types";
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

    const { Query } = getNestedProto(res);

    const mockService: ProtoService = Query;

    const mockContext = new GenericParseContext(
        ref,
        store,
        defaultTelescopeOptions
    );

    expectCode(
        createQueryHelperCreator(
            mockContext,
            mockService.methods["Balance"],
            mockService.name,
            "Balance",
            "createGetBalance"
        )
    );

    expectCode(
        createQueryHooks(
            mockContext,
            mockService.methods["Balance"],
            "Balance",
            "createGetBalance",
            "useBalance"
        )
    );
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

    expectCode(
        createMsgHelperCreator(
            mockContext,
            mockService.methods["Send"],
            "createSend"
        )
    );

    expectCode(
        createMsgHooks(
            mockContext,
            mockService.methods["Send"],
            "createSend",
            "useSend"
        )
    );
});
