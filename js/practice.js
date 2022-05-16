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

// const lines = 6;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
// 	for (let j = lines; j > i; j--) {
// 		result += ' ';
// 	}
// 	for (let k = 0; k < 2 * i + 1; k++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);

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

// personalMovieDB.movies =

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

/* function calculateVolumeAndArea(cube) {
	let a = cube * cube * cube;
	let b = 6 * cube * cube;
	if (typeof cube === 'string' || cube <= 0 || !Number.isInteger(cube)) {
		return 'При вычисление произошла ошибка';
	} else {
		return `Объем куба: ${a}, площадь всей поверхности: ${b}`;
	}
}

calculateVolumeAndArea(-15);

function getCoupeNumber(seat) {
	if (typeof seat !== 'number' || seat < 0 || !Number.isInteger(seat)) {
		return console.log('Ошибка. Проверьте правильность введенного номера места');
	}

	if (seat === 0 || seat > 36) {
		console.log('Таких мест в вагоне не существует');
	}

	for (let i = 4; i <= 36; i = i + 4) {
		if (seat <= i) {
			let b = Math.ceil(i / 4);
			return console.log(b);
		}
	}
}
getCoupeNumber(10); */

/* function getTimeFromMinutes(time) {
	if (typeof time != 'number' || time < 0 || !Number.isInteger(time)) {
		return 'Ошибка проверьте данные';
	}

	const hours = Math.floor(time / 60);
	const minutes = time % 60;

	let hoursStr = '';

	switch (hours) {
		case 0:
			hoursStr = 'часов';
			break;
		case 1:
			hoursStr = 'час';
			break;
		case 2:
		case 3:
		case 4:
			hoursStr = 'часа';
			break;
		default:
			hoursStr = 'часов';
	}

	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180); */

// function findMaxNumber(a, b, c, d) {
// 	if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
// 		return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 	}
// }
/* function fib(num) {
	if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
		return '';
	}

	let result = '';
	let first = 0;
	let second = 1;

	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`;
			// Без пробела в конце
		} else {
			result += `${first} `;
		}

		let third = first + second;
		first = second;
		second = third;
	}

	return result;
}

fib(5); */

// function learnJS(lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }

// learnJS('JavaScript', function () {
// 	console.log('Я прошел этот урок');
// });

// const obj = new Object();

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	},
// 	makeTest: function () {
// 		console.log('Test');
// 	},
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
// 	if (typeof options[key] === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
// 	return a - b;
// }
// arr[99] = 0;

// console.log(arr.length);

// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// const str = prompt('', ''),
// 	products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// let a = 5,
// 	b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1,
// };

// const copy = obj; // Ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

/* function copy(mainObj) {
	let objCopy = {};

	let key;

	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4,
	},
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
	d: 17,
	e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20; */

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray.slice();

// newArray[2] = 'asasasas';

// console.log(newArray);
// console.log(oldArray);

// const video = ['YouTube', 'Vimeo', 'rutube'],
// 	blogs = ['wordpress', 'livejournal', 'blogger'],
// 	internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
// 	one: 1,
// 	two: 2,
// };

// const newObj = { ...q };

// const personalPlanPeter = {
// 	name: 'Peter',
// 	age: '29',
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%',
// 		},
// 		exp: '1 month',
// 	},
// 	showAgeAndLangs: function (obj) {
// 		let str = '';
// 		const { languages } = obj.skills,
// 			{ age } = obj;
// 		languages.forEach(function (item) {
// 			str += `${item.toUpperCase()} `;
// 		});
// 		str = `Мне ${age} и я владею языками: ${str}`;

// 		return console.log(str);
// 	},
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

/* const family = ['asdasd', 1];

function showFamily(arr) {
	let str = 'Семья состоит из: ';
	if (arr.length === 0 || arr[0] === '') {
		return 'Семья пуста';
	} else {
		arr.forEach(function (item) {
			str += `${item} `;
		});
		return str;
	}
}

showFamily(family); */

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
// 	arr.forEach(function (item) {
// 		return console.log(item.toLowerCase());
// 	});
// }

// standardizeStrings(favoriteCities);

// const someString = 'ИЗВИНИТЕ';

// function reverse(item) {
// 	let arr = [],
// 		str = '';
// 	if (item === '' || typeof item !== 'string') {
// 		return console.log('Ошибка!');
// 	} else {
// 		arr = [...item];
// 		arr.reverse();
// 		arr.forEach(function (item) {
// 			str += item;
// 		});
// 		return console.log(str);
// 	}
// }
// reverse(someString);
/*
const baseCurrencies = ['USD', 'EUR'],
	additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	let str = '';

	if (arr.length === 0 || arr[0] === '') {
		return 'Нет доступных валют';
	} else {
		str = 'Доступные валюты:\n';
	}
	arr.forEach((curr) => {
		if (curr !== missingCurr) {
			str += `${curr}\n`;
		}
	});

	return str;
}
availableCurr(['USD', 'EUR', 'UAH', 'CNY'], 'USD'); */

// let str = 'some',
// 	strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// const soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function () {
// 		console.log('Hello');
// 	},
// };

// const jonh = Object.create(soldier);

// const jonh = {
// 	health: 100,
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// jonh.sayHello();

// let foo = 5;

// function addTwo(num) {
// 	num += 2;
// }

// addTwo(foo);

// console.log(foo);

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5,
		},
		{
			width: 15,
			length: 7,
		},
		{
			width: 20,
			length: 5,
		},
		{
			width: 8,
			length: 10,
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000,
};

// function isBudgetEnough(data) {
// 	let str = '';
// 	let sum = 0;
// 	let { height } = shoppingMallData;
// 	for (let key of shoppingMallData.shops) {
// 		sum += key.length * key.width * height;
// 	}
// 	sum *= data.moneyPer1m3;
// 	if (data.budget - sum >= 0) {
// 		str += 'Бюджета достаточно';
// 	} else {
// 		str += 'Бюджета недостаточно';
// 	}
// 	return str;
// }
// isBudgetEnough(shoppingMallData);

/* function isBudgetEnough(data) {
	let str = '';
	let sum = 0;
	for (let key of data.shops) {
		sum += key.length * key.width * data.height;
	}
	sum *= data.moneyPer1m3;
	if (data.budget - sum >= 0) {
		str += 'Бюджета достаточно';
	} else {
		str += 'Бюджета недостаточно';
	}
	return console.log(str);
}
isBudgetEnough(shoppingMallData); */

/* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
	arr.sort();
	const a = [],
		b = [],
		c = [],
		rest = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < 3) {
			a.push(arr[i]);
		} else if (i < 6) {
			b.push(arr[i]);
		} else if (i < 9) {
			c.push(arr[i]);
		} else {
			rest.push(arr[i]);
		}
	}
	return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}
sortStudentsByGroups(students); */

// let number = 5;

// function logNumber() {
// 	console.log(number);
// }

// number = 6;

// logNumber();

// console.log('b' > 'a');

/* const restorantData = {
	menu: [
		{
			name: 'Salad Caesar',
			price: '14$',
		},
		{
			name: 'Pizza Diavola',
			price: '9$',
		},
		{
			name: 'Beefsteak',
			price: '17$',
		},
		{
			name: 'Napoleon',
			price: '7$',
		},
	],
	waitors: [
		{ name: 'Alice', age: 22 },
		{ name: 'John', age: 24 },
	],
	averageLunchPrice: '20$',
	openNow: true,
};

function isOpen(prop) {
	let answer = '';
	prop ? (answer = 'Открыто') : (answer = 'Закрыто');

	return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < +average.slice(0, -1)) {
		return 'Цена ниже средней';
	} else {
		return 'Цена выше средней';
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
	const copy = Object.assign({}, data);

	copy.waitors = [{ name: 'Mike', age: 32 }];
	return copy;
}

transferWaitors(restorantData); */

// РЕКУРСИЯ

/* function pow(x, n) {
	let result = 1;
	for (let i = 0; i < n; i++) {
		result *= x;
	}
	return result;
}
function pow(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
}

// pow(2, 2); // 4
// pow(2, 3); // 8
// pow(2, 4); // 16

let students = {
	js: [
		{ name: 'John', progress: 100 },
		{
			name: 'Ivan',
			progress: 60,
		},
	],
	html: {
		basic: [
			{
				name: 'Peter',
				progress: 20,
			},
			{
				name: 'Ann',
				progress: 18,
			},
		],
		pro: [
			{
				name: 'Sam',
				progress: 10,
			},
		],
	},
};

function getTotalProgressByIteration(data) {
	let total = 0,
		students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;
				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}

	return total / students;
}
// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}
		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArray = getTotalProgressByRecursion(subData);
			total[0] += subDataArray[0];
			total[1] += subDataArray[1];
		}

		return total;
	}
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]); */

// РЕКУРСИЯ

// function factorial(n) {
// 	if (typeof n !== 'number' || !Number.isInteger(n)) {
// 		console.log('Неверное значение');
// 	}
// 	if (n >= 1) {
// 		return n * factorial(n - 1);
// 	} else {
// 		return 1;
// 	}
// Более короткий вариант, который вы можете встретить
// Но не учитывает отрицательные значения
// return n ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(5));

// window.addEventListener('DOMContentLoaded', () => {});

const shops = [{ oil: 200 }, { rice: 400 }, { chips: 600 }];
const budget = [300, 2000, 6000];
const map = new Map();
const goods = [];

shops.forEach((shop, i) => {
	map.set(shop, budget[i]);
});
// for (let [shop, price] of map.entries()) {
// 	console.log(shop, price);
// }

map.forEach((value, key, map) => {
	console.log(key, value);
});
