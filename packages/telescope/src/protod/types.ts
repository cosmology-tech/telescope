export interface Repo {
  owner: string;
  repo: string;
}

export interface BufInfo extends Repo {
  git: Repo[];
}

export interface GitInfo extends Repo {
  branch: string;
  protoDir: string;
  protoPath: string;
}