'use strict'

let numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '')

let personalMovieDB = {
    count:numberOfFilmes,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

for (let i=1;i<=2;i++){
    
    let film = prompt("Один из последних просмотренных фильмов", ''),
        evaluation = prompt("На сколько оцените его?", '');
    
    if (film==null || evaluation ==null || film=="" || evaluation =="" || film.length>50){
        console.log('error');
        i--;
    }
    else{
        personalMovieDB.movies[film]=evaluation;
    console.log('done');
};
};

console.log(personalMovieDB);