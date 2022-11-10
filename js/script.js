'use strict';

/* let a = +prompt("",10);
let b = +prompt("",20);
let c = a + b; */

/* console.log(6.35.toFixed(2));
console.log( +6.35.toFixed(20) ); */

/* function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') {
        return null;
    }
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`); */
/* let i = 0;
while (i.toFixed(0) != 10) {
  i += 0.2;
  console.log(i);
}
console.log(i); */

function calculateVolumeAndArea(a) {
    
    if (!Number.isFinite(a) || a < 0 || a.toString().includes(".")) {
        return "При вычислении произошла ошибка";
    }

    let str = `Объем куба: ${a*a*a}, площадь всей поверхности: ${6*a*a}`;
    return str;
}
console.log(calculateVolumeAndArea("22"));

function getCoupeNumber(place) {
    
    let str = 1;

    if (!Number.isFinite(place) || place < 0 || place.toString().includes(".")) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (place < 1 || place > 36) {
        return `Таких мест в вагоне не существует`;
    }

    let placeMin = 1;
    let placeMax = 4;
    let CoupeNumber = 1;

    for (CoupeNumber = 1; CoupeNumber < 10; CoupeNumber++) {
        if (place >= placeMin && place <= placeMax){
            return CoupeNumber;
        }   
        placeMin = placeMin + 4;
        placeMax = placeMax + 4;
    }

}


console.log(getCoupeNumber(37));

function getTimeFromMinutes(fromMinutes) {
    
    if (typeof (fromMinutes) !== 'number' || fromMinutes < 0 || !Number.isInteger(fromMinutes)) {
        return "Ошибка, проверьте данные";
    }

    let hour = Math.floor(fromMinutes/60);
    let minutes = fromMinutes - hour * 60;

    let nameHour = "";

    if (hour === 1) {
        nameHour = "час";
    } else if (hour > 1 && hour < 5) {
        nameHour = "часа";
    } else {
        nameHour = "часов";
    }

    let str = `Это ${hour} ${nameHour} и ${minutes} минут`;

    return str;
}
console.log(getTimeFromMinutes(550));

function findMaxNumber(a1,a2,a3,a4) {

    if (typeof (a1) !== 'number' || typeof (a2) !== 'number' || typeof (a3) !== 'number' || typeof (a4) !== 'number' ) {
        return 0;
    }

    return Math.max(a1,a2,a3,a4);
}
console.log(findMaxNumber(33,44,55));

function fib(countIter) {
    
    let num = "";

    if (typeof (countIter) !== 'number' || countIter <= 0 || !Number.isInteger(countIter)) {
        return num;
    }
  
    if (countIter === 1) {
        return "0";
    } 
    
    let arr = [];
    for (let i = 0; i < countIter; i++)
    {   
        if (i <= 1) {
            arr[i] = i;
        } else {
            arr[i] = arr[i-2] + arr[i-1];
        }
        num = num + arr[i] + (i < countIter - 1 ? " " : "");
    }

    return num;
}
console.log(fib(7));

let sum = 0.1 + 0.2;
console.log( sum.toFixed(2) ); // 0.30



let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }

/* let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(descriptor); */

  //console.log( JSON.stringify(descriptor, null, 2 ) );
  /* дескриптор свойства:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */
  /* let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false
  });
  
  user.name = "Pete";
  console.log(user.name); */

  /* let user = { };

  Object.defineProperty(user, "name", {
    value: "John",
    // для нового свойства необходимо явно указывать все флаги, для которых значение true
    enumerable: true,
    configurable: true
  });
  
  console.log(user.name); // John
  user.name = "Pete"; // Ошибка
  console.log(user.name); // John */

/*   let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log(descriptor);
  console.log( JSON.stringify(descriptor, null, 2 ) ); */

  /* let user = {
    name: "John",
    toString() {
      return "Stzs";
    }
  };
  
  // По умолчанию оба свойства выведутся:
  for (let key in user) {
    console.log(key); // name, toString
    console.log(String(user)); // name, toString
  }

  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix[1][1] ); // 5, центральный элемент */

  //let arr = ["Я", "изучаю", "JavaScript"];

// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
/* arr.splice(2, 1);

console.log( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`);
  }); */

  /* let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // ключи
    console.log( key );  // name, age, isAdmin
    // значения ключей
    console.log( typeof(user[key]) === "boolean"); // John, 30, true
  } */

  /* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(personalPlanPeter) {
        let age = personalPlanPeter.age;
        let languages = personalPlanPeter.skills.languages;
        let languagesStr = languages.join(' ').toUpperCase();
        return `Мне ${age} и я владею языками: ${languagesStr}`;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

let msg = ""; */
/* function showExperience(plan) {
    return plan.skills.exp;
}

msg = showExperience(personalPlanPeter);
console.log(msg); */

/* function showProgrammingLangs(plan) {
    let programmingLangs = plan.skills.programmingLangs;
    let msg = ``;
    for (let key in programmingLangs) {
        msg = msg + `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    msg = msg.slice(0, msg.length -1);
    return msg;//
}
msg = showProgrammingLangs(personalPlanPeter);
console.log(msg); */

/* 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, 
а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, 
то и сообщение тоже изменится. */

//let languagesStr = languages.join(' ')
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    
    let msg = ``;
    
    if (arr.length === 0) {
        msg = `Семья пуста`;
    } else {
        msg = `Семья состоит из: ` + arr.join(' ');
    }
   
    return msg;
}

let msg = showFamily(family);
console.log(msg);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        console.log(arr[i]);        
   }
}
standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {

    if ( typeof(str) !== "string" ) {
        return "Ошибка!";
    }

    let arr = str.split(` `);
    arr = arr.reverse();

    for (let i = 0; i < arr.length; i++) {
        let str1 = arr[i];
        let strReverse = ``;
        for (let j = str1.length - 1; j >= 0; j--) {
            strReverse = strReverse + str1[j];
        }
        arr[i] = strReverse;
    }

    str = arr.join(` `);

    return str;

}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    if (arr.length === 0) {
        return 'Нет доступных валют';
    }

    let str = "";
    for (let item  of arr) {
        if (item !== missingCurr) {
            str = str + item + `\n`;
        }
    }

    if (str === "") {
        return 'Нет доступных валют';
    } else {
        return "Доступные валюты:\n" + str;
    }

}

msg = availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

console.log(msg);
