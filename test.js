'use strict';
var test = require('ava');
var fn = require('./');

test('.file()', function (t) {
	return fn.file('package.json').then(function (isFile) {
		t.true(isFile);
	});
});

test('.dir()', function (t) {
	return fn.dir('.').then(function (isDir) {
		t.true(isDir);
	});
});

test('.symlink()', function (t) {
	return fn.symlink('symlink').then(function (isSymlink) {
		t.true(isSymlink);
	});
});

test('.fileSync()', function (t) {
	t.true(fn.fileSync('package.json'));
	t.end();
});

test('.dirSync()', function (t) {
	t.true(fn.dirSync('.'));
	t.end();
});

test('.symlinkSync()', function (t) {
	t.true(fn.symlinkSync('symlink'));
	t.end();
});
