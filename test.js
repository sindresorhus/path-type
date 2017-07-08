import test from 'ava';
import m from './';

test('.file()', async t => {
	t.true(await m.file('package.json'));
});

test('.dir()', async t => {
	t.true(await m.dir('.'));
});

test('.symlink()', async t => {
	t.true(await m.symlink('symlink'));
});

test('.fileSync()', t => {
	t.true(m.fileSync('package.json'));
});

test('.dirSync()', t => {
	t.true(m.dirSync('.'));
});

test('.symlinkSync()', t => {
	t.true(m.symlinkSync('symlink'));
});

test('return false if path doesn\'t exist - async', async t => {
	t.false(await m.file('unicorn'));
});

test('return false if path doesn\'t exist - sync', t => {
	t.false(m.fileSync('unicorn'));
});
