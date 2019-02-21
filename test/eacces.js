import fs from 'fs';
import test from 'ava';
import m from '..';

function fakeError(fp) {
	const error = new Error(`EACCES: permission denied, stat '${fp}'`);
	error.code = 'EACCES';
	return error;
}

Object.defineProperties(fs, {
	stat: {
		value(fp, cb) {
			cb(fakeError(fp));
		}
	},
	statSync: {
		value(fp) {
			throw fakeError(fp);
		}
	}
});

test('throws on EACCES error - async', async t => {
	await t.throwsAsync(m.file('/root/private'));
});

test('throws on EACCES error - sync', t => {
	t.throws(() => m.fileSync('/root/private'));
});
