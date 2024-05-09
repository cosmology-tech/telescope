import { getAllBufDeps } from "./bufbuild";
import { GitRepo } from "./git-repo";
import {
  CloneOptions,
  GitInfo,
  ProtoCopyOptions,
  CloneAllOptions,
} from "./types";
import { join, dirname, resolve } from "path";
import {
  findAllProtoFiles,
  getCorrespondingGit,
  getMainBranchName,
  isPathExist,
  makeDir,
  parseProtoFile,
} from "./utils";
import fs from "fs";
import { sync as globSync } from "glob";

export async function cloneAll({
  repos,
  gitModulesDir,
  protoDirMapping,
  ssh,
}: CloneAllOptions) {
  let clonedResult: Record<string, GitInfo> = {};

  for (const { owner, repo, branch } of repos) {
    const cloned = await clone({
      owner,
      repo,
      branch,
      gitModulesDir,
      protoDirMapping,
      ssh,
      cloned: clonedResult
    });

    for (const [key, value] of Object.entries(cloned)) {
      clonedResult[key] = value;
    }
  }

  return clonedResult;
}

export async function clone({
  owner,
  repo,
  branch,
  gitModulesDir: outDir,
  protoDirMapping,
  ssh,
  cloned,
}: CloneOptions) {
  let clonedResult: Record<string, GitInfo> = cloned ?? {};

  const gitRepo = new GitRepo(owner, repo, ssh);
  const gitBranch = branch ?? (await gitRepo.mainBranchName);
  const resultKey = `${owner}/${repo}/${gitBranch}`;

  if (clonedResult[resultKey]) {
    console.log(`Skip cloning ${resultKey}`);
    return clonedResult;
  }

  const gitDir = gitRepo.clone(gitBranch, 1, outDir);
  const protoDir =
    protoDirMapping?.[`${owner}/${repo}/${gitBranch}`] ?? "proto";
  clonedResult[`${owner}/${repo}/${gitBranch}`] = {
    owner,
    repo,
    branch: gitBranch,
    protoDir,
    protoPath: resolve(`${outDir}/${owner}/${repo}/${gitBranch}/${protoDir}`),
  };
  const bufDeps = await getAllBufDeps(gitDir);
  await Promise.all(
    bufDeps.map(async (bufRepo) => {
      const gitRepos = getCorrespondingGit(bufRepo);
      await Promise.all(
        gitRepos.map(async (gitRepo) => {
          const gitRepoObj = new GitRepo(gitRepo.owner, gitRepo.repo, ssh);
          const branch = await gitRepoObj.mainBranchName;
          const depsClonedResult = await clone({
            ...gitRepo,
            gitModulesDir: outDir,
            branch,
            protoDirMapping,
            ssh,
            cloned: clonedResult
          });
          for (const [key, value] of Object.entries(depsClonedResult)) {
            clonedResult[key] = value;
          }
        })
      );
    })
  );

  return clonedResult;
}

export function extractProto({ sources, targets, outDir }: ProtoCopyOptions) {
  const extractProtoFiles: { sourceFile: string; target: string }[] =
    extractProtoFromDirs({
      targets,
      sources,
    });

  extractProtoFiles.map(({ sourceFile, target }) => {
    const targetFile = join(outDir, target);
    const deepTargetDir = dirname(targetFile);
    makeDir(deepTargetDir);
    fs.copyFileSync(sourceFile, targetFile);
    console.info(`Copied ${target} from ${sourceFile.replace(target, "")}`);
  });
}

function extractProtoFromDirs({
  targets,
  sources,
}: {
  targets: string[];
  sources: Record<string, GitInfo>;
}) {
  const extractProtoFiles: { sourceFile: string; target: string }[] = [];
  const existingFiles = new Set();

  if (!targets || targets.length === 0) {
    return [];
  }

  if (!sources || Object.keys(sources).length === 0) {
    return [];
  }

  for (const target of targets) {
    for (const source of Object.values(sources)) {
      const files = globSync(join(source.protoPath, target));

      extractProtoFiles.push(
        ...files
          .map((file) => {
            const copyTarget = file.replace(resolve(source.protoPath), "");
            const duplicate = existingFiles.has(copyTarget);
            existingFiles.add(copyTarget);
            if (!duplicate) {
              const resultFiles = [
                {
                  sourceFile: file,
                  target: copyTarget,
                },
              ];

              const newTargets = parseProtoFile(file);

              if (newTargets && newTargets.length > 0) {
                const deps = extractProtoFromDirs({
                  targets: newTargets,
                  sources,
                });

                const filteredDeps = deps?.filter((dep) => {
                  const depDuplicate = existingFiles.has(dep.target);
                  existingFiles.add(dep.target);
                  return !depDuplicate;
                });

                if (filteredDeps && filteredDeps.length > 0) {
                  resultFiles.push(...filteredDeps);
                }
              }

              return resultFiles;
            }
          })
          .flat()
          .filter(Boolean)
      );
    }
  }

  return extractProtoFiles;
}
