import { exec as _exec } from "shelljs";
import fs from "fs";
import { bufInfo } from "./config";
import { Repo } from "./types";
import { crossGlob as glob } from '@cosmology/utils';

export function exec(command: string, verbose = false) {
  const { code, stdout, stderr } = _exec(command);
  if (code === 0) {
    if (verbose) {
      console.log(stdout);
    }
  } else {
    console.error(`Failed: ${command}`);
    throw new Error(stderr);
  }

  return { stdout };
}

export async function getMainBranchName(url: string) {
  console.log(`Checking main branch for ${url}`)

  const { stdout } = exec(`git ls-remote -h ${url} main`);
  if (stdout) {
    return "main";
  }
  const { stdout: stdout2 } = exec(`git ls-remote -h ${url} master`);
  if (stdout2) {
    return "master";
  }
  throw new Error("Can't find `main` or `master` branch");
}

export function getCorrespondingGit(bufRepo: Repo): Repo[] {
  const bufItem = bufInfo.find(
    (repo) => repo.owner === bufRepo.owner && repo.repo === bufRepo.repo
  );
  if (bufItem) {
    return bufItem.git;
  } else {
    return [bufRepo];
  }
}

export function parseProtoFile(filePath: string): string[] {
  if (!isPathExist(filePath)) {
    console.warn(`No such file ${filePath}`);
    return [];
  }

  let proto;

  try {
    proto = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.log(filePath);
    throw new Error(error);
  }

  const deps: string[] = [];
  proto?.split("\n").forEach((line) => {
    if (line.trim().startsWith("import ")) {
      const dep = /import\s"(.+)";?/.exec(line)?.[1];
      if (!dep) {
        throw Error(`Failed to parse line: ${line}`);
      }
      deps.push(dep);
    }
  });
  return deps;
}

export function isPathExist(path: string): boolean {
  return fs.existsSync(path);
}

export function findAllProtoFiles(dir: string): string[] {
  return glob(`${dir}/**/*.proto`, {
    ignore: `${dir}/node_modules/**`,
  });
}

export function removeFolder(dir: string) {
  fs.rmSync(dir, { recursive: true, force: true });
}

export function makeDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}
