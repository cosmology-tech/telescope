import {
    createProtoEnum,
    createProtoEnumFromJSON,
    createProtoEnumToJSON,
} from "./enums";
import { getNestedProto, convertProtoPathToNestedJSONPath as convert } from "@cosmology/utils";
import { ProtoParseContext } from "@cosmology/ast";
import {
    expectCode,
    getTestProtoStore
} from "../../../test-utils";

const p = convert('cosmwasm/wasm/v1/types.proto');
const store = getTestProtoStore({
    prototypes: {
        patch: {
            'cosmwasm/wasm/v1/types.proto': [
                { op: 'replace', path: p + '/AccessType/valuesOptions/ACCESS_TYPE_NOBODY/(gogoproto.enumvalue_customname)', value: 'NobodyAccess' },
                { op: 'replace', path: p + '/AccessType/valuesOptions/ACCESS_TYPE_EVERYBODY/(gogoproto.enumvalue_customname)', value: 'EverybodyAccess' },
            ]
        }
    },
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
