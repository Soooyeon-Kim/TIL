// Arrow Function
const sum = (a,b) => a+b;
const pow = x => x*x; //x**2;

// map
const arrayR = [1,2,3];
const poweredArray = arrayR.map(elem => pow(elem));

// forEach
const arrayS = [4,5,6];
const pow = p => p**2;
arrayS.forEach(elem => console.log(pow(elem)));

// Destructuring Assignment
const arrayY = [1, [2, [3, 4], 5], 6]
const [a, [b, [c, d], e], f] = arrayY;

// Tree dots Expression
// Rest Expression
const [, , , ...restList] = [10, 20, 30, 40, 50]

// Spread Expression 
let res [1, 2, 3];
res = [...res, 4, 5];

let obj = {
	a: '1',
	b: '2',
	c: '3'
};
obj = {...obj, a: '4', test: 'test'};