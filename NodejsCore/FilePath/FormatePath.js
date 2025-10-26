import path from 'path';
const parts={
    dir:'\\user\\local\\bin',
    base:'script.js'
}
const fullpath=path.format(parts);
console.log(fullpath);
