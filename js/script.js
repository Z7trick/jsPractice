'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''),
	personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false,
	},
	q1 = prompt('Один из последних просмотренных фильмов?', ''),
	q2 = prompt('На сколько оцените его?', ''),
	q3 = prompt('Один из последних просмотренных фильмов?', ''),
	q4 = prompt('На сколько оцените его?', '');

personalMovieDB.movies = { [q1]: q2, [q3]: q4 };

console.log(personalMovieDB);
