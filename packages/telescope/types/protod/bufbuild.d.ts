import { Repo } from "./types";
export declare function parseBufLockFile(filePath: string): Repo[];
export declare function parseBufYamlFile(filePath: string): Repo[];
export declare function findAllBufYamlFiles(dir: string): string[];
export declare function findAllBufLockFiles(dir: string): string[];
export declare function getAllBufDeps(dir: string): Repo[];
