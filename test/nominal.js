import test from 'ava';
import {isDirectory, isDirectorySync, isFile, isFileSync, isSymlink, isSymlinkSync} from '../index.js';

test('.file()', async t => {
	t.true(await isFile('package.json'));
	await t.throwsAsync(isFile(false));
});

test('.dir()', async t => {
	t.true(await isDirectory('.'));
	await t.throwsAsync(isDirectory(false));
});

if (process.platform !== 'win32') {
	test('.symlink()', async t => {
		t.true(await isSymlink('symlink'));
		await t.throwsAsync(isSymlink(false));
	});
}

test('.fileSync()', t => {
	t.true(isFileSync('package.json'));
});

test('.dirSync()', t => {
	t.true(isDirectorySync('.'));
});

if (process.platform !== 'win32') {
	test('.symlinkSync()', t => {
		t.true(isSymlinkSync('symlink'));
	});
}

test('return false if path doesn\'t exist - async', async t => {
	t.false(await isFile('unicorn'));
});

test('return false if path doesn\'t exist - sync', t => {
	t.false(isFileSync('unicorn'));
});

test('throws invalid argument - async', async t => {
	await t.throwsAsync(isFile(false));
});

test('throws on invalid argument - sync', t => {
	t.throws(() => isFileSync(false));
});
