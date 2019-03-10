import {expectType} from 'tsd-check';
import {
	isFile,
	isDirectory,
	isSymlink,
	isFileSync,
	isDirectorySync,
	isSymlinkSync
} from '.';

expectType<Promise<boolean>>(isFile('package.json'));
expectType<Promise<boolean>>(isDirectory('package.json'));
expectType<Promise<boolean>>(isSymlink('package.json'));

expectType<boolean>(isFileSync('package.json'));
expectType<boolean>(isDirectorySync('package.json'));
expectType<boolean>(isSymlinkSync('package.json'));
