import {
    createProtoEnum,
    createProtoEnumFromJSON,
    createProtoEnumToJSON,
} from "./enums";
import {
    getNestedProto,
    convertProtoPathToNestedJSONPath as convert,
    convertPackageNameToNestedJSONPath as convertPackage
} from "@cosmology/utils";
import { ProtoParseContext } from "@cosmology/ast";
import {
    expectCode,
    getTestProtoStore
} from "../../../test-utils";

const p = convert('cosmwasm/wasm/v1/types.proto');
const cp = convertPackage('cosmwasm.wasm.v1');
const store = getTestProtoStore({
    prototypes: {
        patch: {
            'cosmwasm/wasm/v1/types.proto': [
                { op: 'replace', path: '~/AccessType/valuesOptions/ACCESS_TYPE_NOBODY/(gogoproto.enumvalue_customname)', value: 'NobodyAccess' },
                { op: 'replace', path: '@/AccessType/valuesOptions/ACCESS_TYPE_UNSPECIFIED/(gogoproto.enumvalue_customname)', value: 'UnspecifiedAccess' },
                { op: 'replace', path: p + '/AccessType/valuesOptions/ACCESS_TYPE_EVERYBODY/(gogoproto.enumvalue_customname)', value: 'EverybodyAccess' },
                { op: 'replace', path: cp + '/AccessType/valuesOptions/ACCESS_TYPE_ONLY_ADDRESS/(gogoproto.enumvalue_customname)', value: 'OnlyAddressAccess' },
                {
                    op: "add",
                    path: "/root/nested/cosmwasm/nested/wasm/nested/v1/nested/AccessType/values/ACCESS_TYPE_SUPER_FUN",
                    value: 4
                },
                {
                    op: "add",
                    path: "/root/nested/cosmwasm/nested/wasm/nested/v1/nested/AccessType/valuesOptions/ACCESS_TYPE_SUPER_FUN",
                    value: {
                        "(gogoproto.enumvalue_customname)": "SuperFunAccessType"
                    }
                }
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
