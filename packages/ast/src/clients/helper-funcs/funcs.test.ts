import * as ast from "@babel/types";
import { GenericParseContext } from "../../encoding";
import { getNestedProto } from "@cosmology/utils";
import { traverse } from "@cosmology/proto-parser";
import { expectCode, getTestProtoStore, printCode } from "../../../test-utils";
import { defaultTelescopeOptions, ProtoService } from "@cosmology/types";
import { createMsgHelperCreator, createMsgHooks } from "./msg-funcs";
import {
    createQueryHelperCreator,
    createQueryHooks,
    createTypeAliases,
} from "./query-funcs";

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
        createTypeAliases(
            mockContext,
            mockService,
            "Balance",
            "createGetBalance"
        )
    );

    expectCode(
        createQueryHelperCreator(
            mockContext,
            mockService,
            "Balance",
            "createGetBalance"
        )
    );

    expectCode(
        createQueryHooks(
            mockContext,
            mockService,
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
            mockService,
            "MsgSend",
            "createSend"
        )
    );

    expectCode(
        createMsgHooks(
            mockContext,
            mockService,
            "MsgSend",
            "createSend",
            "useSend"
        )
    );
});
