import {
    createProtoEnum,
    createProtoEnumFromJSON,
    createProtoEnumToJSON,
} from "./enums";
import { getNestedProto } from "@cosmology/utils";
import { ProtoParseContext } from "@cosmology/ast";
import { ProtoRoot } from "@cosmology/types";
import {
    expectCode,
    getTestProtoStore
} from "../../../test-utils";

const store = getTestProtoStore({
    enums: {
        useCustomNames: true
    }
});
store.traverseAll();

it("createProtoEnum", async () => {
    const ref = store.findProto('cosmwasm/wasm/v1/types.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(
        createProtoEnum(
            context,
            "NullValue",
            getNestedProto(ref.traversed).AccessType
        )
    );
});

it("createProtoEnumFromJSON", async () => {
    const ref = store.findProto('cosmwasm/wasm/v1/types.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(
        createProtoEnumFromJSON(
            context,
            "AccessType",
            getNestedProto(ref.traversed).AccessType
        )
    );
});

it("createProtoEnumToJSON", async () => {
    const ref = store.findProto('cosmwasm/wasm/v1/types.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(
        createProtoEnumToJSON(
            context,
            "AccessType",
            getNestedProto(ref.traversed).AccessType
        )
    );
});
