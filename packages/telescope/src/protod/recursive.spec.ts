import { clone, extractProto } from "./recursive";
import { exec, removeFolder } from "./utils";

describe("Test `clone`", () => {
  it("should download `cosmos-sdk`, `googleapis`, `protobuf` to `./git-modules`", async () => {
    removeFolder("git-modules");
    await clone({
      owner: "cosmos",
      repo: "cosmos-sdk",
      outDir: "./git-modules",
    });
  });
});

describe("Test `extractProto`", () => {
  it("should extract `cosmos/bank/v1beta1/tx.proto` to `./proto`", async () => {
    removeFolder("proto");
    await extractProto({
      targets: ["cosmos/bank/v1beta1/tx.proto"],
      outDir: "./proto",
    });
  });

  it("should successfully generate code in `./codegen`", async () => {
    removeFolder("codegen");
    await exec("npx telescope transpile --config .telescope.json");
  });
});
