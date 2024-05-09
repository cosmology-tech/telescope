import * as shell from "shelljs";
import { readFileSync } from "fs";
import { clone, cloneAll, extractProto } from "../protod/recursive";
import { removeFolder } from "../protod/utils";
import { DownloadOptions } from "src/protod/types";
import deepmerge from "deepmerge";
import { presetProtoDirMapping } from "../protod/config";

export default async (argv: { [key: string]: string | string[] }) => {
  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git");
    return shell.exit(1);
  }

  let configJson: DownloadOptions;

  const config = Array.isArray(argv["config"])
    ? argv["config"][0]
    : argv["config"];

  if (config) {
    try {
      const configText = readFileSync(config, {
        encoding: "utf8",
      });
      configJson = JSON.parse(configText);
    } catch (ex) {
      console.log(ex);
      throw new Error("Must provide a .json file for --config.");
    }
  } else {
    configJson = {};
  }

  const gitRepos = Array.isArray(argv["git-repo"])
    ? argv["git-repo"]
    : [argv["git-repo"]];

  if (argv["git-repo"] && gitRepos && gitRepos.length > 0) {
    configJson.repos = gitRepos.map((gitRepo) => {
      const [owner, repo, branch] = gitRepo.split("/");

      if (!owner || !repo) {
        shell.echo(
          "wrong `git-repo` format (i.e. <owner>/<repository> or <owner>/<repository>/<branch>).\n"
        );
        return shell.exit(1);
      }

      return { owner, repo, branch };
    });
  }

  if (!configJson.repos || configJson.repos.length === 0) {
    shell.echo(
      "missing `git-repo` argument, you can set through `--git-repo` argument or set repos field in config file.\n"
    );
    return shell.exit(1);
  }

  const targets = Array.isArray(argv["targets"])
    ? argv["targets"]
    : argv["targets"]?.split(",");
  if (targets && targets.length > 0) {
    configJson.targets = targets;
  }

  if (!configJson.targets || configJson.targets.length === 0) {
    shell.echo("there must be '--targets' file patterns.\n");
    shell.exit(1);
  }

  if (!configJson.protoDirMapping) {
    configJson.protoDirMapping = {};
  }

  configJson.protoDirMapping = deepmerge(
    presetProtoDirMapping,
    configJson.protoDirMapping
  );

  let outDir = Array.isArray(argv["out"]) ? argv["out"][0] : argv["out"];
  if (outDir) {
    configJson.outDir = outDir;
  }

  if (!configJson.outDir) {
    shell.echo(
      "out directory is not specified, downloading to `proto` folder by default.\n"
    );
    configJson.outDir = "proto";
  }

  let sshOpt = argv["ssh"];

  configJson.ssh = configJson.ssh || !!sshOpt;

  if (configJson.deleteTempRepoDir) {
    removeFolder(configJson.tempRepoDir);
  }

  const result = await cloneAll({
    repos: configJson.repos,
    gitModulesDir: "./git-modules",
    ssh: configJson.ssh,
    protoDirMapping: configJson.protoDirMapping,
  });

  if (result) {
    removeFolder(configJson.outDir);
    extractProto({
      sources: result,
      targets: configJson.targets,
      outDir: configJson.outDir,
    });
  }
};
