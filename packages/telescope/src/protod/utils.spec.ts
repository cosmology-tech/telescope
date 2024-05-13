import {
  findAllProtoFiles,
  getMainBranchName,
  isPathExist,
  parseProtoFile,
} from "./utils";

import { join } from "path";

const TEST_DATA_FOLDER = "test-data";
const TEST_DATA_NONE_FOLDER = "test-data-none";
let testData = join(__dirname, TEST_DATA_FOLDER);
let testDataNone = join(__dirname, TEST_DATA_NONE_FOLDER);

const testSwitch = false;

describe("Test `getMainBranchName`", () => {
  (testSwitch ? it : it.skip)("`cosmos-proto` should return `main`", async () => {
    const branch = await getMainBranchName(
      "https://github.com/cosmos/cosmos-proto.git"
    );
    expect(branch).toBe("main");
  });

  (testSwitch ? it : it.skip)("`ics23` should return `master`", async () => {
    const branch = await getMainBranchName(
      "https://github.com/cosmos/ics23.git"
    );
    expect(branch).toBe("master");
  });
});

describe("Test `parseProtoFile`", () => {
  it("should successfully parse `./test-data/model.proto`", () => {
    const [dep1, dep2] = parseProtoFile(join(testData, "/model.proto"));
    expect(dep1).toBe("google/api/field_behavior.proto");
    expect(dep2).toBe("google/api/resource.proto");
  });
});

describe("Test `isPathExist`", () => {
  it("`./test-data/buf.lock` should exist", () => {
    const result = isPathExist(join(testData, "/buf.lock"));
    expect(result).toBe(true);
  });

  it("`./test-data/fake/buf.lock` should not exist", () => {
    const result = isPathExist(join(testData, "/fake/buf.lock"));
    expect(result).toBe(false);
  });

  it("`./test-data` should exist", () => {
    const result = isPathExist(testData);
    expect(result).toBe(true);
  });

  it("`./test-data-none` should not exist", () => {
    const result = isPathExist(testDataNone);
    expect(result).toBe(false);
  });
});

describe("Test `findAllProtoFiles`", () => {
  it("`./test-data` should contain 2 proto files", () => {
    const files = findAllProtoFiles(testData);
    expect(files.length).toBe(2);
  });
});
