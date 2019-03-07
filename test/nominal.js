import test from 'ava';
import pathType from '..';

test('.file()', async t => {
	t.true(await pathType.file('package.json'));
	await t.throwsAsync(pathType.file(false));
});

test('.dir()', async t => {
	t.true(await pathType.dir('.'));
	await t.throwsAsync(pathType.dir(false));
});

if (process.platform !== 'win32') {
	test('.symlink()', async t => {
		t.true(await pathType.symlink('symlink'));
		await t.throwsAsync(pathType.symlink(false));
	});
}

test('.fileSync()', t => {
	t.true(pathType.fileSync('package.json'));
});

test('.dirSync()', t => {
	t.true(pathType.dirSync('.'));
});

if (process.platform !== 'win32') {
	test('.symlinkSync()', t => {
		t.true(pathType.symlinkSync('symlink'));
	});
}

test('return false if path doesn\'t exist - async', async t => {
	t.false(await pathType.file('unicorn'));
});

test('return false if path doesn\'t exist - sync', t => {
	t.false(pathType.fileSync('unicorn'));
});

test('throws invalid argument - async', async t => {
	await t.throwsAsync(pathType.file(false));
});

test('throws on invalid argument - sync', t => {
	t.throws(() => pathType.fileSync(false));
});
