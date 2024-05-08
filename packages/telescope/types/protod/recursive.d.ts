import { CloneOptions, GitInfo, ProtoCopyOptions } from "./types";
export declare function clone({ owner, repo, branch, gitModulesDir: outDir, protoDirMapping, ssh, }: CloneOptions): Promise<Record<string, GitInfo>>;
export declare function extractProto({ sources, targets, outDir }: ProtoCopyOptions): void;
