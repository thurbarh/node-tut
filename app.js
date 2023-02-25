const _=require('lodash');

const items=[1,2,[9,5],1, [8,[20,24]]];

console.log(_.flatMapDeep(items));