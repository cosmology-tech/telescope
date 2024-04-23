export interface Repo {
  owner: string;
  repo: string;
}

export interface BufInfo extends Repo {
  git: Repo[];
}
