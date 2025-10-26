import {isAbsolute} from 'path';
console.log(isAbsolute('./home/user/./index.js'));
console.log(isAbsolute('/home/user/./index.js'));
console.log(isAbsolute('../home/user/./index.js'));

