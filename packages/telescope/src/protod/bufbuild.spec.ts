import {
  findAllBufLockFiles,
  findAllBufYamlFiles,
  getAllBufDeps,
  parseBufLockFile,
  parseBufYamlFile,
} from "./bufbuild";

import { join } from "path";

const GIT_MOUDLES = "./git-modules";
let gitModules = join(__dirname, GIT_MOUDLES);
const TEST_DATA_FOLDER = "test-data";
let testData = join(__dirname, TEST_DATA_FOLDER);

describe("Test `parseBufLock`", () => {
  it("should successfully parse `./test-data/buf.lock`", () => {
    const [cosmosProto, gogoProto, googleapis, wellknowntypes] =
      parseBufLockFile(join(testData, "buf.lock"));
    expect(cosmosProto.owner).toBe("cosmos");
    expect(cosmosProto.repo).toBe("cosmos-proto");
    expect(gogoProto.owner).toBe("cosmos");
    expect(gogoProto.repo).toBe("gogo-proto");
    expect(googleapis.owner).toBe("googleapis");
    expect(googleapis.repo).toBe("googleapis");
    expect(wellknowntypes.owner).toBe("protocolbuffers");
    expect(wellknowntypes.repo).toBe("wellknowntypes");
  });
});

describe("Test `parseBufYamlFile`", () => {
  it("should successfully parse `./test-data/buf.yaml`", () => {
    const [cosmosProto, gogoProto, googleapis, wellknowntypes] =
      parseBufYamlFile(join(testData, "buf.yaml"));
    expect(cosmosProto.owner).toBe("cosmos");
    expect(cosmosProto.repo).toBe("cosmos-proto");
    expect(gogoProto.owner).toBe("cosmos");
    expect(gogoProto.repo).toBe("gogo-proto");
    expect(googleapis.owner).toBe("googleapis");
    expect(googleapis.repo).toBe("googleapis");
    expect(wellknowntypes.owner).toBe("protocolbuffers");
    expect(wellknowntypes.repo).toBe("wellknowntypes");
  });

  it("should have no dependency in `./test-data/buf2.yaml`", () => {
    const result = parseBufYamlFile(join(testData, "buf2.yaml"));
    expect(result.length).toBe(0);
  });
});

describe("Test `findAllBufLockFiles`", () => {
  it("`./test-data` should contain 2 buf.lock files", () => {
    const files = findAllBufLockFiles(testData);
    expect(files.length).toBe(2);
  });

  it("should print all buf.lock in git-modules", () => {
    const files = findAllBufLockFiles(gitModules);
    console.log("All `buf.lock`: ", files);
  });
});

describe("Test `findAllBufYamlFiles`", () => {
  it("`./test-data` should contain only 1 buf.yaml file", () => {
    const files = findAllBufYamlFiles(testData);
    expect(files.length).toBe(1);
  });
});

describe("Test `getAllBufDeps`", () => {
  it("should contain 4 buf deps in all buf.lock and buf.yaml files in `./test-data` ", () => {
    const files = getAllBufDeps(testData);
    expect(files.length).toBe(4);
  });

  it("should print all buf.build dependencies in git-modules", () => {
    const files = getAllBufDeps(gitModules);
    console.log("All buf.build dependencies: ", files);
  });
});
