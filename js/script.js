'use strict';
let numberOfFilms;
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const q1 = prompt('Один из последних просмотренных фильмов?', ''),
			q2 = prompt('На сколько оцените его?', '');

		if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
			personalMovieDB.movies[q1] = q2;
			console.log('Done');
		} else {
			console.log('Error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonaLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классный зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonaLevel();

function writeYourGenres() {
	// const a = prompt(`Ваш любимый жанр под номером ${personalMovieDB.genres[1]}`),
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		if (genre != null && genre != '') {
			personalMovieDB.genres[i - 1] = genre;
		}
	}
}
writeYourGenres();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

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
