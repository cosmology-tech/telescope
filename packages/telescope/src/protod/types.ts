export interface Repo {
  owner: string;
  repo: string;
}

export interface BufInfo extends Repo {
  git: Repo[];
}

export interface GitInfo extends Repo {
  branch: string;
  protoDir?: string;
  protoPath?: string;
}

export interface DownloadOptions {
  repos?: {
    owner: string;
    repo: string;
    branch?: string;
  }[];
  protoDirMapping?: Record<string, string>;
  outDir?: string;
  ssh?: boolean;
  targets?: string[];
  tempRepoDir?: string;
  deleteTempRepoDir?: boolean;
}

export interface CloneAllOptions {
  repos?: {
    owner: string;
    repo: string;
    branch?: string;
  }[];
  protoDirMapping?: Record<string, string>;
  gitModulesDir: string;
  ssh: boolean;
}

export interface CloneOptions {
  owner: string;
  repo: string;
  branch?: string;
  protoDirMapping?: Record<string, string>;
  gitModulesDir: string;
  ssh: boolean;
  cloned?: Record<string, GitInfo>;
}

export interface ProtoCopyOptions {
  sources: Record<string, GitInfo>;
  targets: string[];
  outDir: string;
}
