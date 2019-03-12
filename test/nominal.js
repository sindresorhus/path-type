import test from 'ava';
import pathType from '..';

test('.file()', async t => {
	t.true(await pathType.isFile('package.json'));
	await t.throwsAsync(pathType.isFile(false));
});

test('.dir()', async t => {
	t.true(await pathType.isDirectory('.'));
	await t.throwsAsync(pathType.isDirectory(false));
});

if (process.platform !== 'win32') {
	test('.symlink()', async t => {
		t.true(await pathType.isSymlink('symlink'));
		await t.throwsAsync(pathType.isSymlink(false));
	});
}

test('.fileSync()', t => {
	t.true(pathType.isFileSync('package.json'));
});

test('.dirSync()', t => {
	t.true(pathType.isDirectorySync('.'));
});

if (process.platform !== 'win32') {
	test('.symlinkSync()', t => {
		t.true(pathType.isSymlinkSync('symlink'));
	});
}

test('return false if path doesn\'t exist - async', async t => {
	t.false(await pathType.isFile('unicorn'));
});

test('return false if path doesn\'t exist - sync', t => {
	t.false(pathType.isFileSync('unicorn'));
});

test('throws invalid argument - async', async t => {
	await t.throwsAsync(pathType.isFile(false));
});

test('throws on invalid argument - sync', t => {
	t.throws(() => pathType.isFileSync(false));
});
