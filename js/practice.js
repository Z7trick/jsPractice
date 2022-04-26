// if (4 == 9) {
// 	console.log('OK!');
// } else {
// 	console.log('Error');
// }

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Too much');
// } else {
// 	console.log('Ok');
// }

// num === 50 ? console.log('Ok') : console.log('Error');

// const num = 50;

// switch (num) {
// 	case 49:
// 		console.log('Неверно');
// 		break;
// 	case 100:
// 		console.log('Неверно');
// 		break;
// 	case 50:
// 		console.log('В точку!');
// 		break;
// 	default:
// 		console.log('Не в этот раз');
// 		break;
// }

// const hamburger = 5,
// 	fries = 0;

// if (hamburger && fries) {
// 	console.log('Я сыт');
// }

// const hamburger = 3,
// 	fries = 3,
// 	cola = 0,
// 	nuggets = 2;

// if (hamburger === 3 && fries) {
// 	console.log('Все сыты');
// } else {
// 	console.log('Мы уходим');
// }

// (hamburger === 3 && cola === 2) || (fries === 3 && nuggets) ? console.log('Все довольны') : console.log('Мы уходим');

// let johnReport,
// 	alesReport,
// 	samReport,
// 	mariaReport = 'done';

// console.log(johnReport || alesReport || samReport || mariaReport);

// const sugar = 33,
// 	tea = 1,
// 	cup = 3;

// function haveOrNo(t, c, s) {
// 	if (t && c >= 1 && s >= 2) {
// 		console.log('Есть товар!');
// 	} else {
// 		console.log('Не нету товара');
// 	}
// }

// haveOrNo(tea, cup, sugar);

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }

// for (let i = 0; i < 10; i++) {
// 	saySomething();
// }

// function saySomething() {
// 	document.write('hello! ');
// }
// for (let i = 1000; i > 0; i -= 7) {
// 	console.log(i);
// }

// let i = 1000;
// function ghoul() {
// 	setTimeout(function () {
// 		console.log(`${i}	- 7?`);
// 		i -= 7;
// 		if (i > 0) {
// 			ghoul();
// 		}
// 	}, 50);
// }
// ghoul();

/* for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(i);
	}
} */

/* let result = '';
const maxLength = 7;

for (let i = 1; i < maxLength; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';
	}
	result += '\n';
}

console.log(result); */
/*
first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) break first;
			console.log(`Third level: ${k}`);
		}
	}
} */

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i *= 2) {

// }

// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 0; i < data.length; i++) {
// 	for (let j = i; j >= 0; j--) {
// 		result[j] = data[i - j];
// 	}
// }

// console.log(result);

// const lines = 6;
// let result = '';

// for (let i = 0; i < lines; i++) {
// 	for (let k = lines; k > i; k--) {
// 		result += ' ';
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);

const lines = 6;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
	for (let j = lines; j > i; j--) {
		result += ' ';
	}
	for (let k = 0; k < 2 * i + 1; k++) {
		result += '*';
	}
	result += '\n';
}
console.log(result);

// const maxLength = 7;

// for (let i = 1; i < maxLength; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }

// console.log(result);

// if (personalMovieDB.count < 10) {
// 	console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log('Вы классный зритель');
// } else if (personalMovieDB.count >= 30) {
// 	console.log('Вы киноман');
// } else {
// 	console.log('Произошла ошибка');
// }

// personalMovieDB.movies = { [q1]: q2, [q3]: q4 };

// function getMathResult(num, times) {
// 	if (typeof times !== 'number' || times <= 0) {
// 		return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 			// Тут без черточек в конце
// 		} else {
// 			str += `${num * i}---`;
// 			// Это тоже самое, что и
// 			// str = str + num * i + "---"
// 		}
// 	}

// 	return str;
// }

// getMathResult(10, 5);
