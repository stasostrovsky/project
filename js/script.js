"use strict";
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* let numberOfFilms = 5;
numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");
//console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

let nameFilm = prompt('Один из последних просмотренных фильмов?',"");
let scoreFilm = prompt('На сколько оцените его?',"");
personalMovieDB.movies[nameFilm] = scoreFilm;

nameFilm = prompt('Один из последних просмотренных фильмов?',"");
scoreFilm = prompt('На сколько оцените его?',"");
personalMovieDB.movies[nameFilm] = scoreFilm;
console.log(personalMovieDB); */
/* let condition = 50;

if (condition == 50) {
    console.log("Ура");
} else {
    console.log("Not Ура");
} */

/* let shoppingDone = true;

if (shoppingDone) {
    console.log("Ура");
} else {
    console.log("Not Ура");
} */

/* let choice = 'rainy';

  if (choice === 'sunny') {
    console.log('Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.');
  } else if (choice === 'rainy') {
    console.log('Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.');
  } else if (choice === 'snowing') {
    console.log('Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.');
  } else if (choice === 'overcast') {
    console.log('Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.');
  } else {
    console.log('');
  }

  let xxx = 55;

  switch (xxx) {
    case 50:
        console.log('выполнить этот код 50');
      break;
  
    case 55:
        console.log('выполнить этот код 55');
      break;
  
    default:
        console.log('а вообще-то, выполнить только этот код');
      break;
  } */

  
/* console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5); */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} */

/* let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
    console.log( i );
  i++;
} */
let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
    console.log( i );
  i--;
}
