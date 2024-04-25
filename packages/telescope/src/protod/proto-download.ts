#!/usr/bin/env node

import { clone, extractProto } from "./recursive";
import { removeFolder } from "./utils";

async function run() {
  const argv = process.argv.slice(2);

  const gitRepoIndex = argv.findIndex((arg) => arg === "--git-repo");
  if (gitRepoIndex === -1) {
    process.stderr.write("`git-repo` is not specified");
    process.exit(1);
  }
  const [owner, repo] = argv[gitRepoIndex + 1]?.split("/");
  if (!owner || !repo) {
    process.stderr.write(
      "wrong `git-repo` format (i.e. <owner>/<repository>)."
    );
    process.exit(1);
  }

  const targetsIndex = argv.findIndex((arg) => arg === "--targets");
  if (targetsIndex === -1) {
    process.stdout.write("`targets` is not specified");
    process.exit(1);
  }
  const targets = argv[targetsIndex + 1]?.split(",");
  if (!targets || targets.length === 0) {
    process.stderr.write(
      "wrong `targets` format (i.e. <**/*.proto>,<**/*.proto>,<**/*.proto>)."
    );
    process.exit(1);
  }

  const outDirIndex = argv.findIndex((arg) => arg === "--out");
  if (outDirIndex === -1) {
    process.stdout.write(
      "`out` is not specified, downloading to `proto` folder by default.\n"
    );
  }
  const outDir = outDirIndex !== -1 ? argv[outDirIndex + 1] : "./proto";

  const omitCloneIndex = argv.findIndex((arg) => arg === "--omit-clone");
  let omitClone = false;
  if (omitCloneIndex !== -1 && argv[omitCloneIndex + 1] === "true") {
    omitClone = true;
  }
  if (
    omitCloneIndex !== -1 &&
    typeof argv[omitCloneIndex + 1] === "undefined"
  ) {
    omitClone = true;
  }

  removeFolder("git-modules");
  const result = await clone({
    owner,
    repo,
    outDir: "./git-modules",
  });

  if (result) {
    removeFolder(outDir);
    extractProto({
      sources: result,
      targets,
      outDir,
    });
  }
}

run();
