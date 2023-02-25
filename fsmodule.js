const {readFileSync, writeFileSync}=require('fs');

const first=readFileSync('./asset/first.txt','utf8');
const second=readFileSync('./asset/second.txt','utf8');

console.log(first, second);

writeFileSync('./asset/result-syn.txt',`Here is the result \r\n${first} \r\n${second}`);

const result=readFileSync('./asset/result-syn.txt','utf8');

console.log(result);