import test from 'ava';
import fn from './';

test('.file()', async t => {
	t.true(await fn.file('package.json'));
});

test('.dir()', async t => {
	t.true(await fn.dir('.'));
});

test('.symlink()', async t => {
	t.true(await fn.symlink('symlink'));
});

test('.fileSync()', t => {
	t.true(fn.fileSync('package.json'));
});

test('.dirSync()', t => {
	t.true(fn.dirSync('.'));
});

test('.symlinkSync()', t => {
	t.true(fn.symlinkSync('symlink'));
});
