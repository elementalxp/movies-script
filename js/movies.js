const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
      b = +prompt('На сколько оцените его?'),
      c = prompt('Один из последних просмотренных фильмов?'),
      d = +prompt('На сколько оцените его?');

personalMovieBD.genres[a] = b;
personalMovieBD.genres[c] = d;

console.log(personalMovieBD);