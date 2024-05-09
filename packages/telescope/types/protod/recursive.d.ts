import { CloneOptions, GitInfo, ProtoCopyOptions, CloneAllOptions } from "./types";
export declare function cloneAll({ repos, gitModulesDir, protoDirMapping, ssh, }: CloneAllOptions): Promise<Record<string, GitInfo>>;
export declare function clone({ owner, repo, branch, gitModulesDir: outDir, protoDirMapping, ssh, cloned, }: CloneOptions): Promise<Record<string, GitInfo>>;
export declare function extractProto({ sources, targets, outDir }: ProtoCopyOptions): void;
