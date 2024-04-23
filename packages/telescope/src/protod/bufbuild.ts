import fs from "fs";
import { Repo } from "./types";
import YAML from "yaml";
import { isPathExist } from "./utils";
import { sync as globSync } from "glob";

export function parseBufLockFile(filePath: string): Repo[] {
  if (!isPathExist(filePath)) {
    console.warn(`No such file ${filePath}`);
    return [];
  }
  const bufLock = fs.readFileSync(filePath, "utf8");
  const deps = bufLock.split(/-\s/);
  const repos: Repo[] = [];
  deps.forEach((dep) => {
    if (!dep.startsWith("remote")) {
      return;
    }
    const bufDep = {
      owner: /owner:\s(.+)/.exec(dep)?.[1],
      repo: /repository:\s(.+)/.exec(dep)?.[1],
    };
    if (!bufDep.owner || !bufDep.repo) {
      throw new Error("owner or repository is missing.");
    }
    repos.push(bufDep as Repo);
  });
  return repos;
}

export function parseBufYamlFile(filePath: string): Repo[] {
  if (!isPathExist(filePath)) {
    console.warn(`No such file ${filePath}`);
    return [];
  }
  const { deps } = YAML.parse(fs.readFileSync(filePath, "utf8"));
  if (deps) {
    return deps.map((dep: string) => {
      const [_, owner, repo] = dep.split("/");
      return {
        owner,
        repo: repo.split(":")[0],
      };
    });
  }
  return [];
}

export function findAllBufYamlFiles(dir: string): string[] {
  return globSync(`${dir}/**/buf.yaml`, {
    ignore: `${dir}/node_modules/**`,
  });
}

export function findAllBufLockFiles(dir: string): string[] {
  return globSync(`${dir}/**/buf.lock`, {
    ignore: `${dir}/node_modules/**`,
  });
}

export function getAllBufDeps(dir: string) {
  const bufDeps: Repo[] = [];

  const bufLockFiles = findAllBufLockFiles(dir);

  bufLockFiles.map(async (filePath) => {
    const deps = parseBufLockFile(filePath);
    deps.forEach((dep) => {
      if (
        bufDeps.findIndex(
          (_dep) => _dep.owner == dep.owner && _dep.repo == dep.repo
        ) == -1
      ) {
        bufDeps.push(dep);
      }
    });
  });

  const bufYamlFiles = findAllBufYamlFiles(dir);

  bufYamlFiles.map(async (filePath) => {
    const deps = await parseBufYamlFile(filePath);
    deps.forEach((dep) => {
      if (
        bufDeps.findIndex(
          (_dep) => _dep.owner == dep.owner && _dep.repo == dep.repo
        ) == -1
      ) {
        bufDeps.push(dep);
      }
    });
  });

  return bufDeps;
}
