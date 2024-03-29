import { base64FromBytes } from "../../../__fixtures__/misc/output-impl-interfaces-gen/helpers";
import {
  GenericAuthorization,
  Grant,
  GrantAmino,
} from "../../../__fixtures__/misc/output-impl-interfaces-gen/cosmos/authz/v1beta1/authz";
import { Any } from "../../../__fixtures__/misc/output-impl-interfaces-gen/google/protobuf/any";
import { SendAuthorization } from "../../../__fixtures__/misc/output-impl-interfaces-gen/cosmos/bank/v1beta1/authz";

describe("implements interface works", () => {
  it("encodes and decodes", () => {
    const data = Grant.encode({
      authorization: {
        msg: "pass",
      },
      expiration: new Date(),
      opt: 0,
      singleMsg: Any.fromPartial({}),
      messages: [Any.fromPartial({})],
    }).finish();

    const message = Grant.decode(data);

    expect(
      GenericAuthorization.is(message.authorization)
        ? message.authorization.msg
        : ""
    ).toBe("pass");

    if (message.authorization) {
      if (GenericAuthorization.is(message.authorization)) {
        expect(message.authorization.msg).toBe("pass");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("encodes and decodes Any", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date(),
      opt: 0,
      singleMsg: Any.fromPartial({}),
      messages: [Any.fromPartial({})],
    }).finish();

    const message = Grant.decode(data);

    expect((message.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("encodes and decodes wrong types with error", () => {
    const auth = {
      num: 1,
    };
    expect(() => {
      Grant.encode({
        authorization: auth as unknown as Any,
        expiration: new Date(),
        opt: 0,
        singleMsg: Any.fromPartial({}),
        messages: [Any.fromPartial({})],
      });
    }).toThrowError(
      `There's no decoder for the instance ${JSON.stringify(auth)}`
    );
  });

  it("toJson for extended interface", () => {
    const data = Grant.encode({
      authorization: {
        msg: "pass",
      },
      expiration: new Date("2020-01-01"),
      opt: 0,
      singleMsg: Any.fromPartial({}),
      messages: [Any.fromPartial({})],
    }).finish();

    const message = Grant.decode(data);

    const json = Grant.toJSON(message);

    expect(json).toMatchSnapshot();
  });

  it("toJson for Any", () => {
    const data = Grant.encode({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
      expiration: new Date("2020-01-01"),
      opt: 0,
      singleMsg: Any.fromPartial({}),
      messages: [Any.fromPartial({})],
    }).finish();

    const message = Grant.decode(data);

    const json = Grant.toJSON(message);

    expect(json).toMatchSnapshot();
  });

  it("fromJSON for extended interface", () => {
    const message = Grant.fromJSON({
      authorization: {
        msg: "pass",
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (GenericAuthorization.is(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.msg).toBe("pass");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("fromJSON for extended interface with $typeUrl", () => {
    const message = Grant.fromJSON({
      authorization: {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (GenericAuthorization.is(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.msg).toBe("");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("fromJSON for extended interface with wrong $typeUrl", () => {
    const auth = {
      $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization.wrong",
      msg: "pass",
    };

    expect(() => {
      Grant.fromJSON({
        authorization: auth,
        expiration: new Date("2020-01-01"),
      });
    }).toThrowError(
      `There's no decoder for the instance ${JSON.stringify(auth)}`
    );
  });

  it("fromJSON for Any", () => {
    const message = Grant.fromJSON({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: base64FromBytes(new Uint8Array([100, 101])),
      },
      expiration: new Date("2020-01-01"),
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    expect((decodedMessage.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("fromPartial for Any", () => {
    const message = Grant.fromPartial({
      authorization: {
        typeUrl: "/cosmos.TestAny",
        value: new Uint8Array([100, 101]),
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    expect((decodedMessage.authorization as Any).value).toStrictEqual(
      new Uint8Array([100, 101])
    );
  });

  it("fromPartial for encoded extended interface", () => {
    const message = Grant.fromPartial({
      authorization: {
        msg: "pass",
      },
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (GenericAuthorization.is(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.msg).toBe("pass");
      } else {
        throw new Error("should be GenericAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("toSDK for interface", () => {
    const data = Grant.encode({
      authorization: {
        spendLimit: [
          {
            denom: "d",
            amount: "1",
          },
        ],
      },
      expiration: new Date("2020-01-01"),
      opt: 0,
      singleMsg: Any.fromPartial({}),
      messages: [Any.fromPartial({})],
    }).finish();

    const message = Grant.decode(data);

    const SDK = Grant.toSDK(message);

    expect(SDK).toMatchSnapshot();
  });

  it("fromSDK for extended interface", () => {
    const message = Grant.fromSDK({
      authorization: {
        spend_limit: [
          {
            denom: "d",
            amount: "1",
          },
        ],
      },
      expiration: new Date("2020-01-01"),
      opt: 0,
      single_msg: {
        type_url: "",
        value: new Uint8Array(),
      },
      messages: [
        {
          type_url: "",
          value: new Uint8Array(),
        },
      ],
    });

    const data = Grant.encode(message).finish();

    const decodedMessage = Grant.decode(data);

    if (decodedMessage.authorization) {
      if (SendAuthorization.is(decodedMessage.authorization)) {
        expect(decodedMessage.authorization.spendLimit[0].denom).toBe("d");
        expect(decodedMessage.authorization.spendLimit[0].amount).toBe("1");
      } else {
        throw new Error("should be SendAuthorization");
      }
    } else {
      throw new Error("auth can't be empty");
    }
  });

  it("toAmino for interface", () => {
    const data = Grant.encode({
      authorization: {
        spendLimit: [
          {
            denom: "d",
            amount: "1",
          },
        ],
      },
      expiration: new Date("2020-01-01"),
      opt: 0,
      singleMsg: Any.fromPartial({}),
      messages: [Any.fromPartial({})],
    }).finish();

    const message = Grant.decode(data);

    const amino = Grant.toAmino(message);

    expect(amino).toMatchSnapshot();
  });

  it("fromAmino for interface", () => {
    const amino: GrantAmino = {
      authorization: {
        type: "cosmos-sdk/SendAuthorization",
        value: {
          spend_limit: [
            {
              amount: "1",
              denom: "d",
            },
          ],
        },
      },
      expiration: "2020-01-01T00:00:00Z",
      messages: [
        {
          type: "",
          value: {},
        },
      ],
      single_msg: {
        type: "",
        value: {},
      },
    };

    const data = Grant.fromAmino(amino);

    expect(data).toMatchSnapshot();
  });

  it("toAmino for interface with Any", () => {
    const amino = Grant.toAmino({
      authorization: {
        typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        value: SendAuthorization.encode({
          spendLimit: [
            {
              denom: "d",
              amount: "1",
            },
          ],
        }).finish(),
      },
      expiration: new Date("2020-01-01"),
      opt: 0,
      singleMsg: Any.fromPartial({}),
      messages: [Any.fromPartial({})],
    });

    expect(amino).toMatchSnapshot();
  });
});
