import { getQueryMethodNames, makePkgMethodName, makeUsePkgHookName } from "..";

it("is empty if there's no pattern for getQueryMethodNames", () => {
  const result = getQueryMethodNames("cosmos.bank.v1beta1", [
    "Balance",
    "AllBalance",
  ]);

  expect(result).toMatchObject([]);
});

it("returns all methods contains Balance for getQueryMethodNames", () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["**Balance"]
  );

  expect(result).toMatchObject(["Balance", "AllBalance"]);
});

it("returns Balance matching useBalance for getQueryMethodNames", () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["**.useBalance"]
  );

  expect(result).toMatchObject(["Balance"]);
});

it("returns empty matching *.nft.*.useBalance for getQueryMethodNames", () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["*.nft.*.useBalance"]
  );

  expect(result).toMatchObject([]);
});

it('returns ["Params"] matching *.nft.*.useBalance and **.*arams for getQueryMethodNames', () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["*.nft.*.useBalance", "**.*arams"]
  );

  expect(result).toMatchObject(["Params"]);
});

it("returns useAB1CAllBalance for makeUsePkgHookName('a.b1.c', 'AllBalance')", () => {
  const result = makeUsePkgHookName("a.b1.c", "AllBalance")

  expect(result).toBe("useAB1CAllBalance")
});

it("returns useAB1CBalance for makeUsePkgHookName('a.b1.c', 'Balance')", () => {
  const result = makeUsePkgHookName("a.b1.c", "Balance")

  expect(result).toBe("useAB1CBalance")
});

it("returns useABalance for makeUsePkgHookName('a', 'Balance')", () => {
  const result = makeUsePkgHookName("a", "Balance")

  expect(result).toBe("useABalance")
});

it("returns pkgAB1CAllBalance for makePkgMethodName('a.b1.c', 'AllBalance')", () => {
  const result = makePkgMethodName("a.b1.c", "AllBalance")

  expect(result).toBe("pkgAB1CAllBalance")
});

it("returns pkgAB1CBalance for makePkgMethodName('a.b1.c', 'Balance')", () => {
  const result = makePkgMethodName("a.b1.c", "Balance")

  expect(result).toBe("pkgAB1CBalance")
});

it("returns pkgABalance for makePkgMethodName('a', 'Balance')", () => {
  const result = makePkgMethodName("a", "Balance")

  expect(result).toBe("pkgABalance")
});

it("returns pkgABalance for makePkgMethodName('a', 'balance')", () => {
  const result = makePkgMethodName("a", "balance")

  expect(result).toBe("pkgABalance")
});