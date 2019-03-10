export type PathTypeFunction = (path: string) => Promise<boolean>;

/**
 * Checks whether the passed `path` is a file.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a file.
 */
export const isFile: PathTypeFunction;

/**
 * Checks whether the passed `path` is a directory.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a directory.
 */
export const isDirectory: PathTypeFunction;

/**
 * Checks whether the passed `path` is a symlink.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a symlink.
 */
export const isSymlink: PathTypeFunction;

export type PathTypeSyncFunction = (path: string) => boolean;

/**
 * Synchronously checks whether the passed `path` is a file.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a file.
 */
export const isFileSync: PathTypeSyncFunction;

/**
 * Synchronously checks whether the passed `path` is a directory.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a directory.
 */
export const isDirectorySync: PathTypeSyncFunction;

/**
 * Synchronously checks whether the passed `path` is a symlink.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a directory.
 */
export const isSymlinkSync: PathTypeSyncFunction;
