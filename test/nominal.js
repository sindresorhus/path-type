import test from 'ava';
import m from '..';

test('.file()', async t => {
	t.true(await m.file('package.json'));
	await t.throwsAsync(m.file(false));
});

test('.dir()', async t => {
	t.true(await m.dir('.'));
	await t.throwsAsync(m.dir(false));
});

if (process.platform !== 'win32') {
	test('.symlink()', async t => {
		t.true(await m.symlink('symlink'));
		await t.throwsAsync(m.symlink(false));
	});
}

test('.fileSync()', t => {
	t.true(m.fileSync('package.json'));
});

test('.dirSync()', t => {
	t.true(m.dirSync('.'));
});

if (process.platform !== 'win32') {
	test('.symlinkSync()', t => {
		t.true(m.symlinkSync('symlink'));
	});
}

test('return false if path doesn\'t exist - async', async t => {
	t.false(await m.file('unicorn'));
});

test('return false if path doesn\'t exist - sync', t => {
	t.false(m.fileSync('unicorn'));
});

test('throws invalid argument - async', async t => {
	await t.throwsAsync(m.file(false));
});

test('throws on invalid argument - sync', t => {
	t.throws(() => m.fileSync(false));
});
