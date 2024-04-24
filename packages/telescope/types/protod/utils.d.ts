import { Repo } from "./types";
export declare function exec(command: string, verbose?: boolean): Promise<{
    stdout: any;
}>;
export declare function getMainBranchName(url: string): Promise<"main" | "master">;
export declare function getCorrespondingGit(bufRepo: Repo): Repo[];
export declare function parseProtoFile(filePath: string): string[];
export declare function isPathExist(path: string): boolean;
export declare function findAllProtoFiles(dir: string): string[];
export declare function removeFolder(dir: string): void;
export declare function makeDir(dir: string): void;
