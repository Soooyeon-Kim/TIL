/*  case 1 */
function fn(person){
	person.name= 'yeon';
}
var s1 = {name:'soo'}
fn(s1);
console.log(s1);

// => { name : 'yeon' }


/* case 2 */
function fn(person){
	person.name = 'yeon';
}
var s1 = {name:'soo'}
var s2 = fn(s1);
fn(s1);
console.log(s1, s2);

// => { name : 'yeon' } undefined


// 원본이 바뀌지 않았고 복제본을 바꾼 결과를 리턴
function fn(person){
	person = Object.assign({}, person);
	person.name = 'yeon';
	return person;
}
var s1 = {name:'soo'}
var s2 = fn(s1);
console.log(s1, s2);

// => { name: 'soo' }, { name: 'yeon' }


/* case 3 */
function fn(person){
	person.name = 'yeon';
	
}
var s1 = {name:'soo'}
var s2 = Object.assign({},s1);
fn(s2);
console.log(s1, s2);
// => { name: 'soo' }, { name: 'yeon' }

