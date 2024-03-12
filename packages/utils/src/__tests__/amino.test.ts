import { shouldOmitEmpty } from "../amino";
import { ProtoField } from "@cosmology/types";
import cases from "jest-in-case";

describe("shouldOmitEmpty", () => {
  cases(
    `shouldOmitEmpty`,
    (opts) => {
      const ctx: any = {
        pluginValue: jest.fn().mockReturnValue(opts.pluginValue),
      };
      const field: ProtoField = {
        id: 0,
        options: opts.options,
      };
      expect(shouldOmitEmpty(ctx, field)).toBe(opts.result);
    },
    [
      // empty omitEmptyTags means the result would be true all the time.
      {
        name: "empty omitEmptyTags means the result would be true all the time.",
        pluginValue: [],
        options: {
          "(amino.dont_omitempty)": false,
        },
        result: true,
      },
      {
        name: "empty omitEmptyTags means the result would be true all the time.",
        pluginValue: [],
        options: {
          "(amino.dont_omitempty)": true,
        },
        result: true,
      },
      {
        name: "empty omitEmptyTags means the result would be true all the time.",
        pluginValue: [],
        options: {
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "empty omitEmptyTags means the result would be true all the time.",
        pluginValue: [],
        options: {
          "(gogoproto.jsontag)": "attributes",
        },
        result: true,
      },
      {
        name: "empty omitEmptyTags means the result would be true all the time.",
        pluginValue: [],
        options: null,
        result: true,
      },

      // aminoEncoding.omitEmptyTags includes "omitempty"
      // if there're gogoproto.jsontag and cosmos_proto.json_tag and any of them includes omitempty, the result would be true, otherwise false.
      {
        name: "omitEmptyTags: omitempty, if none of gogoproto.jsontag and cosmos_proto.json_tag include omitempty, then false",
        pluginValue: ["omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty, if gogoproto.jsontag includes omitempty, then true",
        pluginValue: ["omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty, if there's jsontag and none of cosmos_proto.json_tag and cosmos_proto.json_tag include omitempty, then false",
        pluginValue: ["omitempty"],
        options: {
          "(cosmos_proto.json_tag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty, if cosmos_proto.json_tag includes omitempty, then true",
        pluginValue: ["omitempty"],
        options: {
          "(cosmos_proto.json_tag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty, if gogoproto.jsontag and cosmos_proto.json_tag both include omitempty, then true",
        pluginValue: ["omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes,omitempty",
          "(cosmos_proto.json_tag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty, if gogoproto.jsontag includes omitempty and cosmos_proto.json_tag does not include omitempty, then true",
        pluginValue: ["omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes,omitempty",
          "(cosmos_proto.json_tag)": "attributes",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty, if gogoproto.jsontag does not include omitempty and cosmos_proto.json_tag includes omitempty, then true",
        pluginValue: ["omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes",
          "(cosmos_proto.json_tag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty, if gogoproto.jsontag and cosmos_proto.json_tag both do not include omitempty, then false",
        pluginValue: ["omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes",
          "(cosmos_proto.json_tag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty, if gogoproto.jsontag and cosmos_proto.json_tag both do not include omitempty, then false. And amino.dont_omitempty will be ignored.",
        pluginValue: ["omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes",
          "(cosmos_proto.json_tag)": "attributes",
          "(amino.dont_omitempty)": false,
        },
        result: false,
      },

      // aminoEncoding.omitEmptyTags includes "dont_omitempty" only
      // if amino.dont_omitempty is true, then false, otherwise true.
      {
        name: "omitEmptyTags: dont_omitempty, if amino.dont_omitempty is true, then false",
        pluginValue: ["dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": true,
        },
        result: false,
      },
      {
        name: "omitEmptyTags: dont_omitempty, if amino.dont_omitempty is false, then true",
        pluginValue: ["dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": false,
        },
        result: true,
      },
      {
        name: "omitEmptyTags: dont_omitempty, if amino.dont_omitempty is not present, then true",
        pluginValue: ["dont_omitempty"],
        options: {},
        result: true,
      },
      {
        name: "omitEmptyTags: dont_omitempty, if amino.dont_omitempty is true and gogoproto.jsontag includes omitempty, then false",
        pluginValue: ["dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": true,
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: dont_omitempty, if amino.dont_omitempty is false and gogoproto.jsontag includes omitempty, then true",
        pluginValue: ["dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": false,
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },

      // aminoEncoding.omitEmptyTags includes both  "omitempty" and "dont_omitempty"
      // if there're gogoproto.jsontag and cosmos_proto.json_tag and any of them includes omitempty, the result would be true, otherwise false. And amino.dont_omitempty will be ignored.
      // after that, if amino.dont_omitempty is true, then false, otherwise true.
      // if there's no options, then true.
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is true, then false",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": true,
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is true and gogoproto.jsontag includes omitempty, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": true,
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is false and gogoproto.jsontag does not include omitempty, then false",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": false,
          "(gogoproto.jsontag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is not present and gogoproto.jsontag includes omitempty, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is not present and gogoproto.jsontag does not include omitempty, then false",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is true and gogoproto.jsontag includes omitempty, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": true,
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is false and gogoproto.jsontag includes omitempty, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": false,
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is true and gogoproto.jsontag does not include omitempty, then false",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": true,
          "(gogoproto.jsontag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is false and gogoproto.jsontag does not include omitempty, then false",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(amino.dont_omitempty)": false,
          "(gogoproto.jsontag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is not present and gogoproto.jsontag includes omitempty, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes,omitempty",
        },
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if amino.dont_omitempty is not present and gogoproto.jsontag does not include omitempty, then false",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {
          "(gogoproto.jsontag)": "attributes",
        },
        result: false,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if options is null, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: null,
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if options is undefined, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: undefined,
        result: true,
      },
      {
        name: "omitEmptyTags: omitempty and dont_omitempty, if options is an empty object, then true",
        pluginValue: ["omitempty", "dont_omitempty"],
        options: {},
        result: true,
      },
    ]
  );
});
