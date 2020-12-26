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


if (personalMovieDB.count<10){
    console.log("просмотрено довольно мало фильмов")
} else if(personalMovieDB.count>10 && personalMovieDB.count<30){
    console.log("вы классический зритель")
} else if(personalMovieDB.count>30){
    console.log("вы киноман")
} else {
    console.log("произошла ошибка")
}

