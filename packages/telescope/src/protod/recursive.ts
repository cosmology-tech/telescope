import { getAllBufDeps } from "./bufbuild";
import { GitRepo } from "./git-repo";
import { GitInfo } from "./types";
import { join, dirname } from "path";
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

export async function clone({
  owner,
  repo,
  branch,
  outDir,
  protoDirMapping,
}: {
  owner: string;
  repo: string;
  branch?: string;
  protoDirMapping?: Record<string, string>;
  outDir: string;
}) {
  let clonedResult: Record<string, GitInfo> = {};
  const gitRepo = new GitRepo(owner, repo);
  const gitBranch = branch ?? (await getMainBranchName(gitRepo.httpsUrl));
  const outPath = `${outDir}/${owner}/${repo}`;
  if (isPathExist(outPath)) {
    console.warn(`Folder ${outPath} already exists, skip cloning`);
    return;
  }
  const gitDir = gitRepo.clone(gitBranch, 1, outDir);
  console.log(`Cloned ${owner}/${repo}/${gitBranch} to ${gitDir}`);
  const protoDir =
    protoDirMapping?.[`${owner}/${repo}/${gitBranch}`] ?? "proto";
  clonedResult[`${owner}/${repo}/${gitBranch}`] = {
    owner,
    repo,
    branch: gitBranch,
    protoDir,
    protoPath: `${outDir}/${owner}/${repo}/${gitBranch}/${protoDir}`,
  };
  const bufDeps = await getAllBufDeps(gitDir);
  await Promise.all(
    bufDeps.map(async (bufRepo) => {
      const gitRepos = getCorrespondingGit(bufRepo);
      await Promise.all(
        gitRepos.map(async (gitRepo) => {
          const branch = await getMainBranchName(
            `https://github.com/${gitRepo.owner}/${gitRepo.repo}.git`
          );
          const depsClonedResult = await clone({ ...gitRepo, outDir, branch });
          clonedResult = {
            ...clonedResult,
            ...depsClonedResult,
          };
        })
      );
    })
  );

  return clonedResult;
}

export function extractProto({
  sources,
  targets,
  outDir,
}: {
  sources: Record<string, GitInfo>;
  targets: string[];
  outDir: string;
}) {
  const extractProtoFiles: { sourceFile: string; target: string }[] =
    extractProtoFromDirs({
      targets,
      sources,
    });

  console.log(extractProtoFiles);

  extractProtoFiles.map(({ sourceFile, target }) => {
    const targetFile = join(outDir, target);
    const deepTargetDir = dirname(targetFile);
    console.log(`creating: ${deepTargetDir}`);
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
            const target = file.replace(source.protoPath, "");
            const duplicate = existingFiles.has(target);
            existingFiles.add(target);
            if (!duplicate) {
              const resultFiles = [
                {
                  sourceFile: file,
                  target,
                },
              ];

              const newTargets = parseProtoFile(file);

              if (newTargets && newTargets.length > 0) {
                const deps = extractProtoFromDirs({
                  targets: newTargets,
                  sources,
                });

                if (deps && deps.length > 0) {
                  return resultFiles.concat(deps);
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
