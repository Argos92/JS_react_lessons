"use strict";

let personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms() {
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
    },
    detectPersonalLevel() {
        if (personalMovieDB.count<10){
            console.log("просмотрено довольно мало фильмов")
        } else if(personalMovieDB.count>10 && personalMovieDB.count<30){
            console.log("вы классический зритель")
        } else if(personalMovieDB.count>30){
            console.log("вы киноман")
        } else {
            console.log("произошла ошибка")
        }
    },
    showMyDB() {
        if (!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        let i,
        a;
        for (i=1; i<=1;i++){
            a = prompt(`Введите ваши жанры через запятую`, '').toLowerCase();
            while (a == null || a == "") {
                a = prompt(`Введите ваши жанры через запятую`, '').toLowerCase();
            };
        };
        personalMovieDB.genres = a.split(', ');
        personalMovieDB.genres.sort();
        personalMovieDB.genres.forEach(function callback(item, i, genres) {
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        });
    },

    toggleVisibleMyDB() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }

};


// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel()

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();



