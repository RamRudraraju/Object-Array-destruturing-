const user = {
  name: 'David',
  age: 22,
  city: 'Salt Lake City',
  country: 'USA'
};

// Regular Way to extract Data
/* const name = user.name;
const country = user.country; */

// Destructured Way
const { name, country } = user;  //  It is just creating two variables. Not an Object

console.log('name: ', name);
console.log('country: ', country);

const myArr = [1, 2, 3, 4];

console.log("----");
// Regular Way to extract Data
/* const foo = myArr[0];
const bar = myArr[1];
const jazz = myArr[2]; */

// Destructured Way
const [foo, bar, jazz] = myArr;

console.log('foo: ', foo);
console.log('bar: ', bar);
console.log('jazz: ', jazz);