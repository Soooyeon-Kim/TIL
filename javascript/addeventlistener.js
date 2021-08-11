//addeventlistener

let btn = document.querySelector('#myBtn');

function event1() {
	console.log('Hello btn!');
}

function event2() {
	console.log('bye btn!');
}


// elem.addEventListener(event, handler)
btn.addEventListener('click',event1);
btn.addEventListener('click',event2);

// elem.removeEventListener(event, handler)
btn.removeEventListener('click',event2);