'use strict';

/* // Место для первой задачи
function sayHello(userName) {
    userName = "Привет, " + userName + "!";
    //userName = `Привет ${userName} !`;
    
    return  userName;
}

// Место для второй задачи
function returnNeighboringNumbers(myNumber) {
    let arr = [];
    --myNumber;
    for(let i = 0; i < 3; i++){
        arr[i] = myNumber;
        myNumber++;
    }
    return arr;
}

// Место для третьей задачи
function getMathResult(Baza, Povtorit) {

    if  ( String(typeof(Povtorit)) != "number" || Povtorit <= 0 ) {
        return Baza;
    }

    let res = "";

    for( let i = 1; i <= Povtorit; i++ ) {
        res = res + Baza * i + (i < Povtorit ? "---" : "");
    }

    return res;

} */

/* let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);

guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList); // список гостей, состоящий из нескольких строк

for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
  }
 */

/* let str = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа'; // цель поиска
let pos = 0;

while (true) {
  
  let foundPos = str.indexOf(target, pos);
  
  if (foundPos == -1) {
    break;
  }

  console.log( `Найдено тут: ${foundPos}` );
  
  pos = foundPos + 1; // продолжаем со следующей позиции

} */

/* let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
console.log( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
console.log( str.slice(0, 1) ); */

/* let str = "stringify";

// для substring эти два примера — одинаковы
console.log( str.substring(2, 6) ); // "ring" */

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */



let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();

rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

let str = "Привет";
str.test = 5; // (*)
console.log(str.test);


let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255
console.log(a);
console.log( a == b ); 
