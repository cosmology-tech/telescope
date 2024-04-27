import * as shell from "shelljs";
import { clone, extractProto } from "../protod/recursive";
import { removeFolder } from "../protod/utils";

export default async (argv: { [key: string]: string | string[] }) => {
  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git");
    return shell.exit(1);
  }

  const gitRepo = Array.isArray(argv["git-repo"])
    ? argv["git-repo"][0]?.split("/")
    : argv["git-repo"]?.split?.("/");

  if (!gitRepo) {
    shell.echo("missing `git-repo` argument.\n");
    return shell.exit(1);
  }

  const [owner, repo] = gitRepo;

  if (!owner || !repo) {
    shell.echo("wrong `git-repo` format (i.e. <owner>/<repository>).\n");
    return shell.exit(1);
  }

  const targets = Array.isArray(argv["targets"])
    ? argv["targets"]
    : argv["targets"]?.split(",");
  if (!targets || targets.length === 0) {
    shell.echo("there must be '--targets' file patterns split by comma.\n");
    shell.exit(1);
  }

  let outDir = Array.isArray(argv["out"]) ? argv["out"][0] : argv["out"];
  if (!outDir) {
    shell.echo(
      "--out directory is not specified, downloading to `proto` folder by default.\n"
    );
    outDir = "./proto";
  }

  let branch = Array.isArray(argv["branch"]) ? argv["branch"][0] : argv["branch"];

  let sshOpt = Array.isArray(argv["ssh"]) ? argv["ssh"][0] : argv["ssh"];
  const ssh = sshOpt === "true";

  removeFolder("git-modules");
  const result = await clone({
    owner,
    repo,
    branch,
    outDir: "./git-modules",
    ssh
  });

  if (result) {
    removeFolder(outDir);
    extractProto({
      sources: result,
      targets,
      outDir,
    });
  }
};
