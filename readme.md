# path-type [![Build Status](https://travis-ci.org/sindresorhus/path-type.svg?branch=master)](https://travis-ci.org/sindresorhus/path-type)

> Check if a path is a file, directory, or symlink


## Install

```
$ npm install path-type
```


## Usage

```js
const pathType = require('path-type');

pathType.isFile('package.json').then(isFile => {
	console.log(isFile);
	//=> true
})
```


## API

### .isFile(path)

Checks whether the passed `path` is a file.

Returns `Promise` for a `boolean`.

### .isDirectory(path)

Checks whether the passed `path` is a directory.

Returns `Promise` for a `boolean`.

### .isSymlink(path)

Checks whether the passed `path` is a symlink.

Returns `Promise` for a `boolean`.

#### path

Type: `string`

The path to check.

### .isFileSync(path)

Synchronously checks whether the passed `path` is a file.

Returns a `boolean`.

### .isDirectorySync(path)

Synchronously checks whether the passed `path` is a directory.

Returns a `boolean`.

### .isSymlinkSync(path)

Synchronously checks whether the passed `path` is a symlink.

Returns a `boolean`.

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
