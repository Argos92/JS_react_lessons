console.log('123')
let numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '')

let personalMovieDB = {
    count:numberOfFilmes,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

let film = prompt("Один из последних просмотренных фильмов", ''),
    evaluation = prompt("На сколько оцените его?", '');

personalMovieDB.movies[film]=evaluation;
console.log(personalMovieDB)