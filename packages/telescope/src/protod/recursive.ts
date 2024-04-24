import { getAllBufDeps } from "./bufbuild";
import { GitRepo } from "./git-repo";
import {
  findAllProtoFiles,
  getCorrespondingGit,
  getMainBranchName,
  isPathExist,
  makeDir,
  parseProtoFile,
} from "./utils";
import fs from "fs";

export async function clone({
  owner,
  repo,
  branch,
  outDir,
}: {
  owner: string;
  repo: string;
  branch?: string;
  protoDir?: string;
  outDir: string;
}) {
  const gitRepo = new GitRepo(owner, repo);
  const gitBranch = branch ?? (await getMainBranchName(gitRepo.httpsUrl));
  const outPath = `${outDir}/${owner}/${repo}`;
  if (isPathExist(outPath)) {
    console.warn(`Folder ${outPath} already exists, skip cloning`);
    return;
  }
  const gitDir = await gitRepo.clone(gitBranch, 1, outDir);
  console.log(`Cloned ${owner}/${repo}/${gitBranch} to ${gitDir}`);
  const bufDeps = await getAllBufDeps(gitDir);
  await Promise.all(
    bufDeps.map(async (bufRepo) => {
      const gitRepos = getCorrespondingGit(bufRepo);
      await Promise.all(
        gitRepos.map(async (gitRepo) => {
          const branch = await getMainBranchName(
            `https://github.com/${gitRepo.owner}/${gitRepo.repo}.git`
          );
          await clone({ ...gitRepo, outDir, branch });
        })
      );
    })
  );
}

export async function extractProto({
  sourceDir,
  targets,
  outDir,
}: {
  sourceDir: string;
  targets: string[];
  outDir: string;
}) {
  const allProtoFiles = await findAllProtoFiles(sourceDir);
  const extractProtoFiles: { sourceFile: string; target: string }[] = [];
  await extractProtoFromDirs({
    targets,
    allProtoFiles,
    outDir,
    extractProtoFiles,
  });

  await Promise.all(
    extractProtoFiles.map(async ({ sourceFile, target }) => {
      const targetFile = `${outDir}/${target}`;
      const temp = targetFile.split("/");
      const deepTargetDir = temp.slice(1, temp.length - 1).join("/");
      makeDir(deepTargetDir);
      fs.copyFile(sourceFile, targetFile, (err) => {
        if (err) throw err;
        console.info(
          `Copying ${target} from ${sourceFile.replace(target, "")}`
        );
      });
    })
  );
}

async function extractProtoFromDirs({
  targets,
  allProtoFiles,
  outDir = "./proto",
  extractProtoFiles,
}: {
  targets: string[];
  allProtoFiles: string[];
  outDir?: string;
  extractProtoFiles: { sourceFile: string; target: string }[];
}) {
  await Promise.all(
    targets.map(async (target) => {
      if (
        extractProtoFiles.findIndex((file) => file.target === target) !== -1
      ) {
        return;
      }
      const files = allProtoFiles.filter((filePath) =>
        filePath.endsWith(target)
      );
      if (files.length > 1) {
        console.warn(
          `\nWarning: There are multiple proto files for ${target}, by default choose the first one.\nFiles: \n${files.join(
            "\n"
          )}`
        );
      }
      if (files.length === 0) {
        throw new Error(`No proto file found for ${target}`);
      }
      const sourceFile = files[0];
      extractProtoFiles.push({ sourceFile, target });
      const newTargets = await parseProtoFile(sourceFile);
      await extractProtoFromDirs({
        targets: newTargets,
        allProtoFiles,
        outDir,
        extractProtoFiles,
      });
    })
  );
}
