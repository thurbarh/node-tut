const path=require('path');

console.log(path.sep);

const filepath=path.join('/asset/','/subfolder','test.txt');
console.log(filepath);

console.log(path.basename(filepath));

console.log(path.resolve(__dirname,'asset','subfolder', 'test.txt'))