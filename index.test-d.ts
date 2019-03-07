import {expectType} from 'tsd-check';
import * as pathType from '.';

expectType<Promise<boolean>>(pathType.file('package.json'));
expectType<Promise<boolean>>(pathType.dir('package.json'));
expectType<Promise<boolean>>(pathType.symlink('package.json'));

expectType<boolean>(pathType.fileSync('package.json'));
expectType<boolean>(pathType.dirSync('package.json'));
expectType<boolean>(pathType.symlinkSync('package.json'));
