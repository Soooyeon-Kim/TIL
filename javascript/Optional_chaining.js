// Optional chaining

var x;
if(a&& a.b && a.b.c){
	x = a.b.c;
}

const y = a?.b?.c;

//
const a = {
    b: {
        c: 1
    }
}
console.log(a?.b?.c); // 1
console.log(a?.x?.c); // undefined
console.log(a?.x.c); // Error


//
const a = [{x:1,y:2}, {x:3,y:4}];

console.log(a?.[1]?.x); // 3
console.log(a?.[2]?.x); // undefined
