import { exec, getMainBranchName, makeDir, removeFolder } from "./utils";

export class GitRepo {
  constructor(
    public readonly owner: string,
    public readonly repo: string,
    public readonly ssh: boolean = false
  ) {}

  get fullName() {
    return `${this.owner}/${this.repo}`;
  }

  get httpsUrl() {
    return `https://github.com/${this.fullName}.git`;
  }

  get sshUrl() {
    return `git@github.com:${this.fullName}.git`;
  }

  get mainBranchName() {
    return getMainBranchName(this.ssh ? this.sshUrl : this.httpsUrl);
  }

  clone(branch: string, depth: number = 1, outDir: string = "./git-modules") {
    const dir = `${outDir}/${this.fullName}/${branch}`;
    try {
      console.log(`Cloning to ${dir}`);
      removeFolder(dir);
      makeDir(dir);
      exec(
        `git clone ${
          this.ssh ? this.sshUrl : this.httpsUrl
        } --depth ${depth} --branch ${branch} --single-branch ${dir}`
      );
      return dir;
    } catch (error) {
      if ((error as Error).message.startsWith("Cloning into")) {
        return dir;
      } else {
        throw error;
      }
    }
  }
}
