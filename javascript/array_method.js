// Array method 
// basic
var a = [0, 1, 2, 3, 4, 5];
for (var i = 0; < a.length; i++) {
	var item = a[i];
	console.log(item);	
}


// forEach
const b = [0, 1, 2, 3, 4, 5];
b.forEach(function(item){
	console.log(item);
});


// basic
var c = [0, 1, 2, 3, 4, 5];
var newC = [];
for (var i = 0; i < c.length; i++){
	var item = c[i];
	newC.push(item * 2);
}


// map
const d = [0, 1, 2, 3, 4, 5];
const newD = d.map(function(item){
	return item * 2;
});



// basic
var e = [0, 1, 2, 3, 4, 5];
var newE = [];
for (var i = 0; i < e.length; i++) {
	var item = e[i];
	if (item > 3) {
		newE.push(item);
	}
}


// filter
const j = [0, 1, 2, 3, 4, 5];
const newJ = j.filter(function(item)){
	return item > 3;
}