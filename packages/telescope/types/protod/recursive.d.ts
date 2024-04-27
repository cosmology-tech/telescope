import { GitInfo } from "./types";
export declare function clone({ owner, repo, branch, outDir, protoDirMapping, ssh, }: {
    owner: string;
    repo: string;
    branch?: string;
    protoDirMapping?: Record<string, string>;
    outDir: string;
    ssh: boolean;
}): Promise<Record<string, GitInfo>>;
export declare function extractProto({ sources, targets, outDir, }: {
    sources: Record<string, GitInfo>;
    targets: string[];
    outDir: string;
}): void;
