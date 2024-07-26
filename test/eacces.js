import fs, {promises as fsPromises} from 'node:fs';
import test from 'ava';
import {isFile, isFileSync} from '../index.js';

function fakeError(filePath) {
	const error = new Error(`EACCES: permission denied, stat '${filePath}'`);
	error.code = 'EACCES';
	return error;
}

Object.defineProperties(fsPromises, {
	stat: {
		value(filePath, callback) {
			callback(fakeError(filePath));
		}
	}
});

Object.defineProperties(fs, {
	stat: {
		value(filePath, callback) {
			callback(fakeError(filePath));
		}
	},
	statSync: {
		value(filePath) {
			throw fakeError(filePath);
		}
	}
});

test('throws on EACCES error - async', async t => {
	await t.throwsAsync(isFile('/root/private'));
});

test('throws on EACCES error - sync', t => {
	t.throws(() => {
		isFileSync('/root/private');
	});
});
