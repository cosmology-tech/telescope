import { getServiceImplement } from "..";

it("returns undefined with no serviceImplement", () => {
  const result = getServiceImplement("Msg", "cosmos.bank.v1beta1", "balance");

  expect(result).toBeUndefined();
});

it("returns Tx with no include in Msg", () => {
  const result = getServiceImplement("Msg", "cosmos.bank.v1beta1", "balance", {
    Msg: {
      type: "Tx",
    },
  });

  expect(result).toBe("Tx");
});

it("returns Tx with no pattern in Msg", () => {
  const result = getServiceImplement("Msg", "cosmos.bank.v1beta1", "balance", {
    Msg: {
      include: {},
      type: "Tx",
    },
  });

  expect(result).toBe("Tx");
});

it("returns Tx with empty pattern in Msg", () => {
  const result = getServiceImplement("Msg", "cosmos.bank.v1beta1", "balance", {
    Msg: {
      include: {
        patterns: [],
      },
      type: "Tx",
    },
  });

  expect(result).toBe("Tx");
});

it("returns Tx with ** pattern in Msg", () => {
  const result = getServiceImplement("Msg", "cosmos.bank.v1beta1", "balance", {
    Msg: {
      include: {
        patterns: ["**"],
      },
      type: "Tx",
    },
  });

  expect(result).toBe("Tx");
});

it("returns Tx with **.bala* pattern in Msg", () => {
  const result = getServiceImplement("Msg", "cosmos.bank.v1beta1", "balance", {
    Msg: {
      include: {
        patterns: ["**.bala*"],
      },
      type: "Tx",
    },
  });

  expect(result).toBe("Tx");
});

it("returns undefined with **.bara* pattern in Msg", () => {
  const result = getServiceImplement("Msg", "cosmos.bank.v1beta1", "balance", {
    Msg: {
      include: {
        patterns: ["**.bara*"],
      },
      type: "Tx",
    },
  });

  expect(result).toBeUndefined();
});

it("returns undefined with Query **.bala* pattern in Msg", () => {
  const result = getServiceImplement("Query", "cosmos.bank.v1beta1", "balance", {
    Msg: {
      include: {
        patterns: ["**.bala*"],
      },
      type: "Tx",
    },
  });

  expect(result).toBeUndefined();
});
