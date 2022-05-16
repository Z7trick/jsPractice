'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const q1 = prompt('Один из последних просмотренных фильмов?', '').trim(),
				q2 = prompt('На сколько оцените его?', '').trim();

			if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
				personalMovieDB.movies[q1] = q2;
				console.log('Done');
			} else {
				console.log('Error');
				i--;
			}
		}
	},
	detectPersonaLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классный зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},

	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: () => {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		// const a = prompt(`Ваш любимый жанр под номером ${personalMovieDB.genres[1]}`),
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if (genre != null && genre != '') {
				personalMovieDB.genres[i - 1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	},
};

// Second Variant
/* let count = 0;

while (count < 2) {
	const q1 = prompt('Один из последних просмотренных фильмов?', ''),
		q2 = prompt('На сколько оцените его?', '');
	if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
		personalMovieDB.movies[q1] = q2;
		console.log('done');
	} else {
		console.log('error');
		count--;
	}
	count++;
} */
const btn = document.querySelector('a');

// btn.onclick = function () {
// 	alert('Click');
// };
let i = 0;
const deleteElement = (event) => {
	console.log(event.target);
	i++;
	if (i == 1) {
		btn.removeEventListener('click', deleteElement);
	}
};
btn.addEventListener('click', deleteElement);

btn.addEventListener('click', (event) => {
	event.preventDefault();

	console.log(event.target);
});
