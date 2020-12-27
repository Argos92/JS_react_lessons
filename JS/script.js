'use strict'

let numberOfFilmes;

function start() {
    numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilmes == null || numberOfFilmes == "" || isNaN(numberOfFilmes)) {
        numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count:numberOfFilmes,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count<10){
        console.log("просмотрено довольно мало фильмов")
    } else if(personalMovieDB.count>10 && personalMovieDB.count<30){
        console.log("вы классический зритель")
    } else if(personalMovieDB.count>30){
        console.log("вы киноман")
    } else {
        console.log("произошла ошибка")
    }
}

detectPersonalLevel()

function showMyDB() {
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let i,
    a;
    for (i=1; i<=3;i++){
        a = prompt(`Ваш любимый жанр пд номером ${i}`, '');
        while (a == null || a == "") {
            a = prompt(`Ваш любимый жанр пд номером ${i}`, '');
        }
        personalMovieDB.genres[i-1] = a;
        // personalMovieDB.genres.push(a)
    }
}

writeYourGenres();

showMyDB()

