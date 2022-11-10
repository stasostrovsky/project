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
  let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false
  });
  
  user.name = "Pete";
  console.log(user.name);

