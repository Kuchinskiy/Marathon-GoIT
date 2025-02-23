'use strict';

// alert('GREETING');

// const person = 'Joe';
// let i = 0;

// while (i < 2) {
// 		console.log('Happy Birthday to you');
// 	i += 1;
// }

// 	console.log(`Happy Birthday dear ${person},`);
// 	console.log('Happy Birthday to you');


const word = 'bottles';
let count = 5;

while (count > 0) {
	console.log(`${count} ${word} of beer on the wall`);
	console.log(`${count} ${word} of beer,`);
	console.log('Take one down, pass it around,');

	count -= 1;

	if (count > 0) {
		console.log(`${count} ${word} of beer on the wall.`);
	} else {
		console.log(`No more ${word} No more`);
	}
}