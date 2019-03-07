export type PathTypeFn = (path: string) => Promise<boolean>;

/**
 * Checks whether the passed `path` is a file.
 *
 * @param path - The path to check.
 * @returns A Promise for a boolean of whether the `path` is a file.
 */
export const file: PathTypeFn;

/**
 * Checks whether the passed `path` is a directory.
 *
 * @param path - The path to check.
 * @returns A Promise for a boolean of whether the `path` is a directory.
 */
export const dir: PathTypeFn;

/**
 * Checks whether the passed `path` is a directory.
 *
 * @param path - The path to check.
 * @returns A Promise for a boolean of whether the `path` is a symlink.
 */
export const symlink: PathTypeFn;

export type PathTypeSyncFn = (path: string) => boolean;

/**
 * Synchronously checks whether the passed `path` is a file.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a file.
 */
export const fileSync: PathTypeSyncFn;

/**
 * Synchronously checks whether the passed `path` is a directory.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a directory.
 */
export const dirSync: PathTypeSyncFn;

/**
 * Synchronously checks whether the passed `path` is a directory.
 *
 * @param path - The path to check.
 * @returns Whether the `path` is a directory.
 */
export const symlinkSync: PathTypeSyncFn;
