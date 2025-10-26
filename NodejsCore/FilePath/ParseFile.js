import path from 'path';
const filePath='C:\\Users\\John\\Desktop\\app.js';
const parsed=path.parse(filePath);
console.log(parsed);

/*  output will be look like this

{
  root: 'C:\\',
  dir: 'C:\\Users\\John\\Desktop',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/