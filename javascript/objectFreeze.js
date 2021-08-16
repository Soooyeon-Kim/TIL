/* case 1 */
var s1 = {name: 'soo', score:[1,2]}
s1.name = 'yeon';
console.log(s1);

// => { name: 'yeon', score: [1, 2] }

/* case 2 */
// Object freeze 함수 호출 -> 원본을 바꾸지 못하도록 강제
var s1 = {name: 'soo', score:[1,2]}
Object.freeze(s1);
s1.name = 'yeon';
console.log(s1);

// => { name: 'soo', score: [1, 2] }
/* 
freeze를 푸는 방법은 존재하지 않으며 원본을 복제하여 대체가능함
프로퍼티의 값이 객체라면, 값을 추가하거나 변경할 수 없음
 */

/* case 3 */
var s1 = {name: 'soo', score:[1,2]}
Object.freeze(s1);
s1.name = 'yeon';
console.log(s1);
s1.city = 'seoul' // => X
s1.score.push(3); // => O
console.log(s1);

// => { name: 'soo', score: [1, 2, 3] } 

/* case 4 */
var s1 = {name: 'soo', score:[1,2]}
Object.freeze(s1);
Object.freeze(s1.score);
s1.name = 'yeon';
console.log(s1);
s1.city = 'seoul' // => X
s1.score.push(3); // => O
console.log(s1);

// => error : freeze 된 score에 push할 수 없다.
